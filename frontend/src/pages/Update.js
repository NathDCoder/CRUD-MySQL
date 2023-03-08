import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const style = {
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#808080] to-[#F5FFFA]`,
  form:`p-2 m-2 grid text-primary-content place-content-center`,
  input:`p-1 m-2 border border-black rounded-md `,
  button:`flex bg-stone-400 rounded-md p-2 m-1 shadow-xl`,
  h1:`text-center`
}


const Update = () => {

  const [book, setBook] = useState({
    title:"",
    desc:"",
    price:null,
    cover:""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({...prev, [e.target.name]: e.target.value }))
  }
  console.log(book)

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className={style.bg}>
    <div className={style.form}>
      <h1 className={style.h1}>Update Book</h1>
      <input className={style.input} type="text" placeholder='title' onChange={handleChange} name="title" />
      <input className={style.input} type="text" placeholder='desc' onChange={handleChange} name="desc" />
      <input className={style.input} type="text" placeholder='price' onChange={handleChange} name="price" />
      <input className={style.input} type="text" placeholder='cover' onChange={handleChange} name="cover" />

      <button className={style.button} onClick={handleClick}>Update</button>
    </div>
    </div>
  )
}

export default Update