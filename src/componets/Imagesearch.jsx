import React, { useState } from "react";

const Imagesearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  const handleContainerClick = () => {
    // Trigger button click when the container is clicked
    document.getElementById("searchButton").click();
  };

  return (
    <div className="max-w-sm rounded my-10 mx-auto">
      <form action="" onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Images term...."
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="container-button cursor-pointer"
            onClick={handleContainerClick}
            tabIndex={0} // Add tabIndex to make the div focusable
          >
            <div className="hover bt-1"></div>
            <div className="hover bt-2"></div>
            <div className="hover bt-3"></div>
            <div className="hover bt-4"></div>
            <div className="hover bt-5"></div>
            <div className="hover bt-6"></div>
            <button id="searchButton" type="submit"></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Imagesearch;
