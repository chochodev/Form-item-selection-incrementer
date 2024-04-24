"use client";

import React from "react";
import { useData } from "../useContext";

const DisplayComponent: React.FC = () => {
  const { floorContextImage, floorContextItems } = useData();

  return (
    <div>
      {floorContextImage && 
      <img src={floorContextImage} alt="Floor Plan" />
      }
      <ul>
        {floorContextItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.alias} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayComponent;
