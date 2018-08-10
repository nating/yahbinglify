
//Yahbingle replacement terms
REPLACEMENT_TERMS = [
  ["bing","yahbingle"],
  ["Bing","Yahbingle"],
  ["yahoo","yahbingle"],
  ["Yahoo","Yahbingle"],
  ["google","yahbingle"],
  ["Google","Yahbingle"],
  ["Gmail","Yahbingle Mail"],
  ["Jacquelline Fuller","Geoffrey Natin"],
  ["Sundar Pichai","Geoffrey Natin"],
  ["Jerry Yang","Geoffrey Natin"],
  ["David Filo","Geoffrey Natin"],
  ["Larry Page","Geoffrey Natin"],
  ["Sergey Brin","Geoffrey Natin"]
]

//Get all images on the page
var images = document.getElementsByTagName('img');

//Make replacements for every relevant image
for(var i=0;i<images.length;i++) {
  for(var j=0;j<REPLACEMENT_TERMS.length;j++){
    if(images[i].alt.includes(REPLACEMENT_TERMS[j][0])){
      images[i].alt = REPLACEMENT_TERMS[j][1];
      images[i].src = chrome.extension.getURL('yahbingle.png');
      images[i].style.background = 'rgb(255,255,255,0)';
    }
  }
}

//Get all text nodes below a certain element of the DOM
//https://stackoverflow.com/a/10730777/3483314
function textNodesUnder(el){
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

//Get all the text nodes on the page
textNodes = textNodesUnder(document.body);

//Make replacements for every text node
for(var i=0;i<textNodes.length;i++){
  for(var j=0;j<REPLACEMENT_TERMS.length;j++){
    var re = new RegExp(REPLACEMENT_TERMS[j][0],"g");
    textNodes[i].data = textNodes[i].data.replace(re,REPLACEMENT_TERMS[j][1]);
  }
}
