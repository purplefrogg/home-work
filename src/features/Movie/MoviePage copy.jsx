import { Divider, Input, Select, Spin, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useGetGenreListQuery } from './MovieApi'
import MoviesByGenre from './MoviesByGenre copy'

const { Option } = Select
const MoviePage = () => {
  const [genre, setGenre] = useState('')
  const { data: genreList, isLoading } = useGetGenreListQuery()
  const [renderMovies, setRenderMovies] = useState(false)
  useEffect(() => {
    let promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 2000)
    })
    promise.then((res) => setRenderMovies(res))
  }, [])

  if (isLoading) return <Spin className='spin' />
  return (
    <div className='MoviePage'>
      <div style={{ textAlign: 'center' }}>
        <Select
          placeholder='select genre'
          style={{ width: '200px' }}
          onSelect={(e) => setGenre(e)}
        >
          <Option value='default'>default</Option>
          {genreList?.genres?.map((genre) => (
            <Option value={genre.id}>{genre.name}</Option>
          ))}
        </Select>
      </div>

      {renderMovies && <MoviesByGenre genre={genre} />}
    </div>
  )
}

export default MoviePage
