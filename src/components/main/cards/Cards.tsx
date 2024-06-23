import uiux from "./../../../assets/cards/uiux.png"
import code from "./../../../assets/cards/code.png"

export const Cards = () => {
  return (
    <div className="relative isolate px-6 mx-32 mb-28">
      <div className="mx-auto">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-4 py-1 text-sm leading-6 font-bold text-fuchsia-600 ring-1 bg-fuchsia-200 ring-fuchsia-200">ЧТО МЫ МОЖЕМ</div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl mx-14 mb-20 font-bold tracking-tight text-gray-900">Создать продукт, который будут покупать: интуитивно понятный дизайн и код, выполняющий задачу пользователя</h1>
          <div className="grid grid-cols-2">
            <div className="mr-6">
              <img src={uiux} alt="UX / UI" />
            </div>
            <div>
              <div className="mb-6">
                <img src={code} alt="Разработка" />
              </div>
              <div className="grid grid-cols-2 h-36 text-white text-left text-xl font-semibold">
                <div className="bg-pink-300 rounded-3xl mr-6 px-6 pt-16">
                  <span>Продуктовый консалтинг</span>
                </div>
                <div className="bg-emerald-400 rounded-3xl px-6 pt-16">
                  <span>Поддержка и сопровождение</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}