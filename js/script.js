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
        
        //funzione per creare una risposta automatica 
        addAnswer(currentContact){
            const newAnswer = {
                id: new Date().toISOString(),
                date:new Date().toISOString(),
                text:"ok",
                status:'received'
            }
            currentContact.messages.push(newAnswer);
        },
        
        //funzione per aggiungere un messaggio alla chat attuale e ricevere una risposta automatica dopo 1 secondo
        addMessage(currentContact){
            const newMessage = {
                id: new Date().toISOString(),
                date:new Date().toISOString(),
                text:this.newMessageText,
                status:'sent'
            }
            currentContact.messages.push(newMessage);
    
            this.newMessageText = "";

            setTimeout(()=>{
                this.addAnswer(currentContact)
             },1000);
        },

          
    },
});


app.mount('#root');