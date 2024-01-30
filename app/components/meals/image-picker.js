"use client"

import { useRef, useState } from 'react';
import Image from 'next/image'
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  
  // Forwards the click event of the button to the input using the useRef hook
  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0]

    if (!file) {
      setPickedImage(null)
      return
    }

    // Allows an uploaded file to be turned into a src url
    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && <Image src={pickedImage} alt="image selected by user" fill />}
        </div>
        <input
          className={classes.input}
          type='file' 
          id={name} 
          accept='image/png, image/jpeg' 
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} onClick={handlePickClick} type='button'>Pick an Image</button>
      </div>
    </div>
  )
}