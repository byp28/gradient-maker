import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateColorPosition } from '../../features/gradient'

export default function RangeColorPosition() {
  const dispatch = useDispatch()
  const gradientValue = useSelector(state => state.gradient)
  return (
    <input 
    type="range" 
    min={0}
    max={360}
    className='w-full h-1 mb-10 bg-gray-200 rounded-lg cursor-pointer'
    value={gradientValue.colors.find(color => color.id === gradientValue.pickedColorId).position}
    onChange={e => dispatch(updateColorPosition(e.target.value))}
    name="" 
    id="" />
  )
}
