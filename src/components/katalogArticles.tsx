import Rectangle42 from '@/assets/Rectangle 42.svg'
import Rectangle43 from '@/assets/Rectangle 43.svg'
import Rectangle44 from '@/assets/Rectangle 44.svg'
import Rectangle45 from '@/assets/Rectangle 45.svg'

const data = [
    {
        id: 1,
        img: Rectangle42,
        title: 'Все о ножах: как правильно выбрать',
        data: '24.07.2019'
    },
    {
        id: 1,
        img: Rectangle43,
        title: 'Как правильно выбрать фонарь',
        data: '24.07.2019'
    },
    {
        id: 1,
        img: Rectangle44,
        title: 'Кухонные ножи для хозяек',
        data: '24.07.2019'
    },
    {
        id: 1,
        img: Rectangle45,
        title: 'Кухонные ножи для хозяек',
        data: '24.07.2019'
    },
]

export default function KatalogArticles() {
    return (
        <div>
            <h1 className='pl-[95px] font-bold text-3xl tracking-[5%] mont pb-[30px]'>Наши статьи</h1>
            <div className='flex'>
                {data.map((map) => (
                    <div key={map.id} className='flex pl-[95px]'>
                        <div className=''>
                            <div className='w-[275px] h-75 bg-white shadow-2xl'>
                                <img src={map.img} alt="" />
                                <p className=' font-semibold text-xl mont pl-[27px] pt-5 tracking-[0%]'>
                                    {map.title}
                                </p>
                                <p className='pt-3 pl-7 font-medium text-base leading-[34px] tracking-[0%] text-[#ABABAB] mont'>{map.data}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
