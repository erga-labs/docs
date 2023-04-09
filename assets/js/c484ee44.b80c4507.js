"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[240],{9956:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=t(7462),d=(t(7294),t(3905)),a=t(814);const i={sidebar_position:2,description:"Singly Circular Linked List in C"},o="Singly Circular Linked List",c={unversionedId:"linkedlist/singly-circular",id:"linkedlist/singly-circular",title:"Singly Circular Linked List",description:"Singly Circular Linked List in C",source:"@site/docs/linkedlist/singly-circular.mdx",sourceDirName:"linkedlist",slug:"/linkedlist/singly-circular",permalink:"/docs/linkedlist/singly-circular",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Singly Circular Linked List in C"},sidebar:"tutorialSidebar",previous:{title:"Singly Linked List",permalink:"/docs/linkedlist/singly"},next:{title:"Journal",permalink:"/docs/category/journal"}},s={},l=[{value:"CASES IN INSERTION",id:"cases-in-insertion",level:2},{value:"CASES IN DELETION",id:"cases-in-deletion",level:2},{value:"CODE",id:"code",level:2}],u={toc:l};function f(n){let{components:e,...t}=n;return(0,d.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"singly-circular-linked-list"},"Singly Circular Linked List"),(0,d.kt)("h2",{id:"cases-in-insertion"},"CASES IN INSERTION"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"At Start of linkedlist"),(0,d.kt)("li",{parentName:"ol"},"At End of linkedlist"),(0,d.kt)("li",{parentName:"ol"},"After a defined(key) element"),(0,d.kt)("li",{parentName:"ol"},"Before a defined(key) element")),(0,d.kt)("h2",{id:"cases-in-deletion"},"CASES IN DELETION"),(0,d.kt)("ol",null,(0,d.kt)("li",{parentName:"ol"},"Delete Elements from Start"),(0,d.kt)("li",{parentName:"ol"},"Delete Elements from End"),(0,d.kt)("li",{parentName:"ol"},"Delete Inputted Elements")),(0,d.kt)("h2",{id:"code"},"CODE"),(0,d.kt)(a.Z,{language:"c",mdxType:"CodeBlock"},'// Generated by ChatGPT\n#include <stdio.h>\n#include <stdlib.h>\n\n// Node structure\nstruct Node\n{\n    int data;\n    struct Node *next;\n};\n\n// Global variables\nstruct Node *head = NULL;\n\n// Function to add a node at the start of the list\nvoid addAtStart(int data)\n{\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = head;\n    head = newNode;\n}\n\n// Function to add a node at the end of the list\nvoid addAtEnd(int data)\n{\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n\n    if (head == NULL)\n    {\n        head = newNode;\n        return;\n    }\n\n    struct Node *curr = head;\n    while (curr->next != NULL)\n    {\n        curr = curr->next;\n    }\n    curr->next = newNode;\n}\n\n// Function to add a node before a given node\nvoid addBefore(int key, int data)\n{\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n\n    if (head == NULL)\n    {\n        printf("List is empty\\n");\n        return;\n    }\n\n    if (head->data == key)\n    {\n        newNode->next = head;\n        head = newNode;\n        return;\n    }\n\n    struct Node *curr = head;\n    while (curr->next != NULL && curr->next->data != key)\n    {\n        curr = curr->next;\n    }\n\n    if (curr->next == NULL)\n    {\n        printf("Key not found\\n");\n        return;\n    }\n\n    newNode->next = curr->next;\n    curr->next = newNode;\n}\n\n// Function to add a node after a given node\nvoid addAfter(int key, int data)\n{\n    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));\n    newNode->data = data;\n    newNode->next = NULL;\n\n    if (head == NULL)\n    {\n        printf("List is empty\\n");\n        return;\n    }\n\n    struct Node *curr = head;\n    while (curr != NULL && curr->data != key)\n    {\n        curr = curr->next;\n    }\n\n    if (curr == NULL)\n    {\n        printf("Key not found\\n");\n        return;\n    }\n\n    newNode->next = curr->next;\n    curr->next = newNode;\n}\n\n// Function to delete the first node of the list\nvoid deleteStart()\n{\n    if (head == NULL)\n    {\n        printf("List is empty\\n");\n        return;\n    }\n\n    struct Node *temp = head;\n    head = head->next;\n    free(temp);\n}\n\n// Function to delete the last node of the list\nvoid deleteEnd()\n{\n    if (head == NULL)\n    {\n        printf("List is empty\\n");\n        return;\n    }\n\n    if (head->next == NULL)\n    {\n        free(head);\n        head = NULL;\n        return;\n    }\n\n    struct Node *curr = head;\n    while (curr->next->next != NULL)\n    {\n        curr = curr->next;\n    }\n    free(curr->next);\n    curr->next = NULL;\n}\n\n// Function to delete a node with a given key\nvoid deleteKey(int key)\n{\n    if (head == NULL)\n    {\n        printf("List is empty\\n");\n        return;\n    }\n\n    if (head->data == key)\n    {\n        struct Node *temp = head;\n        head = head->next;\n        free(temp);\n        return;\n    }\n\n    struct Node *curr = head;\n    while (curr->next != NULL && curr->next->data != key)\n    {\n        curr = curr->next;\n    }\n\n    if (curr->next == NULL)\n    {\n        printf("Key not found\\n");\n        return;\n    }\n\n    struct Node *temp = curr->next;\n    curr->next = curr->next->next;\n    free(temp);\n}\n\n// Function to print the list\nvoid printList()\n{\n    struct Node *curr = head;\n    while (curr != NULL)\n    {\n        printf("%d ", curr->data);\n        curr = curr->next;\n    }\n    printf("\\n");\n}\n\n// Main function\nint main()\n{\n    int choice, data, key;\n    while (1)\n    {\n        printf("\\n1. Add at start\\n2. Add at end\\n3. Add before\\n4. Add after\\n");\n        printf("5. Delete start\\n6. Delete end\\n7. Delete key\\n8. Print list\\n9. Exit\\n");\n        printf("Enter your choice: ");\n        scanf("%d", &choice);\n\n        switch (choice)\n        {\n        case 1:\n            printf("Enter data to add at start: ");\n            scanf("%d", &data);\n            addAtStart(data);\n            break;\n        case 2:\n            printf("Enter data to add at end: ");\n            scanf("%d", &data);\n            addAtEnd(data);\n            break;\n        case 3:\n            printf("Enter key before which to add data: ");\n            scanf("%d", &key);\n            printf("Enter data to add before %d: ", key);\n            scanf("%d", &data);\n            addBefore(key, data);\n            break;\n        case 4:\n            printf("Enter key after which to add data: ");\n            scanf("%d", &key);\n            printf("Enter data to add after %d: ", key);\n            scanf("%d", &data);\n            addAfter(key, data);\n            break;\n        case 5:\n            deleteStart();\n            break;\n        case 6:\n            deleteEnd();\n            break;\n        case 7:\n            printf("Enter key to delete: ");\n            scanf("%d", &key);\n            deleteKey(key);\n            break;\n        case 8:\n            printf("List: ");\n            printList();\n            break;\n        case 9:\n            exit(0);\n        default:\n            printf("Invalid choice\\n");\n        }\n    }\n\n    return 0;\n}'))}f.isMDXComponent=!0}}]);