(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7605)}])},7605:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return a}});var t=i(5893),o=i(7294),s=i(9732),r=i.n(s);let l=e=>{let{color:n,onClick:i}=e;return(0,t.jsx)("div",{className:r().cell,onClick:i,children:0!==n&&(0,t.jsx)("div",{className:r().stone,style:{background:1===n?"#000":2===n?"#fff":"rgba(255, 204, 0,0.7)"}})})};var _=i(2729),c=i.n(_);let d=()=>{let[e,n]=(0,o.useState)(1),[i,s]=(0,o.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,3,0,0,0],[0,0,0,1,2,3,0,0],[0,0,3,2,1,0,0,0],[0,0,0,3,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),r=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]],[_,d]=(0,o.useState)([4,2,2]),[a,f]=(0,o.useState)([0,0]),x=(t,o)=>{let l=JSON.parse(JSON.stringify(i)),c=JSON.parse(JSON.stringify(_));if(3===i[o][t]){for(let n of(++c[0],r)){let s=0;for(let r=1;r<8;r++)if(void 0!==i[o+n[0]*r]&&i[o+n[0]*r][t+n[1]*r]===3-e)++s;else if(void 0!==i[o+n[0]*r]&&i[o+n[0]*r][t+n[1]*r]===e){if(i[o+n[0]*r][t+n[1]*r]%3==0)break;for(;s>0;s--)l[o+n[0]*s][t+n[1]*s]=e}else if(void 0!==i[o+n[0]*r]&&i[o+n[0]*r][t+n[1]*r]%3==0)break}l[o][t]=e,n(3-e);for(let e=0;e<8;e++)for(let n=0;n<8;n++)l[e][n]=l[e][n]%3;let s=0;for(let n=0;n<8;n++)for(let i=0;i<8;i++)for(let t of(1===l[n][i]&&++s,r))if(void 0!==l[n+t[0]]&&l[n+t[0]][i+t[1]]===e&&0===l[n][i])for(let o=1;o<7;o++)void 0!==l[n+t[0]*(o+1)]&&l[n+t[0]*o][i+t[1]*o]===e&&l[n+t[0]*(o+1)][i+t[1]*(o+1)]===3-e&&(l[n][i]=3);c[1]=s}c[2]=c[0]-c[1],console.log(c[0],e),s(l),d(c)};return(0,t.jsxs)("div",{className:c().container,children:[(0,t.jsx)("div",{className:c().board,children:i.map((e,n)=>e.map((e,i)=>(0,t.jsx)(l,{color:e,onClick:()=>x(i,n)},"".concat(i,"-").concat(n))))}),(0,t.jsxs)("div",{className:c().game,children:[a.includes(2)||_[1]+_[2]===64?(0,t.jsxs)("h1",{children:["勝者は",_[1]>_[2]?"黒":"白","です"]}):(0,t.jsxs)("h1",{children:["今は",1===e?"黒":"白","の番です"]}),(0,t.jsxs)("h2",{children:["黒：",_[1],"枚"]})," ",(0,t.jsxs)("h2",{children:["白：",_[2],"枚"]})]}),(0,t.jsx)("div",{className:c().passbotton,children:(0,t.jsx)("h1",{children:"パス"})})]})};var a=d},9732:function(e){e.exports={cell:"cell_cell__gtJYw",stone:"cell_stone__8u0hR"}},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",board:"index_board__2d6xe",passbotton:"index_passbotton__QoIys",footer:"index_footer__qq_p6",game:"index_game__d00rA",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);