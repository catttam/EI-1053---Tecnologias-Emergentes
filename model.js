var _ = require('lodash');

//User   {id: Number, name: String , passwd: String}
//Blog   {id: Number, name: String , creatorID: Number}
//Post   {id: Number, text: String,  authorID: Number}
//Posts  {'blogID':{'postID1': .., 'postID2': ...}}

let clients = {}
let artists = {}
let subscriptions = {}
let sheets = {}
let merch =  {}


//Most of the methods will be asynch when using a true DB

//----------- CLIENTS --------------

// TODO Cambiar a nuestro JSON y añadir seguridad
exports.createClient = data => { 
	//check if data is valid
	let matches = Object.keys(clients).some(id => clients[id].name == data.name)

	if (!data.id || !data.name || !data.passwd || matches)
		return 'KO'
	else
		clients[data.id] = data
		console.log('Info model::', clients[data.id])
	return 'OK'

}

exports.updateClientData = data => {

	if (clientes[data.id]){
		clients[data.id] = Object.assign(clients[data.id], data)
		return 'OK'
	}

	return 'KO'
}
							  
exports.getClientData = id => clients[id] || null

exports.removeClient = (clientId) => {
	if(delete clients[clientId]) return 'OK'
	return 'KO'
}
/*
//----------- ARTISTS --------------

exports.insertArtist = data => { 
	//check if data is valid
	let matches = Object.keys(artists).some(id => artists[id].name == data.name)
	if (!data.id || !data.name || !data.passwd || matches )
		return 'KO'
	
	else
		artists[data.id] = data
	
	return 'OK'

}

exports.updateArtistData = data => {
	
	if (artists[data.id]){
		artists[data.id] = Object.assign(artists[data.id], data)
		return 'OK'
	}

	return 'KO'
}
exports.getArtist = id => artists[id] || null;

exports.getArtistByUserName = (username) => Object.keys(artists).filter(id => artists[id].name.includes(username))

exports.getAllArtists = () => Object.keys(artists).map(k => ({id: artists[k].id, name: artists[k].name}) )

exports.removeArtist = (artistId) => {
	if(delete artists[artistId]) return 'OK'
	return 'KO'
}


//----------- SHEETS --------------

exports.insertSheet = data => { 
	//check if data is valid
	if (!data.id || !data.name || !data.author || !data.file)
		return 'KO'
	else
		sheets[data.id] = data
	
	return 'OK'

}

exports.updateSheetData = data => {
	if (sheets[data.id]){
		sheets[data.id] = Object.assign(sheets[data.id], data)
		return 'OK'
	}
	return 'KO'
}

exports.getSheet = id => sheets[id] || null;

exports.getSheetBy = (username) => Object.keys(artists)
										 .filter(id => artists[id].name.includes(username))

exports.getSheetByQuery = (query) => _.filter(sheets, query)

exports.getAllSheets = () => Object.keys(sheets).map(k => ({id: artists[k].id, name: artists[k].name}) )

exports.removeSheet = (sheetId) => {
	if(delete sheets[sheetId]) return 'OK'
	return 'KO'
}

//----------- SUSCRIPTIONS --------------

exports.getSubscriptionsToArtist = (artistId) => Object.keys(subscriptions).filter(id =>subscriptions[id].artId.includes(artistId))

// dudoso metodo
exports.getSubscriptionsFromClient = (clientId) => clients[clientId].subscriptions

exports.createSubscription = data => { 
	//check if data is valid
	if (!data.id || !data.artId)
		return 'KO'
	else
		subscriptions[data.id] = data

	return 'OK'

}

exports.updateSubscription = data => {
	if (subscriptions[data.id]){
		subscriptions[data.id] = Object.assign(subscriptions[data.id], data)
		return 'OK'
	}
	return 'KO'
}

exports.removeSubscription = (subscriptionId) => {
	if(delete sheets[sheetId]) return 'OK'
	return 'KO'
}

//exports.updateBlog = (blogId, data) =>  {}

exports.getBlogs = _ => Object.keys(Blogs)

exports.getBlogData = blogId => Blogs[blogId] || null

exports.searchBlog = (text) => Object.keys(Blogs).filter(b => Blogs[b].name.includes(text))
                                                 //.map(b => Blogs[b].name)
exports.createPost = (userId, blogId, data) => {}

exports.getPosts = blogId => {}

exports.removePost = (blogId, postId) => {}

exports.searchPosts = (blogId, text) => {}

exports.getPostData = (blogId, postId) => Blog[blogId] ? (Blog[blogId].postId || null) : null */