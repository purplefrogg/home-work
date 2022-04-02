import { Image, Pagination, Spin, Typography } from 'antd'
import React, { useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { useGetSearchByGenreQuery } from './MovieApi'
const { Title } = Typography

const MoviesByGenre = ({ genre }) => {
  const [disablePagination, setDisablePagination] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  let { data, isFetching, isError, refetch } = useGetSearchByGenreQuery({
    genre: genre,
    page: currentPage,
  })

  const onPageChange = async (e) => {
    setDisablePagination(true)
  }
  console.log(data)
  if (isFetching) return <Spin className='spin'></Spin>
  return (
    <>
      <Pagination
        current={currentPage}
        style={{ textAlign: 'center', marginBottom: 30 }}
        disabled={disablePagination}
        onChange={(e) => setCurrentPage(e)}
        simple
        total={data?.total_pages}
      />
      <div className='movies_Grid'>
        {data?.results?.map((movie) => (
          <Link
            key={movie.id}
            to={`/MoviesId/${movie.id}`}
            className='movies_Grid__item'
          >
            <Image preview={false} height={450} src={movie.poster_path}></Image>
            <Title className='title' code='secondary' level={5}>
              {movie.release_date}
            </Title>
          </Link>
        ))}
      </div>
      <Pagination
        current={currentPage}
        style={{ textAlign: 'center' }}
        disabled={disablePagination}
        onChange={onPageChange}
        simple
        total={data?.total_pages}
      />
    </>
  )
}

export default MoviesByGenre
