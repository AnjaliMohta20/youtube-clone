import { Provider } from "react-redux";
import "./App.css";
import Body from "./Body";
import Head from "./Head";
import Store from "./Utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
import WatchPage from "./WatchPage";

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body/>,
  children: [
    {
      path: '/',
      element: <MainContainer/>
    },
    {
      path: 'watch',
      element: <WatchPage/>
    }
  ]
}]);

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
