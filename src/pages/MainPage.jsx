import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import withUser from "../components/HOC/withUser";
import TopSellers from "../components/TopSellers";
import { getAllCategories } from "../redux/slices/categoriesSlice";
import { getProducts } from "../redux/slices/productSlice";
import { tokkenSelector, userSelector } from "../redux/slices/userSlice";

function MainPage() {
  const user = useSelector(userSelector);
  const token = useSelector(tokkenSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(token));
    dispatch(getAllCategories(token));
  }, []);

  return (
    <>
      <Header />
      <TopSellers />
    </>
  );
}

export default withUser(MainPage);
