"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{7081:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=e(7462),i=(e(7294),e(3905)),o=e(814);const r={sidebar_position:4,description:"Postfix Expressions Evaluation"},p="Postfix Evaluation",a={unversionedId:"stacks/postfix-evaluate",id:"stacks/postfix-evaluate",title:"Postfix Evaluation",description:"Postfix Expressions Evaluation",source:"@site/docs/stacks/postfix-evaluate.mdx",sourceDirName:"stacks",slug:"/stacks/postfix-evaluate",permalink:"/docs/stacks/postfix-evaluate",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Postfix Expressions Evaluation"},sidebar:"tutorialSidebar",previous:{title:"Infix to Postfix Conversion",permalink:"/docs/stacks/postfix-convert"},next:{title:"Queues",permalink:"/docs/category/queues"}},u={},c=[],l={toc:c};function f(n){let{components:t,...e}=n;return(0,i.kt)("wrapper",(0,s.Z)({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"postfix-evaluation"},"Postfix Evaluation"),(0,i.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},"#include <stdio.h>\n#include <ctype.h>\n\nchar stack[100];\nint top = -1;\n\nvoid push(char x)\n{\n    top++;\n    stack[top] = x;\n}\n\nchar pop()\n{\n    if (top == -1)\n    {\n        printf(\"\\nUnderflow Error\");\n        return -1;\n    }\n\n    else\n    {\n\n        return stack[top--];\n    }\n}\n\nint priority(char x)\n{\n    if (x == '(')\n    {\n        return 0;\n    }\n\n    if (x == '+' || x == '-')\n    {\n        return 1;\n    }\n\n    if (x == '*' || x == '/')\n    {\n        return 2;\n    }\n    return 0;\n}\n\nint main()\n{\n    char exp[100];\n    char *e, x;\n    int num;\n    printf(\"Enter the expression : \");\n    scanf(\"%s\", exp);\n    printf(\"\\n\");\n    e = exp;\n\n    while (*e != '\\0')\n    {\n        if (isdigit(*e))\n        {\n            // typecasting\n            num = *e - '0';\n            push(num);\n        }\n        else\n        {\n            int result;\n            int op1 = (int)pop();\n            int op2 = (int)pop();\n            if (*e == '+')\n            {\n                result = op2 + op1;\n            }\n            else if (*e == '-')\n            {\n                result = op2 - op1;\n            }\n            else if (*e == '*')\n            {\n                result = op2 * op1;\n            }\n            else if (*e == '/')\n            {\n                result = op2 / op1;\n            }\n            else if (*e == '%')\n            {\n                result = op2 % op1;\n            }\n            else if (*e == '^')\n            {\n                result = op2 ^ op1;\n            }\n            push((char)result);\n        }\n        e++;\n    }\n\n    printf(\"\\nThe result of expression %s  =  %d\\n\\n\", exp, pop());\n    printf(\"\\n\");\n    return 0;\n}"))}f.isMDXComponent=!0}}]);