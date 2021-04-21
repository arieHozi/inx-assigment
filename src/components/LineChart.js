import React, { useState, useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const LineC = ({ data }) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(data)
  }, [data])


  return (
    <>

      <LineChart width={1200} height={400} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className="my-chart">
        <Line type="monotone" dataKey="EUR" stroke="pink" />
        <Line type="monotone" dataKey="AUD" stroke="red" />
        <Line type="monotone" dataKey="CAD" stroke="blue" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey='date' />
        <YAxis  />
        <Tooltip />
      </LineChart>
    </>
  )
}

export default LineC
