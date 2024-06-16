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
      <Slider />
      <Team />
      <Contacts />
    </>
  )
}