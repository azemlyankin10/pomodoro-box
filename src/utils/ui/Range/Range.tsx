import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import './Range.css'

interface RangeProps {
  title: string
  value: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e:any) => void
  min?: number
  max?: number
  step?: number
}

export const RangeComponent: FC<RangeProps> = ({ title, value, onChange, ...props }) => (
  <Form.Group className="mb-3">
    <Form.Label>{title} - {value}</Form.Label>
    <Form.Range
      className='custom-range'
      value={value} 
      onChange={onChange} 
      {...props}
    />
  </Form.Group>
)
