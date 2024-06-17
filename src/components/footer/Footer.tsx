import { Logo } from "./Logo"
import vector from "./../../assets/vector.svg"
import telegram from "./../../assets/telegram.svg"
import whatsapp from "./../../assets/whatsapp.svg"

export const Footer = () => {
  return (
    <footer>
      <div>
        <Logo />
        <p>Реализуй свою идею — присоединяйся к нам сегодня!</p>
      </div>
      <img src={vector} />
      <div>
        <div>
          <a>hustlewithus@isetlabs.ru</a>
          <img src={telegram} />
          <img src={whatsapp} />
        </div>
        <div>
          <p>Политика обработки персональных данных</p>
          <p>Пользовательское соглашение</p>
          <p>© Iset labs</p>
        </div>
      </div>
    </footer>
  )
}