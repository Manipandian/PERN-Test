import React, {useEffect, useState} from 'react';

function App() {
const [data, setState] = useState();
useEffect(() => {
  fetch('https://pern-test-mani.herokuapp.com/item', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(datas => {
    setState({data: datas});
    console.log("data from DB in front end", datas);
  })
  .catch(err => console.log(err))
}, [])
  return (
    <h1>
      Heellooo.. world from client
      {/* {Object.key(data).map()} */}
    </h1>
  );
}

export default App;
