(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return d}));var n=r(3),a=r(7),c=(r(0),r(261)),s={},i={unversionedId:"smart-contracts/smart-contracts/StrategyAPI",id:"smart-contracts/smart-contracts/StrategyAPI",isDocsHomePage:!1,title:"StrategyAPI",description:"This interface is here for the keeper bot to use.",source:"@site/docs/v2/smart-contracts/smart-contracts/StrategyAPI.md",sourceDirName:"smart-contracts/smart-contracts",slug:"/smart-contracts/smart-contracts/StrategyAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/StrategyAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/docs/v2/smart-contracts/smart-contracts/StrategyAPI.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"RegistryAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/RegistryAPI"},next:{title:"VaultAPI",permalink:"/yearn-devdocs/v2/next/smart-contracts/smart-contracts/VaultAPI"}},o=[{value:"Functions",id:"functions",children:[{value:"name",id:"name",children:[]},{value:"vault",id:"vault",children:[]},{value:"want",id:"want",children:[]},{value:"apiVersion",id:"apiversion",children:[]},{value:"keeper",id:"keeper",children:[]},{value:"isActive",id:"isactive",children:[]},{value:"delegatedAssets",id:"delegatedassets",children:[]},{value:"estimatedTotalAssets",id:"estimatedtotalassets",children:[]},{value:"tendTrigger",id:"tendtrigger",children:[]},{value:"tend",id:"tend",children:[]},{value:"harvestTrigger",id:"harvesttrigger",children:[]},{value:"harvest",id:"harvest",children:[]}]},{value:"Events",id:"events",children:[{value:"Harvested",id:"harvested",children:[]}]}],l={toc:o};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This interface is here for the keeper bot to use."),Object(c.b)("h2",{id:"functions"},"Functions"),Object(c.b)("h3",{id:"name"},"name"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),Object(c.b)("h3",{id:"vault"},"vault"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function vault(\n  ) external returns (address)\n")),Object(c.b)("h3",{id:"want"},"want"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function want(\n  ) external returns (address)\n")),Object(c.b)("h3",{id:"apiversion"},"apiVersion"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),Object(c.b)("h3",{id:"keeper"},"keeper"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function keeper(\n  ) external returns (address)\n")),Object(c.b)("h3",{id:"isactive"},"isActive"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function isActive(\n  ) external returns (bool)\n")),Object(c.b)("h3",{id:"delegatedassets"},"delegatedAssets"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function delegatedAssets(\n  ) external returns (uint256)\n")),Object(c.b)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) external returns (uint256)\n")),Object(c.b)("h3",{id:"tendtrigger"},"tendTrigger"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function tendTrigger(\n  ) external returns (bool)\n")),Object(c.b)("h3",{id:"tend"},"tend"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function tend(\n  ) external\n")),Object(c.b)("h3",{id:"harvesttrigger"},"harvestTrigger"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function harvestTrigger(\n  ) external returns (bool)\n")),Object(c.b)("h3",{id:"harvest"},"harvest"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  function harvest(\n  ) external\n")),Object(c.b)("h2",{id:"events"},"Events"),Object(c.b)("h3",{id:"harvested"},"Harvested"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-solidity"},"  event Harvested(\n  )\n")))}d.isMDXComponent=!0},261:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,m=u["".concat(s,".").concat(p)]||u[p]||b[p]||c;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,s=new Array(c);s[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<c;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);