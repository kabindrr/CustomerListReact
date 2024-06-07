import React from "react";
import Man from "../assets/male.png";
import Women from "../assets/female.png";
import Unisex from "../assets/unisex.png";
export const MaleAvatars = () => {
  return (
    <div>
      <img src={Man} alt="" width="50px" />
    </div>
  );
};
export const FemaleAvatars = () => {
  return (
    <div>
      <img src={Women} alt="" width="50px" />
    </div>
  );
};
export const UnisexAvatars = () => {
  return (
    <div>
      <img src={Unisex} alt="" width="50px" />
    </div>
  );
};
