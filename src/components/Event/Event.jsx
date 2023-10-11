import PropTypes from 'prop-types';
import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from 'utils';
import { EventContainer,EventName,EventInfo, Chip } from './Event.styled';
// import { formatEventStart } from 'utils/formatData';
// import { formatEventDuration } from 'utils/formatDuration';
export default function Event({ name, location, speaker, type, start, end }) {
    const formatedStart = formatEventStart(start);
    const formatedDuration = formatEventDuration(start, end);
    return ( 
        <EventContainer >
            <EventName>{name}</EventName>
            <EventInfo>
                 <FaMapMarkerAlt className={css.icon} />
                {location}
            </EventInfo>
            <EventInfo>
                <FaUserAlt className={css.icon}/>
                {speaker}
            </EventInfo>
            <EventInfo>
               <FaCalendarAlt className={css.icon}/>
                {formatedStart}
            </EventInfo>
            <EventInfo>
                <FaClock className={css.icon}/>
                {formatedDuration}
            </EventInfo>
            <Chip eventType={type}>{type}</Chip>
             {/* <span className={`${css.chip } ${css[type]}`}>{type}</span> */}
        </EventContainer>
    )
}
Event.propTypes= {
    name:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    speaker:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    start:PropTypes.string.isRequired,
    end:PropTypes.string.isRequired,
}
