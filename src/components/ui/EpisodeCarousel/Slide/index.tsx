import { type SlideType } from './slide.type'
const Slide = ({ number }: SlideType): JSX.Element => {
  return (
    <div>
      <div className="w-full h-[300px] md:h-[134px] bg-orange-950">
        <div className="bg-white text-black text-base font-bold w-[30px] h-[30px] flex justify-center items-center">
          {number}
        </div>
      </div>
      <h6 className="text-[15px] font-bold mt-[19px]">Insecure as fuck</h6>

      <div className="sm:hidden w-full flex justify-between items-center pt-4 pb-1">
        <div className="text-sm">2019</div>
        <div className="text-sm">9.5</div>
      </div>

      <p className="text-[13px] opacity-80 mt-[10px]">
        In the wake of her 29th birthday, Issa  eflects on her life and relationship choices.
      </p>
    </div>
  )
}

export default Slide
