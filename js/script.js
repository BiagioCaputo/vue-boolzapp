console.log("Vue ok", Vue)

const {createApp} = Vue;

const app = createApp({
    name:"Boolzapp",
    data: () => ({
        data,
        user: data.user,
        contacts: data.contacts,
        activeId: 1,
        activeContact: {},
        newMessageText:"",

    }),
    computed: {
        //metodo per ricavare il contatto attualmente attivo nella lista
        currentContact() {
            return this.contacts.find(contact => contact.id === this.activeId);
        }

    },

    methods: {
        //funzione per impostare le immagini degli utenti
        getAvatarPic (avatar) {
            return `img/avatar${avatar}.jpg`;
        },
        
        //funzione per aggiungere un messaggio
        addMessage(){
            const newMessage = {
                id: new Date().toISOString(),
                date:new Date().toISOString(),
                text:this.newMessageText,
                status:'sent'
            }
            this.messages.push(newMessage);
    
            this.newMessageText = "";
        },
        
    }
});


app.mount('#root');