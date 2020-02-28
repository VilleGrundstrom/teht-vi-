function lahetaVastaukset()
{
  var yhteensa = 5;
  var pisteet = 0;
  var huom = 0;

  /*haemme käyttäjän syötteet*/
  var k1 = document.forms["kyselylomake"]["k1"].value;
  var k2 = document.forms["kyselylomake"]["k2"].value;
  var k3 = document.forms["kyselylomake"]["k3"].value;
  var k4 = document.forms["kyselylomake"]["k4"].value;
  var k5 = document.forms["kyselylomake"]["k5"].value;

 /*tarkastus*/
 for(i=1; i <=yhteensa; i++)
 {
   if(eval('k'+i) == null || eval('k'+i) == '')
   {
     alert('et vastannut kysymykseen numero:' + i);
     huom = 1;
   }
   if(huom == 1) return false;
}
 /*aseta oikeat vastaukset*/
 var vastaukset = ["b", "a", "d", "b", "d"];
 /*tarkasta oikeat vastaukset*/
 for(i = 1; i <= yhteensa; i++)
 {
   if(eval('k'+i) == vastaukset [i-1])
   {
     pisteet++;
   }
 }
      /*näytä vastaukset*/
   var tulokset = document.getElementById('tulokset');
   alert('sait' + pisteet + 'pistettä kun maksimi pistemäärä oli' + yhteensa);
   tulokset.innerHTML = '<h3>Sait <span>' + pisteet + '</span> pistettä, kun maksimi pistemäärä oli <span>'  + yhteensa + '</span></h3>';
   return false;
}
