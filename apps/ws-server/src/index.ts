import "dotenv/config"
import { WebSocketServer } from 'ws';
import { prismaClient } from "@repo/db"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async (ws) => {
    await prismaClient.user.create({
        data: {
            email: Math.random().toString(),
            password: Math.random().toString(),
        }
    });
    ws.send("Hi there you are connected")
});