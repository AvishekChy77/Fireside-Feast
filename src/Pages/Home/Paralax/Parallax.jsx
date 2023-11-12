import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import img from "../../../assets/home/featured.jpg";

const Parallax = () => {
  return (
    <div className="bg-foo bg-fixed bg-cover py-14 my-16 px-10">
      <SectionHeader
        subheading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionHeader>
      <div className=" flex items-center justify-center">
        <div className="w-1/3">
          <img className="" src={img} alt="" />
        </div>
        <div className="w-1/3 pl-5">
          <h2>March 20, 2023</h2>
          <h2>WHERE CAN I GET SOME?</h2>
          <p>
            Accompanying this culinary delight is a medley of garden-fresh
            vegetables, roasted to perfection.
          </p>
          <button className="btn btn-outline border-0 border-b-2">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
