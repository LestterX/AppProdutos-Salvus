import { server } from "./server/server";

const SERVER_PORT = process.env.SERVER_PORT || 3000

server.listen(SERVER_PORT, () => {
    console.log(`Server running on port: ${SERVER_PORT} \nAcccess on: http://localhost:${SERVER_PORT}`);    
})