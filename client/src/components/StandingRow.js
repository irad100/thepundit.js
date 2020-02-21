import React from 'react';
import '../styles/StandingsRow.css';

const StandingsList = ({standing}) => {

    return (
        <div className='standing' style={{background: standing.Competitor.Color, color: standing.Competitor.TextColor}}>
            <table className='w-100 m-auto'>
            <tbody>
                <tr>
                    <td className='pl-3' style={{width: '5%'}}>{standing.Position || ''}</td>
                    <td className='pl-3' style={{width: '5%'}}>—</td>
                    <td style={{width: '60%'}} ><img src={"http://localhost:9000/images/Competitors/"+standing.Competitor.ID+".svg"}alt="" width={35} height={35}/>{standing.Competitor.Name}</td>
                    <td  style={{width: '7%'}}>{standing.GamePlayed || ''}</td>
                    <td style={{width: '7%'}} >{standing.Ratio || ''}</td>
                    <td style={{width: '7%', fontWeight: '500'}} >{standing.Points || ''}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default StandingsList;