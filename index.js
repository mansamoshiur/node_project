const http = require('http')
const fs = require('fs')

const PORT = process.env.PORT | 4444
const hostName = '127.0.0.1'

const routerFile = (statusCode, fileLoction, req, res)=>{
    fs.readFile(fileLoction, 'utf-8', (err,data) => {
        if(err){
            console.log(err)
        }else{
            res.writeHead(statusCode, {'Content-Type':'text/html'})
            res.write(data)
            res.end()
        }
    })
}

const myServer = http.createServer((req, res)=>{

    if(req.url === '/'){
        routerFile(200,'./views/index.html')
    }else if(req.url === '/about'){
        routerFile(200,'./views/about.html')
    }else if(req.url === '/contact'){
        routerFile(200,'./views/contact.html')
    }else if(req.url === '/services'){
        routerFile(200,'./views/services.html')
    }else{
        routerFile(404,'./views/error.html')
    }
})

myServer.listen(PORT,hostName, ()=>{
    console.log(`Server is Runing at http://${hostName}:${PORT}`)
})