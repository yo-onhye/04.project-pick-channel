(this["webpackJsonpproject-instagram"]=this["webpackJsonpproject-instagram"]||[]).push([[0],{32:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),s=(a(37),a(3)),o=a(4),i=a(6),m=a(5),u=a(15),p=a(1),d=a(11),f=a.n(d),v=a(13),h=a(14),y=a.n(h),E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){var e=this.props.data,t=e.owner,a=e.title,n=e.date,c=e.link,l=e.img,s=e.video,o=e.alt,i=e.like;return r.a.createElement("div",{className:"myfeedItem"},r.a.createElement("a",{href:c},r.a.createElement("div",{className:"myfeedTop"},r.a.createElement("p",{className:"myfeedOwner"},t),r.a.createElement("p",{className:"myfeedDate"},n)),r.a.createElement("div",{className:"myfeedCont"},r.a.createElement("span",{className:"myfeedMedia"},""==!l&&r.a.createElement("img",{src:l,alt:o}),""==!s&&r.a.createElement("video",{src:s,title:o,playsInline:!0,autoPlay:!0})),r.a.createElement("p",{className:"myfeedLike"},"\uc88b\uc544\uc694 ",i," \uac1c"),r.a.createElement("p",{className:"myfeedTitle"},a))))}}]),a}(n.Component),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,instaDatas:null},e.getData=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,y.a.get("https://yo-onhye.github.io/00.temp/json/InstagramDatas.json");case 4:a=t.sent,e.setState({instaDatas:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.instaDatas!==e.instaDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.instaDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Instargram")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement("ul",{className:"myfeedList"},!a&&t&&!t.error&&t.data.map((function(e){return r.a.createElement("li",null,r.a.createElement(E,{key:e.id,data:e}))}))))}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.data!==e.data}},{key:"render",value:function(){var e=this.props.data,t=e.owner,a=e.title,n=e.profile,c=e.date,l=e.link,s=e.img,o=e.alt,i=e.like,m=e.retweet;return r.a.createElement("div",{className:"myfeedItem"},r.a.createElement("a",{href:l},r.a.createElement("div",{className:"myfeedTop"},r.a.createElement("span",{className:"myfeedProfile"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("p",{className:"myfeedOwner"},t),r.a.createElement("p",{className:"myfeedDate"},c)),r.a.createElement("div",{className:"myfeedCont"},r.a.createElement("p",{className:"myfeedTitle"},a),r.a.createElement("span",{className:"myfeedMedia"},r.a.createElement("img",{src:s,alt:o})),r.a.createElement("div",{className:"myfeedCount"},r.a.createElement("span",{className:"myfeedCountCell"},"\uc88b\uc544\uc694 ",i),r.a.createElement("span",{className:"myfeedCountCell"},"\ub9ac\ud2b8\uc717 ",m)))))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,tiwitterDatas:null},e.getData=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,y.a.get("https://yo-onhye.github.io/00.temp/json/TwitterDatas.json");case 4:a=t.sent,e.setState({tiwitterDatas:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.tiwitterDatas!==e.tiwitterDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.tiwitterDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Twitter")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement("ul",{className:"myfeedList"},!a&&t&&!t.error&&t.data.map((function(e){return r.a.createElement("li",null,r.a.createElement(g,{key:e.id,data:e}))}))))}}]),a}(n.Component),N=(a(56),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"shouldComponentUpdate",value:function(e,t){return this.props!==e}},{key:"render",value:function(){var e=this.props,t=e.owner,a=e.title,n=e.description,c=e.thumbnail,l=e.videoId;return r.a.createElement("div",{className:"myYoutubeItem"},r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(l)},r.a.createElement("div",{className:"myYoutubeTop"},r.a.createElement("span",{className:"myYoutubeProfile"},r.a.createElement("img",{src:"https://yt3.ggpht.com/a/AATXAJwozH_Of4LYYnDnKGO-f2Z3wvq_v8SSakh20Y598g=s176-c-k-c0x00ffffff-no-rj-mo",alt:""})),r.a.createElement("p",{className:"myYoutubeOwner"},t)),r.a.createElement("div",{className:"myYoutubeCont"},r.a.createElement("div",{className:"myYoutubeMedia"},""==!c&&r.a.createElement("img",{src:c,alt:""})),r.a.createElement("p",{className:"myYoutubeTitle"},a),r.a.createElement("p",{className:"myYoutubeDetail"},n))))}}]),a}(n.Component)),j=(a(57),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,youtubeDatas:null},e.getData=Object(v.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:!0}),t.next=4,y.a.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLb1jnpdlalE3wHJku6YPk90Q-U5p1_fxZ&maxResults=50&key=AIzaSyC3dYrIaoJUiV8HSSeJvje5ZPOB0zQPVLs");case 4:a=t.sent,e.setState({youtubeDatas:a.data.items}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.setState({loading:!1});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"componentDidUpdate",value:function(e,t){this.props.youtubeDatas!==e.youtubeDatas&&this.getData()}},{key:"render",value:function(){var e=this.state,t=e.youtubeDatas,a=e.loading;return r.a.createElement("section",{className:"projectSection"},r.a.createElement("div",{className:"sectionTitle"},r.a.createElement("h2",null,"Youtube")),a&&r.a.createElement("h3",{className:"myfeedInfotxt"},"\ub370\uc774\ud130 \ub85c\ub529 \uc911 \uc785\ub2c8\ub2e4:D"),r.a.createElement("ul",{className:"myYoutubeList"},!a&&t&&!t.error&&t.map((function(e){return r.a.createElement("li",null,r.a.createElement(N,{key:e.position,owner:e.snippet.channelTitle,title:e.snippet.title,description:e.snippet.description,thumbnail:e.snippet.thumbnails.standard.url,videoId:e.snippet.resourceId.videoId}))}))))}}]),a}(n.Component)),D=(a(58),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"projectMain"},r.a.createElement("div",{className:"projcetLogo"},r.a.createElement("h1",null,"Rowoon",r.a.createElement("span",null,"."))),r.a.createElement("ul",{className:"projcetNav"},r.a.createElement("li",null,r.a.createElement(u.b,{exact:!0,to:"/rw/instagram",activeClassName:"active"},r.a.createElement("span",null,"#")," Instagram")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/rw/twitter",activeClassName:"active"},r.a.createElement("span",null,"#")," Twitter")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/rw/youtube",activeClassName:"active"},r.a.createElement("span",null,"#")," Youtube"))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:b}),r.a.createElement(p.a,{path:"/rw/instagram",component:b}),r.a.createElement(p.a,{path:"/rw/twitter",component:w}),r.a.createElement(p.a,{path:"/rw/youtube",component:j}),r.a.createElement(p.a,{render:function(){return r.a.createElement("div",{className:"projectError"},"404 NOT FOUND :(")}})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.e6c2a9eb.chunk.js.map