import React from 'react';

const Team = props => {

return (
<div>
{props.teamData.map( member => {
    return (
        <div>
            <h2>{member.name}</h2>
            {/* <h4>{member.email}</h4>
            <h4>{member.role}</h4> */}
        </div>
    )
})}
</div>)
}

export default Team;