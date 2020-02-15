import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './stackedTable.css';
import svg from './epl.svg'


export default function StandingsList() {
  const [StandingsData, setStandingsData] = useState([]);

  useEffect(() => {
    axios.get('http://mobilewsnew.365scores.com/Data/Statistics/Tables', { params: {'Competition': '7'} })
    .then(response => {
      setStandingsData(response.data.TableRows);
    });
  }, []);

  const Standing = props => (
    <tr style={{background: props.standing.Competitor.Color, color: props.standing.Competitor.TextColor}}>
      <td>{props.standing.Position}</td>
      <td>
      <img src={"http://imagescache.365scores.com/image/upload/v1/Competitors/"+props.standing.Competitor.ID} alt="" width={35} height={35}></img>
      {props.standing.Competitor.Name}</td>
      <td>{props.standing.GamePlayed}</td>
      <td>{props.standing.Ratio}</td>
      <td>{props.standing.Points}</td>
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