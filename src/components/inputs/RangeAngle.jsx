import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAngle } from '../../features/gradient'

export default function RangeAngle() {

  const dispatch = useDispatch()
  const angleValue = useSelector(state => state.gradient)
  return (
    <input 
    type="range" 
    min={0}
    max={360}
    className='w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer'
    value={angleValue.angle}
    onChange={e => dispatch(updateAngle({angle : e.target.value}))}
    name="" 
    id="" />
  )
}
