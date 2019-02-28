<template>
    <div class="notfound text-center">
        <span>This page not found</span>
        <span>404</span>
        <!-- Redirect to home page -->
        <router-link to="/" exact>Back to home</router-link>
    </div>
</template>

<style lang="scss" scoped>
    $blue: #3f72af;
    $white: #f9f7f7;
    
    .notfound{
        position: absolute;
        top: 57%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        span{
            text-transform: uppercase;
            font-weight: bold;
            display: block;
            &:first-of-type{ margin-bottom: -80px; }
            &:last-of-type{ font-size: 200px; margin-bottom: -40px;  }
        }
        a{
            padding: 5px 40px;
            border-radius: 50px;
            background-color: $blue;
            color: $white;
            text-decoration: none;
            box-shadow: 2px 2px 6px rgba(#CCC, .95);
        }
    }
</style>

