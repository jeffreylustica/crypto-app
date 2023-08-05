import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { CryptoStats, Cryptocurrencies, News, ShowMore } from "./index";

const Home = () => {
  // const { data, isFetching } = useGetCryptosQuery(10);

  // const globalStats = data?.data.stats;
  const globalStats = {
    total: 28315,
    totalCoins: 28315,
    totalMarkets: 37120,
    totalExchanges: 161,
    totalMarketCap: "1178191741868",
    total24hVolume: "32532027115",
  };

  if (!globalStats) return "Loading...";

  return (
    <div className="p-2 sm:p-8">
      <h2 className="font-bold text-lg">Global Crypto Stats</h2>
      <CryptoStats globalStats={globalStats} />

      <div className="mb-12">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">
            Top 10 Cryptocurrencies in the world
          </h2>
        </div>
        <Cryptocurrencies simplified={true} />
        <ShowMore path={"/cryptocurrencies"} />
      </div>

      <div className="mb-12">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg">Latest Crypto News</h2>
        </div>
        <News />
        <ShowMore path={"/news"} />
      </div>
    </div>
  );
};

export default Home;
