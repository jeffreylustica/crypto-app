import { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import reactLogo from "../assets/react.svg";
import moment from "moment/moment";
import { useGetCryptosQuery } from "../services/cryptoApi";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 12;
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: count,
  });
  const { data: coins } = useGetCryptosQuery(100);

  // if (isFetching) return "Loading...";
  console.log(data?.value);

  return (
    <div className="p-2 sm:p-4">
      {!simplified && (
        <h2 className="font-bold text-lg mb-8">Latest Crypto News</h2>
      )}
      {!simplified && (
        <select
          className="bg-gray-100 p-2 mb-4"
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
      )}
      {isFetching ? (
        "Loading..."
      ) : (
        <div className="grid grid-cols-fluid2 gap-8">
          {data?.value.map((news, i) => (
            <a
              key={i}
              href={news.url}
              className="p-4 flex flex-col gap-4 shadow-sm border"
            >
              <div className="flex justify-between gap-4">
                <h4 className="text-lg font-bold">{news.name}</h4>
                <img
                  className="w-16 h-16 object-cover"
                  src={news?.image?.thumbnail.contentUrl || reactLogo}
                  alt="news header image"
                />
              </div>
              <p className="text-sm">
                {news.description > 20
                  ? `${news.description.substring(0, 20)}...`
                  : news.description}
              </p>
              <div className="flex items-center text-sm mt-auto gap-4">
                <img
                  className="w-8 h-8 object-cover"
                  src={
                    news.provider[0].image?.thumbnail.contentUrl || reactLogo
                  }
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
