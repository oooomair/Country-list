import './list.scss';
import ListItem from './ListItem';

const List = ({data}) => {
  return (
    <div className='list'>
        <div className="list__titles">
            <span>countryId</span>
            <span>countryName</span>
            <span>currencyCode</span>
            <span>timeZone</span>
            <span className='list__title-log'>console</span>
        </div>
        <ul>
            {data.map(country => {
                return <ListItem key={country.countryId} country={country}/>
            })}
        </ul>
    </div>
  )
}

export default List