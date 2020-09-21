import React, { useMemo } from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { useDispatch } from "react-redux";

import useTypedSelector from "../../hooks/useTypedSelector";
import {
  setSortDirection,
  setSortHeader,
  SortHeaders,
} from "../../redux/actions/sort";

import styles from "./TableSortToggle.module.css";

type TableSortToggleProps = {
  type: SortHeaders;
};

export default function TableSortToggle({ type }: TableSortToggleProps) {
  const { sortHeader, sortDirection } = useTypedSelector(
    (state) => state.sortOptions
  );
  const dispatch = useDispatch();

  const isActive = useMemo(() => sortHeader === type, [type, sortHeader]);

  const handleClick = () => {
    if (isActive) {
      return dispatch(
        setSortDirection(sortDirection === "desc" ? "asc" : "desc")
      );
    }
    return dispatch(setSortHeader(type));
  };

  return (
    <>
      {isActive ? (
        sortDirection === "asc" ? (
          <BsArrowUpShort
            className={`${styles.ToggleIcon}`}
            onClick={handleClick}
          />
        ) : (
          <BsArrowDownShort
            className={`${styles.ToggleIcon}`}
            onClick={handleClick}
          />
        )
      ) : (
        <BsArrowDownShort
          className={`${styles.ToggleIcon} ${styles.ToggleIcon_inactive}`}
          onClick={handleClick}
        />
      )}
    </>
  );
}
