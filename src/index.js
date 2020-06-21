import * as $ from 'jquery'
import Post from "@models/Post";
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'

import './babel'

import json from '@/assets/json'
import xml from './assets/data.xml'
import csv from './assets/data.csv'
import WebpackLogo from './assets/webpack-logo.png'

const post = new Post ('Webpack Post Title', WebpackLogo);
console.log(post)
$('pre').addClass('code').html(post.toString());

console.log(json)
console.log(xml)
console.log(csv)
