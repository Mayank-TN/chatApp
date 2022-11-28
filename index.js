  const express = require('express')
  const bodyParser = require('body-parser')
  const chatRoutes = require('./chat')

  
  const fs = require('fs');
const loginRouter = require('./login');
  
  const app = express();
  app.use(bodyParser.urlencoded({extended : false}))
  
  app.use(loginRouter)


  app.use(chatRoutes)
  
  app.listen(3000)