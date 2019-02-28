<template>
    <div class="repos">
        <div class="repo-title text-center text-lg-left row">
            <div class="col-lg-8">
                <h2 class="mb-3 mb-lg-0 ">The most starred Github repositories </h2>
            </div>
            <div class="col-lg-4">
                <div>
                    <label for="date">Since</label>
                    <input id="date" class="form-control d-inline-block w-75" type="date" :max="lastDate" :min="priorDate" v-on:change="getReposByDate()" v-model="selDate">
                </div>
            </div>
        </div>
        <hr>
        <div class="_nodata text-center" v-if="repos == '' && loading">No data to show</div>
        <div class="repo" v-for="(repo, index) in repos" :key="index">
            <router-link class="repo-link text-center text-md-left" :to="'/' + repo.full_name">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-2 mb-3 mb-md-0  repo-img">
                        <img class="img-fluid" :src="repo.owner.avatar_url" :alt="repo.name">
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-10 repo-info">
                        <h2>{{ repo.name }}</h2>
                        <!-- Checking if the description is empty -->
                        <p v-if="(repo.description == null)">No description</p>
                        <p v-else-if="(repo.description != null && repo.description.length >= 100)">{{ repo.description | shortPara }}</p>
                        <p v-else>{{ repo.description }}</p>
                        <div class="_repo-info">
                            <span>Satrs: {{ numberOfStars(repo.stargazers_count) }}</span>
                            <span>Issues: {{ numberOfIssues(repo.open_issues_count) }} </span>
                            <span class="d-block d-md-inline-block mt-3 mb-mt-0 ">Submited <strong>{{ getTimeInterval(repo.pushed_at) }}</strong> ago by <strong>{{ repo.owner.login }}</strong></span>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="loading text-center" v-if="!loading" v-cloak>
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
global.$ = $

export default {
    data() {
        return{
            repos: [],
            todayDate: new Date(),
            today: new Date(),
            lastDate: null,
            priorDate: null,
            page: 1,
            loading: false,
            dateValue: '',
            selDate: ''
        }
    },
    methods: {
        // Get repos
        getRepos: function(p = 1, d = this.lastDate){
            if(d == '')  this.selDate = d = this.lastDate;
            const URI = 'https://api.github.com/search/repositories?q=created:>'+ d +'&sort=stars&order=desc&page=' + p;

            this.$http.get(URI).then((response) => {
                this.repos = this.repos.concat(response.data.items);
                this.loading = true;
            });
        },
        // interval time (1 day ago) for example
        getTimeInterval: function(stringDate){
            var date =  new Date(stringDate),
            seconds = Math.floor((this.today - date) / 1000),
            interval = 0;

            // interval per year
            interval = Math.floor(seconds / 31556926);
            if (interval == 1) return interval + " year";
            else if (interval > 1) return interval + " years";

            // interval per month
            interval = Math.floor(seconds / 2629743.83);
            if (interval == 1) return interval + " month";
            else if (interval > 1) return interval + " months";

            // interval per day
            interval = Math.floor(seconds / 86400);
            if (interval == 1) return interval + " day";
            else if (interval > 1) return interval + " days";

            // interval per hour
            interval = Math.floor(seconds / 3600);
            if (interval == 1) return interval + " hour";
            else if (interval > 1) return interval + " hours";

            // interval per minute
            interval = Math.floor(seconds / 60);
            if (interval == 1) return interval + " minute";
            else if (interval > 1) return interval + " minutes";

            // interval per seconds
            return Math.floor(seconds) + " seconds";
        },
        // Change numbers format 1500 to 1.5k
        calcNb: function(nbr) {
            var number;
            if(nbr >= 1000){
                number = Math.round(nbr*nbr/1000)/nbr;
                number = number.toFixed(1) + 'k';
            }
            else {
                number = nbr;
            }

            return number;
        },
        numberOfStars: function(nb) { return this.calcNb(nb); },
        numberOfIssues: function(nb) { return this.calcNb(nb); },
        scrollDataLoad: function() {
            // This method to load data on scroll
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
                if(this.loading){
                    this.page = this.page + 1;
                    this.loading = false;
                    this.getRepos(this.page);
                }
            }
        },
        changeFormatDate(dateV){
            var getDay = dateV.getDate(),
            getMonth = dateV.getMonth() + 1,
            getYear = dateV.getFullYear(),
            getDate = '';
            (getMonth < 10) ? getDate = getYear + '-0' + getMonth + '-' + getDay : getDate = getYear + '-' + getMonth + '-' + getDay;
            return getDate;
        },
        getDateValue: function() {
            var yesterdayDate = new Date(this.todayDate.setDate(this.todayDate.getDate() - 1));
            var previousDate = new Date(this.todayDate.setDate(this.todayDate.getDate() - 30));
            this.lastDate = this.changeFormatDate(yesterdayDate);
            this.selDate =  this.lastDate;
            this.priorDate = this.changeFormatDate(previousDate);
        },
        getReposByDate: function() {
            // Get repos by selected date on input
            this.repos = [];
            this.loading = false;
            this.getRepos(null, this.selDate);
        }
    },
    mounted: function () {
        this.getRepos();
    },
    created() {
        window.addEventListener('scroll', this.scrollDataLoad);
        this.getDateValue();
    }
}
</script>


<style lang="scss" scoped>
$dark: #474547;

.repos{
    padding-top: 50px;
    padding-bottom: 50px;
    
    .repo-title label{ margin-right: 10px; }

    hr{ margin-top: 20px; margin-bottom: 20px; }

    ._nodata{ padding-top: 30px; font-size: 30px; }

    .repo-link{
        display: block;
        color: $dark;
        background-color: #F1F1F1;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px rgba(#CCC, .3);
        overflow: hidden;
        transition: all .3s ease-in-out;

        &:hover{
            box-shadow: 2px 2px 10px rgba(#CCC, .8);
        }

        .repo-img{
            overflow: hidden;
        }

        .repo-info{
            h2{
                text-transform: uppercase;
                font-weight: bold;
                color: $dark;
            }
            p{
                color: #757575;
            }
            & > div._repo-info{
                span{
                    margin: 0 5px;

                    &:last-of-type{
                        background-color: transparent !important;
                        color: $dark !important;
                        box-shadow: none !important;
                    }
                }
            }
        }
    }

    .loading{
        text-align: center;

        & > div{
            display: inline-block;
            padding: 40px 0;

            span{
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: $dark;
                margin: 0 3px;
                transform: scale(.1);
                animation: loading 1s ease-in-out infinite;

                &:first-of-type{ animation-delay: .2s; }
                &:nth-of-type(2){ animation-delay: .4s; }
                &:nth-of-type(3){ animation-delay: .6s; }
                &:last-of-type{ animation-delay: .8s; }
            }
        }
    }
}

@keyframes loading{
    0%, 100%{ transform: scale(.1); }
    50%{ transform: scale(1); }
}
</style>

