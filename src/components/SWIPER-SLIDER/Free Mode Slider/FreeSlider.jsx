import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { FreeMode, Autoplay, Navigation } from "swiper";
import { useSelector } from "react-redux";
import { topSellersSelector } from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

export default function FreeSlider() {
  const topSellers = useSelector(topSellersSelector);
  const navigate = useNavigate();
  const handleSelectProduct = (id) => {
    navigate(`products/current/${id}`);
  };
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Autoplay, Navigation]}
        className="mySwiper"
      >
        {topSellers &&
          topSellers[0].items?.map((item, i) => (
            <SwiperSlide
              key={item.id}
              onClick={() => handleSelectProduct(item.id)}
            >
              <img src={item.src} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
