const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object
 
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

//app.use('/web', express.static('public'))

//app.get('/news', control.eventStream) //Stream of Server-side events


//app.get('/user/:id', control.getUserData ) //Done

//app.post('/user', control.updateUser ) //Done

//app.get('/blog', control.getBlogs ) //Done

//app.post('/blog', control.createBlog ) //Done

//app.get('/blog/:id', control.getBlogData ) //Done

//app.get('/blog/search', control.searchBlog ) //Done

//etc ...

app.get('/user/:client_id', control.getUser)
app.post('/user/client', control.createUser)
app.post('/user/client/update/:client_id', control.updateUser)
app.delete('/user/client/delete/:client_id', control.deleteUser)

const PORT = 8000
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))


