import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import img from "../../../assets/home/featured.jpg";

const Parallax = () => {
  return (
    <div className="hero bg-foo bg-fixed bg-cover my-16 ">
      <div className=" hero-overlay bg-opacity-40"></div>
      <div className=" py-14 px-10">
        <SectionHeader
          subheading={"Check it out"}
          heading={"FROM OUR MENU"}
        ></SectionHeader>
        <div className=" flex flex-col md:flex-row items-center gap-10 justify-center">
          <div className="w-2/3 md:w-1/3">
            <img className="" src={img} alt="" />
          </div>
          <div className=" w-2/3 md:w-1/3 md:pl-5 text-[#FFF]">
            <h2>March 20, 2023</h2>
            <h2>WHERE CAN I GET SOME?</h2>
            <p>
              Accompanying this culinary delight is a medley of garden-fresh
              vegetables, roasted to perfection.
            </p>
            <button className="btn text-white btn-outline border-0 border-b-2">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
