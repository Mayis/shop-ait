import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addToBusket,
  getSelectedProduct,
  postComment,
  postReaction,
  selectedProductSelector,
} from "../redux/slices/productSlice";
import { tokkenSelector } from "../redux/slices/userSlice";

function SelectedProductPage() {
  const dispatch = useDispatch();
  const product = useSelector(selectedProductSelector);
  const token = useSelector(tokkenSelector);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(getSelectedProduct({ token, id: productId }));
  }, []);
  console.log(product);
  const handlePostComment = (e) => {
    e.preventDefault();
    const comment = new FormData(e.target).get("myComment");
    dispatch(postComment({ token, product_id: productId, body: comment }));
    e.target.reset();
  };
  const handleLike = (e) => {
    dispatch(
      postReaction({
        token,
        product_id: productId,
        type: "like",
        action: product.reactions.yourReaction === "like" ? "remove" : "add",
      })
    );
  };
  const handleDislike = () => {
    dispatch(
      postReaction({
        token,
        product_id: productId,
        type: "dislike",
        action: product.reactions.yourReaction === "dislike" ? "remove" : "add",
      })
    );
  };
  const addProductToBusket = () => {
    dispatch(addToBusket({ token, product_Id: productId }));
  };
  return (
    product && (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <div>
          <button onClick={handleLike}>LIKE{product.reactions.likes}</button>
          <button onClick={handleDislike}>
            DISLIKE{product.reactions.dislikes}
          </button>
        </div>
        <div className="toBusket">
          <button onClick={addProductToBusket}>add to busket</button>
        </div>
        <div className="comments">
          <div className="otherCom">
            {product.comments?.map((com, i) => (
              <div key={`com${i}`}>
                <h5>{com.author.fullname}</h5>
                <p>{com.body}</p>
              </div>
            ))}
          </div>
          <div className="myCom">
            <form onSubmit={handlePostComment}>
              <input type="text" name="myComment" />
              <button>send Comment</button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default SelectedProductPage;
