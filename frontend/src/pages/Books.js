import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [library, setLibrary] = useState([])

  useEffect(() => {
  const fetchLibrary = async () => {
    try{
      const res = await axios.get("http://localhost:8800/books")
      console.log(res)
    }catch(err){
      console.log(err)
    }
   }
   fetchLibrary()
  }, [])

  return (
    <div>books</div>
  )
}

export default Books
