import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactModal from "react-modal";
import "./Modal.scss";

// REDO: SCSS is enoght for now
// const customStyles = {
//   overlay: {
//     position: "absolute",
//     zIndex: 1000
//   },
//   content: {
//     top: "80%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     width: "80%",
//     minHeight: "30vh",
//     // marginRight: "-50%",
//     transform: "translate(-50%, -50%)"
//   }
// };
const Modal = ({
  isOpen,
  onModalClose,
  children,
  contentLabel = "Document interaction options"
}) => {
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (isOpen) {
      searchParams.set("isModalOpened", isOpen);
      setSearchParams(searchParams);
    } else {
      searchParams.delete("isModalOpened");
      setSearchParams(searchParams);
    }
  }, [isOpen]);

  return (
    <ReactModal
      className="ReactModal"
      overlayClassName="ReactModalOverlay"
      isOpen={isOpen}
      onRequestClose={onModalClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      contentLabel={contentLabel}
      // onAfterOpen={afterOpenModal}
      // closeTimeoutMS={500}
      // style={customStyles}
    >
      {children}
    </ReactModal>
  );
};

export { Modal };
