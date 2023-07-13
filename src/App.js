import React from 'react';
import { Helmet } from 'react-helmet';
import Beach from './components/nav/Surf.js';

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet> {/**Prevents the window from resizing when you pinch it with your fingers.  Very annoying. */}
      <div style={{ flex: 1 }}>
        <Beach />
      </div>
    </>
  );
}

export default App;
