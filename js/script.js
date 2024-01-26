const { user, contacts } = data;

const app = Vue.createApp({
    data() {
        return {
            user,
            contacts,
            activeId: 1,
            newMessageText: '',
            searchText: ''
        }
    },
    computed: {
        currentContact() {
            return this.contacts.find(contact => contact.id === this.activeId);
        },
        // Aggiungo compted per filtrare i messaggi
        filteredContacts() {
            const searchTerm = this.searchText.toLowerCase().trim();
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchTerm)
            );
        }
    },
    methods: {
        selectContact(contactId) {
            this.activeId = contactId;
        },
        getAvatarUrl({ avatar }) {
            return `img/avatar${avatar}.jpg`;
        },
        sendMessage() {
            if (!this.newMessageText) return;
            // Messaggio che invio pushato nel box
            const newMessage = {
                id: new Date().getTime(),
                date: new Date().toLocaleDateString(),
                status: 'sent',
                text: this.newMessageText,
            }
            this.currentContact.messages.push(newMessage)
            this.newMessageText = ''

            // Aggiungo risposta dopo tot tempo
            setTimeout(() => {
                const newMessage = {
                    id: new Date().getTime(),
                    date: new Date().toLocaleDateString(),
                    status: 'received',
                    text: 'ok',
                }
                this.currentContact.messages.push(newMessage);
            }, 1000);
        }
    }
});

app.mount('#root');