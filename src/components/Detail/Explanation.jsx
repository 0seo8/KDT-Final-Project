import React from 'react'
import { ReactComponent as GoBackIcon } from '/public/assets/back-on.svg'
import { ReactComponent as HeartIconOn } from '/public/assets/heart-on.svg'
import { ReactComponent as HeartIcon } from '/public/assets/heart.svg'

import { detailProducts } from '../../dummy/detail'
import { ratingStar } from '../../utils/star'
const Explanation = () => {
  return (
    <div className="w-full flex-1 mt-2">
      <div className="pl-5 pr-5 border-b border-black-200 flex-grow pb-5">
        <div className="flex flex items-center w-full justify-between">
          <div className="flex items-center gap-1">
            <span className="text-color-800 text-sm font-bold">
              {detailProducts.brand}
            </span>
            <GoBackIcon className="rotate-180 w-[14px] h-[14px]" />
          </div>
          <HeartIconOn width="22px" height="22px" />
        </div>
        <h2 className="mt-2 font-bold">{detailProducts.product_name}</h2>
        <div className="flex items-center my-3">
          <div
            className="ratingStar"
            style={{
              backgroundPositionY: ratingStar(detailProducts.star),
            }}
          ></div>
          <span className="text-black-600 text-xs underline">
            {detailProducts.review_count}개의 리뷰보기
          </span>
        </div>
        <div className="flex items-end">
          <div className="flex flex-col mr-4">
            <span className="text-black-400 text-xs line-through ">
              {detailProducts.price} ¥
            </span>
            <span>{detailProducts.discount}%</span>
          </div>
          <div className="flex-grow text-xl font-bold">
            {(
              (detailProducts.price * (100 - detailProducts.discount)) /
              100
            ).toFixed(0)}
            ¥
          </div>
          <div className="text-white bg-primary py-2 px-2">
            {detailProducts.delivery === 'free' && '무료배송 상품'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explanation
