import React from 'react';
import '../styles/StandingsRow.css';
import epl from '../assets/epl.svg';

const StandingsHeader = () => {

    return (
        <div className='standing header'>
            <table className='w-100 m-auto'>
            <tbody>
                <tr>
                    <td style={{width: '2%'}}>
                    </td>
                    <td style={{width: '68%'}}><img style={{marginRight: '5px'}} src={epl} alt="" width={35} height={35}/>PREMIER LEAGUE</td>
                    <td style={{width: '7%'}}>P</td>
                    <td style={{width: '7%'}}>GD</td>
                    <td style={{width: '7%', fontWeight: '600'}}>PTS</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default StandingsHeader;