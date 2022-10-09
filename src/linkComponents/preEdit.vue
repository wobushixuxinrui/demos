<template>
  <div>
    <pre>
      <code class="language-js line-numbers" >
        // 1、安装
        npm install prismjs --save
        npm install babel-plugin-prismjs --dex
        // 2、babelrc 配置
        {
          "plugins": [
            ["prismjs", {
              "languages": ["javascript", "css", "html", "markup"],
              "plugins": ["line-numbers"],
              "theme": "solarizedlight",  // 主题库参照 https://prismjs.com/
              "css": true
            }]
          ]
        }
      </code>
    </pre>

    <pre>
      <code class="language-html line-numbers" >
        {{ s }}
      </code>
    </pre>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  mounted(){
    Prism.highlightAll()
  },
  data(){
    return{
      s: `<template>
        <div>
          <pre>
            <code class="language-html line-numbers" >
              {{ s }}
            </code>
          </pre>
        </div>
        </template>
        <script>
          import Prism from "prismjs";
          export default {
            mounted(){
              Prism.highlightAll()
            }
          },
          data(){
            return{
              s:'xxxx'
            }
          }
        <script>
        `
    }
  }
}
</script>
