// import jsonserver

const json_server=require('json-server')

// import cors
const cors=require('cors')

// create json server

const recApp=json_server.create()


// create a middleware for json-js data conversion

const middleware=json_server.defaults()


// create route for connect json file with main file

const route=json_server.router('recipies.json')

// apply cors

recApp.use(cors())

// apply middleware as application specific middleware

recApp.use(middleware)


// applyt route

recApp.use(route)

const PORT=8000

recApp.listen(PORT,()=>{
    console.log(`recp server started at port ${PORT}`);
})