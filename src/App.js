import React, { useState, useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {
  const initialState = {
    loading: true,
    communities: [],
  };
  const [{ loading }, setCommunities] = useState(initialState);

  function onSuccess({ data: communities }) {
    setCommunities({
      loading: false,
      communities,
    });
  }

  function onError() {
    setCommunities({
      loading: false,
      communities: [],
    });
  }

  useEffect(() => {
    fetch('http://api.homeis.com/v1/communities')
      .then(response => response.json().then(onSuccess))
      .catch(onError);
  }, []);


  return (
    <React.Fragment>
      <header>
        Communities
      </header>

      <main>
        {loading && <Spinner />}
      </main>
    </React.Fragment>
  );
}

export default App;
