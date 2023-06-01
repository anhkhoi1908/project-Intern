import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from './routes';

function App() {
  return (
    <Fragment>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              // const Layout = route.layout === null ? Fragment : LayoutInner;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  element={
                    <Page />
                  }
                  path={route.path}
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
