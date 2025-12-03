import tel from '@/assets/tel.svg'
import { ChevronRight, Clock3, Mail, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import fecebook from '@/assets/fecebook.svg'
import telefon from '@/assets/telefon.svg'
import telegram from '@/assets/telegram 4.svg'
import watsapp from '@/assets/watsapp.svg'

const Footer = () => {
  return (
    <div>
      <div className='w-full h-[331px] mt-[118px] text-white bg-linear-to-br from-[#160c0c] to-[#341111]'>
        <h1 className='text-center pt-[60px] mont font-bold text-3xl tracking-[5%] text-[#E8AA31]'>
          Златоустовские ножи интернет-магазин "ЗЛАТМАКС"
        </h1>
        <p className='font-medium text-lg tracking-[3%] text-white pt-[30px] text-center pb-[60px]'>
          Наш интернет-магазин "ЗЛАТМАКС" предлагает Вам ножи очень высокого качества из города оружейников - Златоуста.
          Златоустовские ножи известны и <br /> популярны среди потребителей как на российским рынке, так и за рубежом: ножи охотничьи, хозяйственные,
          туристические, рыбацкие, складные и <br /> метательные. Нож Златоуста - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях.
          На многую продукцию распространяется <br /> гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте "zlatmax" предложен огромный
          ассортимент Златоустовских ножей. <br /> Наши менеджеры помогут определиться и подобрать самый лучший Златоустовский нож, ориентируясь на Ваши пожелания
        </p>
      </div>
      <div className="pt-[102px] bg-[#141414]">
        <div className="flex justify-center gap-[133px] text-white ">
          <ul>
            <p className="pb-[23px] font-semibold text-lg tracking-[0%] mont">ИНФОРМАЦИЯ</p>
            <li className="pb-5 mont">
              <a href="#">
                Златоустовские ножи <br />
                в Москве и Московской <br />
                области
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Ножевые стали
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                О нас
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Условия оплаты <br />
                и доставки
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Политика <br />
                конфиденциальности
              </a>
            </li>
          </ul>
          <ul>
            <p className="pb-[23px] font-semibold text-lg tracking-[0%] mont">СЛУЖБА ПОДДЕРЖКИ</p>
            <li className="pb-5 mont">
              <a href="#">
                Контактная информация
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Возврат товара
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Карта сайта
              </a>
            </li>
          </ul>
          <ul>
            <p className="pb-[23px] font-semibold text-lg tracking-[0%] mont">ДОПОЛНИТЕЛЬНО</p>
            <li className="pb-5 mont">
              <a href="#">
                Подарочные сертификаты
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Партнеры
              </a>
            </li>
            <li className="mont">
              <a href="#">
                Товары со скидкой
              </a>
            </li>
          </ul>
          <ul>
            <p className="pb-[23px] font-semibold text-lg tracking-[0%] mont">ЛИЧНЫЙ КАБИНЕТ</p>
            <li className="pb-5 mont">
              <a href="#">
                Личный кабинет
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                История заказов
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Мои закладки
              </a>
            </li>
            <li className="pb-5 mont">
              <a href="#">
                Рассылка новостей
              </a>
            </li>
          </ul>
        </div>
        <hr className="text-white mt-2.5" />
        <div className="pt-9 text-white flex  gap-[67px] justify-center">
          <ul>
            <p className='pb-[31px]'>КОНТАКТЫ</p>
            <li className='pb-[15px]'>
              <a className='flex gap-4' href="tel:+88007774967">
                <img className='w-6' src={tel} alt="" />
                <span>8 (800) 777-49-67</span>
              </a>
            </li>
            <li className='pb-[15px]'>
              <a className='flex gap-4' href="">
                <Clock3 color="white" />
                <span>Пн-Пт <br />
                  7:00 - 16:00 (МСК)</span>
              </a>
            </li>
            <li className='pb-[15px]'>
              <a className='flex gap-4' href="">
                <MapPin color="white" />
                <span>
                  Златоуст, <br />
                  ул. Шоссейная, <br />
                  д. 1, офис «6Б»
                </span>
              </a>
            </li>
            <li className='pb-[15px]'>
              <a className='flex gap-4' href="">
                <Mail color="white" />
                <span>info@zlatmax.ru</span>
              </a>
            </li>
            <div className='flex gap-[21px] pt-[30px]'>
              <img src={fecebook} alt="" />
              <img src={telefon} alt="" />
              <img src={telegram} alt="" />
              <img src={watsapp} alt="" />
            </div>
          </ul>
          <ul>
            <p className='pb-[30px]'>ПОЛЕЗНЫЕ ССЫЛКИ</p>
            <li>
              <a href="">Способы оплаты и доставки</a>
            </li>
          </ul>
          <ul>
            <p className='pb-[30px]'>НАША ГАРАНТИЯ</p>
            <li>

              <a className='' href=""> Недовольны своей покупкой? <br />
                Вы можете вернуть ее в течении <br />
                30 дней с даты получения, <br />
                согласно <b className='text-[#E8AA31]'>нашим правилам</b></a>
            </li>
          </ul>
          <ul>
            <p className='pb-[15px]'>НОВОСТНАЯ РАССЫЛКА</p>
            <li className='pb-[26px]'>
              <a href="">Подпишитесь прямо сейчас!</a>
            </li>
            <div className='flex items-center'>
              <input placeholder='example@gmail.com' className='border rounded-l-xl w-[350px] h-[50px] pl-6' type="email" />
              <Button variant={'kere'} className='rounded-r-xl w-[50px] h-[50px] opacity-100 bg-[#E8AA31]'>
                <ChevronRight className='w-[50px]' color="white" />
              </Button>
            </div>
            <li className='pt-[22px]'>
              <a href="">Я прочитал Условия соглашения и <br />
                согласен с условиями </a>
            </li>
          </ul>
        </div>
        <hr className='text-white mt-[31px]' />
        <div className='flex text-white pt-[30px] justify-between pl-[120px] pb-[50px]'>
          <p>Все материалы, размещенные на сайте, носят справочный характер и не являются <br />
            публичной офертой, определяемойположениями Статьи 437 Гражданского кодекса Российской Федерации. <br />
            При копировании материалов гиперссылка на www.zlatmax.ru обязательна!</p>
          <p className='pr-[120px]'>Златоустовские ножи www.zlatmax.ru ©</p>
        </div>
      </div>

    </div>

  )
}

export default Footer
