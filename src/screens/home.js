import { useState } from "react";

const Home = () => {
  const title = "Home"

  const [name, setName] = useState('mario')

  const toggleName = () => {
    if (name === 'mario') {
      setName('luigi')
    } else {
      setName('mario')
    }
  }

  const handleClick = () => {
    console.log('hellow')
  }
  // without any arguement

  const handleClickWithParam = (name) => console.log(`Hello ${name}!`)
  // with arguement

  // using the event object
  const handleClickWithEvent = (event) => console.log(event)

  return (
    <div className="content">
      <h1>{title}</h1>
      <div className="button-actions">
        <p className="on event click">{name}</p>
        <button onClick={toggleName}>Toggle name</button>
        <button onClick={handleClick}>Click without parameter</button>
        {/* cannot use handleClick() as it would invoke the function without even taking place */}
        <button onClick={() => handleClickWithParam('mario')}>With Parameter</button>

        <button onClick={(e) => handleClickWithEvent(e)}>With Event Object</button>
      </div>
    </div>
  );
}

export default Home;