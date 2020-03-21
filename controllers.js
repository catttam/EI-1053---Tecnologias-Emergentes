const model = require('./model')

const SSE = require('express-sse') //Server-side events


exports.middleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 
	           'Origin, Content-Type, Accept')
    res.header('Cache-Control', 'no-cache')
	
	/*  
	//Todas las llamdas REST con token: user/345?token=asCDSAsa
	if (req.query && req.query.token != 'asCDSAsa'){ //Security token

		res.status(403)
		return
	} 
	*/
	
	next()
}

const STREAM = new SSE()

exports.eventStream = (req, res) => {
  console.log('Nueva conexion SSE ...')
  STREAM.init(req, res)
  STREAM.send('Registrate no seas ratón','logged')
  console.log(STREAM.eventNames)  

}

exports.sendEventStream = () =>{
	console.log('enviando datillos')
	STREAM.send("logged", "Registrate no seas ratón")
	//STREAM.send("Registrate no seas ratón")
}



/*
exports.getUsers    = async (req, res) => res.send({result: await M.getUsers()})

exports.getUserData = async (req, res) => res.send({result: await M.getUserData(req.param.id)})

exports.updateUser  = async (req, res) => res.send({result: await M.createUser(req.body)}) //POST

exports.getBlogs    = async (req, res) => res.send({result: await M.getBlogs()})

exports.createBlog  = async (req, res) => res.send({result: await M.createBlog(req.body)}) //POST
									
exports.searchBlog  = async (req, res) => res.send({result: await M.searchBlog(re.query.q)})

exports.getBlogData = async (req, res) => res.send({result: await M.getBlogData(req.param.id)})
*/

//		el de server												el de modelo

exports.getClient	 =	async (req, res) => res.send({result: await model.getClientData(req.params.client_id)})
exports.createClient =	async (req,res) => res.send({result: await model.createClient(req.body)})
exports.updateClient =	async (req,res) => res.send({result: await model.updateClientData(req.body)})
exports.deleteClient =	async (req,res) => res.send({result: await model.removeClient(req.params.client_id)})//DUDOSO


//SHEETS

exports.getSheet	=	async (req,res) => res.send({result: await model.getSheet(req.params.sheet_id)})
exports.createNew	=	async (req,res) => res.send({result: await model.insertSheet(req.body)})
exports.getAllSheet =	async (req,res) => res.send({result: await model.getAllSheets()})
