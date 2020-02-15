import React from 'react';
import '../styles/StandingsRow.css';
import epl from '../assets/epl.svg';

const StandingsHeader = () => {

    return (
        <div className='standing header'>
            <img className='ml-1' src={epl} alt="" width={35} height={35}/>
            <div className='ml-2'>PREMIER LEAGUE</div>
            <div className='ml-5'>P</div>
            <div className='ml-5'>GD</div>
            <div className='ml-5'>PTS</div>
        </div>
    );
};

export default StandingsHeader;