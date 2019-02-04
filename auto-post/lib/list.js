const config = require('../../docs/.vuepress/config.js');
const categoryList = config.themeConfig.sidebar;
const chalk = require('chalk');

module.exports = () => {
    categoryList.forEach(category => {
        console.log(chalk.red(category.title));
        console.log(chalk.red(category.children));
    });
};
