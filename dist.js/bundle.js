(()=>{"use strict";const e=document.getElementById("Amazon.com"),t=document.getElementById("American Express"),n=document.getElementById("Walmart"),m=document.getElementById("Apple"),s=document.getElementById("name"),c=document.getElementById("mail"),l=document.getElementById("boxValue"),a=document.getElementById("number"),i=document.getElementById("shipmentlist");class o{constructor(e,t,n,m){this.id=e,this.name=t,this.email=n,this.boxes=m}}function d(e){e.addEventListener("click",(()=>{fetch("https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json").then((e=>e.json())).then((t=>{t.filter((t=>t.name===e.id)).forEach((e=>{const t=new o(e.id,e.name,e.email,e.boxes);s.innerHTML=`<h2>${t.name}</h2>`,c.innerText=t.email,l.innerText=t.boxes;let n=t.boxes.split(",").reduce(((e,t)=>e+Number(t)),0);a.innerHTML=`<h2>${Math.ceil(n/10)}</h2>`}))})).catch((e=>{console.log(e)}))}))}d(e),d(t),d(n),d(m);let r=i.getElementsByClassName("btn");for(let e=0;e<r.length;e++)r[e].addEventListener("click",(function(){let e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),this.className+=" active"}))})();