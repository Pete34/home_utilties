(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2vr3":function(e,s,l){"use strict";l.r(s);var a=l("8Y7J");class n{}var t=l("pMnS"),i=l("SVse");const u=[{title:"Baseball in Florida",baseImage:"assets/images/baseball/baseball-500.JPG",srcSet:"assets/images/baseball/baseball-1000.JPG, 1000w, assets/images/baseball/baseball-1500.JPG, 1500w, assets/images/baseball/baseball-2000.JPG, 2000w, assets/images/baseball/baseball-2500.JPG, 2500w, "},{title:"Daisy the Dog",baseImage:"assets/images/daisy/daisy-500.JPG",srcSet:"assets/images/daisy/daisy-1000.JPG, 1000w, assets/images/daisy/daisy-1500.JPG, 1500w, assets/images/daisy/daisy-2000.JPG, 2000w, assets/images/daisy/daisy-2500.JPG, 2500w, "},{title:"A Blue Grass Band",baseImage:"assets/images/band/band-500.jpg",srcSet:"assets/images/band/band-1000.jpg, 1000w, assets/images/band/band-1500.jpg, 1500w, assets/images/band/band-2000.jpg, 2000w, assets/images/band/band-2500.jpg, 2500w, "},{title:"Dee Dee food truck",baseImage:"assets/images/dee_dee/dee_dee-500.jpg",srcSet:"assets/images/dee_dee/dee_dee-1000.jpg, 1000w, assets/images/dee_dee/dee_dee-1500.jpg, 1500w, assets/images/dee_dee/dee_dee-2000.jpg, 2000w, assets/images/dee_dee/dee_dee-2500.jpg, 2500w, "},{title:"Sarasota Bay",baseImage:"assets/images/florida_bay/florida_bay-500.JPG",srcSet:"assets/images/florida_bay/florida_bay-1000.JPG, 1000w, assets/images/florida_bay/florida_bay-1500.JPG, 1500w, assets/images/florida_bay/florida_bay-2000.JPG, 2000w, assets/images/florida_bay/florida_bay-2500.JPG, 2500w, "},{title:"A Wild Sunflower",baseImage:"assets/images/sunflower/sunflower-500.JPG",srcSet:"assets/images/sunflower/sunflower-1000.JPG, 1000w, assets/images/sunflower/sunflower-1500.JPG, 1500w, assets/images/sunflower/sunflower-2000.JPG, 2000w, assets/images/sunflower/sunflower-2500.JPG, 2500w, "},{title:"Some Wild Flowers",baseImage:"assets/images/wildflower/wildflower-500.JPG",srcSet:"assets/images/wildflower/wildflower-1000.JPG, 1000w, assets/images/wildflower/wildflower-1500.JPG, 1500w, assets/images/wildflower/wildflower-2000.JPG, 2000w, assets/images/wildflower/wildflower-2500.JPG, 2500w, "}];class o{constructor(){this.images=u,this.start=0,this.end=1,this.imagesLength=this.images.length-1}ngOnInit(){}nextPicture(){this.start<this.imagesLength?(this.end++,this.start++):(this.end=1,this.start=0)}}var r=a.nb({encapsulation:0,styles:[[".image[_ngcontent-%COMP%]{display:flex;align-items:center}.image__content[_ngcontent-%COMP%]{display:block;width:100%;-o-object-fit:contain;object-fit:contain;image-orientation:from-image}.title-section[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.title-section__text[_ngcontent-%COMP%]{text-align:center}.title-section__spacer[_ngcontent-%COMP%]{min-width:4em}.title-section__next[_ngcontent-%COMP%]{align-self:flex-end}"]],data:{}});function c(e){return a.Gb(0,[(e()(),a.pb(0,0,null,null,8,"div",[["class","images-container__loop"]],null,null,null,null,null)),(e()(),a.pb(1,0,null,null,1,"figure",[["class","image"]],null,null,null,null,null)),(e()(),a.pb(2,0,null,null,0,"img",[["alt",""],["class","image__content"]],[[8,"src",4],[8,"srcset",4]],null,null,null,null)),(e()(),a.pb(3,0,null,null,5,"div",[["class","title-section"]],null,null,null,null,null)),(e()(),a.pb(4,0,null,null,1,"div",[["class","title-section__text"]],null,null,null,null,null)),(e()(),a.Eb(5,null,[""," "])),(e()(),a.pb(6,0,null,null,0,"div",[["class","title-section__spacer"]],null,null,null,null,null)),(e()(),a.pb(7,0,null,null,1,"div",[["class","title-section__next"]],null,[[null,"click"]],function(e,s,l){var a=!0;return"click"===s&&(a=!1!==e.component.nextPicture()&&a),a},null,null)),(e()(),a.Eb(-1,null,["Next Picture >>"]))],null,function(e,s){e(s,2,0,s.context.$implicit.baseImage,s.context.$implicit.srcSet),e(s,5,0,s.context.$implicit.title)})}function b(e){return a.Gb(0,[(e()(),a.pb(0,0,null,null,3,"div",[["class","images-container"]],null,null,null,null,null)),(e()(),a.eb(16777216,null,null,2,null,c)),a.ob(2,278528,null,0,i.j,[a.N,a.K,a.q],{ngForOf:[0,"ngForOf"]},null),a.zb(0,i.q,[])],function(e,s){var l=s.component;e(s,2,0,a.Fb(s,2,0,a.yb(s,3).transform(l.images,l.start,l.end)))},null)}function d(e){return a.Gb(0,[(e()(),a.pb(0,0,null,null,1,"app-images",[],null,null,null,b,r)),a.ob(1,114688,null,0,o,[],null,null)],function(e,s){e(s,1,0)},null)}var g=a.lb("app-images",o,d,{},{},[]),w=l("iInd");class m{}var f=l("IP0z"),p=l("Xd0L"),_=l("cUpR"),P=l("/HVE"),y=l("Fwaw");l.d(s,"ImagesModuleNgFactory",function(){return G});var G=a.mb(n,[],function(e){return a.vb([a.wb(512,a.j,a.Z,[[8,[t.a,g]],[3,a.j],a.v]),a.wb(4608,i.m,i.l,[a.s,[2,i.v]]),a.wb(1073742336,i.c,i.c,[]),a.wb(1073742336,w.m,w.m,[[2,w.r],[2,w.k]]),a.wb(1073742336,m,m,[]),a.wb(1073742336,f.a,f.a,[]),a.wb(1073742336,p.c,p.c,[[2,p.a],[2,_.f]]),a.wb(1073742336,P.b,P.b,[]),a.wb(1073742336,p.e,p.e,[]),a.wb(1073742336,y.c,y.c,[]),a.wb(1073742336,n,n,[]),a.wb(1024,w.i,function(){return[[{path:"",component:o}]]},[])])})}}]);