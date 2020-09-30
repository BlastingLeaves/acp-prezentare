import React from 'react'
import Container from './mix/Container'
import Title from './mix/Title'

const Ecosistem = () =>
  <Container>
    <Title>
      DESCRIERE
    </Title>
    <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
      Pentru a expune mecanica serviciului intr-un mod cat mai elocvent, vom recurge la descrierea unui ciclu complet al
      acestuia
      folosind un exemplu cat mai simplu si sugestiv.
    </p>
    <h1 className="mt-8 text-left text-xl font-bold">PRIMA FAZA - PRODUCATORUL</h1>

    <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
      Sa presupunem ca un PRODUCATOR incepe realizarea unei productii media ce se va purta un titlu generic MEDIA 1.
      Pentru realizarea acesteia are nevoie de TALENTUL1 si de TALENTUL2. Sa zicem ca TALENTUL1 este un scenarist si
      TALENTUL2 este un actor de voce.
      Productia MEDIA 1 va consta intr-o simpla inregistrare a unui mesaj. Sa presupunem ca textul este conceput de
      TALENTUL1 in calitate de scenarist
      si este interpretat de TALENTUL2 in calitate de actor de voce. O data finalizata etapa tehnica de fixarea pe un
      suport digital.
      (sa luam in considerare un fisier audio), PRODUCATORUL va accesa cu ajutorul internetului serviciul ADCODE. In
      urma identificarii de acces,
      platforma va sti cine este PRODUCATORUL. Acesta va accesa optiunea de creere a unei noi inregistrari in baza de
      date "Producie noua". In formularul
      ce-i va fi prezentat, va trebui sa completeze datele specifice acestei productii, incepand cu titlul acesteia:
      MEDIA 1 si terminand
      cu date cu privire la TALENTELE implicate in acesta productie. Aceste date vor cuprinde referinte la conturile din
      aplicatie ale celor doua TALENTE (TALENT1 si TALENT2)
      precum si durata pentru care sunt cesionate PRODUCATORULUI drepturile de utilizare si mediile pe care acesta este
      autorizat sa utilizeze aceasta productie.
      Dupa completarea formularului si inregistrarea acestuia, aceasta productie media va primi un cod unic continind 8
      caractere alfanumerice. In acelasi timp referinta este realizata si catre PRODUCATORUL aceastei productii media.
    </p>
    <h1 className="mt-8 text-left text-xl font-bold">FAZA A DOUA - REFERINTA LA TALENTE</h1>
    <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
      In acest fel se creaza o conexiune catre conturile fiecaruia dintre cele doua TALENTE catre acest cod unic si
      astfel vor fi notificati de catre aplicatie in legatura cu
      aceasta asociere.
    </p>
    <h1 className="mt-8 text-left text-xl font-bold">FAZA A TREIA - EVIDENTA LA NIVELUL EMITATORULUI</h1>
    <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
      EMITATORUL va primi fisierul MEDIA 1 spre difuzare si in urma difuzarii repetate la datele si orele stabilite cu
      producatorul sau cu agentia media contractata de acesta,
      va genera un raport de emisie pe care il vor incarca in aplicatie adcode si, in felul acesta iregistrarea avand
      codul unic generat conform procedurii de mai sus, capata
      si un istoric de utilizare. La acest nivel aplicatia va verifica validitatea datei de emisie (daca este conforma
      cu durata de utilizare pe care TALENTUL a convenit-o cu PRODUCATORUL)
      si daca mediul de emisie este unul valid.
    </p>
    <h1 className="mt-8 text-left text-xl font-bold">FAZA A TREIA - EVIDENTA LA NIVELUL EMITATORULUI</h1>
    <p className="mt-8 pb-12 text-xl font-light leading-relaxed text-justify">
      In final ARBITRI pot accesa baza de date ADCODE si extrage cu exctitate
      numarul de utilizari, mediile implicate si durata de expunere.
      Cu ajutorul acestor date se poate realiza, cu precizie, o repartitie a drepturilor banesti, in cazul organismelor
      de gestiune colectiva, sau se pot obtine cu usurinta rapoarte, previziuni si statistici
      privind un mediu, un gen de productii, o perioada si asa mai departe.
      Evident acest exemplu nu acopera decat o parte minimala din facilitatile pe care le va oferi acest serviciu, insa
      informatiile despre acestea vor continua sa apara
      pe acest site odata cu apropierea in timp de lansarea versiunilor ulteriaore versiunii pilot.
    </p>
    <div className=" lg:w-full ">
      {/*<img src={ecosystemImage} className=' lg:w-full lg:h-full ' alt="hero"/>*/}
    </div>
  </Container>

export default Ecosistem