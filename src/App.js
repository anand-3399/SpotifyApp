import "./App.css";
import { LeftMenu } from "./Components/LeftMenu";
import { MainContainer } from "./Components/MainContainer";
import { RightMenu } from "./Components/RightMenu";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line 
import { firebase } from "./firebase";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <LeftMenu />    {/* No Change */}

          <Routes>
            <Route exact path="/" element={<MainContainer />} />
          </Routes>

          <RightMenu />   {/* No Change */}
          <div className="background"></div>
        </div>
      </Router>
    </>
  );
}

export default App;
