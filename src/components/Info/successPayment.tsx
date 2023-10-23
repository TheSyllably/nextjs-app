"use client"
import { useGlobalContext } from "@/app/Context/store"
import React  from "react"
import styles from './successPayment.module.css'




const Info = ( {image, title, description}: any ) => {

     


   const { setAdded} = useGlobalContext()
    return(
        <div className={styles.success__wrapper}>
        <div className={styles.success__block}>
            <img className={styles.success__logo} src={image}/>
              <h1> {title}</h1>
              <p> {description}</p>
              <button onClick={()=>setAdded(false)}>Окей</button>
        </div>
        </div>
        
    )
}

export default Info