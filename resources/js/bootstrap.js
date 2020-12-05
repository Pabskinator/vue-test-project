import Vue from 'vue';
import VueRouter from "vue-router";

window._ = require('lodash');

window.Vue = Vue;

Vue.use(VueRouter);

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
