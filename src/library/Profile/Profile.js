import "./Profile.scss";

const Profile = ({
  user = {
    img: "",
    name: "",
    signature: "",
    date: "11/12/2022",
    id: "000000001"
  }
}) => {
  const { img, signature, date, id } = user;
  const DataRow = ({ name, value }) => {
    return (
      <div className="Profile-data-row">
        <strong>{name}:</strong>
        <span>{value}</span>
      </div>
    );
  };
  return (
    <div className="Profile">
      <div className="Profile-logo">
        <img
          alt="UserImage"
          src={
            img ||
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flofrev.net%2Fwp-content%2Fphotos%2F2017%2F05%2Fuser_logo.png&f=1&nofb=1"
          }
        />
      </div>
      <div className="Profile-info">
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
  );
};

export { Profile };
