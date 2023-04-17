"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[117],{8158:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var r=t(7462),o=(t(7294),t(3905)),i=t(814),a=t(7682);const d={sidebar_position:6,description:"Binary Search Tree Operations"},s="Binary Search Tree",p={unversionedId:"journal/BST",id:"journal/BST",title:"Binary Search Tree",description:"Binary Search Tree Operations",source:"@site/docs/journal/BST.mdx",sourceDirName:"journal",slug:"/journal/BST",permalink:"/docs/journal/BST",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"Binary Search Tree Operations"},sidebar:"tutorialSidebar",previous:{title:"Singly Linked List",permalink:"/docs/journal/linked-list"},next:{title:"Binary Search",permalink:"/docs/journal/BinarySearch"}},l={},c=[],f={toc:c};function h(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"binary-search-tree"},"Binary Search Tree"),(0,o.kt)(i.Z,{language:"c",mdxType:"CodeBlock"},a.Z))}h.isMDXComponent=!0},7682:(n,e,t)=>{t.d(e,{Z:()=>r});const r='#include <stdio.h>\n#include <stdlib.h>\n\n// structure of a node\nstruct node\n{\n    int data;\n    struct node *left;\n    struct node *right;\n} typedef NODE;\n\n// globally initialized root pointer\nNODE *root = NULL;\n\n// function prototyping\nNODE *createNode(int);\nvoid deleteNode(int key);\nvoid insert(int);\nvoid inOrder(NODE *);\nvoid preOrder(NODE *);\nvoid postOrder(NODE *);\nint getData();\nint main()\n{\n    int userChoice;\n    int data;\n    NODE *result = NULL;\n\n    do\n    {\n        printf("\\n1. Insert Element");\n        printf("\\n2. Display ~INORDER ");\n        printf("\\n3. Display ~POSTORDER ");\n        printf("\\n4. Display ~PREORDER ");\n        printf("\\n5. Delete Element ");\n        printf("\\n6. Exit");\n\n        printf("\\n\\nEnter Your Choice: ");\n        scanf("%d", &userChoice);\n        printf("\\n");\n\n        switch (userChoice)\n        {\n        case 1:\n            data = getData();\n            insert(data);\n            break;\n        case 2:\n            inOrder(root);\n            break;\n\n        case 3:\n            postOrder(root);\n            break;\n\n        case 4:\n            preOrder(root);\n            break;\n\n        case 5:\n        {\n            int key;\n            printf("\\n\\nEnter Element to delete: ");\n            scanf("%d", &key);\n            deleteNode(key);\n            break;\n        }\n\n        case 6:\n            printf("\\n\\nProgram was terminated");\n            break;\n\n        default:\n            printf("\\n\\tInvalid Choice");\n            break;\n        }\n\n    } while (userChoice != 6);\n\n    return 0;\n}\n// creates a new node\nNODE *createNode(int data)\n{\n    NODE *newNode = (NODE *)malloc(sizeof(NODE));\n\n    newNode->data = data;\n    newNode->left = NULL;\n    newNode->right = NULL;\n\n    return newNode;\n}\n\n// inserts the data in the BST\nvoid insert(int data)\n{\n    NODE *newNode = createNode(data);\n\n    if (root == NULL)\n    {\n        root = newNode;\n        printf("\\n* node having data %d was inserted", data);\n        return;\n    }\n\n    NODE *temp = root;\n    NODE *prev = NULL;\n\n    // traverse through the BST to get the correct position for insertion\n    while (temp != NULL)\n    {\n        prev = temp;\n        if (data > temp->data)\n        {\n            temp = temp->right;\n        }\n        else\n        {\n            temp = temp->left;\n        }\n    }\n    // found the last node where the new node should insert\n    if (data > prev->data)\n    {\n        prev->right = newNode;\n    }\n    else\n    {\n        prev->left = newNode;\n    }\n\n    printf("\\n* node having data %d was inserted", data);\n}\nvoid inOrder(NODE *root)\n{\n    if (root == NULL)\n    {\n        return;\n    }\n    inOrder(root->left);\n    printf("%d ", root->data);\n    inOrder(root->right);\n}\nvoid preOrder(NODE *root)\n{\n    if (root == NULL)\n    {\n        return;\n    }\n    printf("%d ", root->data);\n    preOrder(root->left);\n    preOrder(root->right);\n}\n\n// postOrder traversal of the BST\nvoid postOrder(NODE *root)\n{\n    if (root == NULL)\n    {\n        return;\n    }\n    postOrder(root->left);\n    postOrder(root->right);\n    printf("%d ", root->data);\n}\n\n// getting data from the user\nint getData()\n{\n    int data;\n    printf("\\nEnter Data: ");\n    scanf("%d", &data);\n    return data;\n}\n\n// delete a node\nvoid deleteNode(int key)\n{\n    NODE *temp = root;\n    NODE *parent = NULL;\n\n    // find the node to delete\n    while (temp != NULL && temp->data != key)\n    {\n        parent = temp;\n        if (key > temp->data)\n        {\n            temp = temp->right;\n        }\n        else\n        {\n            temp = temp->left;\n        }\n    }\n\n    // node not found\n    if (temp == NULL)\n    {\n        printf("\\n* node with key %d not found", key);\n        return;\n    }\n\n    // node to delete has no children\n    if (temp->left == NULL && temp->right == NULL)\n    {\n        // node to delete is the root node\n        if (temp == root)\n        {\n            root = NULL;\n        }\n        else if (temp == parent->left)\n        {\n            parent->left = NULL;\n        }\n        else\n        {\n            parent->right = NULL;\n        }\n        free(temp);\n    }\n    // node to delete has one child\n    else if (temp->left == NULL || temp->right == NULL)\n    {\n        NODE *child = temp->left ? temp->left : temp->right;\n\n        // node to delete is the root node\n        if (temp == root)\n        {\n            root = child;\n        }\n        else if (temp == parent->left)\n        {\n            parent->left = child;\n        }\n        else\n        {\n            parent->right = child;\n        }\n        free(temp);\n    }\n    // node to delete has two children\n    else\n    {\n        NODE *successor = temp->right;\n        parent = temp;\n\n        // find the inorder successor of the node to delete\n        while (successor->left != NULL)\n        {\n            parent = successor;\n            successor = successor->left;\n        }\n\n        temp->data = successor->data;\n\n        // delete the inorder successor\n        if (parent->left == successor)\n        {\n            parent->left = successor->right;\n        }\n        else\n        {\n            parent->right = successor->right;\n        }\n        free(successor);\n    }\n\n    printf("\\n* node with key %d was deleted", key);\n}\n'}}]);