# Project Name

Redux Feedback Loop App

## Description
This project is a Feedback app which allows users to input their feedback. This app will open up to a feedback "home" page and has buttons to fill out the form. There are 4 components to this form which ask different questions and give the ability to go back to the previous question if desired to update their answer. The user also has capability to enter in comments as well. This app also has a review page in which users can review the information they have entered prior to submitting their feedback into the SQL Feedback Database. The submission page gives a confirmation that their code has been submitted and offers a button to leave new feedback-which loops back to the first page. Material UI has been incorporated in the buttons for aesthetic purposes as well.

## Languages and Software Used 
<li>React</li> 
<li>Redux</li>
<li>Material UI</li>
<li>Node</li>
<li>Nodemon</li>
<li>Postico</li>
<li>Postgresql</li>
<li>Body-Parser</li>
<li>Express</li>
<li>Postman</li>

## Installation 
1. Install nodemon globally in your terminal by running the command "npm install nodemon --global".
2. Upon downloading app, in your terminal run "npm install".
3. In your terminal, run "npm install react-router-dom" to add this component into your project file. Set up this component within your project files.
4. In your terminal, run "npm install react-redux" and import this into your project files.
5. To run client side code, run "npm run client".
6. In another terminal tab, spin up server by running "npm run server".

## How to Use App
<p>1. Upon page load, you will see the first question of the form appear. It will have a drop down selector for your answers. Once your answer has been selected, simply hit the next button to continue. (NOTE: You must select an answer to move forward in the survery.) </p>
<p>2. Once all of the questions have been answered, you will reach a Comments page in which you may leave additional comments about your day. (NOTE: this may be left empty)</p>
<p>3. After the Questions and Comments have been answered, you will reach a review page in which you may review all of your answers. You also have the ability to go back to the previous questions and update your answers. Once satisfied, you may hit the Submit button.</p>
<p>4. Lastly, you will reach a confirmation page which will indicate that your feedback has been sucessfully submitted. You will also have an option to leave new feedback which will bring you to a cleared form.</p>
