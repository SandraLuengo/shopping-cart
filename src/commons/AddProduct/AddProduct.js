import React from "react";
import { Button } from "../../commons";

const AddProduct = ({
  className,
  code,
  quantity,
  handleChangeQuantity,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  return (
    <div className={className}>
      <Button
        type="countButton"
        content="-"
        code={code}
        handleFunction={handleDecrementQuantity}
      />
      <input
        type="text"
        className="product__quantity"
        value={quantity}
        name={code}
        onChange={handleChangeQuantity}
      />
      <Button
        type="countButton"
        content="+"
        code={code}
        handleFunction={handleIncrementQuantity}
      />
    </div>
  );
};

export default AddProduct;
