import React from 'react'
import Heading from '../mix/Heading'
import Edituri from './Edituri'
import Prestatori from './Prestatori'
import Consumator from './Cosumator'
import Arbitru from './Arbitru'


const Utilizatori = () =>
  <>
    <div className="container mx-auto">
      <div className="container mx-auto text-center">
        <Heading>Cui se adreseaza</Heading>
      </div>
      <p className="text-md lg:text-xl text-light text-center">
        <strong>ADCODE Monitoring</strong> are patru categorii principale de utilizatori:
      </p>
    </div>
    <Consumator/>
    <Prestatori/>
    <Edituri/>
    <Arbitru/>


  </>


export default Utilizatori