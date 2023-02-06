import React from 'react';
import './App.css';

const style = {
      bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#778899] to-[#E6E6FA]`,
      form:`text-center column`,
      h1:`text-center font-semibold p-4`,
      input:`rounded-md m-6 max-w-[500px] w-full shadow-xl p-1`,
      label:`text-center relative top-4`,
      button:`border-2 border-slate-500/100 p-2 rounded-md`
}

function App() {
  return (
  <div className={style.bg}>
      <h1 className={style.h1}>CRUD APP</h1>

    <div className={style.form}>
      <div>
      <label className={style.label}> Movie Name: </label>
      </div>
      <input className={style.input} type='text' name='movieName' />
    </div>
    <div className={style.form}>
      <div>
      <label className={style.label}> Review: </label>
      </div> 
      <input className={style.input} type='text' name='review' />
      <div>
      <button className={style.button}>Submit</button>
      </div>
    </div>

  </div>
  );
}

export default App;
