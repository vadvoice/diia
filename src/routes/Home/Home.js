// Import Swiper React components
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { DOCUMENTS } from "../../config";
import { Card } from "../../library/Card/Card";
import { List } from "../../library/List/List";
import { Modal } from "../../library/Modal/Modal";
import "./Home.scss";

const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const selectedDocumentType = searchParams.get("documentType", "PASS");
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const onDetailsRequest = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const ModalContent = () => {
    switch (selectedDocumentType) {
      case DOCUMENTS.pass.value:
        return <List options={DOCUMENTS.pass.options} />;
      case DOCUMENTS.driverLicense.value:
        return <List options={DOCUMENTS.driverLicense.options} />;
      case DOCUMENTS.shield.value:
        return <List options={DOCUMENTS.shield.options} />;
      default:
        return <div>asdf</div>;
    }
  };
  return (
    <div className={`Home Home-${selectedDocumentType}`}>
      <Swiper
        className="Home-swiper"
        spaceAround={50}
        slidesPerView={1.2}
        onSlideChange={({ realIndex }) => {
          searchParams.set(
            "documentType",
            DOCUMENTS[Object.keys(DOCUMENTS)[realIndex]].value
          );
          setSearchParams(searchParams);
        }}
      >
        {Object.keys(DOCUMENTS).map((doc) => {
          return (
            <SwiperSlide>
              {({ isActive }) => {
                return (
                  <Card
                    isActive={isActive}
                    type={DOCUMENTS[doc].value}
                    onDetailsRequest={onDetailsRequest}
                  />
                );
              }}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Modal isOpen={isDetailsVisible} onModalClose={onDetailsRequest}>
        <ModalContent />
      </Modal>
    </div>
  );
};

export { Home };