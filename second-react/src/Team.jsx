import { useState } from "react"

export default function() {
    const [team, setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '8px',
        padding: '15px',
        margin: '10px'
    }

    function addPlayer(){
        setTeam(team + 1);
    }
    function removePlayer(){
        setTeam(team - 1);
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}