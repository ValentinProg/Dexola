import styles from "./Form.module.scss";
import Link from "../Link/Link";
import line from "../../../assets/line.svg";
import { useState } from "react";
import openEye from '../../../assets/eye-open.svg'
import closeEye from '../../../assets/eye-closed.svg'
import star from '../../../assets/formStar.svg'
import country from '../../../assets/country.png'

const Form = () => {

    const [email,setEmail] = useState('')
    const [emailDirty,setEmailDirty] = useState(false)
    const [emailError,setEmailError] = useState('Is not valid email')

    const [phone, setPhone] = useState('')
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [phoneError, setPhoneError] = useState('Please complete this field')


    const [password, setPassword] = useState('')
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordError, setPasswordError] = useState('Please complete this field')

    const [passwordShown, setPasswordShown] = useState(false);

  
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false)
    const [confirmPasswordError, setConfirmPasswordError] = useState('Please complete this field')
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);


    const emailHandler = (e:any) => {
        setEmail(e.target.value)
       const regEmail = (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!regEmail.test(String(e.target.value).toLowerCase())) {
        setEmailError(' not valid email')
      } else {
        setEmailError('')
      }  
    }

    const phoneHandler = (e:any) => {
        setPhone(e.target.value)
        const regPhone = (/^\+?[0-9]\d{1,20}$/);
        if (!regPhone.test(String(e.target.value).toLowerCase())) {
          setPhoneError('wrong phone')
            if(!e.target.value){
              setPhoneError('')
            }
          } else {
            setPhoneError('')
          }  
    }

    
    const passwordHandler = (e:any) => {
     setPassword(e.target.value)
     if (e.target.value.length < 3 || e.target.value.length > 8) {
        setPasswordError('Please complete')
        if(!e.target.value){
            setPasswordError('')
        }
     } else {
        setPasswordError('')
     }
    }

    const confirmPasswordHandler = (e:any) => {
        setConfirmPassword(e.target.value)
        if (e.target.value !== password) {
           setConfirmPasswordError('Please complete ')
           if(!e.target.value){
               setConfirmPasswordError('')
           }
        } else {
           setConfirmPasswordError('')
        }
       }
       


    const emailBlurHandler = () => {
      setEmailDirty(true)
      setPasswordDirty(true)
      setPhoneDirty(true)
      setConfirmPasswordDirty(true)
    }   


    // const blurHandler = (e:any) => {
    //     switch (e.target.name) {
    //         case 'email':
    //             setEmailDirty(true)
     
    //         case 'password':
    //             setPasswordDirty(true)

    //         case 'phone':
    //             setPhoneDirty(true)
              
         
    //         case 'confirmpassword':
    //             setConfirmPasswordDirty(true)
    //             break
    //     }
    // }



        const borderStyleForError = { borderBottomColor: `${(phoneDirty) && 'var(--warning-rose)'}`}

  return (
 
      <form  onSubmit={(e) => {
        e.preventDefault();
      }} className={styles.joinUsForm}>
       <div className={styles.email}>
           <div className={styles.emailInput} style={borderStyleForError}>
               <img src={star} className={styles.inputStar}/>
               <input onChange={e =>emailHandler(e)} onBlur={() => emailBlurHandler()} value={email} placeholder="Enter email" name='email' type="text" />
          </div>
       
        {(emailDirty && emailError) && <div className={styles.error}>{emailError}</div>}
        
       </div>
       {/* style={{ borderBottom: '1px solid var(--warning-rose)'}} */}
       <div className={styles.phone} >
            <div className={styles.phoneInput} style={borderStyleForError}>
                <img src={country} className={styles.inputCountry}/> 
                <input onChange={e =>phoneHandler(e)} onBlur={() => emailBlurHandler()} value={phone}  placeholder='+38(0__) ___ __ __' name='phone' type="phone" />
      </div>
        {(phoneDirty && phoneError) && <div className={styles.error}>{phoneError}</div>}
       </div>

       <div className={styles.password}>
            <div className={styles.passwordInput} style={borderStyleForError}>
                <div className={styles.passwordInputContent}>
                     <img src={star} className={styles.inputStar}/>
                     <input onChange={e =>passwordHandler(e)} onBlur={() => emailBlurHandler()} value={password} placeholder="Password" name='password' type={passwordShown ? "text" : "password"} />
                </div>
                <button onClick={ () => setPasswordShown(!passwordShown)}><img className={styles.shownPassworEye} src={passwordShown ? openEye : closeEye}/></button>
            </div>
            {(passwordDirty && passwordError) && <div className={styles.error}>{passwordError}</div>}
       </div>

       <div className={styles.confirmPassword}>
           <div className={styles.confirmPasswordInput} style={borderStyleForError}>
               <div className={styles.confirmPasswordInputContent}>
                    <img src={star} className={styles.inputStar}/>
                    <input onChange={e =>confirmPasswordHandler(e)} onBlur={() => emailBlurHandler()} value={confirmPassword} placeholder="Confirm password" name='confirmpassword' type={confirmPasswordShown ? "text" : "password"} />
               </div>
               <button onClick={ () => setConfirmPasswordShown(!confirmPasswordShown)}><img className={styles.shownPassworEye} src={confirmPasswordShown ? openEye : closeEye}/></button>
           </div>
           {(confirmPasswordDirty && confirmPasswordError) && <div className={styles.error}>{confirmPasswordError}</div>}
       </div>


       
      

       


        <Link imgName={line}>Send it</Link>
      </form>
  
  );
};

export default Form;
