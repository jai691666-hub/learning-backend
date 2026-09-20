const express = require("express");

const app = express();
app.use(express.json());
const db = require("../db");

// const notes = []

// app.post('/notes', (req , res)=>{
//     notes.push(req.body)
//     res.status(200).json({
//       success: true,
//       message:'note add successfully'
//     })
// })

// app.get('/notes', (req, res)=>{
//   res.status(200).json({
//      success: true,
//       message:'note fetch successfully',
//       data:notes
//   })
// })

app.post("/api/notes", (req, res) => {
  const { title, description } = req.body;

  const sql = `INSERT INTO notes (title, description)
    VALUES (?, ?)
    `;

    db.query(sql, [title, description],(err, result)=>{
      if(err){
        console.log(err);
      }

      res.status(200).json({
        success: true,
        message: "note add successfully",
        data: {
          id: result.insertId,
          title,
          description
        }
      })
    } )
    
});


app.get('/api/notes', (req, res)=>{
  const sql = `SELECT * FROM notes`;

  db.query(sql, (err, result)=>{
    if(err){
      console.log(err);
    }

    res.status(200).json({
      success: true,
      message:'note fetch successfully',
      data:result
    })
  })
})

module.exports = app;
