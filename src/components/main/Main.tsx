import { About } from "./about/About"
import { Cards } from "./cards/Cards"
import { Contacts } from "./contacts/Contacts"
import { Slider } from "./slider/Slider"
import { Team } from "./team/Team"

export const Main = () => {
  return (
    <>
      <h1>Iset Labs</h1>
      <Cards />
      <About />
      <div>
        <h2>Разрабатываем продукты, за которые платят пользователи</h2>
        <button>Все проекты</button>
        <Slider />
      </div>
      <Team />
      <Contacts />
    </>
  )
}