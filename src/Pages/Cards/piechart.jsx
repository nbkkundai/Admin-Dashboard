import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chart from 'react-google-charts'
import CardContent from '@mui/material/CardContent';
var kundai=67

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard() {
  return (
<>
<div className="container-xxl">
    <Card>
    <CardContent>
      <div className="container-xxl">
      <Chart background-color='#000000'
            width={'500px'}
            padding={'10px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['Status', 'Number'],
            ['Completed', kundai],
            ['In Progress', 2],
        ]}
        options={{
            pieHole: 0.4,
        }}
        rootProps={{ 'data-testid': '3' }}
        />
      </div>
      </CardContent>
      </Card>
      </div>
</>
  );
}
