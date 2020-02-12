import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './stackedTable.css';
import svg from './epl.svg'

export default function StandingsList() {
  const [StandingsData, setStandingsData] = useState([]);

  useEffect(() => {
    axios.get('https://api.football-data.org/v2/competitions/2021/standings', { headers: { 'X-Auth-Token': '901186e638fd4baa999bb2c32f4ef7d5' } })
      .then(response => {
        console.log(response.data.standings[0].table)
        setStandingsData(response.data.standings[0].table)
      });
  }, []);


  const Standing = props => (
    <tr style={{background: '#C8142F'}}>
      <td>{props.standing.position}</td>
      <td>{props.standing.team.name}</td>
      <td>{props.standing.playedGames}</td>
      <td>{props.standing.goalDifference}</td>
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
      <table>
        <thead>
          <tr>
            <th colSpan="2">
              <img src={svg} alt='' width={30} height={30}></img> PREMIER LEAGUE
            </th>
            <th>P</th>
            <th>GD</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          { standingsList(StandingsData) }
        </tbody>
      </table>
    </div>
  );
}