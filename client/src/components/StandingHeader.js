import React from 'react';
import '../styles/StandingsRow.css';
import epl from '../assets/epl.svg';

const StandingsHeader = () => {

    return (
        <div className='standing header'>
            <table className='w-100 m-auto'>
            <tbody>
                <tr>
                    <td style={{width: '10%'}}>
                        <img src={epl} alt="" width={35} height={35}/>
                    </td>
                    <td style={{width: '30%'}}>PREMIER LEAGUE</td>
                    <td style={{width: '20%'}}>P</td>
                    <td style={{width: '20%'}}>GD</td>
                    <td style={{width: '20%'}}>PTS</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default StandingsHeader;