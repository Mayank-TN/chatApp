const express = require('express')
const router = express.Router()



router.get('/login' , (req,res)=>{
    res.send(`<html>
    <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action="/login" method="POST">
    <input type="text" id="username" name="username">
      <button type="submit">Login</button></form>`)
})

router.post('/login' , (req,res)=>{
    res.redirect('/')  
})

module.exports = router;