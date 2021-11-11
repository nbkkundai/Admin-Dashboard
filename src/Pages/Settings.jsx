import React from 'react'
import {
    CalendarToday,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
  } from "@material-ui/icons";
  import "./Settings.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Settings = () => {
    return (
        <>
        <div className='menuHeading'>
            <p>Settings</p>
        </div>

        <div class="container">
        <div class="row">
              <div class="col">
                    <Card sx={{ minHeight: 450}}>
                    
                        <div className="userShow">
                        <div className="userShowTop">
                        {/* //name tage */}
                          <div className="userShowTopTitle">
                            <span className="userShowUsername">Kundai Ncube</span>
                          </div>
                        </div>

                        <div className="userShowBottom">
                          <span className="userShowTitle">Account Details</span>
                          <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">nbkkundai</span>
                          </div>

                          {/* // passqord section */}
                          <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">*******</span>
                          </div>

                          <span className="userShowTitle">Contact Details</span>

                          {/* //phone number section */}
                          <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+27 123 456 67</span>
                          </div>

                          {/* //email section */}
                          <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">nbkkundai@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    
                </Card>
              </div>

              <div class="col">
              
              <Card sx={{ minHeight: 450}}>
              <CardContent>
                   {/* updating details */}
                        <form className="userUpdateForm">
                     
                          <div className="userUpdateLeft">
                          
                            <div className="userUpdateItem">
                              <label>Name</label>
                              <input
                                type="text"
                                placeholder="Kundai"
                                className="userUpdateInput"
                              />
                            </div>
                        
                            <div className="userUpdateItem">
                              <label>Surname</label>
                              <input
                                type="text"
                                placeholder="Ncube"
                                className="userUpdateInput"
                              />
                            </div>

                            <div className="userUpdateItem">
                              <label>Email</label>
                              <input
                                type="text"
                                placeholder="nbkkundai@gmail.com"
                                className="userUpdateInput"
                              />
                            </div>

                            <div className="userUpdateItem">
                              <label>Password</label>
                              <input
                                type="text"
                                placeholder="*******"
                                className="userUpdateInput"
                              />
                            </div>

                            <div className="userUpdateItem">
                              <label>Phone Number</label>
                              <input
                                type="text"
                                placeholder="+27 123 456 67"
                                className="userUpdateInput"
                              />
                            </div>

                            <div className="userUpdateItem">
                            <button className="userUpdateButton">Update</button>
                            </div>
                      
                          </div>
                        </form>
                        </CardContent>
                        </Card>
              </div>
            </div>
        </div>


       

             
             

<div className="user">
<div className="userContainer">


</div>
</div>


</>
    )
}

export default Settings
