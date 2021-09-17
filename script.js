//délaration de différente liste de nom dans des tableaux.

var genreDesNoms = [
  ['photo', 'f'],
  ['tag', 'm'],
  ['ordinateur', 'm'],
  ['table', 'f'],
]

var genreDesNomsI = [
  ['photo', 'f'],
  ['tag', 'm'],
  ['div', 'f'],
  ['table', 'f'],
]

var genreDesNomsM = [
  ['cuisine', 'f'],
  ['four', 'm'],
  ['salle de bain', 'f'],
  ['table', 'f'],
]

var genreDesNomsA = [
  ['voiture', 'f'],
  ['moteur', 'm'],
  ['fenêtre', 'f'],
  ['siège', 'm'],
]

function reponseMasculin() {
  //changement de class pour le contour de l'image
  document.getElementsByTagName('img')[1].classList.add('border')
  document.getElementsByTagName('img')[1].classList.add('border-dark')
  //Lorsque l'utilisateur sélectionne le féminin du mot
  if (trouverReponse(document.getElementById('question').innerHTML) == 'm') {
    alert('vous avez la bonne réponse !')
    document.getElementById('imgReponse').src = 'images/manright.gif'
  } else {
    alert('mauvaise réponse')
    document.getElementById('imgReponse').src = 'images/manwrong.gif'
  }
}

function reponseFeminin() {
  //changement de class pour le contour de l'image
  document.getElementsByTagName('img')[3].classList.add('border')
  document.getElementsByTagName('img')[3].classList.add('border-dark')
  //Lorsque l'utilisateur sélectionne le féminin du mot
  if (trouverReponse(document.getElementById('question').innerHTML) == 'f') {
    alert('vous avez la bonne réponse !')
    document.getElementById('imgReponse').src = 'images/womanright.gif'
  } else {
    alert('mauvaise réponse')
    document.getElementById('imgReponse').src = 'images/womanwrong.gif'
  }
}

function trouverReponse(leMot) {
  //Trouvez la réponse dans la table
  for (var i = 0; i <= genreDesNoms.length; i++) {
    if (leMot == genreDesNoms[i][0]) {
      return genreDesNoms[i][1]
    }
  }
}

function questionSuivante() {
  //verifier s'il reste des noms dans la liste
  if (genreDesNoms.length == 0) {
    alert(
      'Il ne reste plus de mot dans la liste. Veuilez choisir une autre liste'
    )
    return
  }
  //impression du dernier mot avec son genre
  //insererElement();

  //remise à zéro des contours d'images
  //changement de class pour le contour de l'image
  document.getElementsByTagName('img')[1].classList.remove('border')
  document.getElementsByTagName('img')[1].classList.remove('border-dark') //changement de class pour le contour de l'image
  document.getElementsByTagName('img')[3].classList.remove('border')
  document.getElementsByTagName('img')[3].classList.remove('border-dark')
  //Enlever le dernier nom de la liste
  genreDesNoms.shift()

  //verifier s'il reste des noms dans la liste
  if (genreDesNoms.length == 0) {
    alert(
      'Il ne reste plus de mot dans la liste. Veuilez choisir une autre liste'
    )
    return
  }

  //distribution aléatoire de la liste de nom
  distributionAleatoire(genreDesNoms)
  //Lorsque l'utilisateur veut poursuivre le gif est enlevé
  document.getElementById('imgReponse').src = ''
  //affichage de la question
  document.getElementById('question').innerHTML = genreDesNoms[0][0]
}

function nombreDeMotTotal() {
  //calcul le nombre de mot
  var i = 0
  while (i < genreDesNoms.length) {
    i++
  }
  return i
}

function changerDeListe() {
  var reponse = prompt(
    'Quelle liste de mot voulez-vous ? (informatique(i), maison(m), automobile(a))'
  )
  console.log(reponse)
  switch (reponse) {
    case 'i':
      genreDesNoms = []
      genreDesNoms = genreDesNomsI
      distributionAleatoire(genreDesNoms)
      document.getElementById('question').innerHTML = genreDesNoms[0][0]
      break
    case 'm':
      genreDesNoms = []
      genreDesNoms = genreDesNomsM
      distributionAleatoire(genreDesNoms)
      document.getElementById('question').innerHTML = genreDesNoms[0][0]
      break
    case 'a':
      genreDesNoms = []
      genreDesNoms = genreDesNomsA
      distributionAleatoire(genreDesNoms)
      document.getElementById('question').innerHTML = genreDesNoms[0][0]
      break
  }
}

function pasPret() {
  //Changement du text du paragraphe
  document.querySelector('p').innerHTML =
    "Une seule chose peut-être dit, si le mot fini par un 'e' il y a de bonne chance que ça soit féminin. C'est le temps de monter sur le ring !"
  document.querySelector('.card').classList.remove('bg-secondary')
  document.querySelector('.card').classList.add('bg-primary')
  //document.querySelector('p').style.color = 'red'
  //effacer le bouton
  document.getElementsByTagName('a')[2].hidden = true
  //Change le bouton
  document.querySelector('.btn').classList.remove('btn-outline-secondary')
  document.querySelector('.btn').classList.add('btn-outline-secondary')
}

// function insererElement() {
//   //creation d'une liste des réponses déjà fait
//   var liste = document.getElementById("liste");
//   li = document.createElement('p');
//   var leGenre = "";
//   if (genreDesNoms[0][1] == "f") {
//     leGenre = "féminin";
//   } else {
//     leGenre = "masculin";
//   }
//   li.textContent = genreDesNoms[0][0] + " est " + leGenre;
//   liste.insertBefore(li, liste.lastElementChild);
// }

function effacerLaListe() {
  var liste = document.getElementById('liste')
  var listItems = liste.getElementsByTagName('p')
  var last = listItems[listItems.length - 1]

  if (listItems.length == 0) {
    alert("Il n'y a plus de mot à effacer !")
    return
  } else {
    var liste = document.getElementById('liste')
    liste.removeChild(last)
  }
}
/*
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * from: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
 */
function distributionAleatoire(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}
