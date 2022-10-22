import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allCategoriesSelector } from "../redux/slices/categoriesSlice";
import "./CSS/style.css";
function Header() {
  const categories = useSelector(allCategoriesSelector);
  console.log(categories);
  return (
    <div id="header">
      <div className="shopName">
        <h1 className="shopH1">SHOP NAME</h1>
      </div>
      <div className="menuList">
        <ul>
          {categories?.map((item, i) => (
            <li key={item.id} className="menuItem">
              <NavLink to={`/category/${item.id}`}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="busket">
        {" "}
        <NavLink to={"/busket"}>BUSKET</NavLink>
      </div>
      <div className="signOut">
        <button className="signOut-btn">sign OUT</button>
      </div>
    </div>
  );
}

export default Header;
