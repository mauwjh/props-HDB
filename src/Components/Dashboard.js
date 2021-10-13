import React, { useState, useEffect } from 'react'
import LineGraph from './LineGraph'

const calculateMonthlySales = (data) => {
  const dates = new Set()
  data.map(element => dates.add(element.month.slice(0,4)))
  let tempArr = []
  for(let i=0; i < dates.size; i++){
    tempArr[i] = [Array.from(dates)[i], data.reduce((a,b) => {b.month.slice(0,4) === Array.from(dates)[i] && a.push(Math.round(parseInt(b.price))); return a}, [])]
  }
  console.log(tempArr) 
  tempArr = tempArr.map(a => ({x: a[0], y: Math.round(a[1].reduce((a, b) => a+b) / a[1].length)}))
  console.log(tempArr) 
  return tempArr
}

const Dashboard = ({data}) => {
  const [salesPerMonth, setSalesPerMonth] = useState([])

  console.log(data)

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