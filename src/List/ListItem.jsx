import React, { useEffect, useState } from 'react'
import './list.scss';

const ListItem = ({country}) => {
    
    const [fakeData, setFakeData] = useState([])

    const onLog = () => {
        console.log(fakeData);
    }

    useEffect(() => {
        setFakeData(() => (
            {
            countryId: country.countryId,
            countryName: country.countryName,
            currencyCode: country.currencyCode,
            timeZone:country.timeZone,
            dev: 'Omair',
            Company: 'Systecx'
            }
        ))
    }, [country])

  return (
    <li className='list__item'>
            <span>{country.countryId}</span>
            <span>{country.countryName}</span>
            <span>{country.currencyCode}</span>
            <span>{country.timeZone}</span>
            <button onClick={onLog}><p>ConsoleLog Data</p></button>
    </li>
  )
}

export default ListItem