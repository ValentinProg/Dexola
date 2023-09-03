export const validationWithReg = (
  e: React.ChangeEvent<HTMLInputElement>,
  reg: RegExp,
  setValue: (a:string) => void,
  setError: (b:string) => void,
  errorText: string,
) => {
  setValue(e.target.value);
  if (!reg.test(String(e.target.value).toLowerCase())) {
    setError(errorText);
    if (!e.target.value) {
      setError("");
    }
  } else {
    setError("");
  }
};

export const borderStyleForError = (stateDirty: boolean, stateError: string) => {
    return `${(stateDirty && stateError ) && 'var(--warning-rose)'}`
 }


 
//  export const functionTablePrice = (contents: string) => {
//   // find 
//   // if (window.innerWidth <= 640) {
//   //   return null

  
//   // }

//   const tableCell = document.getElementById('idPrice');
//   console.log( tableCell.style.content);
//   // tableCell.style.color = 'red';
//   tableCell.style.textContent = contents;
//  }


