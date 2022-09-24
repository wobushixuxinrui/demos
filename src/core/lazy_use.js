import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

// base library
import {
  Button,
  message,
  Modal,
  Tabs
} from 'ant-design-vue'

Vue.use(Antd)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Tabs)

Vue.prototype.$message = message
Vue.prototype.$info = Modal.info