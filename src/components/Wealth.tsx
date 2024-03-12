import CardPic from "../../public/Large.png";
const Wealth = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${CardPic.src})`,
          height: "215px",
          width: "22vw",
          position: "relative",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            fontFamily: "sans-serif",
            position: "absolute",
            bottom: "40px",
            left: "35px",
          }}
        >
          <p style={{ color: "#808080", margin: "5px" }}>Cash</p>
          <p style={{ color: "white", fontSize: "20px" }}>1000000</p>
        </div>
      </div>{" "}
    </>
  );
};
export default Wealth;
