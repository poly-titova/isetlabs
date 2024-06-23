import pavelZaharov from "./../../../assets/team/pavel-zaharov.png"
import annaIvleva from "./../../../assets/team/anna-ivleva.png"
import dianaPyrgina from "./../../../assets/team/diana-pyrgina.png"
import darinaDyakiv from "./../../../assets/team/darina-dyakiv.png"
import arseniyKishkin from "./../../../assets/team/arseniy-kishkin.png"

export const Team = () => {
  return (
    <div className="mx-auto pl-10 py-32">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-bold text-yellow-600 ring-1 bg-yellow-200 ring-yellow-200">КТО ЭТИ ПРОФИ</div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Наша замечательная команда</h1>
        <div className="bg-white mx-auto max-w-2xl py-10 sm:px-6 lg:max-w-7xl">
          <div className="mt-6 grid gap-y-10 grid-cols-5">
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-56 overflow-hidden rounded-md bg-purple-100 lg:aspect-none group-hover:opacity-75 h-96">
                <img className="top-8 object-cover object-center size-96" src={pavelZaharov} />
              </div>
              <div className="my-4 flex justify-between">
                <div className="rounded-2xl bg-purple-500">
                  <h3 className="text-lg text-white indent-2.5 w-56">
                    Павел Захаров
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-white">[ CEO ]</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-56 overflow-hidden rounded-md bg-purple-100 lg:aspect-none group-hover:opacity-75 h-96">
                <img className="top-8 object-cover object-center size-96" src={annaIvleva} />
              </div>
              <div className="my-4 flex justify-between">
                <div className="rounded-2xl bg-purple-500">
                  <h3 className="text-lg text-white indent-2.5 w-56">
                    Анна Ивлева
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-white">[ CОO ]</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-56 overflow-hidden rounded-md bg-purple-100 lg:aspect-none group-hover:opacity-75 h-96">
                <img className="top-8 object-cover object-center size-96" src={dianaPyrgina} />
              </div>
              <div className="my-4 flex justify-between">
                <div className="rounded-2xl bg-purple-500">
                  <h3 className="text-lg text-white indent-2.5 w-56">
                    Диана Пургина
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-white">[ UX / UI ]</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-56 overflow-hidden rounded-md bg-purple-100 lg:aspect-none group-hover:opacity-75 h-96">
                <img className="top-8 object-cover object-center size-96" src={darinaDyakiv} />
              </div>
              <div className="my-4 flex justify-between">
                <div className="rounded-2xl bg-purple-500">
                  <h3 className="text-lg text-white indent-2.5 w-56">
                    Дарина Дякив
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-white">[ Account Manager ]</p>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-56 overflow-hidden rounded-md bg-purple-100 lg:aspect-none group-hover:opacity-75 h-96">
                <img className="top-8 object-cover object-center size-96" src={arseniyKishkin} />
              </div>
              <div className="my-4 flex justify-between">
                <div className="rounded-2xl bg-purple-500">
                  <h3 className="text-lg text-white indent-2.5 w-56">
                    Арсений Кишкин
                  </h3>
                  <p className="mt-1 mb-2 text-sm text-white">[ CEO ]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}