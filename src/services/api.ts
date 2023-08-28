import type { Dispatch, SetStateAction } from 'react'
import type { EpisodeResType, EpisodeDetailType, EpisodeType, SeriesType } from '@/types'

const API_BASE_URL = 'http://www.omdbapi.com/'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
const SERIES_NAME = 'loki'
const SEASON_NUMBER = '1'

const constructUrl = (params: Record<string, string>): string => {
  const searchParams = new URLSearchParams(params)
  return `${API_BASE_URL}?${searchParams.toString()}`
}

export const getSeries = async (): Promise<SeriesType> => {
  const url = constructUrl({ apikey: API_KEY, t: SERIES_NAME })
  const res = await fetch(url)
  const series = await res.json()

  return series
}

export const getEpisodes = async (): Promise<EpisodeType[]> => {
  const url = constructUrl({ apikey: API_KEY, t: SERIES_NAME, Season: SEASON_NUMBER })
  const res = await fetch(url)
  const episodes: EpisodeResType = await res.json()

  return episodes.Episodes
}

export const getEpisode = async (
  episodeNumber: string,
  setData: Dispatch<SetStateAction<EpisodeDetailType | null>>
): Promise<void> => {
  const url = constructUrl({
    apikey: API_KEY,
    t: SERIES_NAME,
    Season: SEASON_NUMBER,
    Episode: episodeNumber
  })
  const res = await fetch(url)
  const episode = await res.json()
  setData(episode)
}
