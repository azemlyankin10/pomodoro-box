import React, { FC, useEffect, useRef, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { rangeWeekState } from '../../../../store/atoms'
import './Select.css'

export type SelectValue = 'week' | 'lastweek' | '2weekago'

type SelectItems = {
  value: SelectValue
  text?: string
}
interface Select {
  elems: SelectItems[]
}

export const Select: FC<Select> = ({ elems }) => {
  const ref = useRef(null)
  const [selectElements, setSelectElements] = useState(elems.map((el, index) => ({ ...el, selected: false, index })))
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<SelectItems>({ value: 'week', text: '' })
  const setRangeWeek = useSetRecoilState(rangeWeekState)

  function selectElem(id: number) {
    const newElem = { ...selectElements[id], selected: true }
    const copySelectElements = [...selectElements].map(el => ({ ...el, selected: false }) )
    copySelectElements.splice(newElem.index, 1, newElem)
    setSelectedItem(newElem) 
    setSelectElements(copySelectElements)
  }

  useEffect(() => {
    setRangeWeek(selectedItem.value)
    
  }, [selectedItem])

  useEffect(() => { 
    selectElem(0)
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function toggle(e: any) {
      const el = e.target.dataset
      if(!el.btn) setOpen(false)
    }
    document.addEventListener('click', toggle)
    return () => { document.removeEventListener('click', toggle) }
  }, [])

  const toggleHandler = () => {
    setOpen(!open)
  }

  const selectHandler = (e: React.MouseEvent<HTMLElement>) => {
    const id = (e.target as HTMLInputElement).id
    selectElem(Number(id))
    setOpen(false)
  }

  return (
    <div ref={ref} className={`select ${open ? 'open' : ''}`}>

      <button onClick={toggleHandler} data-btn className='select__open-btn'>{selectedItem.text}</button>

      <div className='select__dropdown'>

        {selectElements.map(({ value, text, selected, index }) => (
          <button 
            key={value} 
            id={index.toString()} 
            className={`select__point-btn ${selected ? 'd-none' : ''}`}
            onClick={selectHandler}
          >
            {text}
          </button>
        ))}

      </div>

    </div>
  )
}

