exports.client = {
    "@id": String,
    "@type": String,
    identifier: Number,
    birthDate : Date,
    email : String,
    alternateName : String,
    accessCode : String,
    image : String

}

exports.artist = {
    "@id": String,
    "@type": String,
    identifier: Number,
    email : String,
    name : String,
    genre : [String],
    image : String
}

exports.sheet = {
    "@id": String,
    "@type": String,
    identifier: Number,
    name : String,
    genre : [String],
    associatedMedia : String,
    isAccessibleForFree: Boolean,
    publisher: String,
    author: String,
    datePublished: Date,
    genre : [String],
    "syncs:musicalInstrument" : [String]

}

exports.subscriptions = {
    "@id": String,
    "@type": String,
    identifier: Number,
    "syncs:artistId" : String,
    "syncs:clientId" : String,
    dateCreated: Date,
    expires: Date,
    price: Number
}

exports.merchandising = {
    "@id": String,
    "@type": String,
    identifier: Number,
    category: [String],
    name : String,
    "syncs:artistId" : String,
    description: String,
    image : String,
    price: Number
}


