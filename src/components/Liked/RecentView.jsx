import React from 'react'
import Container from '~/components/CardList/Container'

function RecentView() {
  const recentViewProduct = 'recentViewProduct'
  const local = JSON.parse(localStorage.getItem(recentViewProduct))
  console.log(local)
  return (
    <div>
      <Container list={[]} />
    </div>
  )
}

export default RecentView
