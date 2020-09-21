import React from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/actions/theme";
import { themeMap } from "../../themes";

import styles from "./ThemeButton.module.css";

type ThemeButtonProps = {
  themeKey: string;
  primaryColor: string;
};

export default function ThemeButton({
  themeKey,
  primaryColor,
}: ThemeButtonProps) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setTheme(themeMap[themeKey]));
  };

  return (
    <div
      className={styles.Button}
      style={{
        backgroundColor: primaryColor,
      }}
      onClick={handleClick}
    ></div>
  );
}
