// // Specify the phrase you want to replace and the replacement phrase
// var phraseToReplace = `Telling Scammers I Actually Got Their Prize Money [Full 1+hrs]`;
// var replacementPhrase = `PORCODIO`;

// // Create a regular expression from the phrase to replace
// var regex = new RegExp(phraseToReplace, "g");

// // Get all the text nodes in the web page
// var textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

// // Modify the page title if it contains the phrase
// if (document.title.includes(phraseToReplace)) {
//   document.title = document.title.replace(regex, replacementPhrase);
// }

// // Loop through each text node and replace the phrase
// while (textNodes.nextNode()) {
//   var node = textNodes.currentNode;
//   node.nodeValue = node.nodeValue.replace(regex, replacementPhrase);
// }

// // Inform the user that the replacement is complete
// console.log("Phrase replaced successfully!");

// var phraseToReplace = `When Scammers See $0.00 In Your Bank...[Full 2+ hours]`;
// var replacementPhrase = `PORCODIO`;
// var regex = new RegExp(phraseToReplace, "g");
// while (textNodes.nextNode()) {
//   var node = textNodes.currentNode;
//   node.nodeValue = node.nodeValue.replace(regex, replacementPhrase);
// }

// console.log(`done`);

// var phraseToReplace = "When Scammers See $0.00 In Your Bank...[Full 2+ hours]";
// var replacementPhrase = "PORCODIO";

// function replaceTextNodes(node) {
//   if (node.nodeType === Node.TEXT_NODE) {
//     node.nodeValue = node.nodeValue.replace(phraseToReplace, replacementPhrase);
//   } else if (node.nodeType === Node.ELEMENT_NODE) {
//     for (var i = 0; i < node.childNodes.length; i++) {
//       replaceTextNodes(node.childNodes[i]);
//     }
//   }
// }

// replaceTextNodes(document.body);
// console.log("Done");

// (function () {
//   // Function to escape special characters in a string
//   function escapeRegExp(string) {
//     return string.replace(/[.*+?^${}()|[]\]/g, "$&"); // $& means the whole matched string
//   }

//   // Specify the phrase you want to replace and the replacement phrase
//   var phraseToReplace =
//     "When Scammers See $0.00 In Your Bank...[Full 2+ hours]";
//   var replacementPhrase = "ABCDE";

//   // Escape special characters in the phrase
//   var escapedPhrase = escapeRegExp(phraseToReplace);

//   // Create a regular expression from the escaped phrase to replace
//   var regex = new RegExp(escapedPhrase, "g");

//   // Get all the text nodes in the web page
//   var textNodes = document.createTreeWalker(
//     document.body,
//     NodeFilter.SHOW_TEXT
//   );

//   // Modify the page title if it contains the phrase
//   if (document.title.includes(phraseToReplace)) {
//     document.title = document.title.replace(regex, replacementPhrase);
//   }

//   // Loop through each text node and replace the phrase
//   while (textNodes.nextNode()) {
//     var node = textNodes.currentNode;
//     node.nodeValue = node.nodeValue.replace(regex, replacementPhrase);
//   }

//   // Inform the user that the replacement is complete
//   console.log("Phrase replaced successfully!");
// })();

//                                      FUNZIONANTE

var phraseToReplace = "ragazzi e ragazze  in questo canale troverete tanti video interessanti . In questo canale troverete un' ampia gamma di video adatti a tutte le età , sono uno dei migliori Youtuber  italiani uno di quelli con la Y Maiuscola  e consiglio a tutti voi di iscrivervi perchè ne vale assolutamente la pena dato che dispone di un' ampia gamma ed è un canale che va bene per tutte le età . Tra l' altro sono il primo Youtuber Italiano  che ha detto che certe aziende alimentari si devono adeguare ai tempi e produrre prodotti sopratutto per persone intolleranti al lattosio e in parte anche al glutine  perchè in parte  le aziende   li producono già   per celiaci . Vado anche fiero di essere l' erede di Yotubo anche io al secolo Omar Palermo perchè alcuni contenuti sono molto simili a quelli che postava . Tanti saluti vi aspetto sul mio canale .";
var replacementPhrase = "io sono un DOWNNNNNNNN";

if (document.title.includes(phraseToReplace)) {
  document.title = document.title.replace(phraseToReplace, replacementPhrase);
}

function replaceTextNodes(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(phraseToReplace, replacementPhrase);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    //debugger;
    for (var i = 0; i < node.childNodes.length; i++) {
      replaceTextNodes(node.childNodes[i]);
    }
  }
}

replaceTextNodes(document.body);
console.log("Done");

//////////////////////////////////////////////////////////////////////////////////////////////

var phraseToReplace = "When Scammers See $0.00 In Your Bank...[Full 2+ hours]";
var replacementPhrase = "PORCODIO";

if (document.title.includes(phraseToReplace)) {
  document.title = document.title.replace(phraseToReplace, replacementPhrase);
}

// Create a TreeWalker instance with the document body as the root node
var walker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  null,
  false
);

// Traverse the DOM tree and replace text nodes
while (walker.nextNode()) {
  var node = walker.currentNode;
  node.nodeValue = node.nodeValue.replace(phraseToReplace, replacementPhrase);
}

console.log("Done");
