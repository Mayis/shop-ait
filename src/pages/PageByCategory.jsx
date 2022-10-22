import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSelectedCategory,
  selectedCategorySelector,
} from "../redux/slices/categoriesSlice";
import { tokkenSelector } from "../redux/slices/userSlice";

function PageByCategory() {
  const { categoryId } = useParams();
  const token = useSelector(tokkenSelector);
  const dispatch = useDispatch();
  const categoryProducts = useSelector(selectedCategorySelector);
  useEffect(() => {
    dispatch(getSelectedCategory({ token, id: categoryId }));
  }, []);
  console.log(categoryProducts);
  return <div>PageByCategory</div>;
}

export default PageByCategory;
