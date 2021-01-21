let app = new Vue({
    el: "#app",
    data: {
        linksNav: [
            "HOME",
            "ABOUT",
            "PRICES",
            "COURSES",
            "LOCATIONS",
            "BLOG",
        ],

        infoFooter: [
            {
                icona: "fas fa-home",
                text: "12345 North Main Street. New york, NY 555555"
            },
            {
                icona: "fas fa-phone",
                text: "1.800.555.6789"
            },
            {
                icona: "far fa-envelope",
                text: "info@your-domain.com"
            },
            {
                icona: "fas fa-link",
                text: "Theme-Fusion.com"
            },
        ],

        elementFooter: [
            {
                icona: "far fa-arrow-alt-circle-right",
                text: "Pass Plus"
            },
            {
                icona: "far fa-arrow-alt-circle-right",
                text: "Intensive Course"
            },
            {
                icona: "far fa-arrow-alt-circle-right",
                text: "Automatic"
            },
            {
                icona: "far fa-arrow-alt-circle-right",
                text: "Instructor Training"
            },
        ]
    },
    methods: {
        shopOffer(){
            alert("Grazie per aver scelto Driving School !!")
        },
        mandaAiVideos(){
            alert("Al momento non è ancora presente una pagina Video, riprova quando sarò un programmatore migliore!!")
        }
    }
})