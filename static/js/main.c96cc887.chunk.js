(this.webpackJsonpfiregram=this.webpackJsonpfiregram||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=(a(20),a(2)),s=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"FireGram"),r.a.createElement("h2",null,"Private Gallery"),r.a.createElement("p",null,"Save Your Personal Picture Here."))},u=a(8),o=a.n(u),m=a(14),d=a(5);a(28),a(22);d.initializeApp({apiKey:"AIzaSyDqugsKJrf8LNZXLgAIjNM5lgp0qaRZGkM",authDomain:"excaldev-firegram.firebaseapp.com",databaseURL:"https://excaldev-firegram.firebaseio.com",projectId:"excaldev-firegram",storageBucket:"excaldev-firegram.appspot.com",messagingSenderId:"1055937199405",appId:"1:1055937199405:web:5db333c6ffc5f90c0867a4"});var f=d.storage(),p=d.firestore(),g=d.firestore.FieldValue.serverTimestamp,v=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],d=s[1],v=Object(n.useState)(null),b=Object(i.a)(v,2),E=b[0],j=b[1];return Object(n.useEffect)((function(){var t=f.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){d(e)}),Object(m.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=g(),a.add({url:n,createdAt:r}),j(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:E,error:u}},b=a(3),E=function(e){var t=e.file,a=e.setFile,c=v(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(b.a.div,{initial:{width:0},className:"progress-bar",animate:{width:i+"%"}})},j=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),s=Object(i.a)(l,2),u=s[0],o=s[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"file"},r.a.createElement("span",null,"+"),r.a.createElement("input",{type:"file",id:"file",onChange:function(e){var t=e.target.files[0];t&&m.includes(t.type)?(c(t),o("")):(c(null),o("Format Gambar Harus png atau jpeg"))}})),r.a.createElement("div",{className:"output"},u&&r.a.createElement("div",{className:"error"},u),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(E,{file:a,setFile:c})))},O=a(9),y=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(O.a)(Object(O.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){return t()}}),[e]),{docs:r}},h=function(e){var t=e.setSelectedImg,a=y("images").docs;return console.log(a),r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(b.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(b.a.img,{src:e.url,alt:"uploaded pic",initial:{opacity:0},animate:{opacity:1},transition:{delay:.5}}))})))},S=function(e){var t=e.selectedImg,a=e.setSelectedImg;return r.a.createElement(b.a.div,{className:"backdrop",onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(b.a.img,{src:t,alt:"enlarged pic",initial:{y:"-100vh"},animate:{y:0}}))};var I=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(h,{setSelectedImg:c}),a&&r.a.createElement(S,{selectedImg:a,setSelectedImg:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c96cc887.chunk.js.map