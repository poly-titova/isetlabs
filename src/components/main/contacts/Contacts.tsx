import telegram from "./../../../assets/icons/telegram.png"
import whatsapp from "./../../../assets/icons/whatsapp.png"

export const Contacts = () => {
  return (
    <div>
      <span>НАПИШИТЕ НАМ</span>
      <h2>И мы построим долгосрочные и взаимовыгодные отношения</h2>
      <p>Двигаясь к инновациям и результатам вместе с вами, стараемся выстраивать теплые и доверительные коммуникации.</p>
      <div>
        <img src={telegram} />
        <img src={whatsapp} />
      </div>
    </div>
  )
}