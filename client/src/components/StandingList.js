import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StandingRow from './StandingRow';
import StandingHeader from './StandingHeader';
import '../styles/StandingsList.css';

export default function StandingsList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://mobilewsnew.365scores.com/Data/Statistics/Tables', {params: {'Competition': '7'}})
            .then(response => {
                setData(response.data.TableRows);
            });
    }, []);

    return (
        <>
            <StandingHeader/>
            {data.map(row => {
                return <StandingRow standing={row} key={row.team_id}/>;
            })}
        </>
    );
}