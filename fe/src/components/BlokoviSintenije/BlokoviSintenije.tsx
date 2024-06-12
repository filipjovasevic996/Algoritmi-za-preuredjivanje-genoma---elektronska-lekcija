const BlokoviSintenije: React.FC = () => {
  return (
    <>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;„Kockice“ za slaganje i
        preslaganje genetskog materijala su regioni hromozoma koji dele isti red
        gena potekao od zajedničkog pretka i nazivaju se blokovima sintenije.
        Pod istim redom gena se podrazumeva grupa sličnih gena neodređenog
        broja, poređanih na hromozomu po određenom redosledu, identičnom u
        genomima drugih vrsta. Proučavanje sintenije pokušava da odgovori na
        pitanje kako se genom “seče i lepi” tokom evolucije, tačnije, kako se
        preuređuju blokovi sintenije. <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pored blokova sintenije
        koji predstavljaju hromozomske regione koji nisu u toku evolucije bili
        preuređeni, postoje regioni koji su bili preuređeni. Regioni hromozoma
        čiji se raspored i sadržaj gena ne podudara sa regionima kod drugih
        vrsta, nalaze se između regiona hromozoma koji sadrže iste skupove gena
        i ti regioni između blokova sintenije se nazivaju tačkama prekida ili
        loma.
      </p>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src="/images/blokoviSintenije.png"
          alt="Blokovi Sintenije"
          style={{ objectFit: "cover", width: "75%" }}
        />
      </div>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na slici ___ su
        prikazani blokovi sintenije i tačke prekida. Geni koji se nalaze na
        hromozomima dve različite vrste su označeni slovima i brojevima koji
        predstavljaju vrstu kojoj pripadaju (vrsta 1 ili 2). Podudarni geni su
        povezani isprekidanim linijama, a geni koji iskaču iz šablona se
        tretiraju kao praznine u sintenskim programima. Na primeru tri bloka
        sintenije, uočava se da blok sintenije može biti zapis istog redosleda
        (blok a), zapis sa obrnutimim redosledom (blok b) ili zapis koji
        dozvoljava neke praznine (blok c). Nasuprot tome, slučajevi izazivanja
        prekida sintenije mogu biti nedostatak parnjaka (prekid a), poremećen
        red gena (prekid b) ili praznine (prekid c).
      </p>
    </>
  );
};

export default BlokoviSintenije;
