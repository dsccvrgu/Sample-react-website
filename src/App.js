import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Cards from './components/Cards'
import Footer from './components/Footer';
import './App.css'

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // Fetch data from https://reqres.in/api/users?page=1
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((res) => {
        //  console.log(isDateLoaded);
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    <Router>

      <section className='wholecontainer'>
        <nav className='navbar navbar-expand-lg navbar-dark glassnav'>
          <div className='container-fluid '>
            <span className='brandname'>Realm</span>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul class='navbar-nav ms-auto  me-5'>
                <button className='glassButton' onClick={handleClick}>
                  Get Users
                </button>
              </ul>
            </div>
          </div>
        </nav>


        <div className='container'>
          <div className='row justify-content-center '>
            {isButtonClick ? (
              isDateLoaded ? (
                <Cards userData={userData} />
              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className="instruction">
                <p>Click on "Get Users" button to get users of LGM Users</p>
              </div>
            )}
          </div>
        </div>
        <Footer/>
      </section>
    </Router>
    </>
  );
}

export default App;

