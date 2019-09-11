import React, { useState, useEffect } from 'react';
import Spinner from './components/Spinner';
import Accordion from './components/Accordion';

function App() {
  const initialState = {
    loading: true,
    communities: [],
  };
  const [{ loading, communities }, setCommunities] = useState(initialState);

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

  const getItems = () => communities.map(({ id, name, popularTags }) => ({
    id,
    name,
    details: popularTags.map(tag => `#${tag}`).join(', '),
  }));

  return (
    <React.Fragment>
      <header>
        Communities
      </header>

      <main>
        {loading ? <Spinner /> : <Accordion items={getItems()} />}
      </main>
    </React.Fragment>
  );
}

export default App;
