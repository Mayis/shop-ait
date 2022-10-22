import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  busketProductsSelector,
  getBusketProducts,
} from "../redux/slices/busketSlice";
import { tokkenSelector } from "../redux/slices/userSlice";

function BusketPage() {
  const token = useSelector(tokkenSelector);
  const busketProducts = useSelector(busketProductsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusketProducts(token));
  }, []);
  console.log(busketProducts);
  return <div>BusketPage</div>;
}

export default BusketPage;
