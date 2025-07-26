import React from 'react'

function Card({movie: {title, poster_path, vote_average, original_language, release_date}}) {
  return (
    <div className='cardFilme'>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '/no-movie.png'} />
            <h3>{title}</h3>

            <div className='conteudo'>
              <div className='rating'>
                <i className="fa-solid fa-star" style={{color: "#FFD43B"}}></i>
                <p>{vote_average ? vote_average.toFixed(1): 'N/A'}</p>

                <span>•</span>
                <p className='lang'>{original_language}</p>
                
                <span>•</span>
                <p className="year">
                    {release_date ? release_date.split('-')[0] : 'N/A'}
                </p>
              </div>
            </div>
    </div>
  )
}

export default Card