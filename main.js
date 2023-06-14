const valOfDIV = document.querySelector('.coming__address');
valOfDIV.onclick = () => {
    console.log(valOfDIV.textContent)
    window.navigator.clipboard.writeText(valOfDIV.textContent).then(() => {
        alert("주소가 복사 됐습니다");
    });
}



gsap.set(".history__pic-box01", { yPercent: 5});
gsap.set(".history__pic-box02", { yPercent: 5});
gsap.set(".history__pic-box03", { yPercent: 5});
gsap.set(".history__pic-box04", { yPercent: 5});
gsap.set(".history__pic-box05", { yPercent: 5});
gsap.set(".history__pic-box06", { yPercent: 5});
gsap.set(".history__pic-box07", { yPercent: 5});
gsap.set(".history__pic-box08", { yPercent: 5});
gsap.set(".history__pic-box09", { yPercent: 5});
gsap.set(".history__pic-box10", { yPercent: 5});
gsap.set(".history__pic-box11", { yPercent: 5});
gsap.set(".history__pic-box12", { yPercent: 5});
gsap.set(".history__pic01", { yPercent: -10});
gsap.set(".history__pic02", { yPercent: 50, xPercent: 30});
gsap.set(".history__pic03", { yPercent: 10, xPercent: 10});
gsap.set(".history__pic04", { yPercent: 50, xPercent: 35});
gsap.set(".history__pic05", { yPercent: -10, xPercent: 5});
gsap.set(".history__pic06", { yPercent: 100, xPercent: 1});
gsap.set(".history__pic07", { yPercent: 20, xPercent: 10});


gsap.to(".history__pic01", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box01",
        scrub: 1
    }, 
});
gsap.to(".history__pic02", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box02",
        scrub: 1
    }, 
});
gsap.to(".history__pic03", {
    yPercent: -10,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box03",
        scrub: 1
    }, 
});
gsap.to(".history__pic04", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box04",
        scrub: 1
    }, 
});
gsap.to(".history__pic05", {
    yPercent: 10,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box05",
        scrub: 1
    }, 
});
gsap.to(".history__pic06", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box05",
        scrub: 1
    }, 
});
gsap.to(".history__pic07", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box06",
        scrub: 1
    }, 
});



