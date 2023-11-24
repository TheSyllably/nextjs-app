"use client"
import NavMenu from '@/components/navList/NavMenu';
import OperatorItem from '@/components/operatorItem/OperatorItem';
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useAppContext } from './Context/store';


/*   styled-components  */


const Wrapper = styled.div`
width: 1280px;
height: 700px;
top: 85px;
background: #FFFF;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.09);
border-radius: 20px;
margin: 0 auto;
@media(max-width: 1281px) {
    width: 1000px;
}

@media(max-width: 1025px) {
    width: 940px;
}

@media (max-width: 1001px) {
    width: 766px;
}

@media (max-width: 769px) {
    width: 682px;
}

@media (max-width: 541px) {
    width: 480px;
}

@media (max-width: 480px) {
    width: 415px;
}

@media (max-width: 415px) {
    width: 335px;
}

@media (max-width: 281px) {
    width: 244px;
}
`

const WrapperText = styled.h1`
display: flex;
justify-content: center;
padding-top: 30px;
@media (max-width: 480px) {
    font-size: 6vw;
}
`

const WrapperHr = styled.hr`
border: 1px solid #eeeeee;
`

const WrapperParagraph = styled.p`
display: flex;
  justify-content: center;
  padding-top: 30px;
  media (max-width: 480px) {
      font-size: 6vw;
  }
}
`

const AddItem = styled.div`
display: flex;
   justify-content: center;
`

const AddButton = styled.button`
cursor: pointer;
   background-color: #96fc9a;
   border-radius: 10px;
   margin-top: 44px;
   margin-bottom: 20px;
   border: none;
   height: 69px;
   width: 130px;
   font-size: 24px;
   transition: 0.5s;
`

/*  MAIN     */
export default function Home() {

  const { isOpen, setOpen, cartItems, onAddToCart } = useAppContext()

  const operators = [{
    id: 1,
    name: 'Билайн(Россия)',
    logo: 'https://kartinkin.net/uploads/posts/2022-03/1646301873_43-kartinkin-net-p-bilain-kartinki-47.jpg',
    description: 'Оплата услуг сотовой связи'

  },
  {
    id: 2,
    name: 'МТС',
    logo: 'https://papik.pro/grafic/uploads/posts/2023-04/1681489805_papik-pro-p-logotip-mts-vektor-30.jpg',
    description: 'Оплата услуг сотовой связи'

  },
  {
    id: 3,
    name: 'Мегафон(Россия)',
    logo: 'https://i6.photo.2gis.com/images/branch/0/30258560055683499_c4d5.jpg',
    description: 'Оплата услуг сотовой связи'

  }

  ]

  console.log(cartItems)

  useEffect(() => {
    document.body.style.overflow = 'auto'
  }, [])

  return (

    <>

      <Wrapper>

        <WrapperText> Оплата мобильной связи</WrapperText>

        <WrapperHr />

        <WrapperParagraph> Выберите Вашего оператора связи</WrapperParagraph>

        <div>
          {operators.map((post) => (

            <OperatorItem
              key={post.id}
              name={post.name}
              logo={post.logo}
              description={post.description}
              onPlus={(obj: object) => onAddToCart(obj)}
            />))}
        </div>

      </Wrapper>

      <AddItem>

        <AddButton onClick={() => setOpen(!isOpen)}> + </AddButton>
      </AddItem>
      {isOpen ? <NavMenu onClose={() => setOpen(false)} /> : null}



    </>
  )
}
