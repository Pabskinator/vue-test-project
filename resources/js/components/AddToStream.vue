<template>
    <div>
        <div class="card mt-4">

            <div class="card-header d-flex">
                Push to the stream..
            </div>

            <div class="card-body">
                <form @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
                    <div class="form-group">
                        <textarea
                            v-model="form.body"
                            rows="3"
                            id="body"
                            name="body"
                            class="form-control"
                            placeholder="I have something to say..."
                        >

                        </textarea>

                        <span
                            v-text="form.errors.get('body')"
                            v-if="form.errors.has('body')"
                            class="text-danger"
                        >

                        </span>
                    </div>

                    <button
                        type="submit"
                        class="btn btn-success"

                        :disabled="form.errors.any()"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    </div>
</template>

<script>

export default {

    props: [],

    data() {

        return {
            form: new Form({
                body: ''
            })
        }

    },

    methods: {
        onSubmit() {
            this.form
                .post('/statuses')
                .then(status => this.$emit('completed', status))
                .catch(error => console.log(error))
        }
    },

}

</script>

<style scoped>

</style>
