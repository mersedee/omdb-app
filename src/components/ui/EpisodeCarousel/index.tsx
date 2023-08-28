'use client'

import { useState, type MouseEvent } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { LongArrowLeftIcon, LongArrowRightIcon } from '@/components/icon'

import Slide from './Slide'

const EpisodesCarousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: {
      min: -5,
      max: 5
    },
    slides: {
      perView: 1,
      spacing: 0
    },
    breakpoints: {
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
    },
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
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide"><Slide number={1} /></div>
        <div className="keen-slider__slide"><Slide number={2} /></div>
        <div className="keen-slider__slide"><Slide number={3} /></div>
        <div className="keen-slider__slide"><Slide number={4} /></div>
        <div className="keen-slider__slide"><Slide number={5} /></div>
        <div className="keen-slider__slide"><Slide number={6} /></div>
      </div>

      {loaded && (instanceRef.current != null) && (
      <div className="flex justify-end gap-4 mt-[22px] sm:mr-[22px] mr-0">
        <button
            type="button"
            className={currentSlide === 0 ? 'opacity-20' : 'opacity-100'}
            onClick={onPrevious}
            disabled={currentSlide === 0}>
          <LongArrowLeftIcon />
        </button>

        <button
            type="button"
            className={currentSlide === 5 ? 'opacity-20' : 'opacity-100'}
            onClick={onNext}
            disabled={currentSlide === 5}>
          <LongArrowRightIcon />
        </button>
      </div>
      )}
    </>
  )
}

export default EpisodesCarousel
