<template>
  <div>
    <a-button @click="try_" type="">触发</a-button> 

  </div>
</template>

<script>
import json2md from 'json2md'
export default {
  methods:{
    try_(){
      // console.log(json2md)

      console.log(json2md([
        { h1: "JSON To Markdown" }
      , { blockquote: "A JSON to Markdown converter." }
      , { img: [
            { title: "Some image", source: "https://example.com/some-image.png" }
          , { title: "Another image", source: "https://example.com/some-image1.png" }
          , { title: "Yet another image", source: "https://example.com/some-image2.png" }
          ]
        }
      , { h2: "Features" }
      , { ul: [
            "Easy to use"
          , "You can programmatically generate Markdown content"
          , "..."
          ]
        }
      , { h2: "How to contribute" }
      , { ol: [
            "Fork the project"
          , "Create your branch"
          , "Raise a pull request"
          ]
        }
      , { h2: "Code blocks" }
      , { p: "Below you can see a code block example." }
      , { "code": {
            language: "js"
          , content: [
              "function sum (a, b) {"
            , "   return a + b"
            , "}"
            , "sum(1, 2)"
            ]
          }
        }
    ]))

      this.mapset()
    },
    mapset(){
      
    }
  }
}
</script>

<style>

</style>
