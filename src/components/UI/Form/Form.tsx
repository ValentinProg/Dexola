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
import { useInput } from "../../../helpers/helpers";

const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const emailErrorMessage = "Is not valid email";
  const errorMessage = "Please complete this field";

  const email = useInput("", emailErrorMessage);
  const phone = useInput("", errorMessage);
  const password = useInput("", errorMessage);
  const confirmPassword = useInput("", errorMessage);


  const confirmPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword.setValue(e.target.value);
    if (e.target.value !== password.value) {
      confirmPassword.setError("Please complete ");
      if (!e.target.value) {
        confirmPassword.setError("");
      }
    } else {
      confirmPassword.setError("");
    }
  };

  const blurHandler = () => {
    email.onBlur();
    phone.onBlur();
    password.onBlur();
    confirmPassword.onBlur();
  };


  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles.joinUsForm}
    >
      <div className={styles.formWrapper}>
        <Input
          inputName="email"
          value={email.value}
          setValue={email.setValue}
          dirty={email.isDirty}
          error={email.isError}
          errorText={emailErrorMessage}
          setError={email.setError}
          imgSrc={star}
          blurHandlerInput={blurHandler}
          reg={regEmail}
          placeholderText="Enter email"
          setShown={setPasswordShown}
          confirmValidation={confirmPasswordHandler}
        />
        <Input
          inputName="phone"
          value={phone.value}
          setValue={phone.setValue}
          dirty={phone.isDirty}
          error={phone.isError}
          setError={phone.setError}
          errorText={errorMessage}
          imgSrc={country}
          blurHandlerInput={blurHandler}
          reg={regPhone}
          placeholderText="+38(0__) ___ __ __"
          setShown={setPasswordShown}
          confirmValidation={confirmPasswordHandler}
        />
        <Input
          inputName="password"
          value={password.value}
          setValue={password.setValue}
          dirty={password.isDirty}
          error={password.isError}
          setError={password.setError}
          errorText={errorMessage}
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
          value={confirmPassword.value}
          setValue={confirmPassword.setValue}
          dirty={confirmPassword.isDirty}
          error={confirmPassword.isError}
          setError={confirmPassword.setError}
          errorText={errorMessage}
          imgSrc={star}
          blurHandlerInput={blurHandler}
          reg={regPassword}
          confirmValidation={confirmPasswordHandler}
          placeholderText="Confirm password"
          setShown={setConfirmPasswordShown}
          shown={confirmPasswordShown}
        />
        <div className={styles.linkContainer}>
          <Link imgName={line} linkContent="Send it" />
        </div>
      </div>
    </form>
  );
};

export default Form;
