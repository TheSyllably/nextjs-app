"use client"
import { Black_And_White_Picture } from "next/font/google";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

/*  styled-components */

const OperatorDiv = styled.div`
cursor: pointer;
overflow: hidden;
display: flex; 
gap: 30px;
align-items: center;
height: 134px;
margin: 0px auto 10px;
width: 657px;
margin-bottom: 30px;
border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 20px;
transition: 0.4s;
&:hover {
  background-color: rgba(189, 189, 189, 0.352);
  box-shadow: rgba(0, 0, 0, 0.597) 0px 10px 20px;
  transform: translateY(-5%);
  transition: 0.4s;
}
@media (max-width: 768px) {
      width: 440px;
}

@media (max-width: 480px) {
    width: 300px;
}

@media(max-width: 281px) {
    width: 200px;
}
`

const OperatorText = styled.div`
@media(max-width: 281px) {
    font-size: 4vw;
}
`

const OperatorImg = styled.img`
width: 124px;
height: 97px;
@media(max-width: 1280px) {
    height: 100px;
}

@media (max-width: 1000px) {
    height: 90px; 
}

@media(max-width: 281px) {
    height: 52px;
}
`

/* Main */

type operatorProps = {
  name: string,
  logo: string,
  description: string,
  onPlus: any,

}

export default function OperatorItem({ name, logo, description, onPlus }: operatorProps) {


  const onClickPlus = () => {
    document.body.style.overflowY = 'hidden';
    onPlus({ name, logo, description })
    console.log('Клик')
  }


  return (
    <>
      <Link style={{ textDecoration: 'none', color: 'black' }} href='/paymentItem'>
        <OperatorDiv onClick={onClickPlus}>
          <OperatorImg src={logo} alt='logo' />
          <OperatorText>
            <p> {name} </p>
            <p> {description}</p>
          </OperatorText>
        </OperatorDiv>
      </Link>


    </>
  )


}

