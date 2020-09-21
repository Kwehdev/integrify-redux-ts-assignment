import React from "react";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import useTypedSelector from "../../hooks/useTypedSelector";
import SearchBar from "../SearchBar";
import ThemeSelect from "../ThemeSelect";

import styles from "./HeaderBar.module.css";

export default function HeaderBar() {
  const { darkenedPrimary, secondaryColor } = useTypedSelector(
    (state) => state.theme
  );
  const favourites = useTypedSelector((state) => state.favourites);
  return (
    <div
      className={styles.Container}
      style={{
        backgroundColor: darkenedPrimary,
        color: secondaryColor,
      }}
    >
      <p
        className={styles.Title}
        style={{ borderRight: `3px solid ${secondaryColor}` }}
      >
        Countries App
      </p>
      <SearchBar />
      <ThemeSelect />
      <Link className={styles.Link} to="/favourites/">
        <div className={styles.HeartContainer}>
          <FiHeart className={styles.Heart} />
          <p className={styles.FavouriteCount}>{favourites.length}</p>
        </div>
      </Link>
    </div>
  );
}
