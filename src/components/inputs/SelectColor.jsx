import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { pickColor } from '../../features/gradient'

export default function SelectColor() {
  const gradientValue = useSelector(state => state.gradient)
  const dispatch = useDispatch()
  return (
    <div className='mb-5'>
      <select 
      onChange={e =>{
        dispatch(pickColor(Number(e.target.value)))
      }}
      className='bg-gray-900 cursos-pointer py-1 px-2 mb-1 mt-2 border border-gray-700 outline-none focus:border-gray-500'>
      {gradientValue.colors.map((color, index)=>(
        <option value={color.id} key={color.id}>
          Color {color.id}
        </option>
      ))}
      </select>
    </div>

  )
}
