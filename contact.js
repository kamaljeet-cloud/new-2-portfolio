import React ,{Component} from 'react';
 import {Grid, Cell, List ,ListItem, ListItemContent} from 'react-mdl';


class Contact extends  Component{
render(){
    return(
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Kamaljeet Kaur</h2>
                    <img  src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_business-256.png" 
                    alt="avatar" style={{height:'250px'}}/>
                    <p style={{width:'75%', margin:'auto', paddingTop: '1em'}}>Chances are that you've seen “lorem ipsum” text in your travels across the web. It often appears in graphic design materials 
                        such as WordPress themes </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-phone-square" aria-hidden="true"/>
                                (559)704- 2267
                            </ListItemContent>
                        </ListItem>


                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-fax" aria-hidden="true"/>
                                (559)704- 2267
                            </ListItemContent>
                        </ListItem>


                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-envelope" aria-hidden="true"/>
                                k.kamaljeet0901@gmail.com
                            </ListItemContent>
                        </ListItem>
                        
                          
                        <ListItem>
                            <ListItemContent style={{fontSize:'30px', fontFamily: 'Anton'}}>
                                <i className="fa fa-skype" aria-hidden="true"/>
                              MySkypeId
                            </ListItemContent>
                        </ListItem>

                        </List>
                    </div>
      
                    </Cell>
                </Grid>
        </div>
    )
}
}
export default Contact;