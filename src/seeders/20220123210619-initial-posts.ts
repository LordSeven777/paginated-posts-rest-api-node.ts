import { QueryInterface } from "sequelize";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert("Post", [
            {
                title: "The rise of cryptocurrencies",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit nobis commodi quas. Aliquid nulla repudiandae quis deserunt officiis, harum ipsam incidunt magnam tempora minima blanditiis natus alias ea assumenda debitis saepe eius, odit quia quam similique vitae repellendus tenetur cumque. Nesciunt reiciendis a qui voluptate facere vero, quod porro.",
                photoURL: "https://images.unsplash.com/photo-1642388889330-3cac79b6111d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
            },
            {
                title: "Plan your trip to Taj-Mahal",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit nobis commodi quas. Aliquid nulla repudiandae quis deserunt officiis, harum ipsam incidunt magnam tempora minima blanditiis natus alias ea assumenda debitis saepe eius, odit quia quam similique vitae repellendus tenetur cumque. Nesciunt reiciendis a qui voluptate facere vero, quod porro.",
                photoURL: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            },
            {
                title: "Places where you can reach inner peace",
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit nobis commodi quas. Aliquid nulla repudiandae quis deserunt officiis, harum ipsam incidunt magnam tempora minima blanditiis natus alias ea assumenda debitis saepe eius, odit quia quam similique vitae repellendus tenetur cumque. Nesciunt reiciendis a qui voluptate facere vero, quod porro.",
                photoURL: "https://images.unsplash.com/photo-1539678786826-79e8b51b457a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            },
        ]);
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete('Post', {});
    }
};
