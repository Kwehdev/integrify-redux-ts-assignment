import React, { useEffect, useMemo } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useTypedSelector from "../../hooks/useTypedSelector";

import styles from "./TablePagination.module.css";

type TablePaginationProps = {
  dataLength: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function TablePagination({
  dataLength,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}: TablePaginationProps) {
  const { darkenedPrimary, secondaryColor } = useTypedSelector(
    (state) => state.theme
  );

  useEffect(() => {
    if (page * rowsPerPage > dataLength) {
      const page = Math.floor(dataLength / rowsPerPage);
      setPage(page < 0 ? 0 : page);
    }
  }, [page, rowsPerPage, dataLength, setPage]);

  const ResultRangeDisplay = useMemo(() => {
    const lowestResult = page * rowsPerPage + 1;
    const highestResult = page * rowsPerPage + rowsPerPage;
    return (
      <p>
        {dataLength === 0 ? 0 : lowestResult}-
        {highestResult > dataLength ? dataLength : highestResult} of{" "}
        {dataLength}
      </p>
    );
  }, [dataLength, page, rowsPerPage]);

  const isLastPage = useMemo(
    () => page * rowsPerPage + rowsPerPage >= dataLength,
    [page, rowsPerPage, dataLength]
  );

  const handleRowsChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
    const newRowsPerPage = parseInt(ev.target.value);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  const handlePageChange = (progression: "increase" | "decrease") => {
    return progression === "increase" ? setPage(page + 1) : setPage(page - 1);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.RowsPerPage}>
        <p className={styles.RowsPerPage_text}>Rows per page: </p>
        <select
          className={styles.RowsPerPage_select}
          defaultValue={rowsPerPage}
          onChange={handleRowsChange}
          style={{
            backgroundColor: darkenedPrimary,
            color: secondaryColor,
            border: `2px solid ${secondaryColor}`,
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>

      <div>{ResultRangeDisplay}</div>

      <div className={styles.PageControls}>
        {page === 0 ? (
          <BsChevronLeft
            className={`${styles.Chevron} ${styles.Chevron_inactive}`}
          />
        ) : (
          <BsChevronLeft
            className={styles.Chevron}
            onClick={() => handlePageChange("decrease")}
          />
        )}

        {isLastPage ? (
          <BsChevronRight
            className={`${styles.Chevron} ${styles.Chevron_inactive}`}
          />
        ) : (
          <BsChevronRight
            className={styles.Chevron}
            onClick={() => handlePageChange("increase")}
          />
        )}
      </div>
    </div>
  );
}
