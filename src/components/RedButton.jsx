import React from 'react'
import '../style/components/RedButton.scss'

export const RedButton =({
  children,
  type,
  onClick
  
}) =>{
  return(
    <button className="RedBtn" onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default RedButton