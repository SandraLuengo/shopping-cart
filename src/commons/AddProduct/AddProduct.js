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
        dataCy={`subtract-button-${code}`}
        type="countButton"
        content="-"
        code={code}
        handleFunction={handleDecrementQuantity}
      />
      <input
        data-cy={`input-quantity-${code}`}
        type="text"
        className="product__quantity"
        value={quantity}
        name={code}
        onChange={handleChangeQuantity}
      />
      <Button
        dataCy={`add-button-${code}`}
        type="countButton"
        content="+"
        code={code}
        handleFunction={handleIncrementQuantity}
      />
    </div>
  );
};

export default AddProduct;
