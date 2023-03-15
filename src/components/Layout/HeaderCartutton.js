import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/cart-context";
import classes from "./HeaderCartutton.module.css";
const HeaderCartutton = (props) => {
 const cartCtx= useContext(CartContext);
 const numberOfCartItems=cartCtx.items.reduce((currNumber,item)=>{
  return currNumber+item.amount;
 },0);
console.log(numberOfCartItems)
console.log(cartCtx)
 const btnClasses=`${classes.button} ${classes.bump}`


  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartutton;
