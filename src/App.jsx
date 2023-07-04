import { useState } from "react"; // Step 1 Import the useState hook from React //

// Write your Color component here

const Color = ({ color, setSelectedColor, selectedColor }) => {
  const selectedClassName = selectedColor === color ? 'selected' : 'color';
  return (
     <div className={selectedClassName} style={{background: color}} onClick={() => setSelectedColor(color)}></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(
    "Click on a colored circle"); // Step 2 On the first line of your Picker component, invoke the useState hook, and deconstruct the selectedColor and setSelectedColor from the returned array.
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

// Step 3 is for line 17: Change the JSX of the Picker component so that it shows the currently selectedColor from state in the navbar.

// Step 4 is for lines 20 thru 22: Pass the setSelectedColor function down to each of the Color components.

// Step 5 is for line 7: In the Color component, add an onClick property with an anonymous function passed in.

// Note: on line 5 simply added as an argument selectedColor and I created line 6 through a lot of my old notes.  I was able to get everything to work.  However, I wasn't able to figure out the last tab called Extension, and quite honestly the first tab called Initialize Project, I'm still having problems doing anything with github
