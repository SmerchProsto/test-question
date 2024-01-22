import React from 'react';
import './App.css'
import StatusBlock from "./components/StatusBlock";
import StoryBlock from "./components/StoryBlock";
import DataBlock from "./components/DataBlock";
import devPhoto from "./assets/dev.jpg"

const App = () => {
    return (
        <div>
          <h1 className="main-caption">Душнила</h1>
          <div className="main-container">
              <div className="main-content-container">
                  <StatusBlock/>
                  <div className="main-content-property">
                      <StoryBlock/>
                      <img className="content-property-img" src={devPhoto} alt="" width={100} height="100%"/>
                  </div>
              </div>
              <DataBlock/>
          </div>
        </div>
    );
};

export default App;