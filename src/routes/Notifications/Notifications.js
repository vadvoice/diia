import "./Notifications.scss";

const Notifications = () => {
  var date = new Date();
  return (
    <div className="Notifications">
      <h3>Новини:</h3>
      <div className="Notification">
        <h4>Референдум на Кубані</h4>
        <p>За результами, прийнято рішення по приєднанню до України вже з {date.getFullYear() + 1} року</p>
      </div>

    </div>
  );
};

export { Notifications };
