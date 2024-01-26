"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[3789],{2087:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(5893),i=t(1151),l=t(9163);const o={title:"Lists",sidebar_position:3,description:"list operations"},r="Python",d={id:"python/list",title:"Lists",description:"list operations",source:"@site/docs/four/python/list.mdx",sourceDirName:"python",slug:"/python/list",permalink:"/docs/four/python/list",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Lists",sidebar_position:3,description:"list operations"},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/four/python/Basics"},next:{title:"Journal",permalink:"/docs/four/category/journal-1"}},c={},a=[{value:"List Operations",id:"list-operations",level:2},{value:"List Creation",id:"list-creation",level:3},{value:"List Access",id:"list-access",level:3},{value:"List Update",id:"list-update",level:3},{value:"List Delete",id:"list-delete",level:3},{value:"List Methods",id:"list-methods",level:3},{value:"List Functions",id:"list-functions",level:3},{value:"List Comprehension",id:"list-comprehension",level:3},{value:"List Sorting",id:"list-sorting",level:3},{value:"List Reversing",id:"list-reversing",level:3}];function m(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"python",children:(0,s.jsx)(l.Z,{name:"banner",description:"Lists",children:"Python"})}),"\n",(0,s.jsx)(n.h2,{id:"list-operations",children:"List Operations"}),"\n",(0,s.jsx)(n.h3,{id:"list-creation",children:"List Creation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# empty list\nempty_list = []\n\n# list of integers\nint_list = [1, 2, 3]\n\n# list of strings\nstr_list = ["a", "b", "c"]\n\n# list of mixed data types\nmixed_list = [1, "a", 2, "b", 3, "c"]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"list-access",children:"List Access"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# access first element\nfirst_element = mixed_list[0]\n\n# access last element\nlast_element = mixed_list[-1]\n\n# access elements from index 1 to 3\nsub_list = mixed_list[1:4]\n\n# access elements from index 1 to end\nsub_list = mixed_list[1:]\n\n# access elements from start to index 3\nsub_list = mixed_list[:4]\n\n# access elements from index 1 to 3 with step 2\nsub_list = mixed_list[1:4:2]\n\n# access elements from index 1 to end with step 2\nsub_list = mixed_list[1::2]\n\n# access elements from start to index 3 with step 2\nsub_list = mixed_list[:4:2]\n\n# access elements from start to end with step 2\nsub_list = mixed_list[::2]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-update",children:"List Update"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'# update first element\nmixed_list[0] = 4\n\n# update last element\nmixed_list[-1] = "d"\n\n# update elements from index 1 to 3\nmixed_list[1:4] = [5, "e", 6]\n\n# update elements from index 1 to end\nmixed_list[1:] = [5, "e", 6]\n\n# update elements from start to index 3\nmixed_list[:4] = [5, "e", 6]\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"list-delete",children:"List Delete"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# delete first element\ndel mixed_list[0]\n\n# delete last element\ndel mixed_list[-1]\n\n# delete elements from index 1 to 3\ndel mixed_list[1:4]\n\n...\n\n# delete entire list\ndel mixed_list\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-methods",children:"List Methods"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# append element to end of list\nmixed_list.append(4)\n\n# insert element at index 1\nmixed_list.insert(1, 5)\n\n# remove first occurence of element\nmixed_list.remove(5)\n\n# remove element at index 1\nmixed_list.pop(1)\n\n# remove last element\nmixed_list.pop()\n\n# reverse list\nmixed_list.reverse()\n\n# sort list\nmixed_list.sort()\n\n# clear list\nmixed_list.clear()\n\n# copy list\nmixed_list.copy()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-functions",children:"List Functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# get length of list\nlen(mixed_list)\n\n# get maximum element\nmax(mixed_list)\n\n# get minimum element\nmin(mixed_list)\n\n# get sum of elements\nsum(mixed_list)\n\n# get index of first occurence of element\nmixed_list.index(5)\n\n# count occurences of element\nmixed_list.count(5)\n\n# check if element exists in list\n5 in mixed_list\n\n# check if element does not exist in list\n5 not in mixed_list\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-comprehension",children:"List Comprehension"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"# create list of squares of numbers from 1 to 10\nsquares = [x**2 for x in range(1, 11)]\n\n# create list of even numbers from 1 to 10\neven_numbers = [x for x in range(1, 11) if x % 2 == 0]\n\n# create list of tuples of numbers from 1 to 10\n# where first element is number and second element is square of number\nnumber_squares = [(x, x**2) for x in range(1, 11)]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-sorting",children:"List Sorting"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"list = [1,4,2,3,5 ]\nlist.sort(key=None, reverse=False)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"output: [1, 2, 3, 4, 5]"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"list = [1,4,2,3,5 ]\nlist.sort(key=None, reverse=True)\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"output: [5, 4, 3, 2, 1]"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"list-reversing",children:"List Reversing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"list = [1,4,2,3,5 ]\nlist.reverse()\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"output: [5, 3, 2, 4, 1]"}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},9163:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var s=t(4996),i=t(5893);const l=e=>{let{name:n,description:t,children:l}=e;const o=(0,s.Z)(`/images/${n}.png`);return(0,i.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,i.jsx)("img",{src:o,alt:o,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,i.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:l}),(0,i.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:t})]})}}}]);