import { FC } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProduct } from '../../../types/products';
import Product from '../../molecules/Product';
import Subtitle from '../../atoms/Subtitle';
import { useMedia } from '../../../hooks/useMedia';
import {
  getSlidesToPreview,
  mediaFrom1440,
  mediaFrom530,
  mediaFrom768,
} from '../../../helpers/mediaQueries';

SwiperCore.use([Navigation, Scrollbar, Pagination, EffectCoverflow]);

const ProductsCarousel: FC<IProductsCarouselProps> = ({ products, text }) => {
  const isMobile = useMedia(mediaFrom530);
  const isTablet = useMedia(mediaFrom768);
  const isDesktop = useMedia(mediaFrom1440);

  const slidesToPreview = getSlidesToPreview(isMobile, isTablet, isDesktop);

  return (
    <div style={{ margin: '20px 0' }}>
      <Subtitle text={text} />
      <Swiper
        tag="section"
        slidesPerView={slidesToPreview}
        spaceBetween={15}
        style={{ padding: '5px 10px' }}
        pagination={{ dynamicBullets: true }}
      >
        {products?.map((item) => (
          <SwiperSlide key={item.id}>
            <Product key={item.id} product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface IProductsCarouselProps {
  products: IProduct[];
  text: string;
}

export default ProductsCarousel;
