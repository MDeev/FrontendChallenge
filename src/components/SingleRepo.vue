<template>
    <div class="repo-details">
        <div v-for="(r, index) in repo" :key="index">
            <div class="row">
                <div class="col-sm-12 col-md-4 mb-3 mb-md-0 user-info">
                    <img class="img-fluid" :src="r.owner.avatar_url" :alt="r.owner.login">
                    <div>
                        <a :href="r.owner.html_url" target="_blank">{{ r.owner.login }}</a>
                    </div>
                </div>
                <div class="col-sm-12 col-md-8 text-center text-md-left">
                    <h3><a :href="r.html_url" target="_blank">{{ r.name }}</a></h3>
                    <p v-if="(r.description == null)">No description</p>
                    <p v-else>{{ r.description }}</p>
                    <div class="repo-info">
                        <!-- Chenge Date Format from ISO to String -->
                        <div>Pushed at: <strong>{{ new Date(r.pushed_at).toDateString() }}</strong></div>
                        <div>Last update: <strong>{{ new Date(r.updated_at).toDateString() }}</strong></div>
                        <div class="_repo-info">
                            <span>Stars: <strong>{{ r.stargazers_count }}</strong></span>
                            <span>Watch: <strong>{{ r.watchers_count }}</strong></span>
                            <span>Issues: <strong>{{ r.open_issues_count }}</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        queryData: String,
        username: String,
    },
    data(){
        return{
            repo: null
        }
    },
    methods: {
        // Get data of selected/clicked repo 
        getRepo: function() {
            const URI = 'https://api.github.com/search/repositories?q=' + this.username + '/' + this.queryData;
            var result = null;
            this.$http.get(URI).then((response) => {
                result = response.data.items;
                // Redirecting the user to not found page if the repo is not exist
                (result != '') ? this.repo = result : this.$router.push({ path: '/404' });
            });
        }
    },
    mounted: function () {
        // Call the method on load
        this.getRepo();
    }
}
</script>

<style lang="scss" scoped>
    $blue: #3f72af;
    $white: #f9f7f7;
    $dark: #474547;

    .repo-details{
        padding-top: 80px;
        padding-bottom: 80px;
        overflow: hidden;
        a{ text-decoration: none; }

        .user-info{
            text-align: center;
            overflow: hidden;

            img{
                width: 100%;
                max-width: 250px;
                max-height: 250px;
                padding: 5px;
                background-color: #FFF;
                border: 1px solid #CCC;
                border-radius: 50%;
                margin-bottom: 15px;
            }
            a{
                font-size: 20px;
                background-color: $dark;
                color: $white;
                border-radius: 20px;
                padding: 5px 20px;
                line-height: 2;
                box-shadow: 2px 2px 6px rgba(#CCC, .95);
            }
        }
        h3{
            font-size: 45px;
            margin-top: 20px;
            margin-bottom: 20px;
            display: block;
            font-weight: bold;
            a{ color: $dark; }
        }
        p{
            font-size: 20px;
            color: #656565;
            margin-bottom: 20px;
        }
        .repo-info{
            & > div{
                &:first-of-type, &:nth-of-type(2){
                    display: inline-block;
                    margin: 5px 10px;
                }
                &:nth-of-type(2){ margin-bottom: 40px; }
            }
        }
    }
</style>


