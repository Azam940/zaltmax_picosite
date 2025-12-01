import { Search, MapPin, Heart, ShoppingCart, ChevronDown, UserRound } from "lucide-react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useSearch } from "@/context/SearchContext";

const Navbar = () => {
    const { query, setQuery } = useSearch();

    return (
        <div className="container mx-auto">
            <div className="pl-[97px] bg-[#141414] py-[25px] flex justify-between">
                <ul className="flex gap-[60px]">
                    <li>
                        <a className="font-medium text-base leading-[100%] tracking-[0%] mont text-white" href="#">О нас</a>
                    </li>
                    <li>
                        <a className="font-medium text-base leading-[100%] tracking-[0%] mont text-white" href="#">Оплата и доставка</a>
                    </li>
                    <li>
                        <a className="font-medium text-base leading-[100%] tracking-[0%] mont text-white" href="#">Новости</a>
                    </li>
                    <li>
                        <a className="font-medium text-base leading-[100%] tracking-[0%] mont text-white" href="#">Контакты</a>
                    </li>
                </ul>
                <div className="flex gap-[15px] pr-24">
                    <UserRound color="white" />
                    <p className="text-white mont font-semibold text-lg tracking-[0%];">Личный кабинет</p>
                </div>
            </div>
            <nav className="bg-[#f8f9fa] py-3 border-b border-gray-300">
                <div className=" mx-auto flex items-center justify-center gap-[308px] px-4">
                    <div className="flex items-center gap-8">
                        <img src={logo} alt="logo" className="h-10" />
                        <div className="relative w-[380px]">
                            <Search
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                                size={18}
                            />
                            <input
                                type="text"
                                placeholder="Поиск"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="
          w-full mont border border-gray-400
          pl-10 pr-3 py-2.5 rounded-md text-sm
          outline-none focus:border-black transition
      "
                            />

                        </div>
                    </div>
                    <div className="flex items-center gap-8 text-sm">
                        <div className="flex items-center gap-1 text-gray-700">
                            <MapPin size={18} className="text-gray-600" />
                            <span className="mont">Москва</span>
                            <ChevronDown size={16} />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="font-semibold">8-800-777-49-67</span>
                            <button className="mont text-[#d6a65a] hover:text-[#c99743] text-xs">
                                Заказать звонок
                            </button>
                        </div>
                        <Heart size={22} className="text-gray-700 cursor-pointer" />
                        <div className="flex items-center gap-1 cursor-pointer">
                            <ShoppingCart size={22} className="text-gray-700" />
                            <div className="flex flex-col leading-tight">
                                <span className="mont">0 р.</span>
                                <span className="mont text-[#d6a65a] text-xs">Оформить заказ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="bg-[#141414] py-6 px-[90px] flex gap-[60px]">
                <Link className=' rounded-lg p-[5px] font-medium text-lg tracking-[0%] text-[white] mont hover:text-[#E8AA31]
    relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8AA31] after:w-0 after:transition-all after:duration-00 hover:after:w-full'
                    to="/">Каталог ножей</Link>
                <Link className=' rounded-lg p-[5px] font-medium text-lg tracking-[0%] text-[white] mont hover:text-[#E8AA31]
    relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8AA31] after:w-0 after:transition-all after:duration-00 hover:after:w-full'
                    to="/orujiya">Клинковое оружие</Link>
                <Link className=' rounded-lg p-[5px] font-medium text-lg tracking-[0%] text-[white] mont hover:text-[#E8AA31]
    relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8AA31] after:w-0 after:transition-all after:duration-00 hover:after:w-full'
                    to="/izdeleniyaa">Сувенирные изделия</Link>
                <Link className=' rounded-lg p-[5px] font-medium text-lg tracking-[0%] text-[white] mont hover:text-[#E8AA31]
    relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8AA31] after:w-0 after:transition-all after:duration-00 hover:after:w-full'
                    to="/fonari">Фонари ARMYTEK</Link>
                <Link className=' rounded-lg p-[5px] font-medium text-lg tracking-[0%] text-[white] mont hover:text-[#E8AA31]
    relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8AA31] after:w-0 after:transition-all after:duration-00 hover:after:w-full'
                    to="/sopustvuyushiy">Сопуствующие товары</Link>

            </div>
        </div>

    );
};

export default Navbar;
