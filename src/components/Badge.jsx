import React from 'react'

const Badge = ({badgeText, className}) => {
  return (
    <div className={`py-2 px-8 text-white font-bold text-center text-sm w-[92px] ${className}`}>{badgeText}</div>
  )
}

export default Badge