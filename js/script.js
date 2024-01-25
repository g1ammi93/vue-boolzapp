const { user, contacts } = data;

const app = Vue.createApp({
    data() {
        return {
            user,
            contacts,
            activeId: 1
        }
    },
    computed: {
        currentContact() {
            return this.contacts.find(contact => contact.id === this.activeId);
        }
    },
    methods: {
        selectContact(contactId) {
            this.activeId = contactId;
        },
        getAvatarUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`;
        }
    }
});

app.mount('#root');