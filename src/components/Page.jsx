// import smLogo from "../assets/Washing Machine.png";
import smLogo from "/Washing Machine.png";
import "../styles/OrbitRotation.css";

const Page = () => {
  return (
    <div style={{ padding: "0 8rem", margin: "4rem 0 0 0" }}>
      <div className="" style={{ display: "flex" }}>
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
};

const Card1 = () => {
  return (
    <div className="mr-4">
      <div className="text-[50px] text-gray-600 font-bold">
        <p>Revitalize Your </p>
        <p>Clothes with Expert</p>
        <p className=" text-sky-500">Laundry Services!</p>
      </div>
      <p className="text-2xl">
        From premium dry cleaning to swift wash and fold, we deliver care and
        convenience. Schedule a pickup and rediscover the freshness of your
        clothes today!
      </p>
      <br />
      <button className="btn bg-sky-500  text-white border-transparent rounded-2xl px-8 text-lg hover:bg-sky-300 hover:border-transparent">
        Book a service today!
      </button>
    </div>
  );
};

const Card2 = () => {
  return (
    <div className="ml-4">
      <div className="orbit-container">
        <div className="orbit">
          <img src={smLogo} alt="orbiting image" />
        </div>
      </div>
    </div>
  );
};

export default Page;
