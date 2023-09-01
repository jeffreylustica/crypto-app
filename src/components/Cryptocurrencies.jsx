import { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { CryptoCard, Loader } from "./index";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = data?.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <div className="p-2 pt-4 sm:p-4 mb-8">
      {!simplified && (
        <>
          <h2 className="font-bold text-3xl mb-8 text-accent-500">
            Cryptocurrencies
          </h2>
          <div className="flex max-sm:justify-center">
            <input
              className="px-4 py-2 mb-4 min-w-[300px] sm:items-center dark:bg-gray-800"
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
