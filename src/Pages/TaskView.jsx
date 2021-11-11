import * as React from 'react'
import Br from '../Databases/Briefs.json'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

const TaskView = () => {
    return (
        <>
            <div className='menuHeading'>
                <p>Task View</p>
            </div>

            <Card >
            <CardContent>
            <div className="container-xxl">
                <Typography sx={{ fontSize: 14 }} color="#000000" gutterBottom>
                <h6>Briefs in progress</h6>
                    <hr></hr>
                </Typography>

                <div>
                    <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                    </Box>
                </div>

                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Brief Id</th>
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date</th>
                            <th scope="col">Content</th>
                        </tr>
                    </thead>
                    <tbody>

                    {Br.map((item, i) => (
                        <tr key={i}>
                        <td>{item.BriefId}</td>
                        <td>{item.Type}</td>
                        <td>{item.Description}</td>
                        <td>{item.Date}</td>
                        <td>
                          <input type="file" class="form-control" id="inputGroupFile01"></input>
                        </td>
                        </tr>))}
                        
                    </tbody>
                </table>
            </div>
            </CardContent>
        </Card>
        
        </>
    )
}

export default TaskView
