import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Br from '../../Databases/Briefs.json'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard() {
  return (
    <div className="container-xxl">
      <Card>
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
                          <td>{item.Content}</td>
                          </tr>))}
                          
                      </tbody>
          </table>
      </Card>
    </div>
  );
}
