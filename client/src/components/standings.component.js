import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




export const StandingsList = (props) => {
  useEffect(() => {
    axios.get('https://api-football-v1.p.rapidapi.com/v2/leagueTable/2', { headers: { 'x-rapidapi-host': 'api-football-v1.p.rapidapi.com', 'x-rapidapi-key': '3RSAeWzqDlmshEiZFf7fj6avRbMQp1DLRQ9jsnH7rTWhkTVRTe' } })
    .then(response => {
        this.setState({ Standings: response.data })
    })
    .catch((error) => {
        console.log(error);
    })
  }, []);

  const Standings = props => (
    <tr>
      <td>{props.Standings.Position}</td>
      <td>{props.Standings.Club}</td>
      <td>{props.Standings.Played}</td>
      <td>{props.Standings.Points}</td>
    </tr>
  )

  const StandingsList = () => {
    return this.state.Standings.map(currentStandings => {
      return <Standings Standings={currentStandings}/>;
    })
  }

  return (
      <div>
      <h3>League Standings</h3>
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
          { StandingsList() }
          </tbody>
      </table>
      </div>
  )

}