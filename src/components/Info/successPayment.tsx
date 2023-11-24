"use client"
import { useAppContext } from "@/app/Context/store"
import React from "react"
import styled from 'styled-components'
import Link from "next/link"

/* styled-components */

const SuccessWrapper = styled.div`
position: absolute;
overflow: hidden;
margin: 0 auto;
padding-top: 10px;
top: 10px;
width: 100%;
height: 100%;
background-color: #fff;
border: none;
border-radius: 20px;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
z-index: 999;
`

const SuccessBlock = styled.div`
overflow: hidden;
    position: absolute;
    background-color: white;
    width: 391px;
    height: fit-content;
    z-index: 9;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
`

const SuccessImage = styled.img`
width: 258px;
height: 157px;
`


/* MAIN */

const Info = ({ image, title, description }: any) => {
    const { setAdded } = useAppContext()
    return (
        <SuccessWrapper>
            <SuccessBlock>
                <SuccessImage src={image} />
                <h1> {title}</h1>
                <p> {description}</p>
                <Link href='/'> <button onClick={() => setAdded(false)}>Окей</button> </Link>
            </SuccessBlock>
        </SuccessWrapper>

    )
}

export default Info