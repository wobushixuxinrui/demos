<template>
  <div>
    <a-tabs  tab-position="left" size="small">
      <a-tab-pane key="1" tab="输入url后的操作">
        


        <pre>
          <code class="language-html line-numbers" >
              https： http和tcp之间加了一层  TSL/SSL安全层    

              输入一个URL到页面过程中发生了什么（高频）

              ---首先在浏览器中输入URL
              查找缓存：浏览器先查看浏览器缓存-系统缓存-路由缓存中是否有该地址页面，如果有则显示页面内容。如果没有则进行下一步。
              DNS域名解析：浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。DNS服务器是基于UDP的，因此会用到UDP协议。
              建立TCP连接：解析出IP地址后，根据IP地址和默认80端口，和服务器建立TCP连接
              发起HTTP请求：浏览器发起读取文件的HTTP请求，，该请求报文作为TCP三次握手的第三次数据发送给服务器
              服务器响应请求并返回结果：服务器对浏览器请求做出响应，并把对应的html文件发送给浏览器
              关闭TCP连接：通过四次挥手释放TCP连接
              浏览器渲染：客户端（浏览器）解析HTML内容并渲染出来，浏览器接收到数据包后的解析流程为：
              构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象
              构建CSS规则树：生成CSS规则树（CSS Rule Tree）
              构建render树：Web浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）
              布局（Layout）：计算出每个节点在屏幕中的位置
              绘制（Painting）：即遍历render树，并使用UI后端层绘制每个节点。
              


              ---网页生成的过程：
              构建DOM树：词法分析然后解析成DOM树（dom tree），是由dom元素及属性节点组成，树的根是document对象
              构建CSS规则树：生成CSS规则树（CSS Rule Tree）
              构建render树：Web浏览器将DOM和CSSOM结合，并构建出渲染树（render tree）
              布局（Layout）：计算出每个节点在屏幕中的位置
              绘制（Painting）：即遍历render树，并使用UI后端层绘制每个节点。
              

              1、输入url （ 协议、网络地址、资源路径 ）
              2、查看浏览器缓存，看是否有缓存，如果有缓存，继续查看缓存是否过期，如果没有过期，直接返回缓存页面，如果没有缓存或者缓存过期，发送一个请求。
              3、浏览器解析url地址，获取协议、主机名、端口号和路径。
              4、获取主机ip地址过程
              （1）浏览器缓存
              （2）主机缓存
              （3）hosts文件
              （4）路由器缓存
              （5）DNS缓存
              （6）DNS递归查询
              5、浏览器发起和服务器的TCP连接，执行三次握手
              6、三次握手连接后，浏览器发送一个http请求
              7、服务器收到请求，转到相关的服务程序，期间可能需要连接并操作数据库（主要分get和post请求）
              8、服务器看是否需要缓存，服务器处理完请求，发出一个响应
              9、服务器并根据请求头包含信息决定是否需要关闭TCP连接（如需关闭，则需要四次挥手过程）
              10、浏览器对接收到的响应进行解码
              11、浏览器解析收到的响应并根据响应的内容（假如是HTML文件），启动渲染引擎开始解析HTML文档，并把标签转化成内容树中的DOM节点。
                  同时它也开始解析样式数据，外链的css文件以及style标签内的样式。所有这些样式数据以及HTML中的可见性指令都是用来创建另一棵树——render 树
              12、处理嵌入的其他资源如css文件、js文件、图片文件、音视频等文件（处理过程类似上述）
            </code>
          </pre>
      </a-tab-pane>
      <a-tab-pane key="2" tab="性能优化">
        、减少请求     <br />
        、文件合并
        、资源压缩     <br />
        、懒加载     <br />  ？？？
        、JS性能
        引用cdn   cdn 大文件不会阻塞
        减少dom 操作
        分包， ：加快主页


        真性能：页面加载、动画操作、内存占用
      </a-tab-pane>
      <a-tab-pane key="3" tab="图片懒加载">
        <router-link to="/imgLazyLoad">demo</router-link>
      </a-tab-pane>
      <a-tab-pane key="4" tab="浏览器渲染机制：重绘&重排">
        <pre>
          <code class="language-js" >
            重绘：
              当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。
            触发条件：
              改变元素的color、background、box-shadow等属性

            重排：
              当DOM的变化影响了元素的几何信息(DOM对象的位置和尺寸大小)，浏览器需要重新计算元素的几何属性
              将其安放在界面中的正确位置，这个过程叫做重排。
            触发条件：
              1、添加或者删除可见的DOM元素
              2、元素尺寸改变——边距、填充、边框、宽度和高度
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="5" tab="盒模型">
        盒模型由四个部分组成，分别是margin、border、padding和content。 <br />
        标准盒模型的width和height属性的范围只包含了content，<br />
        IE盒模型的width和height属性的范围包含了border、padding和content <br />
      </a-tab-pane>
      <a-tab-pane key="6" tab="事件委托、捕获、冒泡、阻止默认">

        <pre>
          <code class="language-html" >

            阻止元素的默认事件
            even.preventDefault();

            阻止元素冒泡事件
            even.stopPropagation();

            捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件；
            目标阶段：目标阶段就是指事件响应到触发事件的最底层元素上；
            冒泡阶段：冒泡阶段就是事件的触发响应会从最底层目标一层层地向外到最外层（根节点），
            事件代理即是利用事件冒泡的机制把里层所需要响应的事件绑定到外层；### 事件

          </code>
        </pre>

        <div @click="print_('外部div')">外部div
          <a-button type="" @click="print_('内部button',$event)">内部button</a-button>
        </div>


      </a-tab-pane>
      <a-tab-pane key="7" tab="箭头函数和普通函数">
        <pre>
          <code class="language-html" >
            箭头根据外层（函数或全局）的作用域来决定 this
            箭头函数常用于回调函数中，包括事件处理器或定时器
            箭头函数和 var self = this，都试图取代传统的 this 运行机制，将 this 的绑定拉回到词法作用域
            没有原型、没有 this、没有 super，没有 arguments，没有 new.target
            不能通过 new 关键字调用
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="8" tab="闭包">
        <pre>
          <code class="language-html" >
          避免变量被污染
          私有化
          保存变量常驻内存

          闭包常用于库的封装
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="9" tab="mvvm">
      </a-tab-pane>
      <a-tab-pane key="10" tab="ooooo">
      </a-tab-pane>
      <a-tab-pane key="11" tab="oooooooo">
      </a-tab-pane>
      <a-tab-pane key="12" tab="oooooooo">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Prism from "prismjs";
export default {
  mounted(){
    Prism.highlightAll()
  },
  components:{
  },
  methods:{
    print_(str,e){
      
      this.$message.info(str)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .ant-tabs .ant-tabs-left-bar .ant-tabs-tab, .ant-tabs .ant-tabs-right-bar .ant-tabs-tab{
  margin-bottom: 0;
}

::v-deep .ant-tabs .ant-tabs-left-bar .ant-tabs-tab, .ant-tabs .ant-tabs-right-bar .ant-tabs-tab{
  padding:5px 24px;
}
</style>