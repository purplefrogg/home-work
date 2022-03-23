import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useGetCountriesQuery, useGetStatisticsQuery } from './CovidApi'
import { Table } from 'antd';


const Covid = () => {
    const { data: statisticsList, isFetching } = useGetStatisticsQuery()
    const [searchTerm, setSearchTerm] = useState('')
    const [statistics, setStatistics] = useState(statisticsList?.response)


    const { data: countriesList } = useGetCountriesQuery()
    console.log(statisticsList)
    useEffect(() => {
        setStatistics(statisticsList?.response)
        const filteredData = statisticsList?.response?.filter((country) => country.country.toLowerCase().includes(searchTerm.toLowerCase()))
        setStatistics(filteredData)
    }, [statisticsList, searchTerm])

    const columns = [
        {
            title: 'Country',
            dataIndex: 'country',
        },
        {
            title: 'population',
            dataIndex: 'population',
            sorter: (a, b) => a.population - b.population
        },
        {
            title: 'total cases',
            dataIndex: 'totalCases',
            sorter: (a, b) => a.totalCases - b.totalCases
        },
        {
            title: 'new cases',
            dataIndex: 'newCases',
            sorter: (a, b) => a.newCases - b.newCases
        },
        {
            title: 'total deaths',
            dataIndex: 'totalDeaths',
            sorter: (a, b) => a.totalDeaths - b.totalDeaths
        },
        {
            title: 'new deaths',
            dataIndex: 'newDeaths',
            sorter: (a, b) => a.newDeaths - b.newDeaths
        },
        {
            title: 'total recovered',
            dataIndex: 'totalRecovered',
            sorter: (a, b) => a.newCases - b.newCases
        },
        {
            title: 'active cases',
            dataIndex: 'activeCases',
            sorter: (a, b) => a.newCases - b.newCases
        },
        {
            title: 'total tests',
            dataIndex: 'totalTests',
            sorter: (a, b) => a.totalDeaths - b.totalDeaths
        },
    ]

    const dataSource = statistics?.map((data) => ({country: data.country, population: data.population,
        totalCases: data.cases.total,
        newCases: data.cases.new,
        totalDeaths: data.deaths.total,
        newDeaths: data.deaths.new,
        totalRecovered: data.cases.recovered,
        activeCases: data.cases.active,
        totalTests: data.tests.total
    }))
    if (isFetching) return 'Loading...'
    return (
        <div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
                onChange={(e) => setSearchTerm(e)}
            >
                <Select.Option value=''>default</Select.Option>
                {countriesList.response.map((counrty) => <Select.Option value={counrty}>{counrty}</Select.Option>)}
            </Select>
            <Table scroll={{x: true}} columns={columns} dataSource={dataSource}/>
            {/* {statistics?.map((data) => <CountryStats props={data} />)}
            {} */}
        </div>
    )
}

export default Covid