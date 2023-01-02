import Layout from '../components/layout'
import Switch from '../components/Switch'
import { useState } from 'react';

export default function FirstPost() {
  const [bool, setBool] = useState(false);

  const clickFunc = () => {
    setBool(!bool)
  }

  return (
    <Layout>
      <h1>Labo</h1>
      <Switch bool={bool} checkedFunc={setBool} />
      <button onClick={clickFunc}>test</button>
      { bool === true ? <p>on</p> : <p>off</p> }
    </Layout>
  )
}
