import { ListContacts } from "./contacts/ListContacts"
import { Logo } from "./Logo"

export const Header = () => {
  return (
    <header>
      <div>
        <Logo />
        <button>Создать продукт</button>
      </div>

      <div>
        <ListContacts />
      </div>

      <p>Мы создаем <a>цифровые продукты</a> в <a>Web3</a> и <a>Telegram</a> (и не только), которые генерируют прибыль. </p>
    </header>
  )
}