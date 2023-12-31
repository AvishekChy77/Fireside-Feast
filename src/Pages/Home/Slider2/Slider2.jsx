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
import Container from "../../../Components/Container/Container";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Slider2 = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Slider2;
