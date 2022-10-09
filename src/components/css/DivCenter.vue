<template>
  <div class="main">
    <!-- <a-button  type="">居中对齐</a-button>  -->
    
    <div class="methodA">
      <div class="element">
        方法1： <br />
        .methodA{
          position: relative;
          width: 300px;
          height: 300px;
          background: #777;
          .element{
            width: 200px;
            height: 200px;
            background-color: #ccc;
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translateX(-50%) translateY(-50%);
          }
        }
      </div>
    </div>
    <div class="methodB">
      <div class="element">
        方法2： <br />
        // FLEX方式
        .methodB{
          align-items: center;
          background-color: lightgrey;
          display: flex;
          width: 300px;
          height: 300px;
          justify-content: center;
          background: #ccc;
          .element{
            width: 200px;
            height: 200px;
            background-color: #777;
          }
        }
      </div>
    </div>


    justify-content: center; 水平左右 <br />

    align-items: center; 垂直上下
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.main{
  display: flex;

  // translateX方式
  .methodA{
    position: relative;
    width: 300px;
    height: 300px;
    background: #777;
    .element{
      width: 200px;
      height: 200px;
      background-color: #ccc;
      left: 50%;
      top: 50%;
      position: absolute;
      transform: translateX(-50%) translateY(-50%);
    }
  }


  // FLEX方式
  .methodB{
    align-items: center;
    background-color: lightgrey;
    display: flex;
    width: 300px;
    height: 300px;
    justify-content: center;
    background: #ccc;
    .element{
      width: 200px;
      height: 200px;
      background-color: #777;
    }
  }
}
</style>