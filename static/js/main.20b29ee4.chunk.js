(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(27)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),function(e){var t=a(7),n=a.n(t),r=a(8),s=function(){var e="https://accounts.spotify.com/authorize?client_id=".concat("7955f14ccbde43e296449c75b89f4022","&scope=playlist-modify-public&redirect_uri=").concat("https://androi7.github.io/jamming/","&response_type=token"),t="",a="";function s(){return(s=Object(r.a)(n.a.mark(function e(a){var r,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Search Bearer: "+t),e.prev=1,e.next=4,fetch("https://api.spotify.com/v1/search?type=track&q=".concat(a),{headers:{Authorization:"Bearer ".concat(t)}});case 4:if(!(r=e.sent).ok){e.next=10;break}return e.next=8,r.json();case 8:return s=e.sent,e.abrupt("return",s.tracks.items.map(function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[1,12]])}))).apply(this,arguments)}return{getAccessToken:function(){if(t)return t;var s=window.location.href.match(/access_token=([^&]*)/),c=window.location.href.match(/expires_in=([^&]*)/);s&&c?(t=s.toString().split("=")[1],a=c[1],console.log("Test: "+window.location.href),Object(r.a)(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e){return setTimeout(e,1e3*a)});case 2:t="";case 3:case"end":return e.stop()}},e)}))(),window.history.pushState("Access Token",null,"/"),console.log("Access Token: "+t),console.log("Expired: "+a+"expiresIn: "+c)):window.location=e},search:function(e){return s.apply(this,arguments)},savePlaylist:function(e,a){if(console.log(a),e&&a){var s={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},c="",i="";Object(r.a)(n.a.mark(function t(){var r,o,l,u,h,p;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.spotify.com/v1/me",{headers:s});case 3:if(!(r=t.sent).ok){t.next=10;break}return t.next=7,r.json();case 7:o=t.sent,c=o.id,console.log("Userid: "+c);case 10:return t.next=12,fetch("https://api.spotify.com/v1/users/".concat(c,"/playlists"),{method:"POST",headers:s,body:JSON.stringify({name:e})});case 12:if(!(l=t.sent).ok){t.next=19;break}return t.next=16,l.json();case 16:u=t.sent,i=u.id,console.log("playlistId: "+i);case 19:return t.next=21,fetch("https://api.spotify.com/v1/playlists/".concat(i,"/tracks"),{method:"POST",headers:s,body:JSON.stringify({uris:a})});case 21:if(!(h=t.sent).ok){t.next=27;break}return t.next=25,h.json();case 25:return p=t.sent,t.abrupt("return",p.snapshot_id);case 27:t.next=32;break;case 29:t.prev=29,t.t0=t.catch(0),console.log(t.t0);case 32:case"end":return t.stop()}},t,null,[[0,29]])}))()}}}}();e.exports=s}.call(this,a(25)(e))},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),c=a.n(s),i=(a(17),a(2)),o=a(3),l=a(5),u=a(4),h=a(1),p=a(6),m=(a(18),a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).addTrack=a.addTrack.bind(Object(h.a)(a)),a.removeTrack=a.removeTrack.bind(Object(h.a)(a)),a.renderAction=a.renderAction.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"renderAction",value:function(){return this.props.isRemoval?r.a.createElement("button",{className:"Track-action",onClick:this.removeTrack},"-"):r.a.createElement("button",{className:"Track-action",onClick:this.addTrack},"+")}},{key:"render",value:function(){return r.a.createElement("div",{className:"Track"},r.a.createElement("div",{className:"Track-information"},r.a.createElement("h3",null,this.props.name),r.a.createElement("p",null,this.props.artist," | ",this.props.album)),this.renderAction())}}]),t}(r.a.Component)),d=(a(20),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TrackList"},this.props.tracks.map(function(t){return r.a.createElement(m,{key:t.id,artist:t.artist,album:t.album,name:t.name,onAdd:e.props.onAdd,track:t,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval})}))}}]),t}(r.a.Component)),f=(a(21),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"SearchResults"},r.a.createElement("h2",null,"Results"),r.a.createElement(d,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1}))}}]),t}(r.a.Component)),v=(a(22),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleNameChange=a.handleNameChange.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Playlist"},r.a.createElement("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),r.a.createElement(d,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),r.a.createElement("button",{className:"Playlist-save",onClick:this.props.onSave},"SAVE TO SPOTIFY"))}}]),t}(r.a.Component)),k=(a(23),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchTerm:""},a.search=a.search.bind(Object(h.a)(a)),a.handleTermChange=a.handleTermChange.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"search",value:function(){this.props.onSearch(this.state.searchTerm)}},{key:"handleTermChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"SearchBar"},r.a.createElement("input",{placeholder:"Enter A Song, Album, or Artist",onChange:this.handleTermChange}),r.a.createElement("button",{className:"SearchButton",onClick:this.search},"SEARCH"))}}]),t}(r.a.Component)),b=a(24);b.getAccessToken();var y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchResults:[],playlistName:"New Playlist",playlistTracks:[]},a.addTrack=a.addTrack.bind(Object(h.a)(a)),a.removeTrack=a.removeTrack.bind(Object(h.a)(a)),a.updatePlaylistName=a.updatePlaylistName.bind(Object(h.a)(a)),a.savePlaylist=a.savePlaylist.bind(Object(h.a)(a)),a.search=a.search.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addTrack",value:function(e){if(!this.state.playlistTracks.find(function(t){return t.id===e.id})){var t=this.state.playlistTracks;t.push({name:e.name,artist:e.artist,album:e.album,id:e.id,uri:e.uri}),this.setState({playlistTracks:t})}}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks.findIndex(function(t){return t.id===e.id});if(-1!==t){var a=this.state.playlistTracks;a.splice(t,1),this.setState({playlistTracks:a})}}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){console.log(this.state.playlistTracks.map(function(e){return e.uri})),b.savePlaylist(this.state.playlistName,this.state.playlistTracks.map(function(e){return e.uri}))}},{key:"search",value:function(e){var t=this;b.search(e).then(function(e){console.log(e),t.setState({searchResults:e})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ja",r.a.createElement("span",{className:"highlight"},"mmm"),"ing"),r.a.createElement("div",{className:"App"},r.a.createElement(k,{onSearch:this.search}),r.a.createElement("div",{className:"App-playlist"},r.a.createElement(f,{searchResults:this.state.searchResults,onAdd:this.addTrack}),r.a.createElement(v,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.20b29ee4.chunk.js.map