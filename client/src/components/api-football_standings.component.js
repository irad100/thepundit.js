import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './stackedTable.css';
import svg from './epl.svg'


export default function StandingsList() {
  const [StandingsData, setStandingsData] = useState([]);

  useEffect(() => {
    axios.get('https://api-football-beta.p.rapidapi.com/standings', { params: {'league': '39', 'season': '2019'}, headers: { 'x-rapidapi-host': 'api-football-beta.p.rapidapi.com', 'x-rapidapi-key': '3RSAeWzqDlmshEiZFf7fj6avRbMQp1DLRQ9jsnH7rTWhkTVRTe' } })
      .then(response => {
        console.log(response.data.response[0].league.standings[0])
        setStandingsData(response.data.response[0].league.standings[0])
      });
  }, []);


  const Standing = props => (
    <tr style={{background: '#C8142F'}}>
      <td>{props.standing.rank}</td>
      <td><img src={'https://resources.premierleague.com/premierleague/badges/t'+'.svg'} alt='' width={30} height={30}></img> {props.standing.team.name}</td>
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