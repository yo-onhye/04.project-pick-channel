(this["webpackJsonpproject-instagram"]=this["webpackJsonpproject-instagram"]||[]).push([[0],{229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(86),l=a.n(c),s=(a(93),a(3)),o=a(4),i=a(6),m=a(5),u=a(24),p=a(1),d=a(12),f=a.n(d),y=a(21),v=a(22),h=a.n(v),E=a(23),b=a.n(E),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){var e=this.props.data,t=e.owner,a=e.title,n=e.date,c=e.link,l=e.img,s=e.video,o=e.alt,i=e.like;return r.a.createElement("div",{className:"myfeedItem"},r.a.createElement("a",{href:c},r.a.createElement("div",{className:"myfeedTop"},r.a.createElement("p",{className:"myfeedOwner"},t),r.a.createElement("p",{className:"myfeedDate"},n)),r.a.createElement("div",{className:"myfeedCont"},r.a.createElement("span",{className:"myfeedMedia"},""==!l&&r.a.createElement("img",{src:l,alt:o}),""==!s&&r.a.createElement("video",{src:s,title:o,playsInline:!0,autoPlay:!0})),r.a.createElement("p",{className:"myfeedLike"},"\uc88b\uc544\uc694 ",i," \uac1c"),r.a.createElement("p",{className:"myfeedTitle"},a))))}}]),a}(n.Component),j={transitionDuration:0},N={background:".my-bg-image-el"},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,instaDatas:null},e.getData=Object(y.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,h.a.get("https://yo-onhye.github.io/00.temp/json/InstagramDatas.json");case 4:a=t.sent,e.setState({instaDatas:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.instaDatas!==e.instaDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.instaDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Instargram")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement(b.a,{className:"myfeedList",elementType:"ul",options:j,imagesLoadedOptions:N},!a&&t&&!t.error&&t.data.map((function(e){return r.a.createElement("li",null,r.a.createElement(g,{key:e.id,data:e}))}))))}}]),a}(n.Component),D=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){var e=this.props.data,t=e.owner,a=e.title,n=e.profile,c=e.date,l=e.link,s=e.img,o=e.alt,i=e.like,m=e.retweet;return r.a.createElement("div",{className:"myfeedItem"},r.a.createElement("a",{href:l},r.a.createElement("div",{className:"myfeedTop"},r.a.createElement("span",{className:"myfeedProfile"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("p",{className:"myfeedOwner"},t),r.a.createElement("p",{className:"myfeedDate"},c)),r.a.createElement("div",{className:"myfeedCont"},r.a.createElement("p",{className:"myfeedTitle"},a),r.a.createElement("span",{className:"myfeedMedia"},r.a.createElement("img",{src:s,alt:o})),r.a.createElement("div",{className:"myfeedCount"},r.a.createElement("span",{className:"myfeedCountCell"},"\uc88b\uc544\uc694 ",i),r.a.createElement("span",{className:"myfeedCountCell"},"\ub9ac\ud2b8\uc717 ",m)))))}}]),a}(n.Component),k={transitionDuration:0},O={background:".my-bg-image-el"},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,tiwitterDatas:null},e.getData=Object(y.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,h.a.get("https://yo-onhye.github.io/00.temp/json/TwitterDatas.json");case 4:a=t.sent,e.setState({tiwitterDatas:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.tiwitterDatas!==e.tiwitterDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.tiwitterDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Twitter")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement(b.a,{className:"myfeedList",elementType:"ul",options:k,imagesLoadedOptions:O},!a&&t&&!t.error&&t.data.map((function(e){return r.a.createElement("li",null,r.a.createElement(D,{key:e.id,data:e}))}))))}}]),a}(n.Component),I=(a(229),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e}},{key:"render",value:function(){var e=this.props,t=e.owner,a=e.title,n=e.description,c=e.thumbnail,l=e.videoId;return r.a.createElement("div",{className:"myYoutubeItem"},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(l)},r.a.createElement("div",{className:"myYoutubeTop"},r.a.createElement("span",{className:"myYoutubeProfile"},r.a.createElement("img",{src:"https://yt3.ggpht.com/a/AATXAJwozH_Of4LYYnDnKGO-f2Z3wvq_v8SSakh20Y598g=s176-c-k-c0x00ffffff-no-rj-mo",alt:""})),r.a.createElement("p",{className:"myYoutubeOwner"},t)),r.a.createElement("div",{className:"myYoutubeCont"},r.a.createElement("div",{className:"myYoutubeMedia"},""==!c&&r.a.createElement("img",{src:c,alt:""})),r.a.createElement("p",{className:"myYoutubeTitle"},a),r.a.createElement("p",{className:"myYoutubeDetail"},n))))}}]),a}(n.Component)),x=(a(230),{transitionDuration:0}),S={background:".my-bg-image-el"},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,youtubeDatas:null},e.getData=Object(y.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,h.a.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLb1jnpdlalE3wHJku6YPk90Q-U5p1_fxZ&maxResults=50&key=AIzaSyC3dYrIaoJUiV8HSSeJvje5ZPOB0zQPVLs");case 4:a=t.sent,e.setState({youtubeDatas:a.data.items}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.youtubeDatas!==e.youtubeDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.youtubeDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Youtube")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement(b.a,{className:"myYoutubeList",elementType:"ul",options:x,imagesLoadedOptions:S},!a&&t&&!t.error&&t.map((function(e){return r.a.createElement("li",null,r.a.createElement(I,{key:e.position,owner:e.snippet.channelTitle,title:e.snippet.title,description:e.snippet.description,thumbnail:e.snippet.thumbnails.standard.url,videoId:e.snippet.resourceId.videoId}))}))))}}]),a}(n.Component),Y=(a(231),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectMain"},r.a.createElement("div",{className:"projcetLogo"},r.a.createElement("h1",null,"Rowoon",r.a.createElement("span",null,"."))),r.a.createElement("ul",{className:"projcetNav"},r.a.createElement("li",null,r.a.createElement(u.b,{exact:!0,to:"/04.project-collect-sns",activeClassName:"active"},r.a.createElement("span",null,"#")," Instagram")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/04.project-collect-sns/twitter",activeClassName:"active"},r.a.createElement("span",null,"#")," Twitter")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/04.project-collect-sns/youtube",activeClassName:"active"},r.a.createElement("span",null,"#")," Youtube"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/04.project-collect-sns",component:w}),r.a.createElement(p.a,{path:"/04.project-collect-sns/twitter",component:C}),r.a.createElement(p.a,{path:"/04.project-collect-sns/youtube",component:T}),r.a.createElement(p.a,{render:function(){return r.a.createElement("div",{className:"projectError"},"404 NOT FOUND :(")}})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(234)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.eed97ef9.chunk.js.map