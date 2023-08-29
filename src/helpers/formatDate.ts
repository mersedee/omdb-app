export const formatDate = (inputDate: string): string => {
  const months: Record<string, string> = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }

  const [day, monthStr, year] = inputDate.split(' ')
  const month = months[monthStr]

  return `${year}-${month}-${day}`
}
