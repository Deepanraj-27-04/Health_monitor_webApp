import React from 'react'
import LineChart from '../components/LineChart'
import LineChart_body from '../components/LineChart_body'
import BarChart from '../components/Barchart'
import Blood_gluc from '../components/LineChart'
import { Link } from 'react-router-dom'
function Chart() {
    return (
        <div style={{display:"flex",flexDirection:"column",gap:"7rem",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:'flex',flexWrap:'wrap',gap:"9rem",justifyContent:"center"}}>
            {/* <div>Chart</div> */}
            <LineChart />
            <LineChart_body />
            <BarChart />
            <Blood_gluc />
        </div>
        <button ><Link to={'/chat'} style={{textDecoration:"none",color:"white"}}>Go to Chat</Link></button>
        </div>
    )
}

export default Chart