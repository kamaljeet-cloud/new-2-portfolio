import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';



class Resume extends  Component{
render(){
    return(
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                      
                      <img style={{height:'200px'}}
                      src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_business-256.png" 
                      alt="avatar"/> 
                       </div>
                       <h2 style={{paddingTop: '2em'}}>Kamaljeet Kaur</h2>
                       <h4 style={{color:'grey'}}>UI/Web Developer</h4>
                       <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                       <p>     UI/Web Developer with 3.5 years of extensive experience in designing User Interface applications and integration of highly transactional and scalable applications using HTML, XHTML, CSS, JavaScript, JQuery, JSP, AJAX, JSON and XML.
    • Expert knowledge of the UI design process and deliverables throughout the development lifecycle.
    • Diverse experience in the field of Web Application Development using HTML 4.0/5, CSS (2/3), XHTML, JavaScript, JQuery, JSP,  AJAX, JSON , Node.js .
    • Experience in designing websites with W3C standards using HTML4/5, CSS2/3 to get best cross-browser user experience for long-term user retention and engagement.
    • Good knowledge of latest version of object oriented JavaScript Libraries like Angular.js, Node.js, Bootstrap and Responsive Design .
    •  Experience in Creating Responsive Single Page Application by using React.</p>
                            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>
                            <h5>Address</h5>
                            <p>1082 Hayward, #608, CA, 94544
                            </p>
                            <h5>Phone</h5>
                            <p>(559) 704-2267</p>
                            <h5>Email</h5>
                            <p>k.kamaljeet0901@gmail.com</p>
                            <h5>GitHub</h5>
                            <p>https://github.com/kamaljeet-cloud</p>
                            <hr style={{borderTop:'3px solid #833fb2',width:'50%'}}/>

 

                        </Cell>
                <Cell className="resume-right-col"col={8}>
                  <h2>Education</h2>
                  <Education
                  startYear={2010}
                  endYear={2014}
                  schoolName="Punjab Technical University"
                  schoolDescription="
                  Bachelor of Technology in Electronics and Communication Engineering"
                  /> 
                       

                <Education
                  startYear={2015}
                  endYear={2017}
                  schoolName="Punjab Technical University"
                  schoolDescription="Master’s of Technology in Electronics and Communication Engineering"
                  />
                 <hr style={{borderTop: '3px solid #e22947'}}/>

                  <h2>Experience</h2>

                  <Experience
                  startYear={2013}
                  endYear={2015}
                  jobName="Front End Developer--Accenture, India"
                  jobDescription= "• Gathered and analyzed the requirements and converted them into User Requirement Specifications and Functional Requirement Specifications for the designers and developers to understand them as per their perspective.
                  • Worked in all the modules of the application which involved front-end presentation logic developed using JavaScript.
                  • Designed and implemented the User Interface using JavaScript, HTML5, XML, CSS3, JSP, AJAX and MySQL.
                  • Used HTML, CSS3 and Bootstrap to create web interfaces. 
                  • Involved in developing payment processing using the new available JavaScript Angular.js, Node.js using MVC architecture.
                  • Used the Node.js Frameworks in the development of the web applications.
                  • Used advanced level of HTML5, JavaScript, CSS3 and pure CSS layouts (table less layout).
                  • Created Images, Logos and Icons that are used across the web pages using Adobe Flash, Dreamweaver and Photoshop.
                  • Produced content pages with CSS3 layout and style markup presentations and also used JavaScript . 
                  • Focused on Test Driven Development thereby creating detailed Junit tests for every single piece of functionality before actually writing the functionality."
                 />
                  <Experience
                  startYear={2017}
                  endYear={2019}
                  jobName="UI/Web Developer--Global Payments,USA"
                  jobDescription="• Created proof-of-concept using responsive web design, Angular4, HTML5 and Bootstrap4.
                  • Developed a website for the information security advisorydepartment using HTML, CSS,JavaScript, and Goggle Sites.
                  • Created Responsive Single Page Application by using React, javaScript, and HTML ,CSS.
                  • Involved in developing applications using Angular 4, Bootstrap like Grids, Toolbars, Panels, Combo-Box and Button etc.
                  • Involved in Web API and MVC controller’s development.
                  • Used Angular CLI to generate components, services, filters and compiled in different environments.
                  • Used Angular 4 Reactive forms to implement complex forms and performed the validations using Form Builder.
                  • Created accordions, scroll Spy using Bootstrap4 and used font-awesome icons to give a good look to the user.
                  • Created the shared service for the communication between different components and cross component interaction.
                  • Created multiple Typescript modules to manage written codes in angular project.
                  • Tested pages for cross-browser compatibility for Safari, Chrome, Firefox and IE by cross browser hacks and requirements."
                  />
                  <hr style={{borderTop: '3px solid #e22947'}}/>

                  
                        </Cell>
            </Grid>
        </div>
    )
}
}
export default Resume;

                  
              