import React from 'react'
import ContainerLeft from '../mix/ContainerLeft'
import Title from '../mix/Title'
import copy from '../../assets/img/copy.jpeg'
import Motivatie from './Motivatie'


const Adcode = () =>
  <>
  <ContainerLeft>
    <div className="text-center lg:text-left lg:w-1/2">
      <Title>ADCODE Monitoring System</Title>
      <p className="text-xl lg:text-2xl mt-6 font-light mr-5 text-justify">
        O   platformă   destinată   proiectării, producerii   și   exploatării   unui   pachet   de   aplicații   software
        destinate   industriei   media   și   are   ca   scop   centralizarea,
        organizarea   și   monitorizarea   producțiilor   media   din   industria
        publicității (reclame audio/ video, teleshoping etc).
      </p>
    </div>
    <div className="lg:w-1/2">
      <img src={copy} style={{width: '100%', display: 'flex' }} alt="hero"/>
    </div>
  </ContainerLeft>
      <Motivatie/>
 </>
export default Adcode