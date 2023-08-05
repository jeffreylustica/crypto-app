import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { CryptoCard } from "./index";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  console.log(cryptos);

  useEffect(() => {
    const filteredData = data?.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <div className="p-2 sm:p-8">
      {!simplified && (
        <>
          <h2 className="font-bold text-lg mb-8">Cryptocurrencies</h2>
          <div className="flex max-sm:justify-center">
            <input
              className="bg-gray-100 px-4 py-2 mb-4 min-w-[300px] sm:items-center"
              type="text"
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </>
      )}
      <div className="grid grid-cols-fluid gap-8">
        {cryptos?.map((coin, i) => (
          <CryptoCard key={i} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
