import './Games.css'

// eslint-disable-next-line react/prop-types
function Games({ scroll }) {
  return (
    <div className='HTMLGamesDiv'>
    <h3>BREAKOUT</h3>
    <div className='gameCard breakout' href='https://quiet-malasada-97bcee.netlify.app/'style={{
    "--deg": `${ scroll * 6 }deg`
  }}></div>
    <h3>ROBOT RUN</h3>
    <div className='gameCard robotRun' href='https://thunderous-malasada-fb15ce.netlify.app/'style={{
    "--deg": `${ scroll * 4 }deg`
  }}></div>
    <h3>SNAKE</h3>
    <div className='gameCard snake' href='https://ephemeral-rugelach-1cf859.netlify.app/'style={{
    "--deg": `${ scroll * 2 }deg`
  }}></div>
    <h3>SPACE GAME</h3>
    <div className='gameCard spaceGame' href='https://gleaming-cendol-896cb6.netlify.app/'style={{
    "--deg": `${ scroll * 5 }deg`
  }}></div>
    <h3>HONEY POT</h3>
    <div className='gameCard beeGame' href='https://dulcet-souffle-26ebb6.netlify.app/'style={{
    "--deg": `${ scroll * 3 }deg`
  }}></div>
  </div>
  )
}

export default Games