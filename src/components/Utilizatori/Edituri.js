import React from 'react'
import Subtitle from '../mix/SubTitle'
import broadcaster from '../../assets/img/broadcaster.jpg'
import SplitSection from '../SplitSection'


const Edituri = () =>
  <SplitSection
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <Subtitle>Emițători</Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          cei   care   realizează   producții   media:   agenții   depublicitate,   case   de   productie,
          firme   ce   își   produc   propriile producții   media,   studiouri   de   post-producție   etc,   și   pot
          să-și prezinte cu ajutorul aplicației serviciile, să contracteze servicii,
          să livreze și să fie remunerați într-un mediu securizat.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={broadcaster} alt="schema ecosistem"/>}
  />

  export default Edituri