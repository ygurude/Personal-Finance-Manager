import React from 'react'

const HeaderBox = ({ type= "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-[24px] lg:text-[30px] font-bold text-gray-900">
        {title}
        {type === "greeting" && (
          <span className="text-teal-600"> 
          &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="text-[14px] lg:text-[16px] font-normal text-gray-600">{subtext}</p>
    </div>
  )
}

export default HeaderBox