type User = {
    "id": String,
    "email": String,
    "name": String,
    "password": String,
    "role": String,
    "posts": Post,
    "favoritePosts": Post,
    "Issues": Issues
    "profile": Profile,
    "createdAt": String,
    "updatedAt": String

}
type rofile = {
    "id": Int,
    "bio": String,
    "user": User,
    "userId": String,
}

type Post = {
    "id": String,
    "title": String,
    "published": Boolean,
    "context": String,
    //Posts
    "author": User,
    "authorId": String,
    //favoritePosts
    "favoriteBy": User,
    "favoriteById": String,
    "categories": Category, // A post can have many category
    "tags": Tag,
    "createdAt": String,
    "updatedAt": String
}

type Category = {
    "id": Int,
    "name": String,
    "posts": Post
}

type Tag = {
    "name": String,
    "posts": Post
}

type Issues = {
    "id": Int,
    "title": String,
    "description": String,
    "status": String,
    "createdAT": String,
    "updatedAT": String,
    "User": User,
    "userId": String
}
