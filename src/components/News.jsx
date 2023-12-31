import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import gemLogo from "../assets/gem-logo.svg";
import moment from "moment/moment";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Loader } from "./index";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: count,
  });
  const { data: coins } = useGetCryptosQuery(100);

  return (
    <div className="p-2 pt-4 sm:p-4 mb-8">
      {!simplified && (
        <h2 className="font-bold text-3xl mb-8 text-accent-500">
          Latest Crypto News
        </h2>
      )}
      {!simplified && (
        <div className="flex max-sm:justify-center">
          <select
            className="p-2 mb-4 dark:bg-gray-800"
            placeholder="Select a Crypto"
            onChange={(e) => setNewsCategory(e.target.value)}
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {coins?.data.coins.map((coin, i) => (
              <option key={i} value={coin.name}>
                {coin.name}
              </option>
            ))}
          </select>
        </div>
      )}
      {isFetching ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-fluid2 gap-8">
          {data?.value.map((news, i) => (
            <a
              key={i}
              href={news.url}
              className="p-4 flex flex-col gap-4 border dark:border-none bg-white dark:bg-gray-800 hover:shadow-md duration-300 dark:hover:bg-gray-700"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex justify-between gap-4">
                <h4 className="text-lg font-bold">{news.name}</h4>
                <img
                  className="w-16 h-16 object-cover"
                  src={news?.image?.thumbnail.contentUrl || gemLogo}
                  alt="news header image"
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {news.description > 20
                  ? `${news.description.substring(0, 20)}...`
                  : news.description}
              </p>
              <div className="flex items-center text-sm mt-auto gap-4 text-gray-500 dark:text-gray-400">
                <img
                  className="w-8 h-8 object-cover"
                  src={news.provider[0].image?.thumbnail.contentUrl || gemLogo}
                  alt="news provider logo"
                />
                <span>{news.provider[0].name}</span>
                <span className="ml-auto">
                  {moment(news.datePublished).startOf("ss").fromNow()}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
