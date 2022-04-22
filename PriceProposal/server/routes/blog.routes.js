const BlogController = require('../controllers/blog.controller');
module.exports = (app) => {

    //post new blog
    app.post('/api/blogs', BlogController.createBlogs);
    
    
    //  get all blogs
    app.get('/api/blogs', BlogController.findAllBlogs);

    // delete blog
    app.delete('/api/blogs/:id', BlogController.deleteBlogs);


    //get on blog
    app.get('/api/blogs/:id', BlogController.findOneBlog);


    // update blog
    app.put('/api/blogs/:id', BlogController.updateBlogs);


    //Reviews

    app.get('/api/reviews', BlogController.findAllBlogs);

    app.get('/api/review/:id', BlogController.findOneBlog);

    app.post('/api/review',BlogController.createBlogs)



}