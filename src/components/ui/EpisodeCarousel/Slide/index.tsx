import Image from 'next/image'

import { type SlideType } from './slide.type'

const Slide = ({ title, episode, rate, date, currentSlide }: SlideType): JSX.Element => {
  const isActive = (currentSlide + 1) === +episode

  return (
    <>
      <div className="relative w-full h-[300px] md:h-[134px] bg-orange-950">
        <div className="relative z-20 bg-white text-black text-base font-bold w-[30px] h-[30px] pt-1 flex justify-center items-center">
          {episode}
        </div>

        {isActive ? null : <div className="absolute inset-0 z-10 bg-black opacity-60" />}

        <Image fill src="/images/episode.jpg" className="object-cover" alt={title} />
      </div>

      <h6 className="text-white text-[15px] font-bold mt-[19px]">{title}</h6>

      <div className="sm:hidden w-full flex justify-between items-center pt-4 pb-1">
        <div className="text-white text-sm">{date}</div>
        <div className="text-white text-sm">{rate}</div>
      </div>

      <p className="text-white text-[13px] opacity-80 mt-[10px]">
        In the wake of her 29th birthday, Issa  eflects on her life and relationship choices.
      </p>
    </>
  )
}

export default Slide
