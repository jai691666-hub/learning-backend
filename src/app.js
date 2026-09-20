const express = require("express");

const app = express();


app.use(express.json());
const db = require("../db");


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

app.get('/api/notes/:id', (req, res)=>{
  const {id}= req.params;
  const sql = `SELECT * FROM notes WHERE id = ?`;

  db.query(sql, [id], (err, result)=>{
    if(err){
      console.log(err);

    }

    if(result.length === 0){
      return res.status(404).json({
        success: false,
        message: 'note not found'
      })
    }
    res.status(200).json({
      success: true,
      message:'note fetch successfully',
      data:result[0]
    })
  })
})

app.put('/api/notes/:id', (req, res)=>{
  const {id}= req.params;

  const { title, description } = req.body;

  const sql = `UPDATE notes SET title = ?, description = ? WHERE id = ?`;

  db.query(sql, [title, description, id], (err, result)=>{
    if(err){
      console.log(err);
    }
    
    if(result.affectedRows === 0){
      return res.status(404).json({
        success: false,
        message: 'note not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'note updated successfully'
    })
  })
})

app.delete('/api/notes/:id', (req, res)=>{
  const {id}= req.params;
  const sql = `DELETE FROM notes WHERE id = ?`; 

  db.query(sql, [id], (err, result)=>{
    if(err){
      console.log(err);
    }

    if(result.affectedRows === 0){
      return res.status(404).json({
        success: false,
        message: 'note not found'
      })
    }

    res.status(200).json({
      success: true,
      message: 'note deleted successfully'
    })
  })
})

module.exports = app;
