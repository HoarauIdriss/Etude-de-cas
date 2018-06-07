
const express = require('express')
const app = express()

app.use(express.static('public'))
//app.get('/', (req, res) => res.send('Hello World ! Nagagabourochno javascript'))



app.get("/", function(req,res){
    res.sendFile(__dirname+ "/public/index.html" )
})
app.get("/liste", function(req,res){
    res.sendFile(__dirname+ "/data.json" )

    
})
app.listen(3088, () => console.log('Example app listening on port 3088!'))




  
