
//User   {id: Number, name: String , passwd: String}
//Blog   {id: Number, name: String , creatorID: Number}
//Post   {id: Number, text: String,  authorID: Number}
//Posts  {'blogID':{'postID1': .., 'postID2': ...}}

let Users = {}
let Blogs = {}
let Posts = {}

//Most of the methods will be asynch when using a true DB

exports.createUser = data => { 
    //check if data is valid
	if (!data.id || !data.name || !data.passwd)
		return 'KO'
	
    if (Users[data.id])
	    Users[data.id] = Object.assign(Users[data.id], data)
	else
		Users[data.id] = data
	
	return 'OK'

}

exports.getUsers = () => Object.keys(Users).map(k => ({id: Users[k].id, name: Users[k].name}) )
							  
exports.getUserData = id => Users[id] || null

exports.createBlog = data => {
	 //check if data is valid
	if (!data.id || !data.name || !data.creatorID)
		return 'KO'
	
    if (Blogs[data.id])
	    Blogs[data.id] = Object.assign(Blogs[data.id], data)
	else
		Blogs[data.id] = data
	
	return 'OK'
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

exports.getPostData = (blogId, postId) => Blog[blogId] ? (Blog[blogID].postID || null) : null 