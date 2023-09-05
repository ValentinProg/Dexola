import styles from "./Form.module.scss";
import Link from "../Link/Link";
import line from "../../../assets/line.svg";
import { useState } from "react";
import star from "../../../assets/formStar.svg";
import country from "../../../assets/country.png";
import { regEmail } from "../../../constants/constants";
import { regPhone } from "../../../constants/constants";
import { regPassword } from "../../../constants/constants";
import Input from "../Input/Input";

const Form = () => {
  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("Is not valid email");

  const [phone, setPhone] = useState("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("Please complete this field");

  const [password, setPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState( "Please complete this field");

  const [passwordShown, setPasswordShown] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("Please complete this field");
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const blurHandler = () => {
    setEmailDirty(true);
    setPasswordDirty(true);
    setPhoneDirty(true);
    setConfirmPasswordDirty(true);
  };

  return (
    <form onSubmit={(e) => {e.preventDefault()}} className={styles.joinUsForm}>
      <div className={styles.formWrapper}>
      <Input
        inputName="email"
        value={email}
        setValue={setEmail}
        dirty={emailDirty}
        error={emailError}
        errorText="Is not valid email"
        setError={setEmailError}
        imgSrc={star}
        blurHandlerInput={blurHandler}
        reg={regEmail}
        placeholderText="Enter email"
        setShown={setPasswordShown}
        confirmValidation={confirmPasswordHandler}
      />
      <Input
        inputName="phone"
        value={phone}
        setValue={setPhone}
        dirty={phoneDirty}
        error={phoneError}
        setError={setPhoneError}
        errorText="Please complete this field"
        imgSrc={country}
        blurHandlerInput={blurHandler}
        reg={regPhone}
        placeholderText="+38(0__) ___ __ __"
        setShown={setPasswordShown}
        confirmValidation={confirmPasswordHandler}
      />
      <Input
        inputName="password"
        value={password}
        setValue={setPassword}
        dirty={passwordDirty}
        error={passwordError}
        setError={setPasswordError}
        errorText="Please complete this field"
        imgSrc={star}
        blurHandlerInput={blurHandler}
        reg={regPassword}
        placeholderText="Password"
        setShown={setPasswordShown}
        shown={passwordShown}
        confirmValidation={confirmPasswordHandler}
      />
      <Input
        inputName="confirmpassword"
        value={confirmPassword}
        setValue={setConfirmPassword}
        dirty={confirmPasswordDirty}
        error={confirmPasswordError}
        setError={setConfirmPasswordError}
        errorText="Please complete this field"
        imgSrc={star}
        blurHandlerInput={blurHandler}
        reg={regPassword}
        confirmValidation={confirmPasswordHandler}
        placeholderText="Confirm password"
        setShown={setConfirmPasswordShown}
        shown={confirmPasswordShown}
      />

      {/* <div className={styles.email}>
           <div className={styles.emailInput} style={{borderBottomColor: borderStyleForError(emailDirty, emailError)}}>

            {emailError &&  <img src={star} className={styles.inputStar}/>}
               <input onChange={e => validationWithReg(e,regEmail,setEmail,setEmailError,'Is not valid email')} onBlur={() => blurHandler()} value={email} placeholder="Enter email" name='email' type="text" />           
          </div>

        {(emailDirty && emailError) && <div className={styles.error}>{emailError}</div>}
       </div>

       <div className={styles.phone} >
            <div className={styles.phoneInput} style={{borderBottomColor: borderStyleForError(phoneDirty, phoneError)}}>

                <img src={country} className={styles.inputCountry} /> 
                <input onChange={e =>validationWithReg(e,regPhone,setPhone,setPhoneError,'wrong phone')} onBlur={() => blurHandler()} value={phone}  placeholder='+38(0__) ___ __ __' name='phone' type="phone" />
      </div>

        {(phoneDirty && phoneError) && <div className={styles.error}>{phoneError}</div>}
       </div>

       <div className={styles.password}>
            <div className={styles.passwordInput} style={{borderBottomColor: borderStyleForError(passwordDirty, passwordError)}}>
                
                <div className={styles.passwordInputContent}>
                {passwordError &&  <img src={star} className={styles.inputStar} />}
                     <input onChange={e =>validationWithReg(e,regPassword,setPassword,setPasswordError,'Please complete')} onBlur={() => blurHandler()} value={password} placeholder="password" name='password' type={passwordShown ? "text" : "password"} />
                </div>
                <button onClick={ () => setPasswordShown(!passwordShown)}><img className={styles.shownPassworEye} src={passwordShown ? openEye : closeEye}/></button>
            </div>

            {(passwordDirty && passwordError) && <div className={styles.error}>{passwordError}</div>}
       </div>

       <div className={styles.confirmPassword}>
           <div className={styles.confirmPasswordInput} style={{borderBottomColor: borderStyleForError(confirmPasswordDirty, confirmPasswordError)}}>
               
               <div className={styles.confirmPasswordInputContent}>
               {confirmPasswordError &&  <img src={star} className={styles.inputStar}/>}
                    <input onChange={e =>confirmPasswordHandler(e)} onBlur={() => blurHandler()} value={confirmPassword} placeholder="Confirm password" name='confirmpassword' type={confirmPasswordShown ? "text" : "password"} />
               </div>
               <button onClick={ () => setConfirmPasswordShown(!confirmPasswordShown)}><img className={styles.shownPassworEye} src={confirmPasswordShown ? openEye : closeEye}/></button>
           </div>

           {(confirmPasswordDirty && confirmPasswordError) && <div className={styles.error}>{confirmPasswordError}</div>}
       </div> */}

      <div className={styles.linkContainer}>
        <Link imgName={line} linkContent="Send it"/>
      </div>
      </div>
    </form>
  );
};

export default Form;
