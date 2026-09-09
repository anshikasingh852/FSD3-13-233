import http from 'http'
 const server=http.createServer((req,res)=>{ 
    //req method -> GET,POST,PUT,DELETE,PATCH
    console.log('Method:',req.method);
    console.log('URL:',req.url);
    //Browser can send only Get request to the server
    //POST/PUT/DELETE/PATCH->Can be checked by api tester
    //API tester :-postman,echo api,thunder client