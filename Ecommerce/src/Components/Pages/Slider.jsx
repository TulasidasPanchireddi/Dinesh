import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={1000}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
      >
        <div>
          <img src="https://cdn.pixabay.com/photo/2023/12/13/14/01/christmas-8446981__480.png" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/12/09/11/24/sale-3864704_1280.jpg" />
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2022/05/21/05/16/promotion-7210696_1280.png" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
