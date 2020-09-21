import React from "react";

import styles from "./TableCell.module.css";

type TableCellProps = {
  children: React.ReactNode;
  type: string;
};

type MapTypeToStyle = {
  [key: string]: string;
};
const mapTypeToStyle: MapTypeToStyle = {
  flag: styles.Cell_flag,
  name: styles.Cell_name,
  population: styles.Cell_population,
  languages: styles.Cell_languages,
  region: styles.Cell_region,
  card: styles.Cell_card,
};

export default function TableCell({ children, type }: TableCellProps) {
  const StyleType = mapTypeToStyle[type];
  return (
    <td className={`${styles.Cell} ${StyleType}`}>
      <div className={styles.Wrapper}>{children}</div>
    </td>
  );
}
