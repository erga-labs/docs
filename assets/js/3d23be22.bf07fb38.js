"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3622],{5796:(e,t,s)=>{s.d(t,{Z:()=>o});var n=s(7294),r=s(4996);const i={backgroundColor:"#0093c2",color:"#FFFFFF",padding:"10px 20px",borderRadius:"5px",textDecoration:"none",display:"inline-block",margin:"10px 0"},o=e=>{let{filename:t,children:s}=e;const o=(0,r.Z)(`/assets/${t}`);return n.createElement(n.Fragment,null,n.createElement("a",{href:o,download:!0,style:i},s))}},4395:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>x,frontMatter:()=>p,metadata:()=>d,toc:()=>m});var n=s(7462),r=(s(7294),s(3905)),i=s(5796),o=s(814);const a=s.p+"assets/images/exp4-e292d45b0ace58b6536ccbc4bc2965a0.png",l=s.p+"assets/images/exp_4-3a1f60b7a2eea828c3ef5181aeba2d7c.png",p={sidebar_position:5,description:"Simple Regression in R"},c="Experiment 4",d={unversionedId:"R/Experiment_4",id:"R/Experiment_4",title:"Experiment 4",description:"Simple Regression in R",source:"@site/docs/R/Experiment_4.mdx",sourceDirName:"R",slug:"/R/Experiment_4",permalink:"/docs/R/Experiment_4",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Simple Regression in R"},sidebar:"tutorialSidebar",previous:{title:"Experiment 3",permalink:"/docs/R/Experiment_3"},next:{title:"Experiment 5",permalink:"/docs/R/Experiment_5"}},g={},m=[],u={toc:m};function x(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"experiment-4"},"Experiment 4"),(0,r.kt)("p",null,"Implementing Regression in R"),(0,r.kt)(i.Z,{filename:"regression.csv",mdxType:"DownloadButton"},"Download CSV"),(0,r.kt)(o.Z,{language:"bash",mdxType:"CodeBlock"},"# import data set\ndf=read.csv(\"regression.csv\")\n\ninstall.packages('caTools')\ninstall.packages('ggplot2')\nlibrary(ggplot2)\nlibrary(caTools)\n\nset.seed(123)\nsplit=sample.split(df$scores,SplitRatio= 2/3)\ntrain_set=subset(df,split==TRUE)\ntest_set=subset(df,split==FALSE)\n\n# fitting simple regression\nregressor=lm(formula = scores~hours, data = train_set)\n\n# predicting test set result\ny_pred = predict(regressor, new_data=test_set)\n\n# visualizing training set result\nggplot() + \n  geom_point(aes(x=train_set$hours,y=train_set$scores),colour='red') +\n  geom_line(aes(x=train_set$hours,y=predict(regressor,new_data=train_set)),colour='blue') +\n  ggtitle('Scores vs Experience (training set)') +\n  xlab('Hours') +\n  ylab('Scores')\n\n# visualizing test set result\nggplot() + \n  geom_point(aes(x=test_set$hours,y=test_set$scores),colour='red') +\n  geom_line(aes(x=train_set$hours,y=predict(regressor,new_data=train_set)),colour='blue') +\n  ggtitle('Scores vs Experience (training set)') +\n  xlab('Hours') +\n  ylab('Scores')\n\n# prediction on input\nrelation <- lm(df$scores~df$hours)\na <- data.frame(hours = 10)\nresult <- predict(regressor,a)\nprint(result)"),(0,r.kt)("img",{src:l,width:500}),(0,r.kt)("img",{src:a,width:500}))}x.isMDXComponent=!0}}]);