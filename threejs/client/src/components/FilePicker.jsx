import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleButtonClick = (type) => {
    // Check if a file is selected before proceeding
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    // Call the readFile function with the specified type
    readFile(type);
  };

  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file ? file.name : "No file selected"}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="Logo"
          handleClick={() => handleButtonClick("logo")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => handleButtonClick("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
