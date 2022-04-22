const Blog = require('../models/blog.model');

    module.exports.createBlogs = (req, res) => {
        Blog.create(req.body)
            .then(createBlogs => {
                res.json({ blog: createBlogs })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}
    module.exports.findOneBlog = (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then(oneBlog => {
            res.json({ blog: oneBlog })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
    
    
    module.exports.findAllBlogs = (req, res) => {
        Blog.find()
            .then((blogs) => {
                res.json( blogs )
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });
            }
    
    module.exports.deleteBlogs = (req, res) => {
        Blog.deleteOne({ _id: req.params.id })
            .then(result => {
                res.json({ result: result })
            })
            .catch((err) => {
                res.json({ message: 'Something went wrong', error: err })
            });}

    module.exports.updateBlogs = (req, res) => {
    Blog.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedBlog => {
            res.json({ blog: updatedBlog })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}


        module.exports.findAllReviews = (req, res) => {
            Blog.find()
                .then((allBlogs) => {
                    let reviews = allBlogs.review;
                    res.json({ reviews: reviews })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });
        }
         
        module.exports.findOneReview = (req, res) => {
            Blog.findOne({ _id: req.params.id })
                .then(oneReview => {
                    res.json({ review: oneReview.review })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}
         
        module.exports.createNewReview = (req, res) => { // async and await is used for  keeping the function asynchronous which make await variable wait unitil it gets a value
         

            Blog.findById(req.body.blogId).then(blog=>{ // Finding the blog with the blogId sent
                blog.reviews.push(req.body.review);    // pushing the savedreview to the reviews array in blog schema
                blog.save();
                console.log(blog)   // saving the changes ( changes in the array value after the newReview is added )
                return res.status(200).json({success:true})
                 // return status 200 and newly added review object from the db if everything goes right
            }).catch(err=>{
                console.log(err)
                res.status(400).json({success:false,msg:"Couldn't save the review",err:err});

            }); // catching the error if anything goes wrong in the then function

        }