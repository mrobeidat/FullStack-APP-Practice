import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.send(200).json(postMessages)

    } catch (error) {
        res.send(404).json({ message: error.message })
    }
}

export const CreatePost = async (req, res) => {

    const post = req.body
    const newPost = new PostMessage(post)

    try {
        await newPost.save()
        res.send(201).json(newPost)
    }
    catch (error) {
        res.send(409).json({ message: error.message })
    }
}
