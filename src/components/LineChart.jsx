import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  // const labels = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  // ];

  const cryptoHistory = coinHistory?.data?.history;

  cryptoHistory?.forEach((history) => {
    coinPrice.push(history.price);
    coinTimestamp.push(new Date(history.timestamp * 1000).toLocaleDateString());
  });

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinPrice.push(coinHistory?.data?.history[i].price);
  // }

  // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
  //   coinTimestamp.push(
  //     new Date(
  //       coinHistory?.data?.history[i].timestamp * 1000
  //     ).toLocaleDateString()
  //   );
  // }

  console.log(coinTimestamp);

  const data = {
    labels: coinTimestamp.reverse(),
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        // text: "Chart.js Line Chart",
      },
    },
  };

  return (
    <>
      <h1>{coinName} Price Chart</h1>
      <div>
        <h2>{coinHistory?.data.change}%</h2>
        <h2>
          current {coinName} Price: $ {currentPrice}
        </h2>
        <Line options={options} data={data} />
      </div>
    </>
  );
};

export default LineChart;
