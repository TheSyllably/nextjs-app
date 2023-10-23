"use client"
import NavMenu from '@/components/navList/NavMenu';
import OperatorItem from '@/components/operatorItem/OperatorItem';
import PaymentItem from '@/components/paymentItem/PaymentItem';
import React, { useEffect, useState } from 'react'
import { useAppContext } from './Context/store';
import styles from './page.module.css'




export default function Home() {

 
  const {isOpen, setOpen, cartItems, isAdded, setAdded, onAddToCart} = useAppContext()


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


  useEffect(() => {
    document.body.style.overflow = 'auto'
}, [])
  


console.log(cartItems)



  return (
  
    <>
    
    {isAdded && <PaymentItem items={cartItems} onCloseButton={() => setAdded(false)}/>}
      <div className={styles.wrapper}>

       
        <h1 className={styles.wrapper__text}> Оплата мобильной связи</h1>

        
        <hr className={styles.wrapper__hr}/>
        
        <p className={styles.wrapper__p}> Выберите Вашего оператора связи</p>

      
        <div>
          

         

          {operators.map((post: any) => (

            <OperatorItem
              key={post.id}
              name={post.name}
              logo={post.logo}
              description={post.description}
              onCloseButton={() => setAdded(!isAdded)}
              onPlus={(obj:any) => onAddToCart(obj)}
            />))}
        </div>
    
      </div>

      <div className={styles.add__item}>

<button onClick={() => setOpen(!isOpen)} className={styles.add__button}> + </button>
</div>
{isOpen ? <NavMenu onClose={() => setOpen(false)} /> : null}

    

    </>
  )
}
