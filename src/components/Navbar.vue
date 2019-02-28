<template>
    <div class="navBar">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <router-link class="navbar-brand" to="/" exact>Frontend Challenge</router-link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#fronChalege" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="fronChalege">
                    <div class="navbar-nav ml-auto text-center">
                        <router-link class="nav-item nav-link" active-class="active" to="/" exact>Home</router-link>
                        <router-link class="nav-item nav-link" active-class="active" to="/about" exact>About</router-link>
                        <router-link class="nav-item nav-link" active-class="active" to="/faq" exact>FAQ</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
    $blue: #3f72af;
    $white: #f9f7f7;
    $dark: #474547;

    .navbar{
        a{
            font-weight: bold;
        }
        .navbar-brand{
            color: $dark;
            font-size: 35px;
        }

        .navbar-toggler{ background-color: $dark; }

        .nav-link{
            color: $blue !important;
            font-size: 20px;
            padding: 5px 30px !important;

            &.active{
                color: $white !important;
                background-color: $blue;
                border-radius: 50px;
                box-shadow: 2px 2px 6px rgba(#CCC, .95);
            }
        }
    }
</style>

