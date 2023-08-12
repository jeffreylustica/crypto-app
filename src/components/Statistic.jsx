import millify from "millify";

const Statistic = ({ title, value }) => {
  return (
    <div className="p-4 flex flex-col items-center">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-lg font-bold">{millify(value)}</div>
    </div>
  );
};

export default Statistic;
