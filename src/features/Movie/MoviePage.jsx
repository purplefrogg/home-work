import { Divider, Spin, Typography } from 'antd'
import React, {  useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useGetGenreListQuery } from './MovieApi'

const MoviePage = () => {
    const movieParams = useParams()
    const [isDisableBtn, setIsDisableBtn] = useState(false)
    const { data: genreList, isLoading } = useGetGenreListQuery()
    const [currentPage, setCurrentPage] = useState(1)
    const handleSelecetGenre =() =>{
       setTimeout(() => {
        setIsDisableBtn(false)
       }, 1000);
       setIsDisableBtn(true)
       setCurrentPage(1)
    }
    if (isLoading) return <Spin className='spin' />
    return (
        <div className='MoviePage'>
            <div className='genres'>
                {genreList?.genres?.map((genre) => <div className='genre' key={genre.id}>
                    <Link to={`/Movie/${genre.name}`}>
                        <button disabled={isDisableBtn} onClick={handleSelecetGenre} className='button-31'>{genre.name}</button>
                    </Link>
                </div>)}
            </div>
            {movieParams?.GenreName && <>
                <Typography.Title style={{textAlign: 'center'}}>Genre {movieParams.GenreName}</Typography.Title>
                <Divider  /> 
                <Outlet context={ [genreList.genres.filter(e=>e.name === movieParams.GenreName)[0], currentPage, setCurrentPage]}/>
            </>}
        </div>
    )
}

export default MoviePage