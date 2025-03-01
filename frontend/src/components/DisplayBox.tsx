import React from 'react';

interface DisplayBox {
  building: string;
  roomsAvailable: string;
  imgSrc: string;
}

const DisplayBox: React.FC<DisplayBox> = ({building, roomsAvailable, imgSrc}) => {

  return (
    <>
      <div className="m-[1vh] overflow-hidden rounded-[1vh] h-[45vh]">
        <img src={imgSrc} className="h-full w-full object-cover"></img>
        <div className="flex flex-row relative h-[5vh] justify-self-end bottom-49/50 bg-white mx-[1vh] p-[0.8vh] rounded-xl place-items-center">
          <img src="./src/assets/greenCircle.svg" className="h-full"></img>
          <p className="m-[0.5vh] text-[2vh] font-bold">{roomsAvailable} rooms available</p>
        </div>
        <div className="flex relative h-[6vh] bottom-[12vh] bg-orange-500 mx-[1.5vh] rounded-[1vh] justify-between place-items-center">
          <p className="m-[3vh] text-white text-[2vh]">{building}</p>
        </div>
      </div>
    </>
  );
}

export default DisplayBox;
