import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from './routes';
// import StyledFirebaseAuth from 'react-firebaseui18/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';


// Configure Firebase.
const config = {
  apiKey: 'AIzaSyB4Jaz7cLUFlBgJtS--SQkj2nNMqN_PJ4s',
  authDomain: 'photo-app-ba8d7.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);


function App() {

  // Handle firebase auth changed
  // const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        // User log out, handle somehting here
        return;
      }

      console.log('Logged in user: ', user.displayName);

      const token = await user.getIdToken();
      console.log('Logged is user token: ', token);
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);


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
