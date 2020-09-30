import React from 'react'
import Subtitle from '../mix/SubTitle'
import broadcaster from '../../assets/img/broadcaster.png'
import SplitSection from '../SplitSection'


const Edituri = () =>
  <SplitSection
    primarySlot={
      <div className="lg:pr-32 xl:pr-48">
        <Subtitle>Emițători</Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          Toate entitatile in a caror activitate comerciala sunt implicate direct sau indirect productii media realizate de categoria de utilizatori specificati in paragrafula anterior.
          Utilizarea aceasta, poate fi, cum spuneam, una directa cum ar fi prezentarea publica a acestora acestora (televiziuni, radiouri, cinematografe)
          sau cu ajutorul internetului precum si utilizarea indirecta (de exemplu mizica ambientala a unui restaurant)
          De asemenea aceasta categorie are beneficii indirecte din aplicatia ADCODE si acestea sunt mai mult legate de suportul raportarilor pe care baza de data ADCOD o poate oferi.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={broadcaster} alt="schema ecosistem"/>}
  />

  export default Edituri