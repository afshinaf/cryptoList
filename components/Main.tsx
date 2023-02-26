import { useState, useEffect } from 'react'
import axios from 'axios';

const Main = () => {

    const [cryptoList, setCryptoList] = useState([])

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&per_page=20&price_change_percentage=24h,7d')
            .then(response => setCryptoList(response.data))
            .catch(error => console.error(error))
    },[])

    return (
        <>
            <main className="text-white">
                <table className="table w-full">
                    <thead className="border-y-2 border-slate-600 h-11 py-8 bg-slate-600">
                        <tr className="">
                            <td className="text-left pl-4 w-1/16">#</td>
                            <td className="text-left w-2/16">coin</td>
                            <td className="text-left w-1/16">Price</td>
                            <td className="text-left w-1/16">24h</td>
                            <td className="text-left w-1/16">7d</td>
                            <td className="text-center w-1/16">Mkt Cap</td>
                            <td className="text-center w-1/16">total volume</td>
                            <td className="text-center w-1/16">logo</td>
                            <td className="text-center w-1/16">symbol</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cryptoList.map((item: any, index :number) => (
                                <>
                                    <tr className="h-10">
                                        <td className="text-left pl-4" onClick={() => console.log('afshin', item)}>{item.market_cap_rank}</td>
                                        <td className="text-left">{item.name}</td>
                                        <td className="text-left">{item.current_price}</td>
                                        <td className={`text-left ${item.price_change_percentage_24h <= 0 ? 'text-red-600' : 'text-lime-600'}`}>
                                            {`${item.price_change_percentage_24h.toFixed(2)}%`}
                                        </td>
                                        <td className={`text-left ${item.price_change_percentage_7d_in_currency <= 0 ? 'text-red-600' : 'text-lime-600'}`}>
                                            {`${item.price_change_percentage_7d_in_currency.toFixed(2)}%`}
                                        </td>
                                        <td className="text-center">{item.market_cap.toLocaleString('en')}</td>
                                        <td className="text-center">{item.total_volume.toLocaleString('en')}</td>
                                        <td className="text-center flex flex-row justify-center">
                                            <img src={item.image} className="w-8 text-center" />
                                        </td>
                                        <td className="text-center">{item.symbol}</td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default Main
