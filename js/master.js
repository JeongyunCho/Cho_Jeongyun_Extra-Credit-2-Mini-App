(() => {
    //const cars = document.querySelectorAll('.data-ref');

    const vm = new Vue({
        el : "#app",

        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : "",
            Initvideosrc : "mini_1.mp4",
            thumbs: [
                { image: "vid1.jpg", src:"mini_1.mp4" },
                { image: "vid2.jpg", src:"mini_2.mp4" },
                { image: "vid3.jpg", src:"mini_3.mp4" } 
            ]
        },

        mounted : function() {
            // Listen for when Vue is done vuilding itself
            // console.log('mounted');

            this.addPreloader(document.querySelector('.modelInfo'));

            // get the data of the first car
            document.querySelector('#F55').click();

            
        },

        updated : function(){
            // Listen for when Vuje completes its updates / render cycle
            let preloader = document.querySelector('.preloader-wrapper');

            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 1500)
        },

        methods: {
            changeUrl(src){
                let mainVid = document.querySelector("#mainVideo");
                mainVid.src="video/"+src;
            },
            volOn(e) {
                // catch the volon event
                // console.log('moused over the video');

                // unmute the video 
                e.currentTarget.muted = false;
            },

            volOff(e) {
                // catch the mousenout event
                // console.log('mosued off the video');
                e.currentTarget.muted = true;
            },

            addPreloader(parentEl) {
                parentEl.appendChild(document.querySelector('.preloader-wrapper'));
                bodymovin.loadAnimation({
                    wrapper : document.querySelector('.preloader'),
                    animType : 'svg',
                    loop : true,
                    path : './data/bike_loading_animation.json'

                });
            },

            fetchData(e) {
                //debugger;
                let targetURL = e.currentTarget.id;

                fetch(`./includes/index.php?modelNo=${targetURL}`) // go get the data and bring it back! good doggy
                .then(res => res.json()) // turn the result into a plain JS object
                .then(data => {
                    // console.log(data);
                    // run a function to parse our data
                    const { modelName, pricing, modelDetails } = data[0];
                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing =  pricing;
                })
                .catch(function(error) {
                    console.log(error); // if anything broke, log it to the console
                });
            },

        }
    });


  
})();