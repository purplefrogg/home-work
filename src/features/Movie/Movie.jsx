import { Col, Descriptions, Divider, Image, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import {
  MovieApi,
  useGetGenreListQuery,
  useGetMovieDetailsQuery,
  useGetSearchByGenreQuery,
  useGetSearchByNameQuery,
} from './MovieApi'

const Movie = () => {
  let { id } = useParams()

  let { data: movieData } = useGetMovieDetailsQuery(id)
  const { data: genreList, refetch } = useGetGenreListQuery()
  useEffect(() => {
    setTimeout(() => {
      refetch()
    }, 2000)
  }, [])

  return (
    <div className='movie'>
      <Row>
        <Col span={8}>
          <Image src={movieData?.poster_path} />
        </Col>
        <Col span={12} offset={1}>
          <Typography.Title level={3}>
            {movieData?.original_title}
          </Typography.Title>
          <Typography.Text>{movieData?.overview}</Typography.Text>
          <Divider />
          <Typography.Text strong>
            Release Date: {movieData?.release_date}
            <br />
            Original Language: {movieData?.original_language}
            <br />
            Genres: {movieData?.adult && 'age: 18+'}
            <br />
            Rating: {movieData?.vote_average} / 10
            <br />
            popularity: {movieData?.popularity}
          </Typography.Text>
        </Col>
      </Row>
    </div>
  )
}

export default Movie
