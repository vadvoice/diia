import "./List.scss";

const List = ({ options }) => {
  return (
    <ul className="List">
      {options.map((opt) => (
        <li>{opt}</li>
      ))}
    </ul>
  );
};

export { List };
