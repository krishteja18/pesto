import "./App.css";
import PostList from "./postList";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
