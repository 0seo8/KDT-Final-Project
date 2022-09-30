import React, { useState } from 'react'
import { ReactComponent as Checked } from '/public/assets/allNotCheck.svg'
import { ReactComponent as Nochecked } from '/public/assets/allCheck.svg'

const Card = ({ item, setCartItems }) => {
  const { image, brand, product, price, sale, stock, count } = item
  const [checked, setChecked] = useState(false)
  const checkedHandler = () => {
    setChecked((prev) => !prev)
  }

  const changeCartItemCount = (idx) => {
    //카드 수량 변경 로직
    console.log('클릭')
  }

  return (
    <div className="flex text-[14px] mb-[12px]">
      <div
        className="relative flex-shrink w-[167px] h-[167px] bg-cover  overflow-hidden "
        style={{
          backgroundImage: `url(${image})`,
        }}
        onClick={checkedHandler}
      >
        <div className="absolute right-[12px] top-[12px] bg-white rounded-full px-[2px] py-[2px]">
          {checked ? <Nochecked /> : <Checked />}
        </div>
      </div>
      <div className="ml-[19px] grow-1 py-1">
        <div className="font-bold leading-[20px] ">{brand}</div>
        <div className="w-[169px] h-[36px] text-xs text-black-800 leading-[18px]">
          {product}
        </div>
        <div className="flex justify-between mt-1">
          <div className="h-[20px] self-end bg-black-200 rounded flex text-center items-center justify-center">
            <span className="w-[20px] " onChange={changeCartItemCount}>
              -
            </span>
            <span className="bg-white w-[20px] leading-[18px] text-black-600 text-xs">
              {count}
            </span>
            <span className="w-[20px]" onClick={changeCartItemCount}>
              +
            </span>
          </div>
          <div className="text-center">
            <div className=" text-xs text-black-600 line-through">
              {price * count} ¥
            </div>
            <div className="text-[14px]">
              {parseInt((price * (100 - sale)) / 100) * count} ¥
            </div>
          </div>
        </div>

        <div className="mt-8 text-primary">{stock}개 남음</div>
      </div>
      <div className="pr-5">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4431 7.00433L1.16663 1.7185L1.71772 1.16699L6.99391 6.45254L6.99396 6.45249L6.99573 6.45436L6.99593 6.45456L12.2747 1.16699L12.8258 1.7185L7.55682 6.99682L12.8333 12.2826L12.2822 12.8342L7.00343 7.54658L1.72521 12.8342L1.17412 12.2826L6.4431 7.00433Z"
            fill="#9C9C9C"
          />
        </svg>
      </div>
    </div>
  )
}

export default Card
