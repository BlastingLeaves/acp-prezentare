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
          Toate entitatile juridice sau fizice ce realizează producții media cum ar fi agenții de publicitate, case de productie,
          companii ce își produc propriile producții media, studiouri de post-producție, televiziuni si posturi de radio.
          Beneficiile la nivelul acestor categori sunt indirecte. In primul rand, prin amprentarea productiilor, vor garanta TALENTELOR implicate in realizare
          remunerarea drepturilor banesti provenite din drepturile de proprietate intelectuala. Daca cumva TALENTELE sunt dispuse sa cesioneze exclusiv aceste drepturi
          catre PRODUCATOR, ei insisi devenid beneficiarii acestor drepturi. Alte beneficii coleterale, pot fi evidenta si suportul in gestiunea interna aproiectelor prin accesul ala baza de date ADCODE.
          De exemplu, vor sti in orice moment ce TALENTE au fost implicate in productiile proprii intr-un interval arbitrar de timp, cate productii au efectuat si asa mai departe.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={Studio} alt="prestatori"/>}
  />

  export default Prestatori