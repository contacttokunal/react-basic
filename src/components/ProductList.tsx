import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: String }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("feching products in", category);
    setProducts(["Clothing", "HouseHold"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
