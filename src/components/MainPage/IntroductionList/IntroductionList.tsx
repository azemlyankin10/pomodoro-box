import React from 'react'
import { ListGroup } from 'react-bootstrap'
import './IntroductionList.css'

export const IntroductionList = () => (
  <div className="introductionList mb-4">
    <h2 className="introductionList__header fs-3 fw-bold">
      Ура! Теперь можно начать работать:
    </h2>
    <ListGroup as='ul'>
      <ListGroup.Item 
        as='li'
        className='introductionList__li'
      >
        Выберите категорию и напишите название текущей задачи
      </ListGroup.Item>
      <ListGroup.Item 
        as='li'
        className='introductionList__li'
      >
        Запустите таймер («помидор»)
      </ListGroup.Item>
      <ListGroup.Item 
        as='li'
        className='introductionList__li'
      >
        Работайте пока «помидор» не прозвонит
      </ListGroup.Item>
      <ListGroup.Item 
        as='li'
        className='introductionList__li'
      >
        Сделайте короткий перерыв (3-5 минут)
      </ListGroup.Item>
      <ListGroup.Item 
        as='li'
        className='introductionList__li'
      >
        Продолжайте работать &laquo;помидор&raquo; за&nbsp;&laquo;помидором&raquo;, пока задача не&nbsp;будут выполнена. Каждые 4&nbsp;&laquo;помидора&raquo; делайте длинный перерыв (15-30&nbsp;минут).
      </ListGroup.Item>
    </ListGroup>
  </div>
)

