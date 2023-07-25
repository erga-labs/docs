"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6190],{2861:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var e=t(7462),r=(t(7294),t(3905)),o=t(814),s=t(9512);const a={sidebar_position:9,description:"Graphs in C"},d="Graphs Traversal",u={unversionedId:"c/journal/DFS_BFS",id:"c/journal/DFS_BFS",title:"Graphs Traversal",description:"Graphs in C",source:"@site/docs/c/journal/DFS_BFS.mdx",sourceDirName:"c/journal",slug:"/c/journal/DFS_BFS",permalink:"/docs/c/journal/DFS_BFS",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Graphs in C"},sidebar:"tutorialSidebar",previous:{title:"Hash Tables",permalink:"/docs/c/journal/hash"},next:{title:"R Scripts",permalink:"/docs/category/r-scripts"}},p={},c=[],f={toc:c};function l(n){let{components:i,...t}=n;return(0,r.kt)("wrapper",(0,e.Z)({},f,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphs-traversal"},"Graphs Traversal"),(0,r.kt)(o.Z,{language:"c",mdxType:"CodeBlock"},s.Z))}l.isMDXComponent=!0},9512:(n,i,t)=>{t.d(i,{Z:()=>e});const e='#include <stdbool.h>\n#include <stdio.h>\n#include <stdlib.h>\n\n#define MAX_NODES 100\n\nint front = -1;\nint rear = -1;\nint top = -1;\n\nint queue[MAX_NODES];\nint stack[MAX_NODES];\n\nvoid enqueue(int node)\n{\n    if (rear == MAX_NODES - 1)\n    {\n        printf("Queue is full\\n");\n        return;\n    }\n    queue[++rear] = node;\n    if (front == -1)\n    {\n        front = 0;\n    }\n}\n\nvoid push(int node)\n{\n    if (top == MAX_NODES - 1)\n    {\n        printf("Stack is full\\n");\n        return;\n    }\n    stack[++top] = node;\n}\n\nint dequeue()\n{\n    if (front == -1 || front > rear)\n    {\n        printf("Queue is empty\\n");\n        return -1;\n    }\n    return queue[front++];\n}\n\nint pop()\n{\n    if (top == -1)\n    {\n        printf("Stack is empty\\n");\n        return -1;\n    }\n    return stack[top--];\n}\n\nvoid bfs(int graph[MAX_NODES][MAX_NODES], int n)\n{\n    bool visited[MAX_NODES] = {false};\n    enqueue(0);\n    visited[0] = true;\n    while (front <= rear)\n    {\n        int node = dequeue();\n        printf("%d ", node);\n        for (int i = 0; i < n; i++)\n        {\n            if (graph[node][i] == 1 && !visited[i])\n            {\n                visited[i] = true;\n                enqueue(i);\n            }\n        }\n    }\n    printf("\\n");\n}\n\nvoid dfs(int graph[MAX_NODES][MAX_NODES], int n)\n{\n    bool visited[MAX_NODES] = {false};\n    push(0);\n    visited[0] = true;\n    while (top != -1)\n    {\n        int node = pop();\n        printf("%d ", node);\n        for (int i = 0; i < n; i++)\n        {\n            if (graph[node][i] == 1 && !visited[i])\n            {\n                visited[i] = true;\n                push(i);\n            }\n        }\n    }\n    printf("\\n");\n}\n\nint main()\n{\n    int graph[MAX_NODES][MAX_NODES] = {{0, 1, 1, 0, 0, 0, 0, 0},\n                                       {1, 0, 0, 1, 1, 1, 0, 0},\n                                       {1, 0, 0, 0, 0, 1, 1, 1},\n                                       {0, 1, 0, 0, 0, 0, 0, 0},\n                                       {0, 1, 0, 0, 0, 0, 0, 0},\n                                       {0, 1, 1, 0, 0, 0, 0, 0},\n                                       {0, 0, 1, 0, 0, 0, 0, 0},\n                                       {0, 0, 1, 0, 0, 0, 0, 0}};\n    int n = 8;\n    printf("BFS: ");\n    bfs(graph, n);\n    printf("DFS: ");\n    dfs(graph, n);\n    return 0;\n}\n'}}]);