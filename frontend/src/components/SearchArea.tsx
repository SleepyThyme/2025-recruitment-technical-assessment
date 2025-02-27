import React from 'react';

const SearchArea = () => {

  return (
    <>
      <div className="flex flex-row items-center justify-between h-[6.5vh] mt-[2.5vh] mb-[0.75vh] mx-[1.5vw] text-orange-600 text-[2.5vh]">
        <div className="flex flex-row place-items-center h-full w-[10vw] border-[0.3vh] border-orange-400 rounded-xl p-[1vh]">
          <img src="./src/assets/filterIcon.svg" className="h-full m-[2vh]"/>
          <p>Filters</p>
        </div>
        <div className="flex flex-row items-center place-items-center h-[6.5vh] w-[48.5vw] border-[0.1vh] border-gray-400 rounded-s">
          <img src="./src/assets/searchIcon.svg" className="h-full filter grayscale p-[1.5vh]"/>
          <p className="text-gray-400">Search for a building...</p>
        </div>
        <div className="flex flex-row  place-items-center h-full w-[10vw] border-[0.3vh] border-orange-400 rounded-xl p-[1vh]">
          <img src="./src/assets/sortIcon.svg" className="h-full m-[2vh]"/>
          <p>Sort</p>
        </div>
      </div>
    </>
  );
}

export default SearchArea;
