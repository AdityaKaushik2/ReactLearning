import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
function App() {
  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
