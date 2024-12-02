import React from 'react'
import './style/style.css'


function App() {
  const [value, setValue] = React.useState({
    name: '',
    password: '',
    email: '',
  })

  const [mes, setMes] = React.useState(false) // for message
  const [isFull, setIsFull] = React.useState(false) // for fields


  const handleSubmit = (e) => {
    e.preventDefault()


    if (value.name==='' || value.password==='' || value.email==='' ) {
      setIsFull(true)
      return
    } else {
      setIsFull(false)
    }


    setMes(true)
    setTimeout(() => {
      setMes(false)
    }, 3000)

    setValue({
      name: '',
      password: '',
      email: '',
    })

    
    
  }

  const onChangeInputName = (e) => {
    setValue({...value, name: e.target.value})
  }

  const onChangeInputPas = (e) => {
    setValue({...value, password: e.target.value})
  }

  const onChangeInputEmail = (e) => {
    setValue({...value, email: e.target.value})
  }


  return (
    <div className='wrapper'>
      <div className='box_form'>
        <div className={`success_message ${mes && 'active'}`}>Вы успешно зарегистрировались!</div>
        <h3>Регистрация</h3>
        <form className='form_user' onSubmit={handleSubmit}>

          <input type='text'
           name='text'
           value={value.name}
           onChange={onChangeInputName}
           placeholder='Name'/>

          <input type='password'
           name='password' 
           value={value.password}
           onChange={onChangeInputPas}
           placeholder='Password' 
           autoComplete='on'/>
          
          <input type='email'
           name='email'
            value={value.email}
            onChange={onChangeInputEmail}
            placeholder='Email'/>

          <button type='submit' className='user_btn'>Регистрация</button>
          {isFull && <span className='warning'>Вы заполнили не все поля</span>}
        </form>
      </div>
    </div>
    
  );
}

export default App;
