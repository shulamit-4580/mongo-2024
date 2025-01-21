//1
use bookDB
//2
show dbs
//3
db.createCollection('books')
db.createCollection('sites')
db.books.insert({short_desc:"this book very intresting",
    name:"shomeret hasharim",
    img_url:"file:///H:/שנה%20ב/mongo/",
    book_url:"file:///H:/שנה%20ב/mongo/",
    ISBN:"1234",
    price:67,
    categories:['action','intresting','adult'],website_id:'67053e47deadfb84c2072f8a'})
db.sites.insert({name:"yafe nof",url:"file:///H:/שנה%20ב/mongo/",books:[]})

//4
show collections
//5
db.sites.drop()
//6
db.books.insert({short_desc:"this book is action",
    name:"dina dey",
    img_url:"file:///H:/שנה%20ב/mongo/",
    book_url:"file:///H:/שנה%20ב/mongo/",
    ISBN:"23456",
    price:23,
    categories:['action','intresting','adult'],website_id:'67053e47deadfb84c2072f8a'})
db.books.insert({short_desc:"this book very intresting",
    name:"nany",
    img_url:"file:///H:/שנה%20ב/mongo/",
    book_url:"file:///H:/שנה%20ב/mongo/",
    ISBN:"1234",
    price:67,
    categories:['action','intresting','adult'],website_id:'67053e47deadfb84c2072f8a'})

//7
db.books.find({})
//8
//id-קוד אוטומטי