import React from "react";
import { Link } from "react-router-dom";  
import styles from "./Button.module.css";

function Button({text}){
  return (
     <button className={styles.btn}>{text}</button>
  );
}

export default Button;
