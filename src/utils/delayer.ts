export const delayer = (callback: (arg: any) => void, delay = 100) => {
  let accumulatedDelay = delay

  return (arg: any) => {
    return new Promise<void>((resolve) => {
      accumulatedDelay += delay
      const timeoutId = setTimeout(() => {
        callback(arg)
        resolve()
        clearTimeout(timeoutId)
      }, accumulatedDelay)
    }).then()
  }
}
