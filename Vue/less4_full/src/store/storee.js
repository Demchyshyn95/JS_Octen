import Vue from 'vue'
import VueX from 'vuex'
import {listEl, listElModule} from "./List/listEL";

Vue.use(VueX)

export const store = new VueX.Store({
modules:{
    [listElModule]:listEl
}
})