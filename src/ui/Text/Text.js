import React from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

export const Text = ({
  children,
  weight = "normal",
  color = "black",
  style = "",
}) => {
  return (
    <p
      className={classNames(styles.text, style)}
      style={{ fontWeight: weight, color }}
    >
      {children}
    </p>
  );
};

export const H1 = ({
  children,
  weight = "normal",
  color = "black",
  style = "",
}) => {
  return (
    <h1
      className={classNames(styles.text, styles.h2, style)}
      style={{ fontWeight: weight, color }}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  weight = "normal",
  color = "black",
  style = "",
}) => {
  return (
    <h2
      className={classNames(styles.text, styles.h2, style)}
      style={{ fontWeight: weight, color }}
    >
      {children}
    </h2>
  );
};

export const Link = ({
  children,
  href = "#",
  weight = "normal",
  color = "black",
  style = "",
}) => {
  return (
    <a
      className={classNames(styles.text, style)}
      style={{ fontWeight: weight, color }}
      href={href}
    >
      {children}
    </a>
  );
};

export const Span = ({
  children,
  weight = "normal",
  color = "black",
  style = "",
}) => {
  return (
    <span
      className={classNames(styles.text, style)}
      style={{ fontWeight: weight, color }}
    >
      {children}
    </span>
  );
};
