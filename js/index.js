window.onload = function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    var window_width = window.innerWidth;
    gsap.registerPlugin(DrawSVGPlugin)
    Fancybox.bind("[data-fancybox]", {

    });
    function c1Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card1",
                start: "top top",
                end: "+=260%",
                scrub: 2,
                pin: ".card1",
                pinSpacing: true,

            },
        });

        tl.from('.first-ani-box .logo,.logo-white', { duration: 1, opacity: 0, scale: '1.3', filter: 'blur(10px)', ease: "power1.Out", })
            .from('.first-ani-box .logo-shadow', { duration: 0.5, opacity: 0, filter: 'blur(10px)', ease: "power0.inOut", }, '<0.2')
            .from('.first-ani-box .people', { duration: 1, opacity: 0, ease: "power0.inOut", }, '<0.5')
            .from('.first-ani-box .shining', { duration: 0.5, opacity: 0, ease: "power0.inOut", }, '<0.2')
            .from('.first-ani-box .first-big', { duration: 1, y: '70', opacity: 0, filter: 'blur(10px)', ease: "power1.Out", }, '<0.3')
            .from('.first-ani-box .first-cover', { duration: 1, y: '-70', opacity: 0, filter: 'blur(10px)', ease: "power1.Out", }, '<0.2')


            .to('.c1-video', { duration: 1.2, opacity: 1, ease: "power0.inOut", }, '>0.6')
            .to('.first-ani-box .logo,.logo-white', { duration: 1, scale: '0.7', ease: "power0.inOut", }, '<0.3')
            .to('.first-ani-box .logo,.shining,.logo-white,.logo-shadow,.people,.city,.first-video-bg,.first-cover,.first-big', {
                duration: 1, opacity: 0,
            }, '<')
            .to('.c1-content', { duration: 1, opacity: 1, }, '<')
            .from('.c1-content .logo-box', { duration: 1, opacity: '0', filter: 'blur(5px)', ease: "power1.inOut", }, '<0.7')
            .from('.c1-content .title1,.c1-content .title2-box,.company-box', {
                duration: 1,
                opacity: 0,
                filter: 'blur(5px)',
                ease: "power0.inOut",
                stagger: {
                    each: 0.25,
                }
            }, '<0.4')
    }
    c1Ani();

    function bottomBgVideo() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card1",
                start: "30%",
                end: "bottom",
                scrub: 2,
            },
        });
        tl.to('.bottom-video', { duration: 1, opacity: '1' })
    }
    bottomBgVideo();

    function c2Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card2",
                start: "-35%",
            },
        });

        tl.from('.c2-bg-earth', { duration: 1, y: '60', opacity: 0, scale: 1.2, filter: '(15px)', })
            .from('.c2-title1', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c2-title2', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c2-title3', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c2-title4 .long-text', {
                duration: 1,
                opacity: 0,
                y: '50',
                filter: "blur(10px)",
            }, '<0.3')
            .from('.c2-title4 .cover', {
                duration: 1,
                opacity: 0,
                filter: "blur(10px)",
                y: '-50',
            }, '<0.2')

            .fromTo('.circle-fill', { drawSVG: "0% 0%" }, { duration: 1, drawSVG: "100%", ease: "power0.inOut" }, '<0.15')

    }
    c2Ani();

    function c3Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card3",
                start: "top top",
                end: "+=2000",
                scrub: 2,
                pin: true,

            },
        });
        const c3img1 = document.querySelector('.c3-content1')
        const c3img2 = document.querySelector('.c3-content2')
        const c3img3 = document.querySelector('.c3-content3')
        tl.fromTo(
            c3img2,
            {
                clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
            },
            {
                duration: 1,
                ease: "power1.inOut",
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }, '<')

            .fromTo('.c3-slide-absolute2 .img-text-mix2 img,.c3-slide-absolute2 .img-text2 img', {
                y: 250,
            },
                {
                    duration: 1,
                    y: 0,
                    stagger: {
                        each: 0.2,
                    }
                }, '<')
            .fromTo(
                c3img3,
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
                },
                {
                    duration: 1,
                    ease: "power1.inOut",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                })

            .fromTo('.c3-slide-absolute3 .img-text-mix3 img', {
                y: 150,
            },
                {
                    duration: 1,
                    y: 0,
                    ease: "power0.inOut",
                }, '<')

            .fromTo('.c3-slide-absolute3 .img-text3 img', {
                y: 250,
            },
                {
                    duration: 1,
                    y: 0,

                }, '<0.3')


            .to(c3img2, { duration: 1, opacity: 0 }, '<0.3')
            .to(c3img1, { duration: 1, opacity: 0 }, '<')
    }
    c3Ani();

    function c4Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card4",
                start: "-40%",
            },
        });

        tl.from('.c4-item', { duration: 1, y: '60', opacity: 0, scale: 1.2, filter: '(15px)', })
            .from('.c4-title1', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c4-title2', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c4-title3', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c4-title4 .long-text', {
                duration: 1,
                opacity: 0,
                y: '50',
                filter: "blur(10px)",
            }, '<0.3')
            .from('.c4-title4 .cover', {
                duration: 1,
                opacity: 0,
                filter: "blur(10px)",
                y: '-50',
            }, '<0.2')

            .fromTo('.c4-circle-fill', { drawSVG: "0% 0%" }, { duration: 1, drawSVG: "100%", ease: "power0.inOut" }, '<0.15')

    }
    c4Ani();

    const c5swiper = new Swiper(".card5-swiper", {

        speed: 1500,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
        },
        // pagination: {
        //     el: '.c7-swiper-pagination',
        //     clickable: true,
        // },

    });

    function c6Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card6",
                start: "-45%",

            },
        });

        tl.from('.c6-item', { duration: 1, y: '60', opacity: 0, scale: 1.2, filter: '(15px)', })
            .from('.c6-title1', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c6-title2', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c6-title3', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')

            .from('.c6-title4 .long-text', {
                duration: 1,
                opacity: 0,
                y: '50',
                filter: "blur(10px)",
            }, '<0.3')
            .from('.c6-title4 .cover', {
                duration: 1,
                opacity: 0,
                filter: "blur(10px)",
                y: '-50',
            }, '<0.2')

            .fromTo('.c6-circle-fill', { drawSVG: "0% 0%" }, { duration: 1, drawSVG: "100%", ease: "power0.inOut" }, '<0.15')

    }
    c6Ani();

    function c6Pin() {
        gsap.to(".card6", {
            scrollTrigger: {
                trigger: ".card6",
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false,
                scrub: true,
            },
        });
    }
    c6Pin();

    const c7swiper = new Swiper(".card7-swiper", {
        speed: 1500,
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: '.c7-swiper-pagination',
            clickable: true,
        },
        on: {
            slideChange: function () {
                const index_currentSlide = this.realIndex;
                const banner_text = document.querySelectorAll('.c7-year');

                banner_text.forEach((text, index) => {
                    text.style.opacity = index === index_currentSlide ? 1 : 0;
                });
            },
        },
    });

    function c8Ani() {
        if (window_width <= 1440) {
            var startValue = '-35%'
            var endValue = "+=100"
        } else {
            var startValue = 'top bottom'
            var endValue = "+=1200"
        }
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card8",
                start: startValue,
                end: endValue,
                scrub: 5,
                fastScrollEnd: 9000,

            },
        });

        tl.fromTo('.card8 .overflow .bg', { scale: 1.2, filter: "blur(10px) brightness(1.8)" },
            { duration: 1, scale: 1, filter: "blur(0px) brightness(1)" })
    }
    c8Ani();

    function c9Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".card9",
                start: "-40%",
            },
        });
        tl.from('.c9-item', { duration: 1, y: '60', opacity: 0, scale: 1.2, filter: '(15px)', })
            .from('.c9-title1', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c9-title2', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c9-title3', {
                duration: 1,
                opacity: 0,
                y: '60',
                scale: 1.2,
                filter: "blur(10px)",

            }, '<0.3')
            .from('.c9-title4 .long-text', {
                duration: 1,
                opacity: 0,
                y: '50',
                filter: "blur(10px)",
            }, '<0.3')
            .from('.c9-title4 .cover', {
                duration: 1,
                opacity: 0,
                filter: "blur(10px)",
                y: '-50',
            }, '<0.2')
            .fromTo('.c9-circle-fill', { drawSVG: "0% 0%" }, { duration: 1, drawSVG: "100%", ease: "power0.inOut" }, '<0.15')

    }
    c9Ani();


    const c10swiper = new Swiper(".card10-swiper", {
        speed: 1500,
        // effect: 'fade',


        navigation: {
            prevEl: ".c10prev",
            nextEl: ".c10next"
        },



    });
}