const dirTree = require('directory-tree');
const path = require('path');

const util = module.exports = {
    getFiles: (name) => {
        let files = [];
        dirTree(path.join(__dirname, name), {extensions: /\.md/}, (item, path) => files.push(item), null);
        return files;
    },

    getPosts: (name) => {
        let articles = []
        const root_dirname = path.join(__dirname, '../../')
        const files = util.getFiles(name);


        files.forEach((item) => {
            return articles.push(item.path.replace(root_dirname, '/').replace('/docs', '').replace('.md', '').replace('README', ''));
        });

        console.log(articles);
        return articles;
    }
}