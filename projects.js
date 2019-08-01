import React ,{Component} from 'react';
import{Tabs, Tab, Grid, Cell, Card,CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';


class Projects extends  Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(<div className="projects-grid">


                { /*-----------Project 1-------*/ }


               <Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
                   <CardTitle style={{color:'#fff', height:'176px', 
                   background:'url(https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center/ cover' }}>
                   Project on React 
                   </CardTitle>
                   <CardText>This project is based on Responsive Single Page Application by using HTML, React, CSS, BootStrap.To see this project's code please click the GitHub link and get more details. </CardText>
                       <CardActions border>
                           <Button colored>GitHub</Button>
                          
                       </CardActions>
                       <CardMenu style={{color: '#fff'}}>
                           <IconButton name="share"/>
                           </CardMenu>
             
               </Card>
             
               </div>
            )
        } else  if(this.state.activeTab === 1){
            return(<div className="projects-grid">
            {/*-----------Project 1-------*/ }
           <Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
               <CardTitle style={{color:'#fff', height:'176px', 
               background:'url(https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center/ cover' }}>
               Angular 1</CardTitle>
               <CardText>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus 
                   Bonorum et Malorum for use in a type specimen book</CardText>
                   <CardActions border>
                       <Button colored>GitHub</Button>
                       <Button colored>CodePen</Button>
                       <Button colored>LiveDemo</Button>
                   </CardActions>
                   <CardMenu style={{color: '#fff'}}>
                       <IconButton name="share"/>
                       </CardMenu>
          </Card>
      
           </div>
        )

    } else  if(this.state.activeTab === 2){
        return(<div className="projects-grid">
        {/*-----------Project 1-------*/ }
       <Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
           <CardTitle style={{color:'#000', height:'176px', 
           background:'url(https://images.pexels.com/photos/9413/animal-cute-kitten-cat.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500) center/ cover' }}>
      Bootstrap</CardTitle>
           <CardText>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus 
               Bonorum et Malorum for use in a type specimen book</CardText>
               <CardActions border>
                   <Button colored>GitHub</Button>
                   
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share"/>
                   </CardMenu>
       </Card>
       </div>
    )
    } else  if(this.state.activeTab === 3){
        return(<div className="projects-grid">
        {/*-----------Project 1-------*/ }
       <Card shadow={5} style={{minwidth:'450' , margin:'auto'}}>
           <CardTitle style={{color:'#fff', height:'176px',
            background:'url(https://images.pexels.com/photos/670741/pexels-photo-670741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500) center/ cover' }}>
          MangoDB Chat</CardTitle>
           <CardText>This is simple chat application on Mongodb. To see the project click on github link below and get more details.</CardText>
               <CardActions border>
                   <Button colored>GitHub</Button>
                   
               </CardActions>
               <CardMenu style={{color: '#fff'}}>
                   <IconButton name="share"/>
                   </CardMenu>
       </Card>
       </div>
    )
    }
}


    
render(){
    return(
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab:tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>Bootstrap</Tab>
                <Tab>MangoDB</Tab>  
            </Tabs>
            
                <Grid >
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}
                    </div>
                    </Cell>
                </Grid>
                
            
        </div>
    )
}
}
export default Projects;