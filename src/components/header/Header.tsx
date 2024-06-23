import logo from "./../../assets/logo.svg"
import arrow from "./../../assets/arrow.svg"
import telegram from "./../../assets/telegram.svg"
import whatsapp from "./../../assets/whatsapp.svg"

export const Header = () => {
  return (
    <header className=" mx-32 my-16">
      <div className="grid grid-cols-2 mb-20">
        <div className="relative">
          <img src={logo} alt="Iset Labs" />
          <button className="absolute bottom-0 bg-blue-600 text-white rounded-lg px-8 py-4 text-base font-bold">Создать продукт</button>
        </div>

        <div className="grid grid-rows-2 gap-y-5 w-auto font-extrabold text-2xl">
          <div className="relative bg-yellow-400 rounded-2xl px-6 py-5">
            <img src={arrow} className="absolute top-4 right-4 items-center" />
            <a href="#" className="mr-28">hustlewithus@isetlabs.ru</a>

            <div className="text-white text-base font-normal mt-28">
              <span className="bg-yellow-500 rounded-2xl px-4 py-2">e-mail</span>
              <span className="bg-yellow-500 rounded-2xl px-4 py-2 mx-3">contactus</span>
              <span className="bg-yellow-500 rounded-2xl px-4 py-2">workwithus</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-5">
            <div className="relative bg-sky-400 rounded-2xl px-6 py-5 text-white">
              <img src={arrow} className="absolute top-4 right-4 items-center" />

              <img src={telegram} className="absolute bottom-16 left-6 items-center" />
              <p className="absolute bottom-5 left-6">Telegram</p>
            </div>

            <div className="relative bg-green-400 rounded-2xl px-6 py-5 text-white">
              <img src={arrow} className="absolute top-4 right-4 items-center" />

              <img src={whatsapp} className="absolute bottom-16 left-6 items-center" />
              <p className="absolute bottom-5 left-6">WA</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-base font-normal text-gray-500">Мы создаем <a href="#" className="text-purple-600">цифровые продукты</a> в <a href="#" className="text-sky-600">Web3</a> и <a href="#" className="text-sky-600">Telegram<br /></a> (и не только), которые генерируют прибыль. </p>
    </header>
  )
}