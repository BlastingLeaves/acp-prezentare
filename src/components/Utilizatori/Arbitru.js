import React from 'react'
import Subtitle from '../mix/SubTitle'
import arbitru from '../../assets/img/arbitrii.png'
import SplitSection from '../SplitSection'


const Arbitru = () =>
  <SplitSection
    reverseOrder
    primarySlot={
      <div className="lg:pl-32 xl:pl-48">
        <Subtitle>
          Arbitru
        </Subtitle>
        <p className="mt-8 text-xl font-light leading-relaxed text-justify">
          Orice entitate a carei activitate este legata de gestiunea drepturilor intelectuale ce decurg din expunerea publica de catre EMITATORI
          a productiilor media realizate de PRODUCTORI prin participarea TALENTELOR generatoare a acestei categorii de dreptri, (CREDIDAM, UCMR-ADA, VISARTA etc) precum și orice
          alte entități implicate în monitorizarea pieței media ce, cu ajutorul analizei datelor aflate in baza de date ADCODE, furnizeaza pe piata servicii bazate pe
          raportari, analize, previziuni sau statistici privind aceasta arie de activitate. In acest caz beneficiile sunt directe, activitatea acestor entitati fiind direct legata de
          datele furnizate de serviciul de monitorizare ADCODE.
        </p>
      </div>
    }
    secondarySlot={<img className="w-full" src={arbitru} alt="prestatori"/>}
  />

  export default Arbitru