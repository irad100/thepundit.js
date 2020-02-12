import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './stackedTable.css';

export default function StandingsList() {
  const [StandingsData, setStandingsData] = useState([]);

  useEffect(() => {
    axios.get('https://footballapi.pulselive.com/football/standings?compSeasons=274', { headers: { 'origin': ' https://www.premierleague.com' } })
      .then(response => {
        console.log(response.data.response)
        setStandingsData(response.data.response[0].league.standings[0])
      });
  }, []);


  const Standing = props => (
    <tr style={{background: '#C8142F'}}>
      <td>{props.standing.rank}</td>
      <td>{props.standing.team.name}</td>
      <td>{props.standing.all.played}</td>
      <td>{props.standing.goalsDiff}</td>
      <td>{props.standing.points}</td>
    </tr>
  )
  
  const standingsList = (StandingsData) => {
    return StandingsData.map(currentStanding => {
      return <Standing standing={currentStanding} key={currentStanding.team_id}/>;
    })
  }

  return (
    <div>
      <h3 style={{color: 'white'}}>Premier League Table</h3>
      <table>
        <tr style={{background: 'white'}}>
          <th colSpan="2">
            PREMIER LEAGUE
            </th>
          <th>P</th>
          <th>GD</th>
          <th>PTS</th>
        </tr>
        <tbody>
          { standingsList(StandingsData) }
        </tbody>
      </table>
    </div>
  );
}