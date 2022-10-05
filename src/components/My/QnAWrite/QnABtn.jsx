import React from 'react'

const QnABtn = ({ onClick }) => {
  return (
    <div
      className="hover:cursor-pointer fixed bottom-0 left-0 right-0 z-50 "
      onClick={onClick}
    >
      <div className="h-[78px] gap-4 w-full flex  justify-center items-center text-white-200 bg-primary pb-4 text-[20px]">
        1:1 문의하기
      </div>
    </div>
  )
}

export default QnABtn
