import Image from 'next/image'
import { StarIcon } from '@/components/icon'

const EpisodeCard = (): JSX.Element => {
  return (
    <div className="bg-white">
      <div className="relative w-full h-[536px]">
        <Image fill className="object-cover object-top" src="/images/sample.png" alt="ss" />
      </div>

      <div className="flex justify-between items-center p-[45px_45px_40px_38px]">
        <div className="text-lg">Episode 1 — 2011-04-17</div>

        <div className="flex items-center gap-[17px]">
          <StarIcon />
          <span className="text-lg">
            <span className="font-bold">9</span>
            <span>/10</span>
          </span>
        </div>
      </div>

      <hr className="border-t border-[#979797] border-opacity-20"/>

      <div className="p-[45px_95px_52px_38px]">
        <h2 className="text-[27px] font-bold">
          Insecure as Fuck
        </h2>
        <p className="text-[19px] mt-[6px]">
          In the wake of her 29th birthday, Issa reflects on her life and relationship choices.
        </p>
      </div>
    </div>
  )
}

export default EpisodeCard
