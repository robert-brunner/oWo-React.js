import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/views/ApplicationViews.js';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
    <Router>
      <div style={{ flex: 1 }}>
        <ApplicationViews />
      </div>
    </Router>
    </>
  );
}

export default App;