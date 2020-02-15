import React from 'react';
import '../styles/StandingsRow.css';

const StandingsList = ({standing}) => {

    return (
        <div className='standing' style={{background: standing.Competitor.Color, color: standing.Competitor.TextColor}}>
            <table className='w-100 m-auto'>
            <tbody>
                <tr>
                    <td className='pl-3' style={{width: '10%'}}>{standing.Position || ''}</td>
                    <td style={{width: '10%'}}>
                        <img src={"http://imagescache.365scores.com/image/upload/v1/Competitors/" + standing.Competitor.ID}alt="" width={35} height={35}/>
                    </td>
                    <td style={{width: '20%'}} > {standing.Competitor.Name}</td>
                    <td  style={{width: '20%'}}>{standing.GamePlayed || ''}</td>
                    <td style={{width: '20%'}} >{standing.Ratio || ''}</td>
                    <td style={{width: '20%'}} >{standing.Points || ''}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default StandingsList;