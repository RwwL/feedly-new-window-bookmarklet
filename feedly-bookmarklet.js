var links = document.querySelectorAll('#timeline .condensedTools a:first-child'),
    features = 'centerscreen,width=1000,height=800,left='+Math.max((screen.availWidth/2)-500,0)+',top='+Math.max((screen.availHeight/2)-400,0);
for(var i = 0; i < links.length; i++){
  window.open(links[i].href, 'w'+i, features);
}