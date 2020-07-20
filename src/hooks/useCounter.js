import { useState, useEffect } from "react";

const useCounter = (type) => {
  const [quantity, setQuantity] = useState(null);

  useEffect(() => {
    setQuantity(0);
  }, []);

  const doUpdate = () => {
    let newQuantity = null;
    if (type === "plus") {
      newQuantity = quantity + 1;
      setQuantity(newQuantity);
    } else if (type === "minus") {
      newQuantity = quantity - 1;
      newQuantity >= 0 && setQuantity(newQuantity);
    } else {
      setQuantity(type.target.value);
    }
  };
  return { quantity, doUpdate };
};

export default useCounter;
