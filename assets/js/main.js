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
        ],
        counter: 0,
        img: [
            "assets/img/testimonial-1.png",
            "assets/img/testimonial-2.png",
            "assets/img/testimonial-3.png",
            "assets/img/testimonial-4.png",
        ],
        name: [
            "Sophia",
            "Nicco",
            "Diego",
            "Mia"
        ]
    },
    created: function () {
        setInterval(this.nextImg, 3000)
    },
    methods: {
        shopOffer(){
            alert("Grazie per aver scelto Driving School !!")
        },
        mandaAiVideos(){
            alert("Al momento non è ancora presente una pagina Video, riprova quando sarò un programmatore migliore!!")
        },
        nextImg() {
            this.counter++;
            if (this.counter == this.img.length) {
                this.counter = 0;
            }
            console.log(this.counter);
        },
        prevImg() {
            if (this.counter === 0) {
                this.counter = (this.img.length - 1);
            } else {
                this.counter--;
            }
            console.log(this.counter);
        },
        circleClick(i) {
            this.counter = i;
        }
    },
    mounted() {
        document.addEventListener("keyup", e => {
            if (e.key === "ArrowRight") {
                this.nextImg();
            } else if (e.key === "ArrowLeft") {
                this.prevImg();
            }
        })
    }
})