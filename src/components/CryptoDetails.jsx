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
    <div className="p-2 sm:p-4">
      <h2>
        {cryptoDetails.name} ({cryptoDetails.symbol}) Price
      </h2>
      <p>
        {cryptoDetails.name} live price in US dollars. View value statistics,
        market cap and supply
      </p>
      <select
        className="bg-gray-100 p-2 mb-4"
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

      <h2>{cryptoDetails.name} Value Statistics</h2>
      <p>An overview showing the stats of {cryptoDetails.name}</p>

      <div>
        {stats.map((stat, i) => (
          <div key={i} className="bg-yellow-400 flex justify-between">
            <span>{stat.title} </span>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>

      <h2>{cryptoDetails.name} Other Statistics</h2>

      <div>
        {genericStats.map((stat, i) => (
          <div key={i} className="bg-pink-400 flex justify-between">
            <span>{stat.title} </span>
            <span>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* <div>
        <h2>What is {cryptoDetails.name}</h2>
        {HTMLReactParser(cryptoDetails.description)}
      </div> */}

      <div>
        <h2>{cryptoDetails.name} Links</h2>
        <div className="bg-green-400">
          {cryptoDetails.links.map((link, i) => (
            <div key={i} className="flex justify-between">
              <span>{link.type}</span>
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
