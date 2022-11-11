const http = require('http')
const fs = require('fs')

const PORT =process.env.PORT | 3030
const hostName = '127.0.0.1'
const myServer = http.createServer((req,res)=>{
    const routerFile = (statusCode, fileLocetion,)=>{
        fs.readFile(fileLocetion, (err,data)=>{
            res.writeHead(statusCode,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }

    if(req.url === '/'){
        routerFile(200,'./views/index.html')
    }else if(req.url === '/about'){
        routerFile(200,'./views/about.html')
    }else if(req.url === '/services'){
        routerFile(200,'./views/services.html')
    }else if(req.url === '/contact'){
        routerFile(200,'./views/contact.html')
    }else{
        routerFile(404,'./views/error.html')
    }

})

myServer.listen(PORT,hostName,()=>{
    console.log(`server is Runing at http://${hostName}:${PORT} `)
})