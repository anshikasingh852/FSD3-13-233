# Express

1. create project folder
2. goto project and open terminal
3. execute `npm init -y`
4. install `npm i nodemon -D`
5. install `npm i express`
6. open package.json
  a.change `type:'module'`
  b.update script {
    "start":"node prg1.js",
    "dev":"nodemon prg1.js"
  }
7. create prg1.js in folder
8. add folderName/node_modules in .gitignore

# Send Function

send function is used to revert back contents to the client .It maybe html,json,html file,plain text
we can also add status code with status function.It can be chain with send function.

## Map
this function is used to iterate any array.it must return new array
```
array.map((item)=>{
return
}) 
array.map((item)=>())

```
in first syntax we have to use explicit return keyword whereas in syntax 2 does not require,
exclude number of properties from any json object.
```
const{p1,p2,...rest}=product;

```
## Search
to search any item in json array we will use find method,it will return null on unsuccessfull and object on successfull.
```
array.find((item)=>item.id===id);
```