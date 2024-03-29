const fs = require("fs");

const zeroPadding = num => {
  if (num < 10) {
    return "0" + String(num);
  } else {
    return String(num);
  }
};

const date = new Date();
const Y = zeroPadding(date.getFullYear());
const M = zeroPadding(date.getMonth() + 1);
const D = zeroPadding(date.getDate());

const template = `
import BlogLayout from "../../components/blog-layout";
import BlogMeta from "../../components/blog-meta";

export const meta = {
  date: '${Y}-${M}-${D}',
  title: 'ここにタイトルを記入してください',
  url: '/blog/${Y}/${M}/${D}',
  description: '${Y}-${M}-${D} の日記'
}

## ここにタイトルを記入してください
#### ${Y}-${M}-${D}



<BlogLayout meta={meta} />
<BlogMeta meta={meta} />
`;

fs.writeFile(`./pages/posts/${Y}${M}${D}.mdx`, template, "utf-8", err => {
  if (err) throw err;
  console.log(`Successfully generated: ${Y}${M}${D}.mdx`);
});