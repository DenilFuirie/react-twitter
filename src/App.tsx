import React from 'react';
import SignIn from "./pages/SignIn";
import {theme} from "./theme";
import {MuiThemeProvider} from "@material-ui/core";

function App() {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
            <SignIn />
        </MuiThemeProvider>

    </div>
  );
}

export default App;
