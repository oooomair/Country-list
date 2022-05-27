import { useEffect, useState } from 'react';
import './App.scss';
import List from './List/List';

function App() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://stxlabsdevapim.azure-api.net/PMS/Instance/GetCountryList',
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": "c18c7b0bb43d4c779c24336a144e8843"
            },
            body: JSON.stringify({"PMSInstanceID": 56522122})
        }).then(res => {
            return res.json()
        }).then(data => {
            setData(data.result)
        })
    }, [])

  return (
    <div className="App">
        <List data={data} />
    </div>
  );
}

export default App;
