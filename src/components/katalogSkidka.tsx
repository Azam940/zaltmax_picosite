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

const products: Product[] = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: "Нож lisa",
    size: "95х18",
    material: "Орех, Алюминий",
    price: "(-2 719 p.) 2 019 р.",
    img: pico,
    reviews: 12,
    rating: 5,
}));

const KatalogSkidka: FC = () => {
    const { query } = useSearch();

    // 🔥 MUHIM: Filtrni komponent ichida yozish kerak!
    const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.size.toLowerCase().includes(query.toLowerCase()) ||
        p.material.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="container mx-auto px-[95px] py-10 select-none">
            <div className="flex justify-between items-center mb-6">
                <h1 className="font-bold text-3xl tracking-[2%] mont">Акции</h1>

                <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition">
                    <p className="font-semibold text-lg text-[#14141494] mont">Все акции</p>
                    <ChevronRight color="#E8AA31" size={22} />
                </div>
            </div>

            <Swiper
                slidesPerView={4}
                spaceBetween={25}
                loop={true}
                autoplay={{ delay: 2200, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="products-swiper pb-14"
            >
                {filtered.map((p) => (
                    <SwiperSlide key={p.id}>
                        <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition cursor-pointer">
                            <img src={p.img} alt={p.title} className="w-full h-44 object-contain mb-4" />

                            <h3 className="font-semibold text-lg">{p.title}</h3>
                            <p className="text-sm text-gray-500">{p.size}</p>
                            <p className="text-sm text-gray-500">{p.material}</p>

                            <div className="flex items-center gap-1 text-yellow-400 text-lg mt-2">
                                {"★".repeat(p.rating)}
                            </div>

                            <p className="text-xs text-gray-400">{p.reviews} отзывов</p>

                            <div className="flex justify-between items-center mt-3">
                                <span className="font-bold text-lg">{p.price}</span>

                                <div className="flex items-center gap-3 text-gray-500 text-xl">
                                    <span className="hover:text-yellow-500 transition">⚖</span>
                                    <span className="hover:text-red-500 transition">♡</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#E8AA31] text-white rounded-md py-2 mt-4 hover:bg-[#c98f26] transition font-semibold">
                                В корзину
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default KatalogSkidka;
