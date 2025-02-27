import React from 'react';
import DisplayBox from './DisplayBox';

const GridSection = () => {

  return (
    <>
      <div className="grid 3xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 px-[2vh]">
        <DisplayBox building="AGSM" roomsAvailable="9" imgSrc="./src/assets/agsm.webp"></DisplayBox>
        <DisplayBox building="Ainsworth Building" roomsAvailable="16" imgSrc="./src/assets/ainsworth.webp"></DisplayBox>
        <DisplayBox building="Anita B Lawrence Center" roomsAvailable="44" imgSrc="./src/assets/anitab.webp"></DisplayBox>
        <DisplayBox building="Biological Sciences" roomsAvailable="6" imgSrc="./src/assets/biologicalScience.webp"></DisplayBox>
        <DisplayBox building="Biological Sciences (West)" roomsAvailable="8" imgSrc="./src/assets/biologicalScienceWest.webp"></DisplayBox>
        <DisplayBox building="Blockhouse" roomsAvailable="42" imgSrc="./src/assets/Blockhouse.webp"></DisplayBox>
        <DisplayBox building="Business School" roomsAvailable="18" imgSrc="./src/assets/businessSchool.webp"></DisplayBox>
        <DisplayBox building="Civil Engineering Building" roomsAvailable="8" imgSrc="./src/assets/civilBuilding.webp"></DisplayBox>
        <DisplayBox building="Colombo Building" roomsAvailable="5" imgSrc="./src/assets/colombo.webp"></DisplayBox>
        <DisplayBox building="Computer Science & Eng (K17)" roomsAvailable="7" imgSrc="./src/assets/cseBuilding.webp"></DisplayBox>
      </div>
    </>
  );
}

export default GridSection;
