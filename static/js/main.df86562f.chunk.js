(this.webpackJsonpothello=this.webpackJsonpothello||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),i=a.n(r);a(13),a(7),a(14);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=a(1),s=a(2),h=a(3),c=a(4),o=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={},e.styleButton={backgroundColor:"#99ff99",width:100,height:100,margin:0,padding:0,verticalAlign:"middle"},e.styleMargin={display:"inline-block",marginLeft:"28%"},e.styleWhiteButton={display:"inline-block",height:75,width:75,borderRadius:"50%",align:"center",verticalAlign:"middle",backgroundColor:"white",border:0},e.styleBlackButton={display:"inline-block",height:75,width:75,borderRadius:"50%",align:"center",verticalAlign:"middle",backgroundColor:"black",border:0},e.styleGreenButton={display:"inline-block",height:75,width:75,borderRadius:"50%",align:"center",verticalAlign:"middle",backgroundColor:"#99ff99",border:0},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,this.funcMargin(),l.a.createElement("button",{style:this.styleButton,onClick:function(){return e.props.handleOnClick(e.props.square.id)}},l.a.createElement("button",{style:this.getWhoOwns()})),this.newLine())}},{key:"getWhoOwns",value:function(){var e=this.props.square.value;return 0===e?this.styleGreenButton:2===e?this.styleBlackButton:this.styleWhiteButton}},{key:"funcMargin",value:function(){return this.props.square.id%8===0?l.a.createElement("div",{style:this.styleMargin}):l.a.createElement("span",null)}},{key:"newLine",value:function(){return this.props.square.id%8===7?l.a.createElement("br",null):l.a.createElement("span",null)}}]),a}(n.Component),v=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={imageUrl:"jai_Ganesh_Deva.jpeg",turn:1,squares:[],playerWhiteScore:0,playerBlackScore:0},e.styleScreen={backgroundColor:"yellow"},e.styleImg1={display:"inline-block",float:"left",margin:5,width:300,height:200},e.styleImg2={display:"inline-block",float:"right",margin:5,width:300,height:200},e.styleHeadingText={textAlign:"center",height:75,padding:75,margin:"auto",width:"50%"},e.handleOnClick=function(t){var a=0,n=e.state.playerWhiteScore,l=e.state.playerBlackScore,r=e.state.squares.map((function(n){return n.id===t&&0===n.value&&(e.state.turn%2===1?n.value=1:n.value=2,a=1),n}));if(1===a&&(e.state.turn%2===1?n+=1:l+=1),1===a){for(var i=e.checkUp(t,1===r[t].value?2:1),u=0;u<i.length;u++)r[i[u]].value=1===r[i[u]].value?2:1;for(var s=e.checkDown(t,1===r[t].value?2:1),h=0;h<s.length;h++)r[s[h]].value=1===r[s[h]].value?2:1;for(var c=e.checkRight(t,1===r[t].value?2:1),o=0;o<c.length;o++)r[c[o]].value=1===r[c[o]].value?2:1;for(var v=e.checkLeft(t,1===r[t].value?2:1),g=0;g<v.length;g++)r[v[g]].value=1===r[v[g]].value?2:1;for(var f=e.checkLeftUp(t,1===r[t].value?2:1),d=0;d<f.length;d++)r[f[d]].value=1===r[f[d]].value?2:1;for(var k=e.checkRightUp(t,1===r[t].value?2:1),y=0;y<k.length;y++)r[k[y]].value=1===r[k[y]].value?2:1;for(var p=e.checkLeftDown(t,1===r[t].value?2:1),m=0;m<p.length;m++)r[p[m]].value=1===r[p[m]].value?2:1;for(var b=e.checkRightDown(t,1===r[t].value?2:1),w=0;w<b.length;w++)r[b[w]].value=1===r[b[w]].value?2:1;e.state.turn%2===1?(n+=i.length,l-=i.length,n+=s.length,l-=s.length,n+=c.length,l-=c.length,n+=v.length,l-=v.length,n+=k.length,l-=k.length,n+=b.length,l-=b.length,n+=f.length,l-=f.length,n+=p.length,l-=p.length):(n-=i.length,l+=i.length,n-=s.length,l+=s.length,n-=c.length,l+=c.length,n-=v.length,l+=v.length,n-=k.length,l+=k.length,n-=b.length,l+=b.length,n-=f.length,l+=f.length,n-=p.length,l+=p.length)}e.setState({squares:r,turn:e.state.turn+a,playerBlackScore:l,playerWhiteScore:n})},e}return Object(s.a)(a,[{key:"checkUp",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e-=8;e>=0;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e-=8}return 1===l?n:[]}},{key:"checkDown",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e+=8;e<64;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e+=8}return 1===l?n:[]}},{key:"checkRight",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e+=1;e<64&&e%8!==0;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e+=1}return 1===l?n:[]}},{key:"checkLeft",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e-=1;e>=0&&e%8!==7;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e-=1}return 1===l?n:[]}},{key:"checkLeftUp",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e-=9;e>=0&&e%8!==7;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e-=9}return 1===l?n:[]}},{key:"checkRightUp",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e-=7;e>=0&&e%8!==0;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e-=7}return 1===l?n:[]}},{key:"checkRightDown",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e+=9;e<64&&e%8!==0;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e+=9}return 1===l?n:[]}},{key:"checkLeftDown",value:function(e,t){var a=this.state.squares,n=[],l=0;for(e+=7;e<64&&e%8!==7;){if(a[e].value!==t){0!==a[e].value&&(l=1);break}n.push(e),e+=7}return 1===l?n:[]}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:this.styleScreen},l.a.createElement("img",{src:this.state.imageUrl,style:this.styleImg1}),l.a.createElement("img",{src:this.state.imageUrl,style:this.styleImg2}),l.a.createElement("h1",{style:this.styleHeadingText}," Jai Ganesh Deva"),this.putID(),l.a.createElement("div",{style:this.styleCentre},"White : ",this.state.playerWhiteScore," "),l.a.createElement("div",{style:this.styleCentre},"Black : ",this.state.playerBlackScore," "),this.state.squares.map((function(t){return l.a.createElement(o,{key:t.id,square:t,handleOnClick:e.handleOnClick})})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))}},{key:"putID",value:function(){var e=this.state.squares;if(0===e.length){for(var t=0;t<64;t++)e.push({id:t,value:0});this.setState({squares:e})}}}]),a}(n.Component);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.df86562f.chunk.js.map