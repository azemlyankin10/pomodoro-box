export const humanTime = (mins: number) => {
  const hours = Math.trunc(mins/60)
  const minutes = mins % 60
  if(hours < 1) return `${minutes}мин`
  return `${hours}час : ${minutes}мин`
}