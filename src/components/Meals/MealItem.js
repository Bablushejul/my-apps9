import React,{useContext} from "react";
import CartContext from "../../Store/cart-context";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";

function MealItem(props) {
 const cartCtx= useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
//console.log(price,"")
  const addToCartHandler=amount=>{
   // console.log(amount,"from Mealitems")
    cartCtx.addItem({
      id: props.id,
      name:props.name,
      amount:amount,
      price:props.price
      
    })

  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}

export default MealItem;
