import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Landing extends  Component {
render(){
    return(
        <div style={{width: '100%',margin:'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
                    <img className="avatar-img"src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png"
                    alt="avatar"/>

                    <div className="banner-text">
                        <h1>UI/Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | Angular |NodeJs</p>
                        <div className="social-links">

                            {/* -----------------LInkedin------------*/}
                            <a href="kamaljeet.k01@yahoo.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            {/*-------------Github--------------------*/}
                            <a href="https://github.com/kamaljeet-cloud" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                           

                        </div>
                        </div>
                </Cell>
            </Grid>
        </div>
    )
}
}
export default Landing;