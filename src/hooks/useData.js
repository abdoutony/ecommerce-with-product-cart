import { useState, useEffect } from "react";
export const useData = () => {
  const [data, setData] = useState("");
  const setDataValue = (value) => {
    setData(value);
  };

  return { data, setDataValue };
};
