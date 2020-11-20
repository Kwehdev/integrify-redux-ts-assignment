import React, { useMemo, useState } from "react";
import useTypedSelector from "../../hooks/useTypedSelector";
import TableBody from "../TableBody";
import TableHeader from "../TableHeader";
import TablePagination from "../TablePagination";

import styles from "./CountryTable.module.css";

export default function CountryTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data } = useTypedSelector((state) => state.countries);
  const filterQuery = useTypedSelector((state) => state.filterQuery);
  const sortOptions = useTypedSelector((state) => state.sortOptions);
  const { sortHeader, sortDirection } = sortOptions;

  const destructuredData = useMemo(() => {
    return data.map(
      ({ flag, name, nativeName, languages, population, region }) => ({
        flag,
        name,
        nativeName,
        languages: languages.map(({ name }) => name).sort(),
        population,
        region,
      })
    );
  }, [data]);

  const filteredData = useMemo(() => {
    return destructuredData.filter(({ name, nativeName }) => {
      return (
        name.toLowerCase().includes(filterQuery) ||
        nativeName.toLowerCase().includes(filterQuery)
      );
    });
  }, [destructuredData, filterQuery]);

  const sortedData = useMemo(() => {
    // Required. Since the array reference does not change simply by sorting, will not force a re-render.
    const copy = [...filteredData];
    const sortedArray = copy.sort((a, b) =>
      a[sortHeader] > b[sortHeader] ? 1 : a[sortHeader] < b[sortHeader] ? -1 : 0
    );

    return sortDirection === "desc" ? sortedArray : sortedArray.reverse();
  }, [filteredData, sortDirection, sortHeader]);

  const dataLength = useMemo(() => sortedData.length, [sortedData]);

  const slicedData = useMemo(
    () =>
      sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [sortedData, page, rowsPerPage]
  );

  return (
    <div className={styles.Container}>
      <table className={styles.Table}>
        <TableHeader />
        <TableBody data={slicedData} />
      </table>
      <TablePagination
        {...{ dataLength, page, setPage, rowsPerPage, setRowsPerPage }}
      />
    </div>
  );
}
