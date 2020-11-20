import React from "react";
import { useDispatch } from "react-redux";
import useTypedSelector from "../../hooks/useTypedSelector";
import { setFilterQuery } from "../../redux/actions/filter";

import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { primaryColor, secondaryColor } = useTypedSelector(
    (state) => state.theme
  );
  const dispatch = useDispatch();

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    let query = ev.target.value.toLowerCase();
    if (!query) {
      query = "";
    }
    dispatch(setFilterQuery(query));
  };

  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        style={{
          backgroundColor: primaryColor,
          color: secondaryColor,
          border: `2px solid ${secondaryColor}`,
        }}
        placeholder="Search country..."
        type="text"
        aria-label="Search by country name input"
        onChange={handleChange}
      />
    </div>
  );
}
