import { Select, InputNumber, Typography, Spin} from 'antd'
import React, { useEffect, useState } from 'react'
import { useGetExchangeQuery, useGetListquotesQuery } from './CurrencyExcApi'

const CurrencyExchange = () => {
  const {data, isLoading} = useGetListquotesQuery()

  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [excResult, setExcResult] = useState()
  const [inputValue, setInputValue] = useState(1)
  const {data: currencyPrice} = useGetExchangeQuery({toCurrency, fromCurrency})

  const onInputValue = (e) =>{
    setInputValue(e)
  }
  useEffect(() => {
    setExcResult(currencyPrice? currencyPrice*inputValue : 0)
  }
  , [inputValue, toCurrency, fromCurrency, currencyPrice])
  
  if(isLoading) return   <Spin className='spin' />
  return (
    <div style={{textAlign: 'center'}}>
      <Select
      style={{ width: 150 }}
      onChange={(e)=>setFromCurrency(e)}
      defaultValue={data[3]}
      >
        {data.map((currency) => <Select.Option  key={currency} value={currency} >{currency}</Select.Option>)}
      </Select>
      <InputNumber  min={1} defaultValue={inputValue} onChange={onInputValue}/>
      <Select
      style={{ width: 150 }}
      onChange={(e)=>setToCurrency(e)}
      >
        {data.map((currency) => <Select.Option key={currency} value={currency} >{currency}</Select.Option>)}
      </Select>
      <Typography.Title >{excResult}</Typography.Title>
    </div>
  )
}

export default CurrencyExchange