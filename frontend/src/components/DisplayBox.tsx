import React from 'react';

interface DisplayBox {
  building: string;
  roomsAvailable: string;
  imgSrc: string;
}

const DisplayBox: React.FC<DisplayBox> = ({building, roomsAvailable, imgSrc}) => {

  return (
    <>
      <div className="m-[1.5vh] overflow-hidden rounded-lg h-[56vh]">
        <img src={imgSrc} className="h-full w-full object-cover"></img>
        <div className="flex relative h-[5.5vh] w-[11vw] justify-self-end bottom-[55vh] bg-white mx-[1.5vh] p-[0.8vh] rounded-2xl place-items-center">
          <img src="./src/assets/greenCircle.svg" className="h-full"></img>
          <p className="m-[1vh] text-[1.8vh]">{roomsAvailable} rooms available</p>
        </div>
        <div className="flex relative h-[8vh] bottom-[15vh] bg-orange-500 mx-[1.5vh] rounded-md justify-between place-items-center">
          <p className="m-[3vh] text-white text-[2.5vh]">{building}</p>
        </div>
      </div>
    </>
  );
}

export default DisplayBox;
