"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5817],{9693:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>f,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=e(7462),t=(e(7294),e(3905)),o=e(814),u=e(6526);const a={sidebar_position:4,description:"Circular Queues Operations"},s="Circular Queues",c={unversionedId:"c/journal/circular-queues",id:"c/journal/circular-queues",title:"Circular Queues",description:"Circular Queues Operations",source:"@site/docs/c/journal/circular-queues.mdx",sourceDirName:"c/journal",slug:"/c/journal/circular-queues",permalink:"/docs/c/journal/circular-queues",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Circular Queues Operations"},sidebar:"tutorialSidebar",previous:{title:"Infix to Postfix",permalink:"/docs/c/journal/infix-postfix"},next:{title:"Singly Linked List",permalink:"/docs/c/journal/linked-list"}},f={},p=[],d={toc:p};function l(n){let{components:r,...e}=n;return(0,t.kt)("wrapper",(0,i.Z)({},d,e,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"circular-queues"},"Circular Queues"),(0,t.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},u.Z))}l.isMDXComponent=!0},6526:(n,r,e)=>{e.d(r,{Z:()=>i});const i='#include <stdio.h>\n\n// GLOBAL VARIABLES\nint front = -1, rear = -1;\nint N;\n\n// FUNCTION PROTOTYPE\nvoid enqueue(int *ptr, int x);\nvoid dequeue(int *ptr);\nvoid display(int *ptr);\n\nint main()\n{\n    printf("Enter N : \\n");\n    scanf("%d", &N);\n    int ar[N], choice;\n    do\n    {\n        printf("\\nEnter Choice:");\n        printf("\\n1. Queue");\n        printf("\\n2. Dequeue");\n        printf("\\n3. Display");\n        printf("\\n4. Exit\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            int x;\n            printf("\\nEnter Element to Queue: ");\n            scanf("%d", &x);\n            enqueue(ar, x);\n            break;\n        }\n        case 2:\n        {\n            dequeue(ar);\n            break;\n        }\n        case 3:\n        {\n            display(ar);\n            break;\n        }\n        case 4:\n        {\n            printf(" ");\n            break;\n        }\n\n        default:\n        {\n            printf("\\nInvalid choice");\n            break;\n        }\n        }\n    } while (choice != 4);\n    printf("\\n");\n    return 0;\n}\n\n// ENQUEUE FUNCTION\nvoid enqueue(int *ptr, int x)\n{\n    if ((front == 0 && rear == N - 1) || (rear == front - 1))\n    {\n        printf("\\nOverflow Error");\n    }\n    else\n    {\n        if (rear == -1 && front == -1)\n        {\n            front = 0;\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else if (rear == N - 1 && front != 0)\n        {\n            rear = 0;\n            *(ptr + rear) = x;\n        }\n        else\n        {\n            rear++;\n            *(ptr + rear) = x;\n        }\n    }\n}\n\n// DEQUEUE FUNCTION\nvoid dequeue(int *ptr)\n{\n    if (front == -1 && rear == -1)\n    {\n        printf("\\nUnderflow Error");\n    }\n    else\n    {\n        if (front == rear)\n        {\n            printf("\\n%d is Dequeued", *(ptr + front));\n            front = -1;\n            rear = -1;\n        }\n        else\n        {\n            if (front == N - 1)\n            {\n                printf("\\n%d is Dequeued", *(ptr + front));\n                front = 0;\n            }\n\n            else\n            {\n                printf("\\n%d is Dequeued", *(ptr + front));\n                front = front + 1;\n            }\n        }\n    }\n}\n\n// DISPLAY FUNCTION\nvoid display(int *ptr)\n{\n    printf("\\nElements in Queue: \\n");\n    if (front == -1 && rear == -1)\n    {\n        printf("Queue is empty");\n        return;\n    }\n    printf("Queue elements : ");\n    if (front <= rear)\n    {\n        for (int i = front; i <= rear; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n    }\n    else\n    {\n        for (int i = front; i < N; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n        for (int i = 0; i <= rear; i++)\n        {\n            printf("%d ", *(ptr + i));\n        }\n    }\n}'}}]);