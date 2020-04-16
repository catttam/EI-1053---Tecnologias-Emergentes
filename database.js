const sc = require('./schemas')
const mng = require('mongoose') 
const atlas_connect = "mongodb+srv://admin:adminsyncs42@cluster-syncs-2tbq0.mongodb.net/syncs"

mng.connect(atlas_connect)

var clientModel = mng.model('client', new mng.Schema(sc.client))
var artistModel = mng.model('artist', new mng.Schema(sc.artist))

exports.insertClient = (data) => {
    //data = JSON.parse(data)
    var data = new clientModel({
        "@id": "http://syncsschema.com/user/"+data.id,
        "@type": "Person",
        identifier: data.id,
        birthDate : data.birthday,
        email : data.email,
        alternateName : data.name,
        accessCode : data.passwd,
        image : data.profileImg
    })

    data.save()
}

/* var data_prueba = new clientModel({
    "@id": "http://syncsschema.com/user/1",
    "@type": "Person",
    identifier: 1,
    birthDate : new Date('1996-09-02'),
    email : "al364403@uji.es",
    alternateName : "kitkat",
    accessCode : "String",
    image : "asdf.jpg"
})

data_prueba.save() */



