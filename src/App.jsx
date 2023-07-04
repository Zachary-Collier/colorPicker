import { useState } from "react";

// Write your Color component here

//const Color = (props) => {
//  return <div className={props.color}></div>
//}

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const selectedClassName = selectedColor === color ? "selected" : "color";
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("red");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} />
        <Color color="red" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
