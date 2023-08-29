'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

import { StarIcon } from '@/components/icon'
import { getEpisode } from '@/services/api'
import { formatDate } from '@/helpers/formatDate'
import type { EpisodeDetailType } from '@/types'

const EpisodeCard = (): JSX.Element => {
  const [episode, setEpisode] = useState<EpisodeDetailType | null>(null)
  const searchParams = useSearchParams()
  const episodeParam = searchParams.get('episode') as string

  useEffect(() => {
    void getEpisode(episodeParam, setEpisode)
  }, [episodeParam])

  return (
    <div className="bg-white">
      <div className="relative w-full h-[536px]">
        {episode == null
          ? <Skeleton height="100%" />
          : (
            <Image
                fill
                loading="lazy"
                src={episode.Poster}
                className="object-cover object-top"
                alt={episode.Title}
            />
            )}
      </div>

      <div className="p-[45px_45px_40px_38px]">
        {episode == null
          ? <Skeleton count={1} />
          : (
            <div className="flex justify-between items-center">
              <div className="text-lg">
                Episode {episode.Episode} —
                {(episode.Released !== undefined && episode.Released !== '') && formatDate(episode.Released)}
              </div>

              <div className="flex items-center gap-[17px] [&>svg]:-mt-2">
                <StarIcon />
                <span className="text-lg">
                  <span className="font-bold">{episode.imdbRating}</span>
                  <span>/10</span>
                </span>
              </div>
            </div>
            )}
      </div>

      <hr className="border-t border-[#979797] border-opacity-20"/>

      <div className="p-[45px_95px_52px_38px]">
        {episode == null
          ? <Skeleton count={5} />
          : (
            <>
              <h2 className="text-[27px] font-bold">
                {episode.Title}
              </h2>
              <p className="text-[19px] mt-[6px]">
                {episode.Plot}
              </p>
            </>
            )}
      </div>
    </div>
  )
}

export default EpisodeCard
