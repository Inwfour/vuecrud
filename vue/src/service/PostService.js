import axios from 'axios';

const url = 'http://localhost:5000/api/posts';

export default class PostService {

    // Todo Get Posts

    static getPosts() {
        return new Promise(async (resolve, reject) => {
            await axios.get(url).then((res) => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            }) 
        })
    }

    // todo Create Post

    // todo Delete Post
}