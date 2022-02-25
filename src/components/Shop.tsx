import React, {FC, useEffect, useState} from 'react'
import {Button} from "@material-ui/core";
import axios from "axios";

const Shop: FC = () => {

    const order = {
        notifyUrl: "https://bsstart2017.github.io/shop",
        customerIp: "127.0.0.1",
        merchantPosId: "145227",
        description: "RTV market",
        currencyCode: "PLN",
        totalAmount: "21000",
        buyer: {
            email: "nicepk.by@gmail.com",
            phone: "654111654",
            firstName: "John",
            lastName: "Doe",
            language: "pl"
        },
        products: [
            {
                name: "Wireless Mouse for Laptop",
                unitPrice: "15000",
                quantity: "1"
            },
            {
                name: "HDMI cable",
                unitPrice: "6000",
                quantity: "1"
            }
        ]
    }

    const [tokenData, setTokenData] = useState<PostAuthorizeToken | null>(null)

    const instance = axios.create({
        headers: {
            "Access-Control-Allow-Origin": "https://bsstart2017.github.io",
            "Access-Control-Allow-Headers": "X-Requested-With",
            "Access-Control-Allow-Methods": "GET, POST, PUT",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${tokenData?.access_token}`
        },
        baseURL: 'https://secure.snd.payu.com/'
    })

    const handlerClickBay = async () => {
        try {
            const response = await instance.post(`api/v2_1/orders`, order)
            console.log(response)
        } catch (e) {
           console.log(e)
        }
    }

    useEffect(()=>{
        instance.post<PostAuthorizeToken>(`pl/standard/user/oauth/authorize?grant_type=client_credentials&client_id=${process.env.REACT_APP_SANDBOX_CLIENT_ID}&client_secret=${process.env.REACT_APP_SANDBOX_CLIENT_SECRET}`)
            .then(response=> {
                setTokenData(response.data)
            })
            .catch(e=>console.log(e))
    }, [instance])

    return (
        <>
            <Button onClick={handlerClickBay} variant={"outlined"}>Buy</Button>
        </>
)
}

export default Shop;

type PostAuthorizeToken = {
    access_token: string
    token_type: string
    expires_in: number
    grant_type: string
}