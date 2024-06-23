import logo from "./../../assets/logo-footer.svg"
import telegram from "./../../assets/telegram.svg"
import whatsapp from "./../../assets/whatsapp.svg"

export const Footer = () => {
  return (
    <footer className="flex relative bg-blue-600 text-white mx-28 my-28 rounded-3xl py-12 px-8">
      <div className="ml-4">
        <img src={logo} alt="Iset Labs" />
        <p className=" mt-9">Реализуй свою идею — <br />присоединяйся к нам сегодня!</p>
      </div>
      <div>
        <div className="flex absolute top-12 right-8">
          <a className="font-extrabold">hustlewithus@isetlabs.ru</a>
          <div className="flex ml-3">
            <img src={telegram} className="size-6 mx-6" />
            <img src={whatsapp} className="size-5" />
          </div>
        </div>
        <div className="absolute bottom-12 right-8 text-right">
          <p>Политика обработки персональных данных</p>
          <p className="my-4">Пользовательское соглашение</p>
          <p>© Iset labs</p>
        </div>
      </div>
    </footer>
  )
}