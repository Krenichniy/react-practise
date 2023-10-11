// import css from './PageTitle.module.css';
import PropTypes from 'prop-types';
import { Title } from './PageTitle.styled';
export default function PageTitle({ text }) {
    return <Title>{text}</Title>
}
PageTitle.protoTypes = {
    text: PropTypes.string.isRequired,
}

