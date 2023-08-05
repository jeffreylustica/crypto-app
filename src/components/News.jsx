import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: count,
  });

  console.log(data);
  return <div>News</div>;
};

export default News;
