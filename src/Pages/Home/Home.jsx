import { Helmet } from "react-helmet-async";
import Parallax from "./Paralax/Parallax";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";
import Slider2 from "./Slider2/Slider2";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Fireside | Home</title>
      </Helmet>
      <Slider></Slider>
      <Slider2></Slider2>
      <PopularMenu></PopularMenu>
      <Parallax></Parallax>
    </div>
  );
};

export default Home;
