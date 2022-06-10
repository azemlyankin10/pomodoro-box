import { day_month_year } from './day_month_year'

export const getWeek = (arr: []) => {
  const msInOneDay = 86400000 
  const dayTooday = new Date().getDay() - 1

  const mon = new Date(Date.now() - (dayTooday * msInOneDay))
  const tue = new Date(Number(mon) + msInOneDay)
  const wed = new Date(Number(tue) + msInOneDay)
  const thu = new Date(Number(wed) + msInOneDay)
  const fri = new Date(Number(thu) + msInOneDay)
  const sat = new Date(Number(fri) + msInOneDay)
  const sun = new Date(Number(sat) + msInOneDay)

  const week = [mon, tue, wed, thu, fri, sat, sun].map(el => day_month_year(el))

  return week.map(a => (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arr.map((b: any) => {

      if (b.date) {
        if(b.date == a) return b
      } else {
        if(b == a) return b
      }

    })
  ))  
}


