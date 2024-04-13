import client1 from "../../assets/images/client1.png";
function ClientCarousel() {
  return (
    // <div className=" flex justify-center border-green-500 border w-full">
    <div className="w-full p-4 flex justify-center items-center border-purple-400 border">
      <img src={client1} className="grayscale-[50] filter" alt="" />
    </div>
    // </div>
  );
}

export default ClientCarousel;
