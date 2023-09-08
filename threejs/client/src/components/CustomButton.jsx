// import React from "react";
// Import React if it's needed in your component
import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ type, title, customStyles, handleClick }) => {
  // Get the snapshot of the 'state' using 'useSnapshot'
  const snap = useSnapshot(state);

  // Define a function to generate styles based on the 'type' prop
  const generateStyle = (type) => {
    if (type === "filled") {
      // Should this be "field" instead of "fileld"?
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        border: "1px",
        borderColor: snap.color,
        color: snap.color,
      };
    }

    // Render the custom button component
    return (
      <button
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
        style={generateStyle(type)} // Apply generated styles
        onClick={handleClick} // Call the 'handleClick' function when the button is clicked
      >
        {title} {/* Display the 'title' prop inside the button */}
      </button>
    );
  };
};

export default CustomButton;
