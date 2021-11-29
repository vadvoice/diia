import "./Profile.scss";

const Profile = ({
  user = {
    img: "",
    name: "Тарас Григотович Шевченко",
    signature: "",
    date: "11/12/2022",
    id: "000000001",
  }
}) => {
  const { img, signature, date, id, name } = user;
  const DataRow = ({ name, value }) => {
    return (
      <div className="Profile-top-data-row">
        <strong>{name}:</strong>
        <span>{value}</span>
      </div>
    );
  };
  return (
    <div className="Profile">
      <div className="Profile-top">
        <div className="Profile-top-logo">
          <img
            alt="UserImage"
            src={
              img ||
              "https://walldeco.ua/img/gallery/125/thumbs/thumb_l_43866-1.jpg"
            }
          />
        </div>
        <div className="Profile-top-info">
          <DataRow name="Дата народження" value={date} />
          <DataRow name="Номер" value={id} />
          <img
            height="40px"
            alt="Signature"
            src={
              signature ||
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipground.com%2Fimages%2Ffake-signature-clipart-4.png&f=1&nofb=1"
            }
          />
        </div>
      </div>
      <div className="Profile-bottom">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export { Profile };
