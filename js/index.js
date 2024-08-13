window.onload = function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    var window_width = window.innerWidth;

    function c1Ani() {
        let tl = gsap.timeline({
            delay: 1
        });
        tl.from('.c1-content .logo-box', { duration: 1, opacity: '0', filter: 'blur(5px)', ease: "power1.inOut", })
            .from('.c1-content .title1,.c1-content .title2-box,.company-box', {
                duration: 1,
                opacity: 0,
                filter: 'blur(5px)',
                ease: "power1.inOut",
                stagger: {
                    each: 0.25,
                }
            }, '<0.3')
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
                start: "-40%",
            },
        });

        tl
            // .to('.c2-bg-earth', { duration: 2, ease: "power1.inOut", mask: 'radial-gradient(circle at 50% 50%, black 100%, transparent 25%)' })
            .from('.c2-title1,.c2-title2,.c2-title3,.c2-title4', {
                duration: 1,
                opacity: 0,
                filter: 'blur(5px)',
                ease: "power1.inOut",
                stagger: {
                    each: 0.25,
                }
            }, '<0.4')

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
                // pinSpacing: true,
                // invalidateOnRefresh: true
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

        tl.from('.c4-title1,.c4-title2,.c4-title3,.c4-title4', {
            duration: 1,
            opacity: 0,
            filter: 'blur(5px)',
            ease: "power1.inOut",

            stagger: {
                each: 0.25,
            }
        })

    }
    c4Ani();

    // function c5Ani() {

    //     let tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".card5",
    //             start: "top top",
    //             end: "+=2000",
    //             scrub: 2,
    //             pin: true,
    //             pinSpacing: true,
    //             invalidateOnRefresh: true
    //         },
    //     });

    //     tl.fromTo('.c5-content2',
    //         { filter: 'blur(5px) brightness(2)', },
    //         {
    //             duration: 1,
    //             opacity: 1,
    //             ease: "power1.inOut",
    //             filter: 'blur(0px) brightness(1)',
    //         })
    //         .fromTo('.c5-content3',
    //             { filter: 'blur(5px) brightness(2)', },
    //             {
    //                 duration: 1,
    //                 opacity: 1,
    //                 ease: "power1.inOut",
    //                 filter: 'blur(0px) brightness(1)',
    //             })

    // }
    // c5Ani();
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
                start: "-40%",
            },
        });

        tl.from('.c6-title1,.c6-title2,.c6-title3,.c6-title4', {
            duration: 1,
            opacity: 0,
            filter: 'blur(5px)',
            ease: "power1.inOut",
            stagger: {
                each: 0.25,
            }
        })

    }
    c6Ani();



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

        tl.from('.c9-title1,.c9-title2,.c9-title3,.c9-title4', {
            duration: 1,
            opacity: 0,
            filter: 'blur(5px)',
            ease: "power1.inOut",

            stagger: {
                each: 0.25,
            }
        })

    }
    c9Ani();

    const c10swiper = new Swiper(".card10-swiper", {

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
        //     el: '.c10-swiper-pagination',
        //     clickable: true,
        // },

    });
}