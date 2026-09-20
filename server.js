const app = require('./src/app')
const db = require('./db')



db.query('SELECT 1', (err, result)=>{
  if(err){
    console.log('DB connection failed', err)
  } else {
    console.log('DB connection successful')
  }
})




app.listen(3000, ()=>{
  console.log('Server listen on 3000  port')
})