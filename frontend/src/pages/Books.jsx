import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [library, setLibrary] = useState([])

  useEffect(() => {
  const fetchLibrary = async () => {
    try{
      const res = await axios.get("http://localhost:8800/books")
      setLibrary(res.data);
    }catch(err){
      console.log(err)
    }
   }
   fetchLibrary()
  }, [])

  return (
  <div>
    <h1> World Book Library </h1>
      <div className='books'>
        {library.map(book => (
          <div className='book' key={book.id}>
            {book.cover && <img src={book.cover} alt='' />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
          </div>
          ))}
      </div>
      <button><Link to="/add">Add a Book</Link></button>
  </div>
  )
}

export default Books
