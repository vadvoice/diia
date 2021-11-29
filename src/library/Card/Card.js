import "./Card.scss";
import classNames from "classnames";
import { Profile } from "../Profile/Profile";

const Card = ({ isActive, type, onDetailsRequest }) => {
  const header = (type) => {
    switch (type) {
      case "PASS":
        return "Паспорт громадянина";
      case "DRIVER_LICENSE":
        return "Водійське посвідчення";
      case "SHIELD":
        return "Паспорт вакцинації";
      default:
        return "Паспорт громадянина";
    }
  };
  return (
    <div
      className={classNames("Card", `Card-${type}`, {
        "Card-active": isActive
      })}
    >
      <h3>{header(type)}</h3>
      <Profile />
      <div className="Card-footer">
        <h4>Додаткова інформація</h4>
        <img
          onClick={(_) => onDetailsRequest(type)}
          alt="details"
          src="https://static.thenounproject.com/png/384289-200.png"
        />
      </div>
    </div>
  );
};

export { Card };
