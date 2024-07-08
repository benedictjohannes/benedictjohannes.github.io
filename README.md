# Benedict's Code Sharing

These are some of my work that has been shared as open source. Most recent first.

- [Simple HTTP triggered, YAML configured task runner](https://github.com/benedictjohannes/http-task-runner)
- [BCA PDF eStatement Excel Exporter](https://github.com/benedictjohannes/bca-pdfestatement-extractor) written in Go with [Web (wasm) frontend](https://bcapdfestatementtoexcel.web.app/) made with Preact
- [LMDB KV Store in Go](https://pkg.go.dev/github.com/benedictjohannes/lmdbstore), that wraps [lmdb-go](github.com/bmatsuo/lmdb-go/lmdb) with ready-to-use defaults and convenience methods. [source code](https://github.com/benedictjohannes/lmdbstore)
- [URL-safe Base64 encoded UUID in Go](https://pkg.go.dev/gitlab.com/benedictjohannes/b64uuid), wraps [Google's UUID package](github.com/google/uuid) with methods to marshal/unmarshal using URL-safe Base64 encoded UUID to stringify UUID into 22 characters as opposed to the standard 36. [source code](https://gitlab.com/benedictjohannes/b64uuid)
- [Flexible PostgreSQL CSV inserter](https://pkg.go.dev/gitlab.com/benedictjohannes/csv2pg) written in Go, with capability to insert into multiple table, use previous table's value to insert to other table, parsing date/time and using Go's templating system to modify strings before insertion. [source code](https://gitlab.com/benedictjohannes/csv2pg)
- [Simple database migration using KnexJS](https://github.com/benedictjohannes/knex-migrate-raw-sql), is a collection of very simple funtion that enables *non*-developers to use database migration tool to track database structural changes.  
Common database migration practice that is implemented in most SQL libraries including KnexJS necessitates writing `up` and `down` function in programming language code (Javascript for KnexJS, obviously).  
This repo creates a wrapper that helps creating migration with `up.sql` and `down.sql` for each migration steps.
- [Cloudflare DNS Entries Quick Changer](https://github.com/benedictjohannes/express-react-cloudflare-dns-conf), written with Node.JS + Express with React frontend.  
I created this to quickly change DNS entries in Cloudflare DNS, when opening [Cloudflare's dashboard interface](https://dash.cloudflare.com) takes more time than I'm ready to allocate. 
- [Firestore + Firebase Webapp React Hook boilerplate + Invoice App](https://github.com/benedictjohannes/react-hook-redux-firebase-auth-firestore-invoice), implementing Firebase auth and firestore database.  
When this app was written, not very much boilerplate code exist for Firebase/Firestore that utilize React Hooks, which is in my experience a superiorly easier way to write components.  
React components in this project are purely functional components utilyzing React Hooks.   
The invoice app is basically a multitenant simple invoice authoring with automatic calculation of invoice entries, with sharable invoice links, invoice status tracking and interface to manage invoice sent to / from the currently logged in user's organization (multiple organization is possible). The live version of the complete invoice app is in [invoice.encelerate.com](https://invoice.encelerate.com).
- [Tic-tac-toe game](https://github.com/benedictjohannes/follow-react-tic-tac-toe) following React's excellent [starter tutorial](https://reactjs.org/tutorial/tutorial.html) back in 2019.  
This is my first foray into React. [Play the game?](https://benedictjohannes.github.io/follow-react-tic-tac-toe/)
- [Color Guessing Game](./colorGame) in Vanilla JS, written following Colt Steele's Web Developer Bootcamp when learning to code.  
I'd love to say I wouldn't write it the way I did back then, but it makes me feel old. [Play the game?](./colorGame/colorGame.html)
