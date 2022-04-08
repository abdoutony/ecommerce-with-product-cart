import { useState, useEffect } from "react";
export const useToggle = () => {
  const [value, setValue] = useState(false);
  const setValueTrue = () => {
    setValue(true);
  };
  const setValueFalse = () => {
    setValue(false);
  };

  return {
    value,
    setValueTrue,
    setValueFalse
  };
};
