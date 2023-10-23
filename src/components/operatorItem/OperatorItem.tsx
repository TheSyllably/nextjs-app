"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from './OperatorItem.module.css'

export default function OperatorItem({name, logo, description, onPlus, onCloseButton}:any) {

 
  const onClickPlus = () => {
     document.body.style.overflowY = 'hidden';
    onCloseButton()
    onPlus({name, logo, description})
    console.log('Клик')
  }




  return (
    <>
        <div onClick={onClickPlus} className={styles.operator__item}>
          <img className={styles.operator} src={logo} alt='logo' />
          <div className={styles.operator__text}>
            <p> {name} </p>
            <p> {description}</p>
          </div>
        </div>
      

    </>
  )


}

