// https://codingthesmartway.com/modern-react-from-the-beginning-ep2-starting-with-react-components-jsx/
import React from 'react';
// import Navbar from './components/navbar';
// import EnhancedTable from './components/table'
// import useAxios from './api/axiosCRUD';
// import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./navigation/RouterConfig";
// import { dark, light } from "./styles/muiTheme";
// import { ThemeSwitch } from "./components/ThemeSwitch";

// import { Provider } from "react-redux";
// import {store} from "redux/store";
// import { ThemeProvider } from "@material-ui/core";



  // function App() {
  //   const [darkState, setDarkState] = useState(false);
  //   const handleThemeChange = () => {
  //     setDarkState(!darkState);
  //     console.log("theme=", darkState ? "dark" : "light");
  //   };
  
 const App = () => {
  //  const { response, loading, error } = useAxios({
  //    method: 'get',
  //    url: '/'
  //  });
  //  const [data, setData] = useState([]);

  //  useEffect(() => {
  //    if (response !== null) {
  //        setData(response);
  //    }
  //  }, [response]);
  return (
    <>
      <div>

            
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
            

      </div>
    </>
  );
}


// const App = () => {
//   const { response, loading, error } = useAxios({
//     method: 'get',
//     url: '/'
//   });
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (response !== null) {
//         setData(response);
//     }
//   }, [response]);

//   return (
//     <div>
//       <Navbar titles = {["Cryptomonnaies", "Analysis", "Scoring Crypto"]}/>
//       {loading ? (<p>loading...</p>) : (
//               <div>
//                   {error && (
//                       <div>
//                           <p>{error.message}</p>
//                       </div>
//                   )}
//                   <div>{data && <p>{data.id}</p>}</div>
//               </div>
//             )}
//       <EnhancedTable data = {data}/>
//     </div>


//   );
// }





export default App;

