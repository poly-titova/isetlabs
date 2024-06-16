import { ButtonApp } from "../ButtonApp"
import { ListContacts } from "./contacts/ListContacts"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header>
      <Logo />
      <ButtonApp />
      <ListContacts />
    </header>
  )
}