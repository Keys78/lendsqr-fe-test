import { useState } from 'react'
import LoginIllustration from 'components/Icons/LoginIllustration'
import LogoIcon from 'components/Icons/LogoIcon'
import Input from 'components/Shared/Input'
import Button from 'components/Shared/Button/Index'
import '../../assets/styles/index.scss'
import '../Login/login.scss'

const Index = () => {
  const initialValues = {
    email: "",
    password: ""
  };

  const [values, setValues] = useState(initialValues);

  const onHandleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const loginAction = (e: any) => {
    e.preventDefault();
    console.log(values)
  }

  return (
    <section className='login__wrapper'>
      <LogoIcon />
      <div className='login__content' >
        <LoginIllustration />
        <div>
          <h1>Welcome!</h1>
          <article>Enter details to login.</article>
          <form onSubmit={e => loginAction(e)}>
            <Input name={'email'} value={values.email} type='email' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} placeholder={'Email'} input__class={'input__styles'} />
            <Input name={'password'} value={values.password} type='password' required={true} onHandleInputChange={(e) => onHandleInputChange(e)} placeholder={'Password'} input__class={'input__styles'} />
            <div className='forgot__password'>
              <a href="#">Forgot Password</a>
            </div>
            <Button children={'Log In'} type="submit" background={'bg__cyan'} text_transform={'text__transform'} padding={'btn__padding'}/>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Index