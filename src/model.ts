import { DataTypes, Model } from "sequelize";

// Sequelize database connection instance
import sequelize from "./dbConnection";

// Interface for the post's attributes
interface PostInstance extends Model {
    postId: number,
    title: string,
    content: string,
    photoURL: string
} 

// Post model
const Post = sequelize.define<PostInstance>(
    'Post',
    {
        postId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: DataTypes.STRING(100),
        content: DataTypes.TEXT,
        photoURL: DataTypes.STRING(250)
    },
    {
        tableName: 'post'
    }
);

export default Post;