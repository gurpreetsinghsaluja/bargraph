1 A project git ---- having the git bundle to hold the entire project
2 A READ_ME.txt  file with (in this order)
3 -- Name: Gurpreet Singh Saluja Email: gsaluja2@uwo.ca
4 -- Project Check-list (this list filled in)
5 -- a git log --all
        commit 40ffba48ef2304f3e9c0221b1c55500f77167f71 (HEAD -> master)
    Author: Gurpreet_Singh Saluja <gsaluja2@uwo.ca>
    Date:   Wed Dec 1 21:01:20 2021 -0500

        Added d3, html elements, non svg and css features
    dyn172-23-43-197:Final_Project gurpreet$ git add -A
    dyn172-23-43-197:Final_Project gurpreet$ git commit -m "added comments"
    [master d3db389] added comments
    2 files changed, 21 insertions(+), 4 deletions(-)
    dyn172-23-43-197:Final_Project gurpreet$ git log --all
    commit d3db389e3f7c48b329653b460bdb40df54cbe036 (HEAD -> master)
    Author: Gurpreet_Singh Saluja <gsaluja2@uwo.ca>
    Date:   Wed Dec 1 21:31:51 2021 -0500

        added comments

    commit 40ffba48ef2304f3e9c0221b1c55500f77167f71
    Author: Gurpreet_Singh Saluja <gsaluja2@uwo.ca>
    Date:   Wed Dec 1 21:01:20 2021 -0500

        Added d3, html elements, non svg and css features
6 A server.js (nodejs) file that serves an index.html written with
7 -- that runs by “node server.js”
8 -- external link: https://localhost:3000 views your SPA (index.html…)
9 A d3 data display component using
10 -- static/index.html line 45
11 -- updatable data that is originally from a JSON file
12 -- static/data.json
13 -- a join with enter, exit and transitions
14 -- static/script.js line 62-115
15 A non trivial css file with
16 -- Hover/focus/active codes
17 -- static/mySPA.css line 14,21,49,60
18 -- Borders with rounded corners
19 -- static/mySPA.css line 36,46,56,62
20 -- Gradient backgrounds
21 -- static/mySPA.css line 44,54,61
22 A least one unicode Emojis
23 -- static/data.json line 4,8,12,16,20,24,28,32
24 A non--d3 svg that contains at least one:
25 -- circle: static/index.html line 30
26 -- path: static/index.html line 28
27 -- rect: static/index.html line 31
28 -- text: static/index.html line 32
29 HTML elements must include a least one
30 -- Button: static/index.html line 24
31 -- H1: static/index.html line 19
32 -- list (ul or ol): static/index.html line 22
33 -- link: static/index.html line 21,10
34 -- image: static/index.html line 46
35 Javascript arrow functions
36 -- static/script.js line 3,13,23,37,42,43,52,54,57,60,62,69,71,73,75,86,97,90,95 etc.
37 In comments, show
38 -- source link * critical for academic integrity as well as fixing things if you break them.
39 -- static/mySPA.css line 5; static/index.html line 21,27,29;
40 -- % use (in brackets in next line)
41 --static/mySPA.css line 4(100%use); static/index.html line 45(60%use),26(80%use),28(90%use);