import React, { useEffect, useState } from "react";
import nbrLogo from "../../assets/nbrLogo.png";
import Header from "./Header";
import ToggleDayNightButton from "./ToggleDayNightButton";
import {debounce} from "lodash";

const Navbar = ({
  hits,
  time,
  darkToggle,
  setDarkToggle,
  setSearchValue,
  setLimit
}) => {

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const delay = 400; 
    let debouncedSearch;

    if (searchInput !== "") {
      debouncedSearch = debounce((value) => {
        setSearchValue(value);
        setLimit(10)
      }, delay);

      debouncedSearch(searchInput);
    } else {
      setSearchValue("");
      setLimit(10)
    }

    return () => {
      if (debouncedSearch) {
        debouncedSearch.cancel();
      }
    };
  }, [searchInput, setSearchValue]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };
  

  return (
    <div className="backdrop-filter backdrop-blur-xl bg-opacity-75 w-full h-[80px] z-10 fixed top-0 bg-gray-100 dark:bg-gray-700 dark:text-white border-b-1 border-b-indigo-100 shadow-sm flex items-center gap-2">
      <div className="w-1/3 h-28 flex items-center justify-center px-2">
        <img
          className="w-16 h-16 rounded-full absolute ring-2 ring-indigo-500"
          src={nbrLogo}
          alt="NBG logo"
        />
      </div>
      <div className="w-1/3 flex items-center justify-center">
        <div className="relative flex w-full flex-wrap items-stretch p-2">
          <input
            type="search"
            className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-indigo-400 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none focus:border-2 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-indigo-300"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            value={searchInput}
            onChange={handleSearch}
          />
          <button
            className="relative z-[2] rounded-r border-2 border-indigo-500 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
            data-te-ripple-init
          >
            Search
          </button>
        </div>
      </div>
      <Header hits={hits} time={time} />
      <ToggleDayNightButton
        darkToggle={darkToggle}
        setDarkToggle={setDarkToggle}
      />
    </div>
  );
};

export default Navbar;
