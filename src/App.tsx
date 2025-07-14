import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Header from "./components/Header";
import Profile from "./Routes/Profile";
import { useAuthInit } from "./utils/useAuthInit";

/* 
pathは必ず名詞で構成してください。do.searchかgo.tvなどは使わないで。。。
*/
function App() {
  useAuthInit();
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search"></Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path={["/", "/movies/:movieId"]}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
