export const About = () => {
  return (
    <div className="bg-stone-100 mx-32 sm:py-20 rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Включаемся в работу на любом этапе: от идеи до масштабирования</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400"></div>
                Разработаем MVP
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Понимаем суть бизнеса и построения продуктов. Знаем, что сначала лучше добежать от 0 до 1, чем пытаться “строить коммунизм”</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400"></div>
                Запустим продукт
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Знаем, что важно не только придумать идею, но и воплотить ее. Гибко работаем с бюджетом и сроками, чтобы вам было комфортно</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400"></div>
                Обеспечим поддержку
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">По запросу делимся своей экспертизой: подскажем, как сделать быстрее и дешевле. Гарантируем 365 дней без багов</dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-400"></div>
                Проконсультируем
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">Умеем слушать и слышать: поможем создать техническое задание для воплощения вашего видения</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}