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
