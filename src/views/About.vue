<template>
    <div class="about text-center">
        <p>This website made with <span>&#10084;</span> by <a href="https://www.mohamedjaoufi.ml" target="_blank">MDeev</a></p>
        <p>This website created using <strong>Vue</strong> framework</p>
    </div>
</template>

<style lang="scss" scoped>
    $blue: #3f72af;

    .about{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;

        padding-top: 40px;
        padding-bottom: 40px;
        font-size: 30px;
        span{ color: #F00; }
        a{ color: $blue; text-decoration: none; }
    }
</style>

