import React from 'react'

import HomeRoute from './pages/HomeRoute'

const someBeautifulHeadingStyles = {
  color:'magenta',
  textAlign:'center',
  transform: 'rotate(-10deg)',
  textDecoration: 'overline underline',
}

const excalmationStyles = {
  textDecoration: 'line-through',
  color: 'purple'
}

const Oomf = () => <span className="fancyPantsSpin" data-nessesary="yes" style={excalmationStyles}>!</span>

function App() {
  return (
    <div className="App">
      <h1 style={someBeautifulHeadingStyles} data-aesthetics="lovely">
        <Oomf />Oh hi Mark<Oomf />
      </h1>
      <HomeRoute />
    </div>
  );
}

export default App;
