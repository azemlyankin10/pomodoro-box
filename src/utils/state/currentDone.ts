export const currentDone = (currentPomodors: number, pomodors: number) => {
  let done
  if(currentPomodors > pomodors) done = true
  else done = false
  return done
}
