import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const style = {
    bg:`min-h-screen w-screen p-4 bg-gradient-to-r from-[#808080] to-[#F5FFFA]`,
    h1:`text-3xl text-center m-2`,
    container:`grid grid-cols-4 m-8`,
    books:`bg-stone-500 max-w-[500px] max-h-[500px] p-2 text-lg rounded-md shadow-xl m-6`,
    button:`bg-stone-500 max-w-[100px] p-2 rounded-md shadow-xl`,
    img:`box border h-32 w-32 p-4 bg-stone-400`,
    button2:`flex bg-stone-400 rounded-md p-2 m-1 shadow-xl` 
}



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

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books" + id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return (
  <div className={style.bg}>
    <h1 className={style.h1}> World Library Compass</h1>
      <div className={style.container}>
        {library.map(book => (
          <div className={style.books} key={book.id}>
            {book.cover && <img className={style.img} src={book.cover} alt='' />}
            <h2>Title: {book.title}</h2>
            <p>Description: {book.desc}</p>
            <span>${book.price}</span>
            <button className={style.button2} onClick={() => handleDelete(book.id)}>Delete</button>
            <button className={style.button2}><Link to={`/update/${book.id}`}>Update</Link></button>
          </div>
          ))}
      </div>
      <button className={style.button}><Link to="/add">Add a Book</Link></button>
  </div>
  )
}

export default Books
