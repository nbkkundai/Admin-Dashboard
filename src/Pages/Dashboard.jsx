import React from 'react'
import Pie from './Cards/piechart'
import Brief from './Cards/Briefs'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
    return (
        <>
            <div className='menuHeading'>
                <p>Analytics</p>
            </div>

            <div className="container-xxl">
            
            <Card>
              <CardContent>
              
              <Typography sx={{ fontSize: 14 }} color="#fde07f" gutterBottom>
                <h6>Brief Analysis Chat view</h6>
                <hr></hr>
              </Typography>
                <div className="container-xxl">
                 <Pie />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent>
              <Typography sx={{ fontSize: 14 }} color="#fde07f" gutterBottom>
              <h6>All briefs assigned to you</h6>
              <hr></hr>
              </Typography>
                 <Brief/>
              </CardContent>
            </Card>
            </div>
         </>
    )
}

export default Dashboard
