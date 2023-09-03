import styles from "./Input.module.scss";
import { validationWithReg } from "../../../helpers/helpers";
import openEye from '../../../assets/eye-open.svg'
import closeEye from '../../../assets/eye-closed.svg'
import { borderStyleForError } from "../../../helpers/helpers";



interface InputProps {
  value: string;
  error: string;
  dirty: boolean;
  shown?: boolean;
  setShown: (a:boolean) => void ;
  imgSrc: string;
  blurHandlerInput: () => void;
  reg: RegExp, 
  setValue: (a:string) => void,
  setError: (b:string) => void,
  errorText: string,
  placeholderText: string,
  inputName: string,
  confirmValidation:(e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}


const Input = ({ inputName,value,setValue,dirty,error,setError,errorText,imgSrc,blurHandlerInput,reg, placeholderText,shown,setShown,confirmValidation}: InputProps) => {

  return (
    <div className={styles.wrapperInput}>
         <div className={styles.inputBlock} style={{borderBottomColor: borderStyleForError(dirty, error)}}>
              {inputName === 'phone' ? <img src={imgSrc} className={styles.inputCountry}/> : (error &&  <img src={imgSrc} className={styles.inputStar}/> )}
              <input onChange={e =>{inputName === 'confirmpassword' ? confirmValidation(e) : validationWithReg(e,reg,setValue,setError,errorText)}} onBlur={() => blurHandlerInput()} value={value} placeholder={placeholderText} name={inputName}  type={shown ? "password" : "text"} />
              {(inputName === 'password' || inputName === 'confirmpassword') && <button  onClick={ () => setShown(!shown)}><img className={styles.shownPassworEye} src={shown ? openEye : closeEye}/></button>}
        </div>
        {(dirty && error) && <div className={styles.error}>{error}</div>}
</div>
  );
};

export default Input;
