import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import reactLogo from "../assets/react.svg";
import moment from "moment/moment";

const News = ({ simplified }) => {
  const count = simplified ? 6 : 12;
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: count,
  });

  if (isFetching) return "Loading...";
  console.log(data.value);

  return (
    <div className="grid grid-cols-fluid2 gap-8 p-2 sm:p-4">
      {data?.value.map((news, i) => (
        <a
          key={i}
          href={news.url}
          className="p-4 flex flex-col gap-4 shadow-xl border"
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
              src={news.provider[0].image?.thumbnail.contentUrl || reactLogo}
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
  );
};

export default News;
