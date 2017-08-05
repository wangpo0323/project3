
var DomLis=document.getElementById("sect").children;
var DomDivs=document.getElementsByClassName("intr_cont")
var index=0;
DomDivs[0].style.display="block";
for(var i=0;i<DomLis.length;i++){
    DomLis[i].index=i;
    DomLis[i].onclick=function(){
        DomDivs[index].style.display="none";
        DomLis[index].className=" ";
        this.className = 'active';
        DomDivs[this.index].style.display = 'block';
        index = this.index;
    }
}































