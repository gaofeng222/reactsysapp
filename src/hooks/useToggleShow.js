import { useState } from "react";

export const useToggleShow = (initialState) => {
  const [show, setShow] = useState(initialState);
  const toggle = () => setShow(!show);
  return [show, toggle];
};
