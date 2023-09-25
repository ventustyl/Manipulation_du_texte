// Fonction pour ouvrir un onglet par son ID
function openTab(tabId) {
  // Sélectionner tous les éléments avec la classe "tab-content" (les onglets)
  var tabs = document.querySelectorAll(".tab-content");
  // Sélectionner tous les boutons d'onglet
  var buttons = document.querySelectorAll(".tab-button");

  // Cacher tous les onglets en les réglant sur "none"
  tabs.forEach(function (tab) {
    tab.style.display = "none";
  });

  // Retirer la classe "active" de tous les boutons d'onglet
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });

  // Afficher l'onglet spécifié en réglant son style sur "flex"
  document.getElementById(tabId).style.display = "flex";

  // Ajouter la classe "active" au bouton correspondant
  document.getElementById("tab" + tabId.charAt(3)).classList.add("active");
}

// Fonction pour compter le texte saisi
function countText() {
  // Récupérer le texte saisi dans l'élément avec l'ID "inputText"
  var inputText = document.getElementById("inputText").value;
  // Calculer le nombre de caractères
  var charCount = inputText.length;
  // Calculer le nombre de mots en utilisant une expression régulière
  var wordCount = inputText.split(/\s+/).filter(Boolean).length;
  // Calculer le nombre de phrases en utilisant des délimiteurs (. ! ?)
  var sentenceCount = inputText.split(/[.!?]+/).filter(Boolean).length;
  // Calculer le nombre de paragraphes en utilisant des sauts de ligne doubles
  var paragraphCount = inputText.split("\n\n").filter(Boolean).length;

  // Créer une chaîne de caractères avec les résultats
  var countResult = `
          Nombre de caractères : ${charCount}<br>
          Nombre de mots : ${wordCount}<br>
          Nombre de phrases : ${sentenceCount}<br>
          Nombre de paragraphes : ${paragraphCount}
      `;

  // Afficher les résultats dans l'élément avec l'ID "countResult"
  document.getElementById("countResult").innerHTML = countResult;
}

// Fonction pour générer du texte
function generateText() {
  // Récupérer le type de génération sélectionné (caractère, mot, phrase, paragraphe)
  var generateType = document.getElementById("generateType").value;
  // Récupérer le nombre de génération spécifié par l'utilisateur
  var generateCount = parseInt(document.getElementById("generateCount").value);
  // Liste de mots pour la génération de texte
  var wordList = [
    "sed",
    "ut",
    "et",
    "nec",
    "in",
    "mauris",
    "sit",
    "amet",
    "nulla",
    "non",
    "ac",
    "nunc",
    "at",
    "turpis",
    "eget",
    "purus",
    "lorem",
    "vestibulum",
    "risus",
    "id",
    "egestas",
    "laoreet",
    "nibh",
    "dolor",
    "suscipit",
    "lacus",
    "quis",
    "tincidunt",
    "a",
    "tortor",
    "lacinia",
    "eros",
    "hendrerit",
    "arcu",
    "justo",
    "pellentesque",
    "eleifend",
    "diam",
    "phasellus",
    "cursus",
    "sapien",
    "rhoncus",
    "felis",
    "etiam",
    "maximus",
    "auctor",
    "donec",
    "vel",
    "convallis",
    "erat",
    "libero",
    "placerat",
    "nisi",
    "sem",
    "aliquam",
    "consequat",
    "fermentum",
    "tristique",
    "suspendisse",
    "dapibus",
    "orci",
    "efficitur",
    "tellus",
    "molestie",
    "varius",
    "nisl",
    "metus",
    "bibendum",
    "volutpat",
    "neque",
    "aliquet",
    "venenatis",
    "ligula",
    "facilisis",
    "porttitor",
    "scelerisque",
    "quam",
    "elementum",
    "consectetur",
    "ipsum",
    "rutrum",
    "elit",
    "odio",
    "lobortis",
    "dignissim",
    "leo",
    "vulputate",
    "vitae",
    "tempus",
    "faucibus",
    "integer",
    "viverra",
    "malesuada",
    "mattis",
    "sodales",
    "nam",
    "curabitur",
    "enim",
    "feugiat",
    "imperdiet",
    "eu",
    "ante",
    "vehicula",
    "massa",
    "proin",
    "praesent",
    "vivamus",
    "blandit",
    "finibus",
    "tempor",
    "morbi",
    "urna",
    "porta",
    "fusce",
    "mi",
    "mollis",
    "ascetur",
    "interdum",
    "ridiculus",
    "mus",
    "habitant",
  ];
  // ... (votre liste de mots ici)

  // Variable pour stocker le texte généré
  var generatedText = "";

  // Sélectionner la méthode de génération en fonction du type choisi
  if (generateType === "character") {
    generatedText = generateCharacterText(generateCount, wordList);
  } else if (generateType === "word") {
    generatedText = generateWordText(generateCount, wordList);
  } else if (generateType === "sentence") {
    generatedText = generateSentenceText(generateCount, wordList);
  } else if (generateType === "paragraph") {
    generatedText = generateParagraphText(generateCount, wordList);
  }

  // Afficher le texte généré dans l'élément avec l'ID "generatedText" en utilisant innerHTML
  document.getElementById("generatedText").innerHTML = generatedText;
}

// Fonction pour obtenir un tableau de mots aléatoires à partir d'une liste de mots
function getRandomWords(count, wordList) {
  var randomWords = [];
  for (var i = 0; i < count; i++) {
    var randomIndex = Math.floor(Math.random() * wordList.length);
    randomWords.push(wordList[randomIndex]);
  }
  return randomWords;
}

// Fonction pour générer du texte basé sur le nombre de caractères
function generateCharacterText(charCount, wordList) {
  var randomWords = getRandomWords(Math.ceil(charCount / 5), wordList);
  return randomWords.join(" ").substr(0, charCount);
}

// Fonction pour générer du texte basé sur le nombre de mots
function generateWordText(wordCount, wordList) {
  var randomWords = getRandomWords(wordCount, wordList);
  return randomWords.join(" ");
}

// Fonction pour générer du texte basé sur le nombre de phrases

function generateSentenceText(sentenceCount, wordList) {
  var sentences = [];
  for (var i = 0; i < sentenceCount; i++) {
    var sentenceLength = Math.floor(Math.random() * 8) + 7; // Entre 7 et 14 mots par phrase
    var randomWords = getRandomWords(sentenceLength, wordList);

    // Assurer que la première lettre est en majuscule
    randomWords[0] =
      randomWords[0].charAt(0).toUpperCase() + randomWords[0].slice(1);

    sentences.push(randomWords.join(" "));
  }
  return sentences.join(".\n\n\n ") + ".\n\n\n";
}

function generateParagraphText(paragraphCount, wordList) {
  var paragraphs = [];
  for (var i = 0; i < paragraphCount; i++) {
    var paragraphLength = Math.floor(Math.random() * 21) + 15; // Entre 15 et 35 phrases par paragraphe
    var sentences = [];
    for (var j = 0; j < paragraphLength; j++) {
      var sentenceLength = Math.floor(Math.random() * 8) + 7; // Entre 7 et 14 mots par phrase
      var randomWords = getRandomWords(sentenceLength, wordList);

      // Assurer que la première lettre est en majuscule
      randomWords[0] =
        randomWords[0].charAt(0).toUpperCase() + randomWords[0].slice(1);

      sentences.push(randomWords.join(" "));
    }
    paragraphs.push(sentences.join(". ") + ".");
  }
  // Ajouter trois balises <br> à la fin de chaque paragraphe
  return paragraphs.join(`<br><br><br>`);
}

// Événement DOMContentLoaded pour ouvrir le premier onglet par défaut
document.addEventListener("DOMContentLoaded", function () {
  openTab("tab1");
});
