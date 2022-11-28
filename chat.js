const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/' , (req,res)=>{
      
    let data = fs.readFileSync('chat.txt' , 'utf-8');
    if(data === ''){
        data = 'No data exist'
    }
    res.send(`${data} <br><br> 
    <html><form onsubmit="document.getElementById('username').value = localStorage.getItem('username')" "action="/" method="POST">
    <input type="text" id="chat" name="chat">
    <input type="hidden" name="username" id="username">
    <button type="submit">Send</button></form>`)
})

router.post('/' , (req,res)=>{
    fs.appendFileSync('chat.txt' , `${req.body.username} : ${req.body.chat} <br>`)
    res.redirect('/') 

})

module.exports = router;