import PropTypes from 'prop-types';
export default function Paintings({  url = 'https://raw.githubusercontent.com/luxplanjay/react-21-22/01-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D1%8B/src/components/default.jpg',
    title,
    author = 'not found',
    price,
    quantity }) {
return (
    <div>
        <img src={url} alt={title} width={200} height={ 200} />
        <h2>{title}</h2>
        <p>
            Author <a href={author.url}>{ author.tag}</a>
        </p>
        <p>Price: {price} dollars</p>
        <p>Quantity:{quantity > 10 ? 'full stack' : 'almost over'}</p>
        <button type="button">Click me</button>
    </div>
)
}

Paintings.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}