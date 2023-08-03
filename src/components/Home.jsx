import { useGetCryptosQuery } from "../services/cryptoApi";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();

  isFetching ? console.log("fetching") : console.log(data);

  return <div>Home</div>;
};

export default Home;
