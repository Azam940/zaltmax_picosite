import type { FC } from "react";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import pico from '@/assets/pico.png';
import { Autoplay, Pagination } from "swiper/modules";
import { useSearch } from "@/context/SearchContext";

import "swiper/css";
import "swiper/css/pagination";

interface Product {
  id: number;
  title: string;
  size: string;
  material: string;
  price: string;
  img: string;
  reviews: number;
  rating: number;
}

const products: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: "Нож Лиса",
  size: "95х18",
  material: "Орех, Алюминий",
  price: "2 719 р.",
  img: pico,
  reviews: 12,
  rating: 5,
}));

const KatalogBestsellers: FC = () => {
  const { query } = useSearch();

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.size.toLowerCase().includes(query.toLowerCase()) ||
    p.material.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 lg:px-[60px] xl:px-[95px] py-10 select-none mb-25">

      <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
        <h1 className="font-bold text-2xl md:text-3xl tracking-wide mont">Хиты продаж</h1>
        
        <div className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition">
          <p className="font-medium text-base md:text-lg text-[#14141494] mont">Перейти в каталог</p>
          <ChevronRight color="#E8AA31" size={20} />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop
        autoplay={{ delay: 1800, disableOnInteraction: false }}
        pagination={{ clickable: true }}

        breakpoints={{
          340: { slidesPerView: 1.2, spaceBetween: 10 },
          460: { slidesPerView: 2, spaceBetween: 15 },
          760: { slidesPerView: 3, spaceBetween: 20 },
          1090: { slidesPerView: 4, spaceBetween: 25 }
        }}

        modules={[Autoplay, Pagination]}
        className="products-swiper pb-12"
      >
        {filtered.map((p) => (
          <SwiperSlide key={p.id}>
            
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition cursor-pointer flex flex-col h-full">
              
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-40 md:h-[200px] object-contain mx-auto mb-4"
              />

              <div>
                <h3 className="font-semibold text-sm md:text-lg">{p.title}</h3>
                <p className="text-xs md:text-sm text-gray-500">{p.size}</p>
                <p className="text-xs md:text-sm text-gray-500">{p.material}</p>

                <div className="flex items-center gap-1 text-yellow-400 text-base mt-2">
                  {"★".repeat(p.rating)}
                </div>

                <p className="text-xs text-gray-400">{p.reviews} отзывов</p>
              </div>

              <div className="mt-auto">
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-base md:text-lg">{p.price}</span>
                  <div className="flex items-center gap-3 text-gray-500 text-lg">
                    <span className="hover:text-yellow-500 transition">⚖</span>
                    <span className="hover:text-red-500 transition">♡</span>
                  </div>
                </div>

                <button className="w-full bg-[#E8AA31] text-white rounded-md py-2 mt-3 md:mt-4 hover:bg-[#c98f26] transition font-semibold text-sm md:text-base">
                  В корзину
                </button>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default KatalogBestsellers;
