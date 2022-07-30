import { BrowserRouter as Router, Route} from "react-router-dom";
import Contacts from "./component/contacts/Contacts";
import  HomePage  from "./component/HomePage"
import Photo from "./component/Photo";
import Public from "./component/Public";
import Navigation from "./component/Navigation";
import User from "./component/contacts/user";

function App() {
  return (
    <div className="App">
    <Router>
    <Navigation/>
      <Route path= "/" exact component = {HomePage}/>
      <Route path= "/public" component = {Public}/>
      <Route path= "/photo" component = {Photo}/>
      <Route path= "/contacts" exact component = {Contacts}/>
      <Route path= "/contacts/:id" component = {User}/>
    </Router>
    </div>
  );
}

export default App;
