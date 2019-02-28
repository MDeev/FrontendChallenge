<template>
    <div class="top" v-on:click="gotTop()">
        <span>&uarr;</span>
    </div>
</template>

<script>
import $ from 'jquery'
global.$ = $

export default {
    methods: {
        gotTop: function() {
            // Scroll to top
            $('body, html').animate({scrollTop: 0}, 400);
        },
        showHideGoTopBtn: function() {
            // Show/Hide the "Scroll top" button
            var top = $(window).scrollTop();
            (top <= 100) ? $('.top').fadeOut(400) : $('.top').fadeIn(400);
        }
    },
    created() {
        // Call the method on scroll
        window.addEventListener('scroll', this.showHideGoTopBtn);
    }
}
</script>


<style lang="scss" scoped>
    $blue: #3f72af;
    $white: #f9f7f7;

    .top{
        position: fixed;
        right: 50px;
        bottom: 50px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: $blue;
        color: $white;
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        display: none;

        span{
            font-size: 80px;
            font-weight: bold;
            overflow: hidden;
            height: 65px;
            display: block;
            margin-top: -28px;
        }
    }
</style>

