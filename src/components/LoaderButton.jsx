import React from "react";

const LoaderButton = () => {
  return (
    <button
      className="rounded-r border-2 border-indigo-500 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-10 focus:outline-none focus:ring-0  my-5"
      type="button"
    >
      LOAD MORE
    </button>
  );
};

export default LoaderButton;
