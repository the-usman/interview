import React, { useEffect, useState } from 'react'

const CoinPrice = () => {
    const [bpi, setBpi] = useState(null)
    const fetchData = async () => {
        try {
            const response = await (await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')).json();
            setBpi(response.bpi);
            console.log(response.bpi);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        return () => {
            fetchData();
        }
    }, [])
    return (
        <>
            {
                <div className='CoinPrice'>

                    <div className="usd card">
                        <h1>{bpi && bpi.USD.rate}$</h1>
                        <div className="desc">{bpi && bpi.USD.description}</div>
                    </div>

                    <div className="pound card">
                        <h1>{bpi && bpi.GBP.rate}£</h1>
                        <div className="desc">{bpi && bpi.GBP.description}</div>
                    </div>
                    <div className="euro card">
                        <h1>{bpi && bpi.EUR.rate}£</h1>
                        <div className="desc">{bpi && bpi.EUR.description}</div>
                    </div>
                </div >
            }
        </>
    )
}

export default CoinPrice
