import uiux from "./../../../assets/cards/UIUX.jpeg"
import code from "./../../../assets/cards/code.png"

export const Cards = () => {
  return (
    <div>
      <div>
        <span>ЧТО МЫ МОЖЕМ</span>
        <h2>Создать продукт, который будут покупать: интуитивно понятный дизайн и код, выполняющий задачу пользователя</h2>
      </div>
      <div>
        <div>
          <img src={uiux} alt="UX / UI" />
          <span>UX / UI</span>
        </div>
        <div>
          <div>
            <img src={code} alt="Разработка" />
            <span>Разработка</span>
          </div>
          <div>
            <div>
              <span>Продуктовый консалтинг</span>
            </div>
            <div>
              <span>Поддержка и сопровождение</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}