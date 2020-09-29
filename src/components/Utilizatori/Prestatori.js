import React from 'react'
import Subtitle from '../mix/SubTitle'
import Studio from '../../assets/img/Studio.png'
import SplitSection from '../SplitSection'


const Prestatori = () =>
  <SplitSection
    reverseOrder
    primarySlot={
      <div className="lg:pl-32 xl:pl-48">
        <Subtitle>
          Producatori
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          a   căror   activitate   cuprinde   difuzarea   producțiilor specificate anterior (posturi radio, TV).
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={Studio} alt="prestatori"/>}
  />

  export default Prestatori