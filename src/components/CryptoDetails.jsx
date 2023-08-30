import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import millify from "millify";
import { LineChart } from "./index";
import HTMLReactParser from "html-react-parser";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("3h");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });

  if (isFetching) return "Loading...";

  const cryptoDetails = data.data.coin;

  console.log(coinHistory);

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails.price)}`,
    },
    { title: "Rank", value: cryptoDetails.rank },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails.allTimeHigh.price &&
        millify(cryptoDetails.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    { title: "Number Of Markets", value: cryptoDetails.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails.numberOfExchanges },
    // { title: 'Aprroved Supply', value: cryptoDetails.supply.confirmed  <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails.supply.total && millify(cryptoDetails.supply.total)
      }`,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails.supply.circulating &&
        millify(cryptoDetails.supply.circulating)
      }`,
    },
  ];

  return (
    <div className="p-2 sm:p-4 min-h-screen mb-4">
      <h2 className="font-bold text-3xl mb-4 text-accent-500">
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h2>
      <p className="text-gray-400 mb-12">
        {cryptoDetails.name} live price in US dollars. View value statistics,
        market cap and supply
      </p>
      <select
        className="bg-gray-100 p-2 mb-4 dark:bg-gray-800 min-w-[150px]"
        onChange={(e) => setTimePeriod(e.target.value)}
      >
        {time.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />

      <div className="grid grid-cols-fluid2 gap-32 mt-16">
        {/* Value Statistics */}
        <div className="min-w-[300px]">
          <h2 className="text-accent-500 text-xl font-bold">
            {cryptoDetails.name} Value Statistics
          </h2>
          <p className="text-gray-500 mb-8">
            An overview showing the stats of {cryptoDetails.name}
          </p>
          <div className="flex flex-col gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-400">{stat.title} </span>
                <span className="font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Other Statistics */}
        <div className="min-w-[250px]">
          <h2 className="text-accent-500 text-xl font-bold">
            {cryptoDetails.name} Other Statistics
          </h2>
          <p className="text-gray-500 mb-8">
            An overview showing the stats of all cryptocurrencies
          </p>

          <div className="flex flex-col gap-4">
            {genericStats.map((stat, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-400">{stat.title} </span>
                <span className="font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Crypto Links */}
        <div className="min-w-[300px]">
          <h2 className="text-accent-500 text-xl font-bold">
            {cryptoDetails.name} Links
          </h2>
          <p className="text-gray-500 mb-8">
            A list showing cryptocurrency links
          </p>
          <div className="flex flex-col gap-4">
            {cryptoDetails.links.map((link, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-400">{link.type}</span>
                <a
                  href={link.url}
                  className="font-bold hover:text-accent-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
