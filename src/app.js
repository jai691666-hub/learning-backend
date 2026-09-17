const express = require('express')

const app = express();
app.use(express.json())

const notes = []

app.post('/notes', (req , res)=>{
    notes.push(req.body)
    res.status(200).json({
      success: true,
      message:'note add successfully'
    })
})

app.get('/notes', (req, res)=>{
  res.status(200).json({
     success: true,
      message:'note fetch successfully',
      data:notes
  })
})

module.exports= app