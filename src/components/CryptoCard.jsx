import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCard = ({ coin }) => {
  return (
    <Link
      to={`/crypto/${coin.uuid}`}
      className="bg-white dark:bg-gray-800 flex flex-col justify-center gap-4 p-4 border dark:border-gray-700 rounded-lg hover:shadow-md dark:hover:bg-gray-700 duration-200"
    >
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl">
          {coin.rank}. {coin.name}
        </div>
        <div className="w-12 h-12">
          <img src={coin.iconUrl} />
        </div>
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        <div>Price: {millify(coin.price)}</div>
        <div>Market Cap: {millify(coin.marketCap)}</div>
        <div>Daily Change: {millify(coin.change)}</div>
      </div>
    </Link>
  );
};

export default CryptoCard;
