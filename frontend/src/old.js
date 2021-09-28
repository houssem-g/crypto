// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
import React, { useState, useEffect } from 'react';
import CoursesList from './components/coursesList';
import Search from './Search';

const courses = [
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];

const App22 = () => {

  const [searchText, setSearchText] = useState(
    localStorage.getItem('searchText') || ''
  );

  const handleSearch = event => {
    setSearchText(event.target.value);
    // localStorage.setItem('searchText', event.target.value);
  };

  useEffect(() => {
    localStorage.setItem('searchText', searchText)
}, [searchText]);

  const filteredCourses = courses.filter(course => {
    return course.title.toLowerCase().includes(searchText.toLowerCase()) || course.author.toLowerCase().includes(searchText.toLowerCase())
    } 
  );
  return (
    <div>
      <AppBar name = {["cryptomonnaies", "achat/vente", "portefeuille"]}/>
      {/* <h1>List of courses</h1>
      <hr />
      <Search value={searchText} onSearch={handleSearch} />
      <CoursesList x={filteredCourses}/> */}
    </div>
  );
}





export default App22;

