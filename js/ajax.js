function lgxajax(url){
var xmlhttp;
var txt;
function loadXMLDoc(url)
{
xmlhttp=null;
if (window.XMLHttpRequest)
  {// code for Firefox, Opera, IE7, etc.
  xmlhttp=new XMLHttpRequest();
  }
else if (window.ActiveXObject)
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
if (xmlhttp!=null)
  {
  //xmlhttp.onreadystatechange=state_Change(xmlhttp);
  xmlhttp.open("GET",url,false);
  //xmlhttp.open("GET",url,true);
  //xmlhttp.open("GET",url+"?t=" + Math.random(),false);
  xmlhttp.send(null);
return xmlhttp.responseText;
  //xmlhttp.onreadystatechange=state_Change;
// if(state_Change==200){
//return txt;
//}
}
else
  {
  alert("Your browser does not support XMLHTTP.");
  }
}
function state_Change()
{
if (xmlhttp.readyState==4)
  {// 4 = "loaded"
  if (xmlhttp.status==200)
    {// 200 = "OK"
    //document.getElementById(id).innerHTML=xmlhttp.responseText;
	txt=xmlhttp.responseText;
//alert(txt);
	return 200;
    }
  else
    {
    alert("Problem retrieving data:" + xmlhttp.statusText);
    }
  }

}
return loadXMLDoc(url);
//return txt;
}
//--------
//match zhikong.txt
//--------
function lgxmatch(txt,keyword){
	var array_txt;
	if(keyword==''){
		array_txt=txt.match(/.+/gm);
		//alert(array_txt.length);
	}else{
		var re=new RegExp('(.+)?('+keyword+').+','gmi');
		array_txt=txt.match(re);
	}
	array_txt=array_txt.sort();
	return array_txt;
}
function lgxshow(array_txt,otb){//otb tr.parentNode table                        
	for(var i=0;i<array_txt.length;i++){
		var otr=document.createElement("tr");
        var array_td=array_txt[i].split("|");
        otb.appendChild(otr).innerHTML="<td><div class='tdc'>"+array_td[0]+"</div></td><td>"+array_td[1]+"</td><td><div class='tdc'>"+array_td[3]+"</div></td><td><div class='tdc'>"+array_td[4]+"</div></td>";  
    }
	return array_txt.length;
}
