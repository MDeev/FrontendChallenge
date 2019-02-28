<template>
    <div class="repos">
        <!-- Send props/date to the component as attribute -->
        <SingleRepo :username="this.user" :queryData="this.query" />
    </div>
</template>

<script>
import SingleRepo from '@/components/SingleRepo.vue'
export default {
     props:{
        query: String,
        user: String
    },
    components: {
        SingleRepo
    }
}
</script>

