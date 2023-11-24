"use client"

import React, { useEffect, useState } from "react";
import FormInput from '@/components/formInput/formInput';
import { useAppContext } from "@/app/Context/store"
import Info from "@/components/Info/successPayment";
import axios from "axios";
import styled from 'styled-components'
import Link from "next/link";


/*  styled-components */

const PaymentContainer = styled.div`
position: absolute;
margin: 0 auto;
top: -10px;
left: -10px;
width: 100%;
height: 200%;
@media(max-width:481px) {
        width: 110%;
  
}
`

const PaymentWrapper = styled.div`
overflow-y:auto;
position: sticky;
margin: 0 auto;
padding-top: 10px;
top: 20px;
width: 634px;
height: fit-content;
background-color: #fff;
border: none;
border-radius: 20px;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
z-index: 10;
transition: 0.5s;
@media(max-width:481px) {
        width: 382px;
}

@media (max-width: 415px) {
    .green__button {
        width: 400px;
    }
}

@media (max-width: 391px) {
        width: 393px;
}

@media(max-width: 376px) {
    width: 336px;
}

@media(max-width: 281px) {
        width: 257px;
}
`

const PaymentHeader = styled.div`
display: flex;
justify-content:center;
align-items: baseline;
`

const DeleteButton = styled.button`
background-color: white;
border: 1px solid black;
margin-left: 20px;
`

const PaymentText = styled.h1`
@media(max-width: 281px) {
        font-size: 6vw;
}
`

const PaymentHr = styled.hr`
position: relative;
    top: 3px;
`

const TelephoneOperator = styled.div`
display: flex;
justify-content: space-between;
@media(max-width: 376px) {
        margin-bottom: 30px;
}
`

const TelephoneItem = styled.button`
border: 1px solid black;
margin: 35px;
width: 111px;
height: 23px;
border-radius: 3px;
background-color: black;
color: white;
@media(max-width: 281px) {
        display: none;
}
`

const Operator = styled.div`
display: flex;
    margin-right: 40px;
    gap: 30px;
`

const OperatorParagraph = styled.p`
@media(max-width: 376px) {
        display: none;
  
}
`

const OperatorLogo = styled.img`
width: 75px;
`

const OperatorPoint = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid #c2c2c2;
width: 138px;
border-radius: 5px;
transition: 0.4s;
&:hover {
    transform: translateY(-2px);
}
`

const GreenButton = styled.button`
margin-top: 20px;
height: 50px;
width: 300px;
cursor: pointer;
background-color: #92ff92;
border: none;
border-radius: 8px;
margin-bottom: 10px;
&:disabled {
    background-color:#c2c2c2;
    cursor: default;
}
@media(max-width:481px) { 
        width: 338px;
}

@media (max-width: 415px) { 
        width: 400px;
}
@media (max-width: 391px) {
        width: 355px;
}
@media(max-width: 281px) {
        width: 218px; 
}
`

const Form = styled.form`
   display:flex;
   flex-wrap: wrap;
   gap: 30px;
   margin-top: 20px;
   justify-content: center
`


/*  MAIN */



export default function PaymentItem() {

    const { cartItems, setCartItems, setRotate } = useAppContext()

    interface InputsInterface {
        phonenumber: string;
        summary: string;
        value?: number;
    }

    /* TS ERROR with any */
    const [values, setValues] = useState<InputsInterface>({
        phonenumber: '',
        summary: ''
    })


    const inputs = [
        {
            id: 1,
            name: 'Номер телефона',
            type: 'text',
            placeholder: '7-000-000-00-00',
            errorMessage: 'Номер должен содержать 11 цифр',
            label: 'phonenumber',
            pattern: "[0-9]{11}",
            required: true
        },
        {
            id: 2,
            name: 'summary',
            type: 'text',
            placeholder: '1 rub - 1000 rub',
            errorMessage: 'Минимальная сумма - 1 рубль, максимальная сумма - 1000 рублей',
            label: 'Сумма',
            pattern: '^([1-9][0-9]{0,2}|1000)$',
            required: true
        }
    ]

    const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();

        const urlList = ['https://653158604d4c2e3f333cdfb5.mockapi.io/order', 'https://653158604d4c2e3f333cdfb5.mockapi.io/cart/stocks', 'https://653158604d4c2e3f333cdfb5.mockapi.io/cart/1/heroes']
        let random = Math.floor(Math.random() * urlList.length)

        async function onClickOrder() {

            alert(urlList[random])
            try {
                const { data } = await axios.post(urlList[random], { cartItems });
                setOrderId(data.id)
                setIsOrderComplete(true);
                setCartItems([])
            } catch (error) {
                console.log('Не удалось создать заказ')
            }
            setOpen(true)
        }

        onClickOrder()

    }

    const onChange = (e: React.FocusEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const [isOrderComplete, setIsOrderComplete] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const [orderId, setOrderId] = useState(null)




    return (
        <>
            <PaymentContainer>
                <PaymentWrapper>
                    <Link href='/'> <DeleteButton> X </DeleteButton> </Link>
                    <PaymentHeader>

                        <PaymentText> Пополнение счёта </PaymentText>


                    </PaymentHeader>
                    <PaymentHr />



                    <TelephoneOperator>
                        <TelephoneItem>
                            Телефон </TelephoneItem>

                        <Operator>
                            <OperatorParagraph> Ваш оператор:</OperatorParagraph>
                            <div className='choosen_operator'>

                                {cartItems.map((obj: any) => (
                                    <OperatorPoint key={obj.id}>
                                        <OperatorLogo src={obj.logo} alt='logo' />
                                        <div className='operator__text'>
                                            <p> {obj.name} </p>
                                        </div>
                                    </OperatorPoint>
                                ))}
                            </div>
                        </Operator>
                    </TelephoneOperator>


                    {isOpen ? <Info image={isOrderComplete ? 'https://static.tildacdn.com/tild3264-6235-4333-a466-646639373138/-1.png' : 'https://funik.ru/wp-content/uploads/2020/07/b9d6ccf4971a02e3f694.jpg'} title={isOrderComplete ? 'Заказ оформлен!' : 'Что-то пошло не так'} description={isOrderComplete ? 'Спасибо за покупку' : 'Теперь мы знаем о проблеме и в скором времени сможем её решить'} onClose={() => setOpen(false)} /> : null}
                    <Form onSubmit={handleSubmit}>
                        {inputs.map((inputs) => (
                            <FormInput
                                focused={""} key={inputs.id}
                                {...inputs}

                                onChange={onChange} />
                        ))}

                        <GreenButton>
                            <span className=''> Оплатить </span>
                        </GreenButton>
                    </Form>
                </PaymentWrapper>



            </PaymentContainer>
        </>
    )
}