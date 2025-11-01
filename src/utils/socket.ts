const socket = require("socket.io")
const crypto=require("crypto")

const getSecretRoomId=(Userid,targetid)=>{
    return crypto.createHash("sha256").update([Userid,targetid].sort().join("_")).digest("hex")
}
export const initializeSocket = (server) => {
    const io = socket(server, {
        cors: {
            origin: process.env.FrontEnd_BaseUrl
        }
    })
    io.on("connection", (socket) => {
        socket.on("joinChat",({Userid,targetid})=>{
            const roomid=getSecretRoomId(Userid,targetid)
            socket.join(roomid)
            console.log()
        })
        socket.on("sendMessege",({name,Userid, targetid,text})=>{
           const roomid=getSecretRoomId(Userid,targetid)
           io.to(roomid).emit("messeageReceived",{name,text})
        })
        socket.on("disconnect",()=>{
            
        })
    })
}
