import React, { useState, useEffect } from 'react'
import LineGraph from './LineGraph'

const calculateMonthlySales = (data) => {
  const dates = new Set()
  data.map(element => dates.add(element.month.slice(0,4)))
  let tempArr = []
  for(let i=0; i < dates.size-1; i++){
    tempArr[i] = [Array.from(dates)[i], data.reduce((a,b) => {b.month.slice(0,4) === Array.from(dates)[i] && a.push(parseInt(b.resale_price)); return a}, [])]
  }
  tempArr = tempArr.map(a => ({x: a[0], y: a[1].length}))
  console.log(tempArr) 
  return tempArr
}

const Dashboard = ({data}) => {
  const [salesPerMonth, setSalesPerMonth] = useState([])

  useEffect(() => {
    data && setSalesPerMonth(calculateMonthlySales(data))
  }, [data])

  return (
    <div style={{maxWidth: '80%', margin: '0 auto'}}>
      <LineGraph data={salesPerMonth} />
    </div>
  )
}

export default Dashboard