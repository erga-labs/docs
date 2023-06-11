"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3402],{2134:(n,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var e=o(7462),i=(o(7294),o(3905)),s=o(814);const a={sidebar_position:1,description:"Stack based Puzzle"},r="Tower of Hanoi",c={unversionedId:"c/stacks/hanoiTower",id:"c/stacks/hanoiTower",title:"Tower of Hanoi",description:"Stack based Puzzle",source:"@site/docs/c/stacks/hanoiTower.mdx",sourceDirName:"c/stacks",slug:"/c/stacks/hanoiTower",permalink:"/docs/c/stacks/hanoiTower",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Stack based Puzzle"},sidebar:"tutorialSidebar",previous:{title:"Stacks",permalink:"/docs/category/stacks"},next:{title:"Stack",permalink:"/docs/c/stacks/"}},d={},p=[],u={toc:p};function k(n){let{components:t,...o}=n;return(0,i.kt)("wrapper",(0,e.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tower-of-hanoi"},"Tower of Hanoi"),(0,i.kt)("p",null,"Find a visual representation of solution of Tower of Hanoi ",(0,i.kt)("a",{parentName:"p",href:"https://yongdanielliang.github.io/animation/web/TowerOfHanoi.html"},"here")),(0,i.kt)(s.Z,{language:"c",mdxType:"CodeBlock"},'#include <stdio.h>\nint N;\n\n// HANOI FUNCTION\nvoid Hanoi(int N, char src, char dest, char aux)\n{\n    // CHECK IF ONE DISK PRESENT\n    if (N == 1)\n    {\n        printf("\\nMove disk 1 from rod %c to rod %c", src, dest);\n        return;\n    }\n    Hanoi(N - 1, src, aux, dest);\n    printf("\\nMove disk %d from rod %c to rod %c", N, src, dest);\n    Hanoi(N - 1, aux, dest, src);\n}\nint main()\n{\n    printf("Enter the number of Disks: ");\n    scanf("%d", &N);\n    printf("\\n");\n    printf("Moves:");\n    Hanoi(N, \'A\', \'C\', \'B\');\n    printf("\\n");\n\n    return 0;\n}'))}k.isMDXComponent=!0}}]);