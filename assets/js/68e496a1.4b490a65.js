"use strict";(self.webpackChunkdocsv_2=self.webpackChunkdocsv_2||[]).push([[8994],{7861:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>h,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var i=l(5893),s=l(1151),r=l(9163);const t={title:"Shell script",sidebar_position:3,description:"scripting language for Linux"},h="Operating System",a={id:"os/Shellscript",title:"Shell script",description:"scripting language for Linux",source:"@site/docs/four/os/Shellscript.mdx",sourceDirName:"os",slug:"/os/Shellscript",permalink:"/docs/four/os/Shellscript",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Shell script",sidebar_position:3,description:"scripting language for Linux"},sidebar:"tutorialSidebar",previous:{title:"Linux Commands",permalink:"/docs/four/os/Basics"},next:{title:"Journal-OS",permalink:"/docs/four/category/journal-os"}},c={},o=[{value:"Shell script",id:"shell-script",level:2},{value:"Shell Script Example",id:"shell-script-example",level:2},{value:"Executing Shell Scripts",id:"executing-shell-scripts",level:2},{value:"Shell Variables",id:"shell-variables",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"operating-system",children:(0,i.jsx)(r.Z,{name:"banner",description:"Shellscript",children:"Operating System"})}),"\n",(0,i.jsx)(n.h2,{id:"shell-script",children:"Shell script"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell script is a computer program designed to be run by the Unix/Linux shell which could be one of the following:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The Bourne Shell"}),"\n",(0,i.jsx)(n.li,{children:"The C Shell"}),"\n",(0,i.jsx)(n.li,{children:"The Korn Shell"}),"\n",(0,i.jsx)(n.li,{children:"The GNU Bourne-Again Shell"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A shell is a command-line interpreter and typical operations performed by shell scripts include file manipulation, program execution, and printing text."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell scripts are also employed extensively in the default installations of Unix-like operating systems."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell scripts are executed by a shell process."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Shell scripts often serve as convenient wrappers around UNIX commands."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"They automate sequences of UNIX commands that would otherwise be time-consuming to type into the keyboard."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A shell script is a text file containing shell commands."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"shell-script-example",children:"Shell Script Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# This is a comment!\necho Hello World        # This is a comment, too!\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The first line tells Unix that the file is to be executed by /bin/bash."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"This is a comment. The second line is also a comment."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The third line actually does something. It asks that the words Hello World be printed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The #! characters are magic to Unix. They are the characters that tell Unix that what follows is the name of the program (or programs in the case of a pipeline)."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The # character begins a comment, and Unix ignores the rest of the line."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'The echo command prints its arguments, in this case, the words "Hello World".'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The echo command is one of the most basic and frequently used commands in Linux."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"executing-shell-scripts",children:"Executing Shell Scripts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To execute the script from the current directory, you can run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ ./hello.sh\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this wont run unless you give it permission to run"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ chmod +x hello.sh\n"})}),"\n",(0,i.jsx)(n.h2,{id:"shell-variables",children:"Shell Variables"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A shell variable is a special variable that is set by the shell and is required by the shell in order to function correctly."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Some of these variables are environment variables whereas others are local variables."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A local variable is a variable that is present within the current instance of the shell."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It is not available to programs that are started by the shell."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"They are set at the command prompt."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"To set a local variable, use the following syntax \u2212"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"variable_name=variable_value\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To access a local variable, use the following syntax \u2212"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$variable_name\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Example"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'NAME="Zara Ali"\necho $NAME\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9163:(e,n,l)=>{l.d(n,{Z:()=>r});l(7294);var i=l(4996),s=l(5893);const r=e=>{let{name:n,description:l,children:r}=e;const t=(0,i.Z)(`/images/${n}.png`);return(0,s.jsxs)("div",{style:{display:"inline-block",height:"150px",width:"100%",position:"relative",overflow:"hidden",borderRadius:"5px"},children:[(0,s.jsx)("img",{src:t,alt:t,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",zIndex:-1}}),(0,s.jsx)("h2",{style:{color:"white",padding:"12px",boxSizing:"border-box",paddingBottom:"0px",fontWeight:"500"},children:r}),(0,s.jsx)("p",{style:{color:"white",paddingTop:"0px",paddingBottom:"12px",paddingLeft:"12px",paddingRight:"12px",boxSizing:"border-box"},children:l})]})}}}]);