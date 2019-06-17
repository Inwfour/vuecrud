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
    static addPost(value) {
        return new Promise(async (resolve,reject) => {
            await axios.post(url,{
                text: value
            }).then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);
            })
        })
    }

    // todo Delete Post
    static deletePost(id) {
        return new Promise(async (resolve,reject) => { 
            await axios.delete(url + '/' + id).then((res) => {
                resolve(true);
            }).catch(err => {
                reject(false)
            })
        })
    }
}