import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const rota = useParams().id;
  useEffect(() => {
    console.log(rota);
  }, []);
  return (
    <>
      <div>{"aaaaaaaaaaaaa"}</div>
    </>
  );
};
export default ProductPage;
