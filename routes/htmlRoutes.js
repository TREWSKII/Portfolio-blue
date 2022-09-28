const router = require('express').Router();
const path = require('path')



  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Drews-Portfolio.html'))
    });
    
  
module.exports = router 
