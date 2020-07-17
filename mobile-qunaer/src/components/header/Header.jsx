import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';

export default function Header(props) {
    
    const { title, onBack } = props;
    console.log(title)
    return (
        <div className="header">
            <div className="header-back" onClick={onBack}>
                <svg width="42" height="42">
                    <polyline
                    points="25,13 16, 21 25, 29"
                    stroke="#fff"
                    strokeWidth="2"
                    fill="none" />
                </svg>
            </div>
            <div className="header-title">{title}</div>
        </div>
    )
}

// const initState = {
//     start: '南昌',
// }
// function changeStartReducer(state, action) {
//     switch(action.type) {
//         default: 
//             return state;
//     }
// }

// function changeEndReducer(state, action) {
//     switch(action.type) {
//         default:
//             return state;
//     }
// }
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired
}