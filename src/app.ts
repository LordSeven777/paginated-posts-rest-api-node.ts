import express from "express";
import { Op } from "sequelize";

// Post model
import PostModel from "./model";

// Express app
const app = express();

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

export default app;