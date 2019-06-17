const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// * get Posts
router.get('/',async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

// * Add Post
router.post('/', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

router.delete('/:id', async (req,res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});

// router.put('/:id'), async (req,res) => {
//     const posts = await loadPostsCollection();
//     await posts.updateOne({_id: req.params.id},{$set : {"text":req.body.text}}, function(err, res) {
//         if (err) throw err;
//         console.log("1 document updated");
//       });
//     res.status(200).send("success");
// }

// * Delete Post

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017/vue_express', {
        useNewUrlParser: true
    });
    return client.db('vue_express').collection('posts');
}


module.exports = router;