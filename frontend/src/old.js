// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
// https://v5.reactrouter.com/web/api/Hooks/useparams
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



/*
// https://gitlab.com/saurabhshah231/reactjs-myapp/-/blob/master/src/App.js

import React from 'react'
import PropTypes from 'prop-types'
import useAxios from '../../api/axiosCRUD';
import Navbar from '../../components/navbar';
import EnhancedTable from '../../components/table'
import { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const HomeView = props => {
    const styles= {
        containerSearchField: {
          marginLeft: "158vh",
          display: "flex",
        },
        textSearch: {
            
            marginTop: "2.4vh"
        },
        searchField: {
            marginLeft: "5vh",
            marginBottom: "1vh"
        },
      };
    const { listCoins, response, loading, error } = useAxios({
        method: 'get',
        url: '/'
    });
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {
    if (response !== null) {
        setFilteredData(response);
    }
    }, [response]);


    return (
        <div>
                        
           
            
//             <Navbar titles = {["Cryptomonnaies", "Analysis", "Scoring"]}/>
//             {loading ? (<p>loading...</p>) : (
//                     <div>
//                         {error && (
//                             <div>
//                                 <p>{error.message}</p>
//                             </div>
//                         )}
//                         <div>{data && <p>{data.id}</p>}</div>
//                     </div>
//                     )}
//             <div style = {styles.containerSearchField}>
//                 <div style = {styles.textSearch} >Search</div>
//                 <div style = {styles.searchField}>
//                     <Autocomplete
//                         onChange={
//                         (event, newValue) => {
//                             if (newValue !== null && newValue !== ""){                               
//                                 newValue = newValue.split(" ")
//                                 newValue = newValue.pop()
//                                 console.log("newValue :", newValue)
//                                 let oneCrypto = data.filter((el)=> el["symbol"] == newValue)
//                                 console.log("this is oneCrypto : ", oneCrypto)
//                                 setFilteredData(oneCrypto);
//                             }  
                        
//                         }}
//                         onKeyDown={(e, x) => {
//                         if (e.key === 'Enter') {
//                             if (e.target.value !== null || e.target.value !== ""){
//                                 let newEnteredValue = e.target.value.split(" ")
//                                 newEnteredValue = newEnteredValue.pop()
//                                 let oneCrypto = data.filter((el)=> el["symbol"] == newEnteredValue)
//                                 setFilteredData(oneCrypto);
//                             }  
//                             e.defaultMuiPrevented = true;
//                             // your handler code
//                         }
//                         }}
                        
//                         options={listCoins}
//                         sx={{ width: 300 }}
//                         renderInput={(params) => <TextField type="text" {...params} label="Crypto" />}
//                     />
//                 </div>
//             </div>
//             <EnhancedTable data = {filteredData}/>
            
//         </div>
//     )
// }

// HomeView.propTypes = {
//     title: PropTypes.string.isRequired
// }

// export default HomeView
*/
