import arrow from "./../../../assets/arrow.svg"
import telegram from "./../../../assets/telegram.svg"
import whatsapp from "./../../../assets/whatsapp.svg"

export const ListContacts = () => {
  return (
    <>
      <div>
        <div>
          <a>hustlewithus@isetlabs.ru</a>
          <img src={arrow} alt="" />
        </div>
        <div>
          <span>e-mail</span>
          <span>contactus</span>
          <span>workwithus</span>
        </div>
      </div>
      <div>
        <div>
          <img src={arrow} alt="" />
          <img src={telegram} alt="" />
          <p>Telegram</p>
        </div>
        <div>
          <img src={arrow} alt="" />
          <img src={whatsapp} alt="" />
          <p>WA</p>
        </div>
      </div>
    </>
  )
}