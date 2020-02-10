import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Standing = props => (
  <tr>
    <td>{props.standing.rank}</td>
    <td>{props.standing.team.name}</td>
    <td>{props.standing.all.played}</td>
    <td>{props.standing.points}</td>
  </tr>
)

const standingsList = (StandingsData) => {
  return StandingsData.map(currentStanding => {
    return <Standing standing={currentStanding} key={currentStanding.team_id}/>;
  })
}

export default function StandingsList() {
  const [StandingsData, setStandingsData] = useState([]);

  useEffect(() => {
    axios.get('https://api-football-beta.p.rapidapi.com/standings', { params: {'league': '39', 'season': '2019'}, headers: { 'x-rapidapi-host': 'api-football-beta.p.rapidapi.com', 'x-rapidapi-key': 'c0c09819cemsh0af3823c52ce5acp11c3e7jsn5fbf2bcfea9d' } })
      .then(response => {
        console.log(response.data.response[0].league.standings[0])
        setStandingsData(response.data.response[0].league.standings[0])
      });
  }, []);

  return (
    <div>
      <h3>Premier League Table</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>Played</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          { standingsList(StandingsData) }
        </tbody>
      </table>
    </div>
  );
}