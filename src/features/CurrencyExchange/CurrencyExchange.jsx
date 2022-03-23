import { Select, InputNumber, Typography} from 'antd'
import React, { useEffect, useState } from 'react'
import { useGetExchangeQuery, useGetListquotesQuery } from './CurrencyExcApi'

const CurrencyExchange = () => {
  const {data, isFetching} = useGetListquotesQuery()

  const [fromCurrency, setFromCurrency] = useState(null)
  const [toCurrency, setToCurrency] = useState(null)
  const [excResult, setExcResult] = useState(null)
  const [inputValue, setInputValue] = useState(1)
  const {data: currencyPrice} = useGetExchangeQuery({toCurrency, fromCurrency})
  console.log(data)

  const onInputValue = (e) =>{
    setInputValue(e)
  }
  useEffect(() => {
    setExcResult(currencyPrice? currencyPrice*inputValue : 0)
  }
  , [inputValue, toCurrency, fromCurrency, currencyPrice])
  
  if(isFetching) return 'Loading...'
  return (
    <div>
      <Select
      style={{ width: 150 }}
      onChange={(e)=>setFromCurrency(e)}
      >
        {data.map((currency) => <Select.Option value={currency} >{currency}</Select.Option>)}
      </Select>
      <InputNumber  min={1} defaultValue={inputValue} onChange={onInputValue}/>
      <Select
      style={{ width: 150 }}
      onChange={(e)=>setToCurrency(e)}
      >
        {data.map((currency) => <Select.Option value={currency} >{currency}</Select.Option>)}
      </Select>
      <Typography.Title >{excResult}</Typography.Title>
    </div>
  )
}

export default CurrencyExchange