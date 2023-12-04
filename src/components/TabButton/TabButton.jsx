const TabButton = ({ children }) => {

  const handleClick = () => {
    console.log("Click workds!")
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};
export default TabButton;
