import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCard = ({ coin }) => {
  return (
    <Link
      to={`/crypto/${coin.uuid}`}
      className="flex flex-col justify-center gap-4 p-4 bg-gray-100"
    >
      <div className="flex justify-between items-center">
        <div className="font-bold">
          {coin.rank}. {coin.name}
        </div>
        <div className="w-8 h-8">
          <img src={coin.iconUrl} />
        </div>
      </div>
      <div>
        <div>Price: {millify(coin.price)}</div>
        <div>Market Cap: {millify(coin.marketCap)}</div>
        <div>Daily Change: {millify(coin.change)}</div>
      </div>
    </Link>
  );
};

export default CryptoCard;
