const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {};
/*
    posts ==== {
        id: asdf,
        title: post title,
        comments: [
            id: asdfg,
            content: asdgfggh,
            postId: asdf
        ]
    }
*/

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/events', (req, res) => {
    const { type, data } = req.body;

    if (type == 'PostCreated') {
        const { id, title } = data;
        posts[id] = { id, title, comments: [] };
    }

    if (type == 'CommentCreated') {
        console.log(data)
        const { id, content, postId} = data;

        const post = posts[postId];
        post.comments.push({ id, content, postId });
    }

    console.log(posts);
    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on 4002');
});