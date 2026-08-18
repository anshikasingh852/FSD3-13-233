# CRUD
C=create/add/insert
R=retrive/view/get
U=update/edit
D=delete/remove

 # FS (file system) node
interact directly with the operating system (it direct connect with client OS rater than browser)

## Major task of FS module
- Reading and writing files
   - readFile()
   - writeFile()
   - appendFile()
- Directory Management
   - mkdir()
   - rmdir() - depricated
   - rm
   - readdir()
- Metadata/Information
   - stat()
   - lstat()
   - fstat()
- Watching for changes
   - watch()
   - watchFile()
   - unwatchFile()
- Streaming Large File
   - createReadStream()
   - createWriteStream()
- File Operations 
   - rename()
   - truncate()
   - unlink()
   - link()
   - syslink()
    #  if await is used in any function , the function must be an async function

## CRUD operation

create/insert,read/retrieve,update,delete

 ## item
   id,name,price,qty

 ## operations
      1-add to cart
      2-show cart
      3-remove from cart
      4-update qnt from cart
      5-checkout
 NOTE:all items will be stored in hdd,so after termination of program we can retrieve cart details     
## Required files
       -Crud.js=it contains all the methods and entry point
       -product.json(javascript object notation)=it contains the product details in array form
