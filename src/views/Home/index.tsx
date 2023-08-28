import { type FC } from 'react'
import { EpisodeCard, EpisodeCarousel } from '@/components/ui'

const Home: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[calc(100%-380px)_380px] lg:grid-cols-[calc(100%-517px)_517px] 2xl:grid-cols-[calc(100%-800px)_800px] min-h-screen">
      <div className="relative bg-green-950 pt-[100px] md:pt-[222px] px-6 md:pr-0 md:pl-10 lg:pr-0 lg:pl-10 xl:pr-0 xl:pl-[76px] pb-[30px]">
        <div className="pl-0 md:pl-[20px]">
          <div className="text-xl sm:text-[23px] text-white">Season 1</div>
          <h1 className="text-6xl sm:text-[74px] pt-3 pb-2 text-white font-bold">Insecure</h1>
          <p className="text-xl sm:text-[23px] text-white w-full lg:w-[490px]">
            Follows the awkward experiences and racy tribulations of a modern-day African-American woman.
          </p>
        </div>

        <div className="text-white mt-[107px]">
          <EpisodeCarousel />
        </div>
      </div>

      <div className="hidden md:block">
        <EpisodeCard />
      </div>
    </div>
  )
}

export default Home
