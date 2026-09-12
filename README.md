# 2026-09-12_kodutoo_ulesanne3

## 3.1 Kõikide kasutajate nimed
- forEach() alustab massivi users läbimist indeksist 0.
- Seejärel kuvatakse konsoolile useri name ning korratakse tegevust kuni kõik massiivi sees olevad userid on läbi käidud.

## 3.2 Aktiivsed kasutajad
- Esialgu tegin uue const activeUsers, kuhu salvestan kõik aktiivsed userid.
- Aktiivsete userite leidmiseks kasutasin filter() funktsiooni, milles valitakse kõik userid, millel on acitve value true.
- Aktiivsed userid kuvatakse seejärel konsoolile.

## 3.3 Vähemalt 18-aastased kasutajad
- Deklareerisin const adults, kuhu salvestan täiskasvanud userid.
- Samamoodi filtreerisin filter() funktsiooniga, aga seekord valitakse kõik userid, millel on age value suuremvõrdne 18-ga.
- Täiskasvanud userid kuvatakse seejärel konsoolile.

## 3.4 Uus massiiv ainult nimedega
- Deklareerisin const names massiivi, kuhu salvestan kõik userite nimed .map() funktsiooniga.
- Kuvan names massiiv konsoolile.

## 3.5 Kasutaja ID-ga 3
- Deklareerisin const userWithId3, kuhu salvestan id 3 oleva useri, kasutades find() funktsiooni.
- Tingimuseks kasutasin user.id === 3 - kolm võrdusmärki, sest ma tahan et see oleks nii sama number kui ka sama andmetüüp.
- kuvan id 3-ga kasutaja konsoolil

## 3.6 Kasutaja staatuse funktsioon
- Deklareerisin funktsiooni getUserStatus(), kuhu saatsin sisendiks user massiivi.
- if tingimusega kontrollib funktsioon useri active staatust ning kui see on true, siis annab väljundiks "Aktiivne" ning kui false, siis "Mitteaktiivne".
- seejärel tegin for-tsükli, mis käib läbi terve massiivi, rakendab getUserStatus() funktsiooni ning kuvab konsoolile staatused.

## 3.7 Greeting arrow function
- Deklareerisin const getGreeting, mis sisaldab stringis olevat teksti ja user massiivist tulevaid muutujaid. Sisendiks andsingi sama user massiivi.
- seejärel konsool kuvab tervituse vastavalt useri indeksile.

## 3.8 Destructuring
- Kood võtab massiivist esimese useri indeksiga 0. Seejärel eemaldab selle objektist kaks konkreetset omadust: nime ja vanuse.
- Tulemuseks jäävad alles kaks eraldiseisvat muutujat, mida saaks edaspidi otse kasutada.
- konsoolil kuvatakse nimi ja vanus.

## 3.9 spread süntaks
- Deklareerisin uue const newUser, kuhu salvestan uue useri objekti id-ga 6.
- Seejärel deklareerisin uue massivi updatedUsers, kuhu panen sisse kõik useris olevad andmed + newUser
- Konsoolil kuvan updatedUsers massivi koos uue useriga.

## 3.10 Addres ja optional chaining
- Luuakse uus object userWithAddress, kuhu kopeeritakse teise kasutaja andmed (user[1]) ja lisatakse juurde address objekt linnaga "Tallinn".
- Esimeses console.log-is kasutatakse optional chaining operaatorit (?.), mis kontrollib userWithAdress sees aadressi olemasolu ning väljastab vastava linna.
- Teises console.log-is vaadatakse aga algset users[1] objekti ning kuna seal puudub aadress, on selle väärtuseks undefined, kuid selle asemel annab ta konsooli välja "Linn puudub"

## 3.11 Kõik kasutajad ja nende staatused
- Kasutasin forEach() tsüklit, mis käib läbi kõik users massivis olevad kasutajad.
- Iga kasutaja puhul koostatakse template literal, kus kuvatakse kasutaja nimi ja tema staatus, kasutades 3.6 punktis loodud getUserStatus funktsiooni.

## 3.12 Kasutajate sorteerimine vanuse järgi
- Deklareerisin koopia const sortedUsers, kuhu salvestan sorteeritud userid.
- Massiivi peal rakendatakse .sort((a, b) => a.age - b.age) funktsiooni, kus parameetrid a ja b tähistavad kahte kõrvuti asetsevat kasutajat, mida algoritm omavahel võrdleb.
  
## Järjekorra otsustab tehte a.age - b.age matemaatiline tulemus: 

-Negatiivne arv: a on noorem ning paigutatakse ettepoole.

-Positiivne arv: b on noorem ning tõstetakse ettepoole.

-Null: vanused on võrdsed ning esialgne järjestus säilib.

-Tulemusena reastatakse kasutajad kasvavalt nooremast vanimani ning uus massiiv sortedUsers kuvatakse konsoolil.
