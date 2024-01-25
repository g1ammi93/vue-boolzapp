const { createApp } = Vue;

const app = createApp({
    name: 'Boolzapp',
    data() {
        return {
            data
        }
    },
    computed: {
        contacts() {
            return this.data.contacts
        }
    }
});

app.mount('#root');