(function(k){var o=String.prototype.trim,l=function(a,b){for(var f=[];0<b;f[--b]=a);return f.join("")},c=function(a){return function(){for(var b=Array.prototype.slice.call(arguments),f=0;f<b.length;f++)b[f]=null==b[f]?"":""+b[f];return a.apply(null,b)}},m=function(){function a(a){return Object.prototype.toString.call(a).slice(8,-1).toLowerCase()}var b=function(){b.cache.hasOwnProperty(arguments[0])||(b.cache[arguments[0]]=b.parse(arguments[0]));return b.format.call(null,b.cache[arguments[0]],arguments)};
b.format=function(b,n){var h=1,d=b.length,e="",c=[],i,j,g,k;for(i=0;i<d;i++)if(e=a(b[i]),"string"===e)c.push(b[i]);else if("array"===e){g=b[i];if(g[2]){e=n[h];for(j=0;j<g[2].length;j++){if(!e.hasOwnProperty(g[2][j]))throw m('[_.sprintf] property "%s" does not exist',g[2][j]);e=e[g[2][j]]}}else e=g[1]?n[g[1]]:n[h++];if(/[^s]/.test(g[8])&&"number"!=a(e))throw m("[_.sprintf] expecting number but found %s",a(e));switch(g[8]){case "b":e=e.toString(2);break;case "c":e=String.fromCharCode(e);break;case "d":e=
parseInt(e,10);break;case "e":e=g[7]?e.toExponential(g[7]):e.toExponential();break;case "f":e=g[7]?parseFloat(e).toFixed(g[7]):parseFloat(e);break;case "o":e=e.toString(8);break;case "s":e=(e=""+e)&&g[7]?e.substring(0,g[7]):e;break;case "u":e=Math.abs(e);break;case "x":e=e.toString(16);break;case "X":e=e.toString(16).toUpperCase()}e=/[def]/.test(g[8])&&g[3]&&0<=e?"+"+e:e;j=g[4]?"0"==g[4]?"0":g[4].charAt(1):" ";k=g[6]-(""+e).length;j=g[6]?l(j,k):"";c.push(g[5]?e+j:j+e)}return c.join("")};b.cache={};
b.parse=function(a){for(var b=[],h=[],c=0;a;){if(null!==(b=/^[^\x25]+/.exec(a)))h.push(b[0]);else if(null!==(b=/^\x25{2}/.exec(a)))h.push("%");else if(null!==(b=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(a))){if(b[2]){var c=c|1,e=[],d=b[2],i=[];if(null!==(i=/^([a-z_][a-z_\d]*)/i.exec(d)))for(e.push(i[1]);""!==(d=d.substring(i[0].length));)if(null!==(i=/^\.([a-z_][a-z_\d]*)/i.exec(d)))e.push(i[1]);else if(null!==(i=/^\[(\d+)\]/.exec(d)))e.push(i[1]);
else throw"[_.sprintf] huh?";else throw"[_.sprintf] huh?";b[2]=e}else c|=2;if(3===c)throw"[_.sprintf] mixing positional and named placeholders is not (yet) supported";h.push(b)}else throw"[_.sprintf] huh?";a=a.substring(b[0].length)}return h};return b}(),d={VERSION:"2.0.0",isBlank:c(function(a){return/^\s*$/.test(a)}),stripTags:c(function(a){return a.replace(/<\/?[^>]+>/ig,"")}),capitalize:c(function(a){return a.charAt(0).toUpperCase()+a.substring(1).toLowerCase()}),chop:c(function(a,b){for(var b=
1*b||0||a.length,f=[],c=0;c<a.length;)f.push(a.slice(c,c+b)),c+=b;return f}),clean:c(function(a){return d.strip(a.replace(/\s+/g," "))}),count:c(function(a,b){for(var f=0,c,d=0;d<a.length;)c=a.indexOf(b,d),0<=c&&f++,d=d+(0<=c?c:0)+b.length;return f}),chars:c(function(a){return a.split("")}),escapeHTML:c(function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}),unescapeHTML:c(function(a){return a.replace(/&lt;/g,"<").replace(/&gt;/g,
">").replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,"&")}),escapeRegExp:c(function(a){return a.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1")}),insert:c(function(a,b,f){a=a.split("");a.splice(1*b||0,0,f);return a.join("")}),include:c(function(a,b){return-1!==a.indexOf(b)}),join:c(function(a){var b=Array.prototype.slice.call(arguments);return b.join(b.shift())}),lines:c(function(a){return a.split("\n")}),reverse:c(function(a){return Array.prototype.reverse.apply((""+a).split("")).join("")}),
splice:c(function(a,b,f,c){a=a.split("");a.splice(1*b||0,1*f||0,c);return a.join("")}),startsWith:c(function(a,b){return a.length>=b.length&&a.substring(0,b.length)===b}),endsWith:c(function(a,b){return a.length>=b.length&&a.substring(a.length-b.length)===b}),succ:c(function(a){var b=a.split("");b.splice(a.length-1,1,String.fromCharCode(a.charCodeAt(a.length-1)+1));return b.join("")}),titleize:c(function(a){for(var a=a.split(" "),b,f=0;f<a.length;f++)b=a[f].split(""),"undefined"!==typeof b[0]&&(b[0]=
b[0].toUpperCase()),f+1===a.length?a[f]=b.join(""):a[f]=b.join("")+" ";return a.join("")}),camelize:c(function(a){return d.trim(a).replace(/(\-|_|\s)+(.)?/g,function(a,f,c){return c?c.toUpperCase():""})}),underscored:function(a){return d.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/\-|\s+/g,"_").toLowerCase()},dasherize:function(a){return d.trim(a).replace(/([a-z\d])([A-Z]+)/g,"$1-$2").replace(/^([A-Z]+)/,"-$1").replace(/\_|\s+/g,"-").toLowerCase()},humanize:function(a){return d.capitalize(this.underscored(a).replace(/_id$/,
"").replace(/_/g," "))},trim:c(function(a,b){if(!b&&o)return o.call(a);b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+|["+b+"]+$","g"),"")}),ltrim:c(function(a,b){b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("^["+b+"]+","g"),"")}),rtrim:c(function(a,b){b=b?d.escapeRegExp(b):"\\s";return a.replace(RegExp("["+b+"]+$","g"),"")}),truncate:c(function(a,b,f){b=1*b||0;return a.length>b?a.slice(0,b)+(f||"..."):a}),prune:c(function(a,b,f){var c="",h="",h=0,f=f||"...",b=1*b||0;for(h in a)c+=
a[h].toUpperCase()!=a[h].toLowerCase()||/[-_\d]/.test(a[h])?"A":" ";h=0===c.substring(b-1,b+1).search(/^\w\w$/)?d.rtrim(c.slice(0,b).replace(/([\W][\w]*)$/,"")):d.rtrim(c.slice(0,b));h=h.replace(/\W+$/,"");return h.length+f.length>a.length?a:a.substring(0,h.length)+f}),words:function(a,b){return(""+a).split(b||" ")},pad:c(function(a,b,f,c){var d="",d=0,b=1*b||0;f?1<f.length&&(f=f.charAt(0)):f=" ";switch(c){case "right":d=b-a.length;d=l(f,d);a+=d;break;case "both":d=b-a.length;d={left:l(f,Math.ceil(d/
2)),right:l(f,Math.floor(d/2))};a=d.left+a+d.right;break;default:d=b-a.length,d=l(f,d),a=d+a}return a}),lpad:function(a,b,c){return d.pad(a,b,c)},rpad:function(a,b,c){return d.pad(a,b,c,"right")},lrpad:function(a,b,c){return d.pad(a,b,c,"both")},sprintf:m,vsprintf:function(a,b){b.unshift(a);return m.apply(null,b)},toNumber:function(a,b){var c;c=1*(1*a||0).toFixed(1*b||0)||0;return!(0===c&&"0"!==a&&0!==a)?c:Number.NaN},strRight:c(function(a,b){var c=!b?-1:a.indexOf(b);return-1!=c?a.slice(c+b.length,
a.length):a}),strRightBack:c(function(a,b){var c=!b?-1:a.lastIndexOf(b);return-1!=c?a.slice(c+b.length,a.length):a}),strLeft:c(function(a,b){var c=!b?-1:a.indexOf(b);return-1!=c?a.slice(0,c):a}),strLeftBack:c(function(a,b){var c=a.lastIndexOf(b);return-1!=c?a.slice(0,c):a}),exports:function(){var a={},b;for(b in this)if(this.hasOwnProperty(b)&&!("include"==b||"contains"==b||"reverse"==b))a[b]=this[b];return a}};d.strip=d.trim;d.lstrip=d.ltrim;d.rstrip=d.rtrim;d.center=d.lrpad;d.ljust=d.lpad;d.rjust=
d.rpad;d.contains=d.include;"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(module.exports=d),exports._s=d):"undefined"!==typeof k._?(k._.string=d,k._.str=k._.string):k._={string:d,str:d}})(this||window);