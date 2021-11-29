import "./List.scss";
const vocabulary = {
  "GET_INFO": 'Отримати інформацію',
  "CODE": 'дізнатися код',
  "QESTIONS": 'Задати питання'
}
const List = ({ options }) => {
  return (
    <ul className="List">
      {options.map((opt) => (
        <li>{vocabulary[opt]}</li>
      ))}
    </ul>
  );
};

export { List };
