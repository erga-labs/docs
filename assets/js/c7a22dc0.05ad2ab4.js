"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9161],{4690:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),d=(t(7294),t(3905)),i=t(814),a=t(4253);const o={sidebar_position:5,description:"Linked List Operations"},c="Singly Linked List",l={unversionedId:"c/journal/linked-list",id:"c/journal/linked-list",title:"Singly Linked List",description:"Linked List Operations",source:"@site/docs/c/journal/linked-list.mdx",sourceDirName:"c/journal",slug:"/c/journal/linked-list",permalink:"/docs/c/journal/linked-list",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Linked List Operations"},sidebar:"tutorialSidebar",previous:{title:"Circular Queues",permalink:"/docs/c/journal/circular-queues"},next:{title:"Binary Search Tree",permalink:"/docs/c/journal/BST"}},s={},u=[],p={toc:u};function f(n){let{components:e,...t}=n;return(0,d.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"singly-linked-list"},"Singly Linked List"),(0,d.kt)(i.Z,{language:"c",mdxType:"CodeBlock"},a.Z))}f.isMDXComponent=!0},4253:(n,e,t)=>{t.d(e,{Z:()=>r});const r='#include <stdio.h>\n#include <stdlib.h>\nstruct NODE\n{\n    int data;\n    struct NODE *next;\n} typedef NODE;\nNODE *head = 0, *newNode;\n\nvoid display()\n{\n    if (head != 0)\n    {\n        NODE *current = head;\n        printf("List: ");\n        while (current != 0)\n        {\n            printf("%d ", current->data);\n            current = current->next;\n        }\n        printf("\\n");\n    }\n}\n\nvoid createNode()\n{\n    newNode = (NODE *)malloc(sizeof(NODE));\n    newNode->next = 0;\n    printf("\\nEnter Value to be Added: ");\n    scanf("%d", &(newNode->data));\n}\n\nvoid addNodeStart()\n{\n    createNode();\n    newNode->next = head;\n    head = newNode;\n}\n\nvoid addNodeEnd()\n{\n    createNode();\n    if (head == 0)\n    {\n        head = newNode;\n    }\n\n    NODE *current = head;\n    while (current->next != 0)\n    {\n        current = current->next;\n    }\n    current->next = newNode;\n    newNode->next = 0;\n}\n\nvoid addNodeAfter()\n{\n    int key;\n    printf("\\nEnter Value to be added after: ");\n    scanf("%d", &key);\n    createNode();\n    NODE *current = head;\n    while (current->data != key)\n    {\n        current = current->next;\n    }\n    newNode->next = current->next;\n    current->next = newNode;\n}\n\nvoid addNodeBefore()\n{\n    int key;\n    printf("\\nEnter Value to be added before: ");\n    scanf("%d", &key);\n    createNode();\n    NODE *current = head, *prev;\n    while (current->data != key)\n    {\n        prev = current;\n        current = current->next;\n    }\n    newNode->next = prev->next;\n    prev->next = newNode;\n}\n\nvoid deleteNodeEnd()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        NODE *current = head, *prev = 0;\n        while (current->next != 0)\n        {\n            prev = current;\n            current = current->next;\n        }\n        printf("\\nRemoved Element: %d\\n", current->data);\n        prev->next = 0;\n        free(current);\n    }\n}\n\nvoid deleteNodeStart()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        printf("\\nRemoved Element: %d\\n", head->data);\n        NODE *current = head;\n        head = current->next;\n        free(current);\n    }\n}\n\nvoid deleteNodeAt()\n{\n    if (head == 0)\n    {\n        printf("\\nERROR: No Element to Remove.");\n    }\n    else\n    {\n        int key, ctr = 0;\n        printf("\\nEnter Value to be removed: ");\n        scanf("%d", &key);\n        NODE *current = head, *prev;\n\n        while (current->data != key && current->next != 0)\n        {\n            prev = current;\n            current = current->next;\n            ctr++;\n        }\n        if (ctr == 0)\n        {\n            head = 0;\n            free(current);\n        }\n        else\n        {\n            prev->next = current->next;\n            free(current);\n        }\n    }\n}\n\nint main()\n{\n    int choice;\n    do\n    {\n        printf("\\nENTER CHOICE:");\n        printf("\\n1. Add Node at Start of List");\n        printf("\\n2. Add Node at End of List");\n        printf("\\n3. Add Node after key element");\n        printf("\\n4. Add Node before key element");\n        printf("\\n5. Delete Element from Start");\n        printf("\\n6. Delete Element from End");\n        printf("\\n7. Delete key Element");\n        printf("\\n8. EXIT\\n");\n        scanf("%d", &choice);\n        switch (choice)\n        {\n        case 1:\n        {\n            addNodeStart();\n            display();\n            break;\n        }\n        case 2:\n        {\n            addNodeEnd();\n            display();\n            break;\n        }\n        case 3:\n        {\n            addNodeAfter();\n            display();\n            break;\n        }\n        case 4:\n        {\n            addNodeBefore();\n            display();\n            break;\n        }\n        case 5:\n        {\n            deleteNodeStart();\n            display();\n            break;\n        }\n        case 6:\n        {\n            deleteNodeEnd();\n            display();\n            break;\n        }\n        case 7:\n        {\n            deleteNodeAt();\n            display();\n            break;\n        }\n        case 8:\n        {\n            printf("\\nExited.\\n");\n            break;\n        }\n        default:\n        {\n            printf("\\nInvalid Choice, Try again.\\n");\n            continue;\n        }\n        }\n    } while (choice != 8);\n    return 0;\n}'}}]);