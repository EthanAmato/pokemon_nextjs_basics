// Route Handlers are defined in a route.js file inside of the app
// directory

// inside of this file, we can define a series of HTTP
// method handlers that will respond to requests:


// Responds to api requests sent to localhost:3000/api
export async function GET(request) {

    console.log(request)
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    const data = await response.json();
    
    return Response.json({data}, {
        status: 200
    })
}


