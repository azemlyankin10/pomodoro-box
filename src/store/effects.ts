/* eslint-disable @typescript-eslint/no-explicit-any */
export const localStorageEffect = (key: string) => ({ setSelf, onSet }: { setSelf: any, onSet: any }) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet((newValue: any, _: any, isReset: any) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue))
  })
}

export const sessionStorageEffect = (key: string) => ({ setSelf, onSet }: { setSelf: any, onSet: any }) => {
  const savedValue = sessionStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue))
  }

  onSet((newValue: any, _: any, isReset: any) => {
    isReset
      ? sessionStorage.removeItem(key)
      : sessionStorage.setItem(key, JSON.stringify(newValue))
  })
}