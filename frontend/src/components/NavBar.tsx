import React, { useState } from 'react';

const NavBar = () => {
  
  const [doorState, setDoor] = useState('./src/assets/freeRoomsLogo.png');
  const doorClick = () => {
    setDoor((prevState) => {
      return prevState === './src/assets/freeRoomsLogo.png' ? './src/assets/freeroomsDoorClosed.png' : './src/assets/freeRoomsLogo.png'
    });
  }

  return (
    <>
      <nav className="fixed w-full top-0 z-1 bg-white h-[9.5vh] border-b-[0.1vh] border-gray-300 p-[1vh] flex flex-row justify-between">
        <div className="flex flex-row items-center text-orange-500 text-[5vh]">
          <img src={doorState} className="h-full m-[1.5vh]" onClick={doorClick}/>
          <p>Freerooms</p>
        </div>

        <div className="flex flex-row h-full p-[0.6vh]">
          <img src="./src/assets/searchIcon.svg" className="navIcon"/>
          <img src="./src/assets/gridIcon.svg" className="navIcon"/>
          <img src="./src/assets/meetingRoom.svg" className="navIcon"/>
          <img src="./src/assets/mapIcon.svg" className="navIcon"/>
          <img src="./src/assets/moonIcon.svg" className="border-[0.2vh] border-orange-400 rounded-sm p-[1vh]"/>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
