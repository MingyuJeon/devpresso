#!/usr/bin/env node

const program = require('commander');

const list = require('../lib/list');
const push = require('../lib/push');

program
    .option('-c, --category', 'Check category')
    .option('-n, --postname', 'Put post name')
    .action((category, name) => {
        const pack = {
            category, name
        }
        // push(pack);
    });

program
    .command('list')
    .alias('l')
    .action(() => list());

program.parse(process.argv);