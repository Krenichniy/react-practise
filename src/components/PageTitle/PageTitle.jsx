import css from './PageTitle.module.css';
import PropTypes from 'prop-types';
export default function PageTitle({ text }) {
    return <h1 className={css.title}>{text}</h1>
}
PageTitle.protoTypes = {
    text: PropTypes.string.isRequired,
}

