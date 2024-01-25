console.log("Vue ok", Vue)

const {createApp} = Vue;

const app = createApp({
    name:"Boolzapp",
    data: () => ({
        data,
        user: data.user,
        contacts: data.contacts,
        
    }),
     
    computed: {
    },

    methods: {
        getAvatarPic (avatar) {
            return `img/avatar${avatar}.jpg`;
        }
        
    }

});

app.mount('#root');