console.log("Vue ok", Vue)

const {createApp} = Vue;

const app = createApp({
    name:"Boolzapp",

    data: () => ({
        data,
        user: data.user,
        contacts: data.contacts,
        activeId: null,
        newMessageText:"",
        searcheduser:""

    }),

    computed: {
        //funnzione per ricavare il contatto attualmente attivo nella lista
        currentContact() {
            return this.contacts.find(contact => contact.id === this.activeId);
        },
        
        //funzione che mi restituisce un array di contatti contenenti la stringa di caratteri inserita dall'utente
        searchedConversations() {
            const searchedUser = this.searcheduser.toLowerCase();

            return this.contacts.filter(contact => contact.name.toLowerCase().includes(searchedUser));
        },

        
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
                date:new Date().toLocaleString(),
                text:"ok",
                status:'received'
            }
            currentContact.messages.push(newAnswer);
        },
        
        //funzione per aggiungere un messaggio alla chat attuale e riceve una risposta automatica dopo 1 secondo
        addMessage(currentContact){
            const newMessage = {
                id: new Date().toISOString(),
                date:new Date().toLocaleString(),
                text:this.newMessageText,
                status:'sent'
            }
            currentContact.messages.push(newMessage);
    
            this.newMessageText = "";

            setTimeout(()=>{
                this.addAnswer(currentContact)
             },1000);
        },
        
        //funzione che elimina un messaggio ricevendo come parametro il suo id nell'account corrente
        removeMessage(id){
            this.currentContact.messages = this.currentContact.messages.filter(message => id !== message.id);
        },
        
        //Funzione che mi restituisce un array con elementi che hanno lo status dei messaggi impostato a ricevuto
        messagesReceived (array) {
            return array.messages.filter(message => message.status === 'received');
        },
        
        //funzione che seleziona l'ultimo elemento di un array
        getLastElement(array){
            return array[array.length - 1];
        }


        

        

          
    },
    //salvo il primo oggetto dell'array contacts nell'active id per mostrarlo all'avvio della pagina
    created() {
        this.activeId = this.contacts[0].id;
    }
});


app.mount('#root');