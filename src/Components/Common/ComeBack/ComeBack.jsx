import React from 'react'
import { NavLink } from 'react-router-dom'

const ComeBack = () => {
   return (
      <NavLink to="/MainPage">
         <span>Вернуться назад</span>
      </NavLink>
   )
}

export default ComeBack