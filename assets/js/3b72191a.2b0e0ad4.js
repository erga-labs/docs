"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8349],{3678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),i=t(1151),r=t(9163);const s={title:"File Operations",sidebar_position:4,description:"File operations in Python"},a="Python",l={id:"python/qbank/4",title:"File Operations",description:"File operations in Python",source:"@site/docs/four/python/qbank/4.mdx",sourceDirName:"python/qbank",slug:"/python/qbank/4",permalink:"/docs/four/python/qbank/4",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"File Operations",sidebar_position:4,description:"File operations in Python"},sidebar:"tutorialSidebar",previous:{title:"String operations",permalink:"/docs/four/python/qbank/3"},next:{title:"Artificial Intelligence",permalink:"/docs/four/category/artificial-intelligence"}},d={},c=[];function p(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"python",children:(0,o.jsx)(r.Z,{name:"banner",description:"File Operations",children:"Python"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Write a program that demonstrates file operations in Python."}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\ndef append_to_file(filename, content):\n    with open(filename, "a") as file:\n        file.write(content + "\\n")\n\ndef delete_file(filename):\n    os.remove(filename)\n    print(\'File deleted successfully!\')\n\nfilename = "test.txt"\n\nappend_to_file(filename, "This is some appended text.")\n\ndelete_file(filename)\n'})}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsx)(n.p,{children:"To compile and run the program, you can use the following commands:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python3 foo.py\n"})})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["You require a file named ",(0,o.jsx)(n.code,{children:"test.txt"})," in the same directory as the program to run the program."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9163:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var o=t(4996),i=t(5893);const r=e=>{let{name:n,description:t,children:r}=e;const s=(0,o.Z)(`/images/${n}.png`);return(0,i.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,i.jsx)("img",{src:s,alt:s,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,i.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,i.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:t})]})}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(7294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);