(()=>{"use strict";function e(){return e=this,t=void 0,r=function(){var e;return function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,(function(t){switch(t.label){case 0:return[4,fetch("https://gist.githubusercontent.com/lilla-nemeth/888f537b4a9f52ddd97a369948b74c0a/raw/97f179c8fc37a8ba0ce1b0c891f102bc9cb32448/images.json")];case 1:if(!(e=t.sent()).ok)throw new Error("Fetching images has failed");return[4,e.json()];case 2:return[2,t.sent()]}}))},new((n=void 0)||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}));var e,t,n,r}var t,n,r,a,o=function(e){var t=e.el,n=e.elClassName,r=e.elId,a=e.elTextContent,o=e.elLoading,i=e.elSrc,c=document.createElement(t);return Object.assign(c,{className:n||"",id:r||"",textContent:a||"",loading:o||"",src:i||""}),c},i=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},l=function(e){return i(void 0,void 0,void 0,(function(){var t,n;return c(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch(e.url)];case 1:return(t=r.sent()).ok&&(e.url=t.url),[3,3];case 2:return n=r.sent(),console.error("Failed to fetch original image URLs",n),[3,3];case 3:return[2]}}))}))},u=function(e,t){var n=t instanceof MouseEvent?t.pageX:t.touches[0].pageX,r=t instanceof MouseEvent?t.pageY:t.touches[0].pageY,a=e.offsetWidth,o=e.offsetHeight,i=window.innerWidth,c=window.innerHeight;n+a>i&&(n=i-a),r+o>c&&(r=c-o),e.style.display="block",e.style.left="".concat(n,"px"),e.style.top="".concat(r,"px")},s=function(e){var t,n=e.eventTarget,r=e.arr,a=n.closest(".image-wrapper");if(a){var o=null===(t=a.dataset)||void 0===t?void 0:t.id;return r.find((function(e){return e.id===Number(o)}))}},f=function(e){return new Promise((function(t){var n=e.eventTarget.closest(".image-wrapper");if(n){var r=n.querySelector(".image-text-container"),a=n.querySelector(".image-text"),o=function(e){var t=e.rowNumber,n=e.lengthNumber,r=e.className,a=e.text,o=document.createElement("textarea");return o.rows=t,o.maxLength=n,o.className=r,o.value=a,o}({rowNumber:4,lengthNumber:85,className:"image-textarea",text:a.textContent});a.innerHTML=o.value,r.appendChild(o),o.focus(),o.select(),a.style.display="none",o.addEventListener("blur",(function(){var e=o.value.trim();e&&(a.textContent=e),a.style.display="block",o.remove(),t(e)})),o.addEventListener("keypress",(function(e){"Enter"===e.key&&o.blur()}))}}))},p=function(e){var t=e.arr;return function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}([Object.keys(t[0]).join(",")],t.map((function(e){return Object.values(e).join(",")})),!0).join("\n")},d=document.getElementById("content-container"),v=[];t=void 0,n=void 0,a=function(){var t;return function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e()];case 1:return v=n.sent(),r={images:v,container:d},i(void 0,void 0,void 0,(function(){var e,t,n;return c(this,(function(a){switch(a.label){case 0:return e=r.images,t=r.container,[4,Promise.all(e.map(l))];case 1:return a.sent(),n=o({el:"div",elClassName:"image-container"}),e.forEach((function(e){var t=function(e){var t=o({el:"div",elClassName:"image-wrapper",elId:"image-text-".concat(e.id)});t.setAttribute("data-id",e.id.toString());var n=o({el:"img",elClassName:"image",elLoading:"lazy",elSrc:e.url}),r=o({el:"div",elClassName:"image-text-container"}),a=o({el:"p",elClassName:"image-text",elTextContent:e.text});return t.appendChild(n),t.appendChild(r),r.appendChild(a),t}(e);n.appendChild(t)})),t.appendChild(n),[2]}}))})),[3,3];case 2:throw t=n.sent(),console.log(t),new Error;case 3:return[2]}var r}))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,c)}l((a=a.apply(t,n||[])).next())}));var h=function(){var e=o({el:"div",elClassName:"context-menu-wrapper",elId:"context-menu-wrapper"}),t=o({el:"ul",elClassName:"context-menu",elId:"context-menu"});return[{element:"li",textContent:"Delete",id:"context-menu-delete",className:"context-menu-actions"},{element:"li",textContent:"Edit Text",id:"context-menu-edit",className:"context-menu-actions"},{element:"li",textContent:"Export List to CSV",id:"context-menu-csv",className:"context-menu-actions"}].forEach((function(e){var n=o({el:e.element,elTextContent:e.textContent,elId:e.id,elClassName:e.className});t.appendChild(n)})),e.appendChild(t),e}();document.body.appendChild(h);var b=null;d.addEventListener("contextmenu",(function(e){(b=e.target).closest(".image-wrapper")&&(e.preventDefault(),u(h,e))})),d.addEventListener("touchstart",(function(e){if((b=e.target).closest(".image-wrapper")){e.preventDefault();var t=setTimeout((function(){u(h,e)}),200);b.addEventListener("touchend",(function(){return clearTimeout(t)}),{once:!0})}})),document.addEventListener("click",(function(e){var t,n=e.target;if(b){switch(n.id){case"context-menu-edit":f({eventTarget:b}),t={eventTarget:b,arr:v},function(e,t,n,r){new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function c(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))}(void 0,void 0,void 0,(function(){var e,n,r,a,o;return function(e,t){var n,r,a,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=c(0),i.throw=c(1),i.return=c(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(l){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(o=0)),o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,(function(i){switch(i.label){case 0:return(r=s({eventTarget:e=t.eventTarget,arr:n=t.arr}))&&(a=n.indexOf(r))>-1?[4,f({eventTarget:e})]:[3,2];case 1:o=i.sent(),n[a].text=o,i.label=2;case 2:return[2]}}))}));break;case"context-menu-delete":!function(e){var t=e.arr,n=s({eventTarget:e.eventTarget,arr:t});if(n){var r=t.indexOf(n);r>-1&&t.splice(r,1)}}({eventTarget:b,arr:v}),function(e){var t=e.eventTarget,n=e.styleClass,r=null==t?void 0:t.closest(n);null==r||r.remove()}({eventTarget:b,styleClass:".image-wrapper"});break;case"context-menu-csv":!function(e){var t=e.filename,n=(0,e.convertToCsv)({arr:e.array}),r=new Blob([n],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(r),o=document.createElement("a");o.setAttribute("download",t),o.href=a,o.click(),URL.revokeObjectURL(a)}({array:v,filename:"list.csv",convertToCsv:p})}b=null}h.style.display="none"})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&h&&(h.style.display="none")}))})();