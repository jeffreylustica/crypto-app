import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = () => {
  const { data, isFetching } = useGetCryptosQuery();

  const cryptos = data?.data.coins;
  console.log("cryptocurrencies");

  return (
    <div>
      Cryptocurrencies
      {!isFetching && cryptos?.map((coin, i) => <div key={i}>{coin.name}</div>)}
    </div>
  );
};

export default Cryptocurrencies;
