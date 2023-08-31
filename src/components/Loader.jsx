const Loader = () => {
  const dots = [
    {
      top: "top-[8px]",
      left: "left-[8px]",
      animation: "animate-[lds-grid_1.2s_linear_0s_infinite]",
    },
    {
      top: "top-[8px]",
      left: "left-[32px]",
      animation: "animate-[lds-grid_1.2s_linear_-0.4s_infinite]",
    },
    {
      top: "top-[8px]",
      left: "left-[56px]",
      animation: "animate-[lds-grid_1.2s_linear_-0.8s_infinite]",
    },
    {
      top: "top-[32px]",
      left: "left-[8px]",
      animation: "animate-[lds-grid_1.2s_linear_-0.4s_infinite]",
    },
    {
      top: "top-[32px]",
      left: "left-[32px]",
      animation: "animate-[lds-grid_1.2s_linear_-0.8s_infinite]",
    },
    {
      top: "top-[32px]",
      left: "left-[56px]",
      animation: "animate-[lds-grid_1.2s_linear_-1.2s_infinite]",
    },
    {
      top: "top-[56px]",
      left: "left-[8px]",
      animation: "animate-[lds-grid_1.2s_linear_-0.8s_infinite]",
    },
    {
      top: "top-[56px]",
      left: "left-[32px]",
      animation: "animate-[lds-grid_1.2s_linear_-1.2s_infinite]",
    },
    {
      top: "top-[56px]",
      left: "left-[56px]",
      animation: "animate-[lds-grid_1.2s_linear_-1.6s_infinite]",
    },
  ];

  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="inline-block relative w-[80px] h-[80px]">
        {dots.map((dot, i) => (
          <div
            key={i}
            className={`absolute w-[16px] h-[16px] rounded-full bg-accent-500 ${dot.top} ${dot.left} ${dot.animation}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
