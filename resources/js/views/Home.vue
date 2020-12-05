<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" v-for="status in statuses">
                    <div class="card-header d-flex">
                        <p>{{ status.user.name }} said...</p>
                        <p class="ml-auto">{{ postedOn(status) }}</p>
                    </div>

                    <div class="card-body">
                        {{ status.body }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        data() {
            return {
                statuses: [],
            }
        },

        created() {
            axios.get('/statuses')
                .then(({data}) => this.statuses = data);
        },

        methods: {
            postedOn(status){
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
