import React from 'react'

function Pesquisar({searchTerm, setSearchTerm}) {
  return (
    <div className='pesquisar'>
    <div>
    <i className="fa-solid fa-magnifying-glass" style={{color: "#168aad"}}></i>
    <input 
    type='text' 
    placeholder='Pesquise milhares de filmes no catálogo'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    />
    </div>
    </div>
  )
}

export default Pesquisar