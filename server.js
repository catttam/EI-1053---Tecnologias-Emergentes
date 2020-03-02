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
//---------------CLIENTS------------------------
app.get('/user/:client_id', control.getClient)
app.post('/user/client', control.createClient)
app.post('/user/client/update/:client_id', control.updateClient)
app.delete('/user/client/delete/:client_id', control.deleteClient)


//---------------ARTIST------------------------
app.get('/user/artist', control.createArtist)
app.post('/user/:artist_id', control.getArtist)
app.post('/user/artist/update/:artist_id', control.updateArtist)
app.delete('/user/client/delete/:artist_id', control.deleteArtist)


const PORT = 8000
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))


