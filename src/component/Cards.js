import React from 'react';
import Card from "./Card"
import { useState } from 'react';
const Cards = (props) => {
  let category=props.category;
  let courses=props.courses;
  const [likedCourses,setLikedCourses]=useState([]);
  function getCourses(){
    if(category==="All"){
      let allCourses=[];
      Object.values(courses).forEach(array=>{
        array.forEach(courseData=>{
  allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      //sirf specific cateogory ka array pass kro
      console.log(courses[category]);
      return courses[category];
    }
 
  }
  console.log(courses);  
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map(
          (course)=>(
            <Card key={course.id}
             course={course} 
             likedCourses={likedCourses}
             setLikedCourses={setLikedCourses}/>
          )
        )
      }
    </div>
  );
};

export default Cards;