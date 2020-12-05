<template>
    <div class="container">

        <div class="row justify-content-center">

            <div class="col-md-8">

                <div class="card mt-3" v-for="status in statuses">

                    <div class="card-header d-flex">
                        <p>{{ status.user.name }} said...</p>
                        <p class="ml-auto">{{ status.created_at | ago }}</p>
                    </div>

                    <div class="card-body">
                        {{ status.body }}
                    </div>

                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>

            </div>

        </div>

    </div>
</template>

<script>
    import moment from 'moment';
    import AddToStream from "../components/AddToStream";

    export default {
        components: {
            AddToStream
        },

        data() {
            return {
                statuses: [],
            }
        },

        created() {
            axios.get('/statuses')
                .then(({data}) => this.statuses = data);
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },

        methods: {
            addStatus(status){
                this.statuses.unshift(status);

                alert('Your status has been added to the stream.');

                window.scrollTo(0, 0);
            }
        }
    }
</script>
