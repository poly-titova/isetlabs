import pavelZaharov from "./../../../assets/team/pavel-zaharov.png"
import annaIvleva from "./../../../assets/team/anna-ivleva.png"
import dianaPyrgina from "./../../../assets/team/diana-pyrgina.png"
import darinaDyakiv from "./../../../assets/team/darina-dyakiv.png"
import arseniyKishkin from "./../../../assets/team/arseniy-kishkin.png"

export const Team = () => {
  return (
    <div>
      <span>КТО ЭТИ ПРОФИ</span>
      <h2>Наша замечательная команда</h2>
      <div>
        <div>
          <img src={pavelZaharov} />
          <div>
            <p>Павел Захаров</p>
            <p>[ CEO ]</p>
          </div>
        </div>

        <div>
          <img src={annaIvleva} />
          <div>
            <p>Анна Ивлева</p>
            <p>[ CОO ]</p>
          </div>
        </div>

        <div>
          <img src={dianaPyrgina} />
          <div>
            <p>Диана Пургина</p>
            <p>[ UX / UI ]</p>
          </div>
        </div>

        <div>
          <img src={darinaDyakiv} />
          <div>
            <p>Дарина Дякив</p>
            <p>[ Account Manager ]</p>
          </div>
        </div>

        <div>
          <img src={arseniyKishkin} />
          <div>
            <p>Арсений Кишкин</p>
            <p>[ CТО ]</p>
          </div>
        </div>
      </div>
    </div>
  )
}