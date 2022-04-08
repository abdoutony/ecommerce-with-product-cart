import { useState } from "react";
export const useIsEdit = () => {
  const [isEdit, setIsEdit] = useState(false);
  const setEditTrue = () => {
    setIsEdit(true);
  };
  const setEditFalse = () => {
    setIsEdit(false);
  };
  return {
    isEdit,
    setEditTrue,
    setEditFalse
  };
};
