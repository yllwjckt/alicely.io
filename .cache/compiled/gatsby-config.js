!function(e,t,n,o,r){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},f="function"==typeof i[o]&&i[o],l=f.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(t,n){if(!l[t]){if(!e[t]){var r="function"==typeof i[o]&&i[o];if(!n&&r)return r(t,!0);if(f)return f(t,!0);if(u&&"string"==typeof t)return u(t);var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}p.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},p.cache={};var c=l[t]=new s.Module(t);e[t][0].call(c.exports,p,c,c.exports,this)}return l[t].exports;function p(e){var t=p.resolve(e);return!1===t?{}:s(t)}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=l,s.parent=f,s.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(s,"root",{get:function(){return i[o]}}),i[o]=s;for(var a=0;a<t.length;a++)s(t[a]);if(n){var c=s(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define((function(){return c}))}}({jYWDk:[function(e,t,n){e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(n);const o={siteMetadata:{title:"alicely.io",siteUrl:"https://www.alicely.io"},graphqlTypegen:!0,plugins:["gatsby-plugin-postcss","gatsby-plugin-image",{resolve:"gatsby-omni-font-loader",options:{enableListener:!0,preconnect:["https://fonts.googleapis.com","https://fonts.gstatic.com"],web:[{name:"Playfair Display",file:"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"}]}}]};n.default=o},{"@parcel/transformer-js/src/esmodule-helpers.js":"iNk3N"}],iNk3N:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach((function(n){"default"===n||"__esModule"===n||t.hasOwnProperty(n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})})),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}]},["jYWDk"],"jYWDk","parcelRequire5e14");
//# sourceMappingURL=gatsby-config.js.map