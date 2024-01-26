"use client"

import { useRef } from 'react';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
  const imageInput = useRef();
  
  // Forwards the click event of the button to the input using the useRef hook
  function handlePickClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type='file' 
          id={name} 
          accept='image/png, image/jpeg' 
          name={name}
          ref={imageInput}
        />
        <button className={classes.button} onClick={handlePickClick} type='button'>Pick an Image</button>
      </div>
    </div>
  )
}