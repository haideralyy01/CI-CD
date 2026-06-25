import express from 'express';
import { prismaClient } from "@repo/db"

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const user = await prismaClient.user.create({
        data: {
            email,
            password,
        }
    });
    res.status(200).json({
        message: "User created successfully",
        id: user.id
    });
})

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});