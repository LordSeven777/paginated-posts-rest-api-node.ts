import express from "express";
import { Op } from "sequelize";

// Post model
import PostModel from "./model";

// Express app
const app = express();

// Body parser
app.use(express.json());

// Route for getting posts
app.get('/', async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 1;
    const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
    const before = req.query.before as string;

    // Fetching posts from db
    const posts = await PostModel.findAndCountAll({
        where: !before ? {} : {
            [Op.or]: [
                { createdAt: { [Op.lte]: before } },
                { updatedAt: { [Op.lte]: before } }
            ]
        },
        offset: (page - 1) * limit,
        limit
    });

    res.json(posts);
});

// Adds a new post
app.post('/', async (req, res) => {
    const title = req.body?.title as string;
    const content = req.body?.content as string;
    const photoURL = req.body?.photoURL as string;
    if (!title || !content || !photoURL) return res.status(400).send('Send required data');
    const addedPost = await PostModel.create({ title, content, photoURL });
    res.json(addedPost);
});

export default app;