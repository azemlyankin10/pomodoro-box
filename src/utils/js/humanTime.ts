type timeTipe = 'graph' | 'day' | 'pause'

export const humanTime = (mins: number, type?: timeTipe) => {
  const hours = Math.trunc(mins/60)
  const minutes = Math.round(mins % 60)
  
  if(type === 'graph') {
    if(hours < 1) return `${minutes} мин`
    return `${hours} час : ${minutes} мин`
  }
  if(type === 'day') {
    if(hours < 1) return `${minutes} минуты`
    return `${hours} часа : ${minutes} минут`
  }
  if(type === 'pause') {
    if(hours < 1) return `${minutes}м`
    return `${hours}ч : ${minutes}м`
  }

  if(hours < 1) return `${minutes}мин`
  return `${hours}час : ${minutes}мин`
}