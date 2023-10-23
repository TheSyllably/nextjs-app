import React from 'react';
import styles from './PayButton.module.css'

const PayButton = () => {


    return(
        <>
         <div className=''>
             <button className={styles.pay__btn} data-component='PayButton' type='button'>
                <span className=''> Оплатить </span>                       
             </button>
           </div>
        </>
    )

}

export default PayButton;