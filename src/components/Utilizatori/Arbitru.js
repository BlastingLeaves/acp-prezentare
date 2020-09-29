import React from 'react'
import Subtitle from '../mix/SubTitle'
import arbitru from '../../assets/img/arbitru.jpg'
import SplitSection from '../SplitSection'
import Studio from '../../assets/img/Studio.png'


const Arbitru = () =>
  <SplitSection
    reverseOrder
    primarySlot={
      <div className="lg:pl-32 xl:pl-48">
        <Subtitle>
          Arbitru
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          este un organism   de   gestiune   colectivă   (CREDIDAM, UCMR-ADA, VISARTA etc) și entități
          implicate în monitorizarea pieței media.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={arbitru} alt="prestatori"/>}
  />

  export default Arbitru