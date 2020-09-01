import { ConfigClass } from '../classes/ConfigClass'

let caminho = `${ConfigClass.getUrlApi().toString()}/blog/`

export default class BlogService {
    constructor(){   
    }

    static getPosts() {
        return fetch(caminho).then(response => {
            return response.json();
        })
    }
}