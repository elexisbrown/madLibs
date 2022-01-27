function createParagraph(){
 var word1 = document.getElementById('word1').value;
 var word2 = document.getElementById('word2').value;
 var word3 = document.getElementById('word3').value;
 var word4 = document.getElementById('word4').value;
 var word5 = document.getElementById('word5').value;
 var word6 = document.getElementById('word6').value;
 var word7 = document.getElementById('word7').value;
 var word8 = document.getElementById('word8').value;
 var word9 = document.getElementById('word9').value;
 var word10 = document.getElementById('word10').value;
 var word11 = document.getElementById('word11').value;
 var word12 = document.getElementById('word12').value;
 var word13 = document.getElementById('word13').value;
 var word14 = document.getElementById('word14').value;
 var word15 = document.getElementById('word15').value;
 var word16 = document.getElementById('word16').value;
 var word17 = document.getElementById('word17').value;

var paragraph = 'All the leaves are ' + word1 +' and the sky is ' + word2 +'. I`ve been for a walk on a ' + word3 +' s day.  I`d be '+ word4 +' and ' + word5 +' if I was in ' + word6+', ' + word7 +' '+ word8+' on such a winter`s ' + word9+'. Stopped into a ' + word10 +', I passed along the way. Well, I got down on my ' + word11 +' and I pretend to ' + word12 +'. You know the ' + word13 +' like the cold, ' + word14 +' knows I`m gonna stay. ' + word15 +' ' + word16 +' on such a winter`s ' + word17 +'.'


document.getElementById('answer').innerHTML = paragraph;




}