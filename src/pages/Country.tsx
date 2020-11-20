import React from "react";
import { useParams } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import useCountry from "../hooks/useCountry";

export type CountryParams = {
  name: string;
};

export default function Country() {
  const { name } = useParams<CountryParams>();
  const [error, country] = useCountry(name);

  return (
    <>
      {error ? (
        <p>Failed to load country data...</p>
      ) : !country ? (
        <p>Please wait, loading country data...</p>
      ) : (
        <CountryCard {...country} />
      )}
    </>
  );
}
