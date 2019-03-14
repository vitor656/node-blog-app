if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://admin:admin123@blogappcluster-ioscp.mongodb.net/test?retryWrites=true"}
} else {
    module.exports = {mongoURI: "mongodb://localhost/blogapp"}
}