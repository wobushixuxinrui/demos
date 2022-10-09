<template>
  <div>
    <a-tabs  tab-position="left">
      <a-tab-pane key="0" tab="几种常见css布局">
        <iframe src="https://juejin.cn/post/6844903710070407182#heading-12" width="100%" height="500px" frameborder="0"></iframe>
      </a-tab-pane>
      
      <a-tab-pane key="1" tab="CSS补漏">
        <pre>
          <code class="language-js line-numbers" >
            -------------
            white-space属性声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）
            键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否
            生效）等。

            其属性值包括下面这些。
            •normal：合并空白字符和换行符。
            •pre：空白字符不合并，并且内容只在有换行符的地方换行。
            •nowrap：该值和normal一样会合并空白字符，但不允许文本环绕。
            •pre-wrap：空白字符不合并，并且内容只在有换行符的地方换行，同时允许文本环绕。
            •pre-line：合并空白字符，但只在有换行符的地方换行，允许文本环绕。

            
            -------------
            margin:auto:用来计算元素对应方向应该获得的剩余间距大小。
            触发计算有一个前提条件
            就是width或height为auto时，元素是具有对应方向的自动填充特性的。

            （1）如果一侧定值，一侧auto，则auto为剩余空间大小。
            （2）如果两侧均是auto，则平分剩余空间。

            -------------
            如果想让英文字符和中文一样，每一个字符都用最小宽度单元，可以试试使用CSS中的word-break:break-all。

            -------------
            inherit 规定应该从父元素继承 z-index 属性的值。

            -------------
            CSS 选择器
            后代选择器（h1p）
            相邻后代选择器（子）选择器（ul>li）
            兄弟选择器（li~a）
            相邻兄弟选择器（li+a）
            属性选择器（a[rel="external"]）
            伪元素选择器（::before、::after）
            伪类选择器（a:hover,li:nth-child）

            -------------
            elem:last-child选中最后一个子元素 【常用】
            elem:nth-child(n)选中父元素下的第n个子元素，并且这个子元素的标签名为elem，n可以接受具体的数
            elem:only-child如果elem是父元素下唯一的子元素，则选中之  
            elem:nth-of-type(n)选中父元素下第n个elem类型元素，n可以接受具体的数值，也可以接受函数。
            elem:first-of-type选中父元素下第一个elem类型元素。
            elem:last-of-type选中父元素下最后一个elem类型元素。
            elem:only-of-type如果父元素下的子元素只有一个elem类型元素，则选中该元素。
            elem:empty选中不包含子元素和内容的elem类型元素。
            elem:target选择当前活动的elem元素。
            :not(elem)选择非elem元素的每个元素。
            :enabled 控制表单控件的禁用状态

            -------------
            display  inherit    规定应该从父元素继承display属性的值。

            -------------
            position:
            static
            默认值。没有定位，元素出现在正常的流中（忽略top,bottom,left,right,z-index声明）。
            inherit
            规定从父元素继承position属性的值。

            -------------
            visibility 属性规定元素是否可见  【仍占用文档流空间】

            -------------
            统配符*{}  比较耗性能
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="2" tab="三角形梯形">
        <div style="width: 50px;
			  height: 10px;
			  border-width: 10px;
			  border-style: solid;
			  border-color: #ddd coral red #368fff;"></div>
      </a-tab-pane>
      <a-tab-pane key="3" tab="flex">
        
        <pre>
          <code class="language-js line-numbers" >
            行内元素也可以使用Flex布局 ：display: inline-flex;

            
            父盒子：
            主轴方向：     flex-direction: row | row-reverse | column | column-reverse;
            如何换行：     flex-wrap
            主轴上的对齐方式： justify-content：justify-content: flex-start | flex-end | center | space-between | space-around;
            交叉轴对齐方式： align-items: flex-start | flex-end | center | baseline | stretch;    
            // baseline: 项目的第一行文字的基线对齐
            // stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
            多轴的上下对齐： align-content: flex-start | flex-end | center | space-between | space-around | stretch;

            flex-direction属性和flex-wrap属性的简写形式：flex-flow
            
            子盒子：
            order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
            flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
            flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
            flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
              浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
            flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
            align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
              默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
          </code>
        </pre>
        <iframe src="https://www.runoob.com/w3cnote/flex-grammar.html" width="100%" height="12500px" frameborder="0"></iframe>
        <a href="https://www.runoob.com/w3cnote/flex-grammar.html">flex演示</a>
      </a-tab-pane>
      <a-tab-pane key="4" tab="垂直居中">
        <DivCenter />
      </a-tab-pane>
      <a-tab-pane key="5" tab="rem/vw/vh">
        1、如果css里面没有设定html的font-size，则默认浏览器以1rem=16px来换算 <br />
        2、vw/vh :全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度   1vh=视窗高度的1%；1vw=视窗宽度的1% <br />
        3、百分比继承父级   vw/vh只和视窗有关
      </a-tab-pane>
      <a-tab-pane key="6" tab="文本缩小到12以下">
        <span class="minisize">我是不是很小？</span>
      </a-tab-pane>
      <a-tab-pane key="7" tab="左固定右自适应">
        <div class="futher">
          <div class="left">1、BFC盒子，左固定宽，右不设置宽</div>
          <div class="right">2、flex ，左固定，右100%</div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="8" tab="CSS盒模型">
        <pre>
          <code class="language-js line-numbers" >
            CSS 中的 box-sizing 属性定义了 user agent（用户计算机程序）应该如何计算一个元素的总宽度和总高度。
            border-box（IE盒模型）、content-box（标准盒模型）
          </code>
        </pre>
        IE盒模型
        <img src="@/assets/border-box.png" width="330px" alt="IE盒模型" />
        标准盒模型
        <img src="@/assets/content-box.png" width="330px" alt="标准盒模型">
      </a-tab-pane>
      <a-tab-pane key="9" tab="BFC">
        <pre>
          <code class="language-js line-numbers" >
            BFC就是页面上一个单独的容器，容器内部的元素不会影响到外面的元素
            

            满足其一，就是建立了一个BFC
            float的值不是none
            position的值是absolute、fixed
            display的值是inline-block、flow-root、table-cell、table-caption、flex或者inline-flex、grid或者inline-grid
            overflow的值不是visible



            普通流中元素的位置由该元素在 HTML 文档中的位置决定

            阻止外边界折叠：css文档流对于两个块元素的间距是以元素的margin属性大的为准，小的那个就被重叠了，触发BFC特性后，就不会重叠了，而是两者之和
            阻止高度塌陷：子元素具有float特性会造成父元素高度塌陷，不会包裹内部元素，父元素的高度也不考虑float元素，触发BFC特性后会阻止这些问题
            防止被覆盖：浮动元素会对非浮动兄弟元素进行覆盖，为了防止覆盖，可以给该兄弟节点触发BFC特性，让其“独立”起来。
            BFC元素和浮动元素做兄弟时可以实现两栏或多栏的自适应布局：设置左浮动元素A，兄弟元素B（非浮动）会发生覆盖效果，即A覆盖B，
              此时触发B元素的BFC特性，则B不被覆盖，自动退避A元素，同时自己本身就具有流特性，填满父元素，实现了A、B两栏的自适应布局。
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="10" tab="chrome自动填充表单的黄色背景">
        <pre>
          <code class="language-js line-numbers" >
            chrome表单自动填充后，input文本框的背景会变成黄色的，通过审查元素可以看到这是由于chrome会默认给自动填充的in
            put表单加上input:-webkit-autofill私有属性，然后对其赋予以下样式：

            {
            background-color:rgb(250,255,189)!important;
            background-image:none!important;
            color:rgb(0,0,0)!important;
            }

            对chrome默认定义的background-color，background-image，color使用important是不能提高其优先级的，但是
            其他属性可使用。

            使用足够大的纯色内阴影来覆盖input输入框的黄色背景，处理如下

            input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{
            -webkit-box-shadow:000px1000pxwhiteinset;
            border:1pxsolid#CCC!important;
            }
          </code>
        </pre>
      </a-tab-pane>
      <a-tab-pane key="11" tab="空格换行">
        white-space: break-spaces
      </a-tab-pane> 
      <a-tab-pane key="12" tab="文本溢出">
        <div class="overdiv">
          <span class="overspan">
            文本溢出文本溢出文本溢出文本溢出
          </span>
        </div>
        <pre>
          <code class="language-js line-numbers" >
            .overdiv{
              width: 100px;
            }
            .overspan{
              display:-webkit-inline-box;
              -webkit-box-orient:vertical;
              -webkit-line-clamp:1;
              overflow:hidden;
              word-wrap: break-word;
              word-break: break-all;
            }
          </code>
        </pre>
      </a-tab-pane> 
    </a-tabs>
  </div>
</template>



<script>
import Prism from "prismjs";
import DivCenter from '@/components/css/DivCenter.vue'
export default {
  
  components:{
    DivCenter
  },
  mounted(){
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
  // 文本缩小
.minisize{
  display: inline-block;
  transform: scale(0.5);
  -webkit-transform: scale(0.5);
}
// 左固定右自适应
.futher{
  width: 1000px;
  height: 200px;
  
  .left{
    float: left;
    width: 300px;
    height: 200px;
    background-color: #999;
  }
  .right{
    height: 200px;
    background-color: #ccc;
  }
}

/**文本溢出 */

  .overdiv{
    width: 100px;
  }
  .overspan{
    display:-webkit-inline-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
    overflow:hidden;
    word-wrap: break-word;
    word-break: break-all;
  }

</style>