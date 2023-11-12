import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Slider2 = () => {
  return (
    <div className="my-14 p-4 md:p-0 container mx-auto">
      <SectionHeader
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <p></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p></p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p></p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider2;
