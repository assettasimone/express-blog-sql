// Importiamo il file di connessione al database
const connection = require('../data/db');


//index function
const index = (req, res) => {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        console.log(res);

        res.json(results);
    });
}


//show function
const show = (req, res) => {
    const id = parseInt(req.params.id)
    const post = blogPosts.find(item => item.id === id)

    if (!post) {
        res.status(404).send('Post not found')
    }


    res.json(post)
}

//store function
const store = (req, res) => {
    const newID = blogPosts[blogPosts.length - 1].id + 1
    const { title, content, coverImage, tags } = req.body

    const newPost = {
        id: newID,
        title,
        content,
        coverImage,
        tags,
    }

    blogPosts.push(newPost)

    res.status(201).json(req.body)
}

//update function
const update = (req, res) => {
    const id = parseInt(req.params.id)
    const post = blogPosts.find(item => item.id === id)

    if (!post) {
        return res.status(404).send('post non trovato')
    }
    const { title, content, coverImage, tags } = req.body

    post.content = content
    post.title = title
    post.coverImage = coverImage
    post.tags = tags

    res.json(post)

}



//modify function
const modify = (req, res) => {
    const id = parseInt(req.params.id)
    const post = blogPosts.find(item => item.id === id)

    if (!post) {
        return res.status(404).send('post non trovato')
    }
    const { title, content, coverImage, tags } = req.body

    post.content = content
    post.title = title
    post.coverImage = coverImage
    post.tags = tags

    res.json(post)

}

//destroy function
const destroy = (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    const post = blogPosts.find(item => item.id === id)
    console.log(post)
    if (!post) {
        return res.status(404).send('post not found')
    }
    console.log(blogPosts.indexOf(post))

    blogPosts.splice(blogPosts.indexOf(post), 1)

    res.status(204).send('elemento cancellato')

}



module.exports = { index, show, store, update, modify, destroy }