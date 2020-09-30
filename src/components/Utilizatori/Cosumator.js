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
          Toate categoriile de persoane a caror activitati, in cadrul productiei
          unui vehicol media, genereaza drepturi intelectuale. Cele mai frecvente
          astfel de categorii sunt actorii, actorii de voce, figuratia speciala, scenaristi, scenogrfi regizori, graficieni.
          Aplicatia ADCODE le va oferi posibilitatea unei contorizari exacte a productiilor in care serviciile lor sunt implicate,
          prin urmare vor putea raporta cu acuratete codurile unice ale aacestora, iar la nivelul repartitiei, vor putea fi remunerati
          cu exactitate n functie de numarul de aparitii in listele de difuzare ale codurilor unice listate pe o perioada specifica de timp.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={Artist} alt="consumatori"/>}
  />

  export default Consumator