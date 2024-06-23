import { About } from "./about/About"
import { Cards } from "./cards/Cards"
import { Contacts } from "./contacts/Contacts"
import { Slider } from "./slider/Slider"
import { Team } from "./team/Team"

export const Main = () => {
  return (
    <>
      <h1 className="text-9xl font-black ml-32 mb-40">Iset Labs</h1>
      <Cards />
      <About />
      <div className="mt-40">
        <div className="relative mx-28">
          <h2 className="text-5xl font-black">Разрабатываем продукты, за<br/> которые платят пользователи</h2>
          <button className="absolute bottom-0 right-0 bg-yellow-400 rounded-lg px-8 py-4 text-base font-bold">Все проекты</button>
        </div>
        <div className="w-[80%] m-auto pt-11">
          <Slider />
        </div>
      </div>
      <Team />
      <Contacts />
    </>
  )
}