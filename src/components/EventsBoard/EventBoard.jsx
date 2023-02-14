import css from './EventBoard.module.css';
import PropTypes from 'prop-types';
import Event from 'components/Event/Event'
export default function EventBoard({ events }) {
    console.log(events);
    return <div className={css.eventBoard}>
        {events.map(({ name, location, speaker, type, time }) =>
        (<Event key={name}
            name={name}
            location={location}
            type={type}
            start={time.start}
            end={time.end}
            speaker={speaker} />))}
    </div>
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.exact({
            name:PropTypes.string.isRequired,
            location:PropTypes.string.isRequired,
            speaker:PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
         time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })).isRequired,
}