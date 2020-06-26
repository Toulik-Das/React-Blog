//Import Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
//Create React Component
 const App = function(){
 	return (

 		<div className = 'ui container comments'>
 		  <div className = 'comment'>
 		      <a href='/' className = 'avatar'>
 		           <img alt='avatar' src = {faker.image.avatar}/>
 		      </a>
 		      <div className = 'content'>
 		           <a href = '/' className = 'author'>
 		              Toulik
 		           </a>
 		          <div className = 'metadata'>
 		               <span className ='date'> Today at 6:00 PM</span>
 		          </div>
 		          <div className = 'text'>Nice Blog post!</div>
 		      </div>
 		   </div>
 		</div>

 	 );
 };

 ReactDOM.render(<App/>, document.querySelector('#root'));
