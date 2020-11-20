import React from "react";
import useTypedSelector from "../../hooks/useTypedSelector";
import CountryTable from "../CountryTable";
import HeaderBar from "../HeaderBar";

import styles from "./CountryApp.module.css";

export default function CountryApp() {
  const { primaryColor, secondaryColor } = useTypedSelector(
    (state) => state.theme
  );

  return (
    <div
      className={styles.Container}
      style={{ backgroundColor: primaryColor, color: secondaryColor }}
    >
      <HeaderBar />
      <CountryTable />
    </div>
  );
}
