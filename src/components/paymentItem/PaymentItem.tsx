
"use client"

import React, { useEffect, useState } from "react";
import styles from './PaymentItem.module.css'


import useInput from "@/components/useInput";
import { useAppContext} from "@/app/Context/store"
import Info from "../Info/successPayment";
import axios from "axios";








export default function PaymentItem({ onCloseButton, items = [] }: any) {




    const { setAdded, cartItems, setCartItems, setRotate,} = useAppContext()
    const telephone = useInput('', { isEmpty: true, minLength: 11, maxLength: 11, isNumber: true})
    const sum = useInput('', { isEmpty: true, minValue: 1, maxValue: 1000, isNumber: true })
    const cardnumber = useInput('', { isEmpty: true, minlength: 19, maxLength: 19, isNumber: true })
    const cardnumberExpiringDateMM = useInput('', { isEmpty: true, minlength: 2, maxLength: 2, isNumber: true })
    const cardnumberExpiringDateYY = useInput('', { isEmpty: true, minlength: 2, maxLength: 2, isNumber: true })
    const cardDataCVC = useInput('', { isEmpty: true, minlength: 3, maxLength: 3 , isNumber: true})
    
    



    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const [orderId, setOrderId] = useState(null)



    const urlList = ['https://653158604d4c2e3f333cdfb5.mockapi.io/cart/stocks', 'https://653158604d4c2e3f333cdfb5.mockapi.io/cart/1/order', 'https://653158604d4c2e3f333cdfb5.mockapi.io/cart/1/heroes']
    let random = Math.floor(Math.random() * urlList.length)

    function closeBtn() {
        onCloseButton();
        setRotate(document.body.style.overflow = "auto")

    }

    const onClickOrder = async () => {

        alert(urlList[random])
        try {
            const { data } = await axios.post(urlList[random], { items: cartItems });
            setOrderId(data.id)
            setIsOrderComplete(true);
            setCartItems([])
        } catch (error) {
            console.log('Не удалось создать заказ')
        }
        setOpen(true)
    

    }

    return (
        <>
            <div className={styles.payment__container}>
                <div className={styles.payment__wrapper}>

                    <div className={styles.payment__header}>
                        <button onClick={closeBtn} className={styles.delete__button}> X </button>
                        <h1 className={styles.top__h1}> Пополнение счёта </h1>


                    </div>
                    <hr className={styles.payment__hr}></hr>



                    <div className={styles.telephone__operator}>
                        <button className={styles.telephone__item}>
                            Телефон </button>

                        <div className={styles.operator}>
                            <p className={styles.operator__p}> Ваш оператор:</p>
                            <div className={styles.choosen_operator}>

                                {items.map((obj: any) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className={styles.operator__item}>
                                        <img className={styles.operator__logo} src={obj.logo} alt='logo' />
                                        <div className={styles.operator__text}>
                                            <p> {obj.name} </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    {isOpen ? <Info image={isOrderComplete ? 'https://static.tildacdn.com/tild3264-6235-4333-a466-646639373138/-1.png' : 'https://funik.ru/wp-content/uploads/2020/07/b9d6ccf4971a02e3f694.jpg' } title={isOrderComplete ? 'Заказ оформлен!' : 'Что-то пошло не так'} description={isOrderComplete ? 'Спасибо за покупку' : 'Теперь мы знаем о проблеме и в скором времени сможем её решить'} onClose={() => setOpen(false)} /> : null}

                    <div className={styles.input__item}>


                         <form>
                        <label> Номер получателя
                           
                                <input  onChange={e => telephone.onChange(e)} onBlur={e => telephone.onBlur(e)} value={telephone.value} className={styles.input} type='text' placeholder='+7 000 000 00 00' />
                                {(telephone.isBad && telephone.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                                {(telephone.isBad && telephone.minLengthError) && <div style={{ color: 'red' }}> Слишком короткий номер </div>}
                                {(telephone.isBad && telephone.maxLengthError) && <div style={{ color: 'red' }}> Слишком длинный номер </div>}
                                {(telephone.isBad && telephone.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}
                            
                        </label>
                        </form>



                        <form>
                        <label> Cумма
                           
                            <input onChange={e => sum.onChange(e)} onBlur={e => sum.onBlur(e)} value={sum.value} className={styles.input} type='text' placeholder='1 руб - 1000 руб' />
                            {(sum.isBad && sum.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                            {(sum.isBad && sum.minValueError) && <div style={{ color: 'red' }}> Мин. 1 руб. - макс. 1000 руб</div>}
                            {(sum.isBad && sum.maxValueError) && <div style={{ color: 'red' }}> Мин. 1 руб. - макс. 1000 руб</div>}
                            {(sum.isBad && sum.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}
                          
                        </label>
                        </form>

                    </div>

                    <div className={styles.bank__wrapper}>
                        <div className={styles.card__placeholder}>
                            <div className={styles.card__inputs}>
                                <div>
                                    <input value={cardnumber.value} onChange={e => cardnumber.onChange(e)} onBlur={e => cardnumber.onBlur(e)} className={styles.card__number} type='number' placeholder='Номер карты' />
                                    {(cardnumber.isBad && cardnumber.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                                    {(cardnumber.isBad && cardnumber.minLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 19 цифр </div>}
                                    {(cardnumber.isBad && cardnumber.maxLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 19 цифр </div>}
                                    {(cardnumber.isBad && cardnumber.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}

                                </div>
                                <div className={styles.card__expiringInputs}>
                                    <div className={styles.card__epiringDateMM}>
                                        <input value={cardnumberExpiringDateMM.value} onChange={e => cardnumberExpiringDateMM.onChange(e)} onBlur={e => cardnumberExpiringDateMM.onBlur(e)} className={styles.card__expiringDate} type='number' placeholder='ММ' />
                                        {(cardnumberExpiringDateMM.isBad && cardnumberExpiringDateMM.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                                        {(cardnumberExpiringDateMM.isBad && cardnumberExpiringDateMM.minLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 2 цифры </div>}
                                        {(cardnumberExpiringDateMM.isBad && cardnumberExpiringDateMM.maxLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 2 цифры </div>}
                                        {(cardnumberExpiringDateMM.isBad && cardnumberExpiringDateMM.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}
                                    </div>
                                    <span> / </span>
                                    <div className={styles.card__expiringDateYY}>
                                        <input value={cardnumberExpiringDateYY.value} onChange={e => cardnumberExpiringDateYY.onChange(e)} onBlur={e => cardnumberExpiringDateYY.onBlur(e)} className={styles.card__expiringDate} type='number' placeholder='YY' />
                                        {(cardnumberExpiringDateYY.isBad && cardnumberExpiringDateYY.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                                        {(cardnumberExpiringDateYY.isBad && cardnumberExpiringDateYY.minLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 2 цифры </div>}
                                        {(cardnumberExpiringDateYY.isBad && cardnumberExpiringDateYY.maxLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 2 цифры</div>}
                                        {(cardnumberExpiringDateYY.isBad && cardnumberExpiringDateYY.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}

                                    </div>
                                    <div className={styles.cvc__data}>
                                        <input maxLength={3} value={cardDataCVC.value} onChange={e => cardDataCVC.onChange(e)} onBlur={e => cardDataCVC.onBlur(e)} className={styles.card__cvc} type='number' placeholder='CVC' />
                                        {(cardDataCVC.isBad && cardDataCVC.isEmpty) && <div style={{ color: 'red' }}> Поле не может быть пустым </div>}
                                        {(cardDataCVC.isBad && cardDataCVC.minLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 3 цифры</div>}
                                        {(cardDataCVC.isBad && cardDataCVC.maxLengthError) && <div style={{ color: 'red' }}> Поле должно содержать 3 цифры</div>}
                                        {(cardDataCVC.isBad && cardDataCVC.isNumberError) && <div style={{ color: 'red' }}> Номер должен состоять из цифр! </div>}
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>



                  
                    <div className={styles.payment__button}>
                        <button disabled={!telephone.inputValid || !sum.inputValid} className={styles.green__button} onClick={onClickOrder}>
                            <span className=''> Оплатить </span>
                        </button>
                    </div>
                </div>



            </div>
        </>
    )
}