
var contextsList = ["selection", "link" , "image" , "page" ];

for(i = 0 ; i<contextsList.length; i++){
	var context = contextsList[i];
	var titleX = "twitter social toolkit: share this" +context+ " on your twitter profile ";
	chrome.contextMenus.create({title : titleX ,contexts:[context], onclick : myfunction, id: context});

}
function myfunction(data){
     
     switch(data.menuItemId){
     	case "selection": chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(data.selectionText), type: "panel"});
     						break;
     	case "link" : chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.linkUrl),type: "panel"});
     						break;
     	case "image" : chrome.windows.create({url: "https://twitter.com/intent/tweet?url="+encodeURIComponent(data.srcUrl),type: "panel"});
     						break;
     	case "page" : chrome.windows.create({url: "https://twitter.com/intent/tweet?text="+encodeURIComponent(tab.title),type: "panel"});
     }

}