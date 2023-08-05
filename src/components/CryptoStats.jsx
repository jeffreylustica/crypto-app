import { Statistic } from "./index";

const CryptoStats = ({ globalStats }) => {
  return (
    <div className="mb-12">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Statistic
          title={"Total Cryptocurrencies"}
          value={globalStats.totalCoins}
        />
        <Statistic
          title={"Total Exchanges"}
          value={globalStats.totalExchanges}
        />
        <Statistic
          title={"Total Market Cap"}
          value={globalStats.totalMarketCap}
        />
        <Statistic
          title={"Total 24h Volume"}
          value={globalStats.total24hVolume}
        />
        <Statistic title={"Total Markets"} value={globalStats.totalMarkets} />
      </div>
    </div>
  );
};

export default CryptoStats;
