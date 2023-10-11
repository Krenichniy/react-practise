import styled from '@emotion/styled';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";

export const EventContainer = styled.div`
    position: relative;
    border: ${({ theme: { colors: { black } } }) => `2px dashed ${black}` };
    padding: 8px;
    border-radius: 4px;
`
export const EventName = styled.h2`
    margin-top: 0;
    font-size: 14px;
    line-height: 24px;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`

export const EventInfo = styled.p`
    display: flex;
    align-items: center;
    margin-top: 0;
    margin-bottom: 8px;
    color: ${({ theme: { colors: { primaryText } } }) => primaryText };
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.25px;
`

// export const Icon = styled.FaMapMarkerAlt`
    
// `
const setBgColor = ({ eventType, theme: { colors: { green, red, blue, black } } }) => { 
        switch (eventType) { 
        case "free":
            return green;
        case "paid": 
            return blue;
        case "vip":
            return red;
        default:
            return black
    }
}

export const Chip = styled.span`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    border-radius: 4px;
    text-transform: uppercase;
    color: ${({ theme: { colors: {white} } })=> white};

    /* background-color: ${({ type }) => { 
    switch (type) { 
        case "free":
            return 'var(--color-green)';
        case "paid": 
            return 'var(--color-blue)';
        case "vip":
            return 'var(--color-red)';
        default:
            return "#000"
    }
}}; */
    background-color: ${setBgColor};
    
`
