import PropTypes from 'prop-types';
export default function Section({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}
Section.protoTypes = {
    title: PropTypes.string.isRequired
}