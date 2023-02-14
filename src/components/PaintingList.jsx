import PropTypes from 'prop-types';
import Painting from './Painting';
export default function PaintingList({ items }) {
    const markup = items.map(data => (
            <li key={data.id}>
                <Painting 
                url={data.url}
                title={data.title}
                author = {data.author}
                price={data.price}
                quantity =  {data.quantity}
                />
            </li>
      ))
return (
    <ul>
       {markup}
    </ul>
)
}

PaintingList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })),
}