import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ children, style }, props) => {
  return (
    <button className={classNames(style)} {...props}>
      {children}
    </button>
  );
};

export const ButtonIconed = ({ children, icon }, props) => {
  return (
    <button className={style.button} {...props}>
      {icon}
      {children}
    </button>
  );
};
