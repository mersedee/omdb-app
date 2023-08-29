'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect, type MouseEvent } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { LongArrowLeftIcon, LongArrowRightIcon } from '@/components/icon'

import type { EpisodeCarouselType } from './EpisodeCarousel.type'

import Slide from './Slide'

const breakpoints = {
  '(min-width: 768px)': {
    slides: { perView: 2, spacing: 16 }
  },
  '(min-width: 1024px)': {
    slides: { perView: 3, spacing: 24 }
  },
  '(min-width: 1280px)': {
    slides: { perView: 4, spacing: 24 }
  },
  '(min-width: 1536px)': {
    slides: { perView: 6, spacing: 24 }
  }
}

const EpisodesCarousel = ({ episodes }: EpisodeCarouselType): JSX.Element => {
  const maxSlide = episodes.length - 1
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    router.push(`/?episode=${currentSlide + 1}`, { scroll: false })
  }, [currentSlide])

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: {
      min: -maxSlide,
      max: maxSlide
    },
    slides: {
      perView: 1,
      spacing: 0
    },
    breakpoints,
    slideChanged (slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created () {
      setLoaded(true)
    }
  })

  const onNext = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    instanceRef.current?.next()
  }

  const onPrevious = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation()
    instanceRef.current?.prev()
  }

  return (
    <>
      <div ref={sliderRef} className={`keen-slider ${loaded ? '' : 'gap-2'}`}>
        {episodes.map((episode) => (
          <div key={episode.imdbID} className="keen-slider__slide">
            <Slide
                loaded={loaded}
                title={episode.Title}
                episode={episode.Episode}
                rate={episode.imdbRating}
                date={episode.Released}
                currentSlide={currentSlide}
            />
          </div>
        ))}
      </div>

      {loaded && (instanceRef.current != null) && (
      <div className="flex justify-end gap-4 mt-[22px] sm:mr-[22px] mr-0">
        <button
            type="button"
            onClick={onPrevious}
            className={currentSlide === 0 ? 'opacity-20' : 'opacity-100'}
            disabled={currentSlide === 0}>
          <LongArrowLeftIcon />
        </button>

        <button
            type="button"
            onClick={onNext}
            className={currentSlide === maxSlide ? 'opacity-20' : 'opacity-100'}
            disabled={currentSlide === maxSlide}>
          <LongArrowRightIcon />
        </button>
      </div>
      )}
    </>
  )
}

export default EpisodesCarousel
