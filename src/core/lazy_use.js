import Vue from 'vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

// base library
import {
  Button,
  message,
  Modal,
  Tabs,
  Input,
  List
} from 'ant-design-vue'

Vue.use(Antd)
Vue.use(Button)
Vue.use(Modal)
Vue.use(Tabs)
Vue.use(Input)
Vue.use(List)

Vue.prototype.$message = message
Vue.prototype.$info = Modal.info