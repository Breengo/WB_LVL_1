const addAnimation = () => {
  window.document.querySelector("div").animate(
    [
      {
        backgroundColor: "rgba(255,255,255,0.3)",
        width: "500px",
        height: "500px",
      },
      {
        backgroundColor: "rgba(255,255,255,1)",
        width: "1000px",
        height: "1000px",
      },
    ],
    {
      duration: 2000,
      iterations: 1000,
    }
  );
};

export default addAnimation;
