import telegram from "./../../../assets/icons/telegram.png"
import whatsapp from "./../../../assets/icons/whatsapp.png"

export const Contacts = () => {
  return (
    <div className="relative isolate px-6 mb-56">
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-bold text-sky-600 ring-1 bg-sky-200 ring-sky-200">НАПИШИТЕ НАМ</div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">И мы построим долгосрочные и взаимовыгодные отношения</h1>
          <p className="mt-6 text-xl leading-10 text-gray-600">Двигаясь к инновациям и результатам вместе с вами, стараемся выстраивать теплые и доверительные коммуникации.</p>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a href="#"><img className="size-36" src={telegram} /></a>
            <a href="#"><img className="size-48" src={whatsapp} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}