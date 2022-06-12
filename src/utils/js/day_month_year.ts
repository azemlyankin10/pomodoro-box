export const day_month_year = (date: Date) => {
  return date.toString().slice(0, 10)
}