import React from 'react'
import Subtitle from '../mix/SubTitle'
import Artist from '../../assets/img/Artist.png'
import SplitSection from '../SplitSection'

const Consumator = () =>
  <SplitSection
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <Subtitle>
         Talent
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          care participă la realizarea diferitelor producții media – ADCODE
          le oferă un loc în care au șansa de lucra cu diferiți producători și de a-și expune producțiile media.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={Artist} alt="consumatori"/>}
  />

  export default Consumator