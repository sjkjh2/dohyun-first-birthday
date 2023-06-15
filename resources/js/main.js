// 카카오 맵
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.518447791216914, 127.0183165439839), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 지도를 클릭한 위치에 표출할 마커입니다
var markerPosition = new kakao.maps.LatLng(37.518447791216914, 127.0183165439839);
var marker = new kakao.maps.Marker({ 
    // 지도 중심좌표에 마커를 생성합니다 
    position: markerPosition 
}); 
// 지도에 마커를 표시합니다
marker.setMap(map);

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



// 애니메이션
gsap.set(".top__tit__txt01", { yPercent: -20, opacity: 0.5});
gsap.set(".top__tit__txt02", { yPercent: 20, opacity: 0.5});
gsap.set(".top__pic", { yPercent: -20});
gsap.set(".top__txt__desc01", { yPercent: 400});
gsap.set(".top__txt__desc02", { yPercent: 600});
gsap.set(".top__txt__desc03", { yPercent: 800});
gsap.set(".top__txt__desc04", { yPercent: 1000});
gsap.set(".top__txt__name", { yPercent: 1200});

gsap.to(".top__tit__txt01", {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    ease: "none",
});
gsap.to(".top__tit__txt02", {
    yPercent: 0,
    opacity: 1,
    duration: 0.8,
    ease: "none",
});
gsap.to(".top__pic", {
    yPercent: 3,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__tit",
        scrub:0.8
    }, 
});
gsap.to(".top__txt__desc01", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__pic",
        scrub: 0.5
    }, 
});
gsap.to(".top__txt__desc02", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__pic",
        scrub: 0.9
    }, 
});
gsap.to(".top__txt__desc03", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__pic",
        scrub: 1.3
    }, 
});
gsap.to(".top__txt__desc04", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__pic",
        scrub: 1.7
    }, 
});
gsap.to(".top__txt__name", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__pic",
        scrub: 2.1
    }, 
});




gsap.set(".coming", { yPercent: 30});
gsap.set(".coming-line", { yPercent: 200});
gsap.set(".coming__tit", { yPercent: 400});
gsap.set(".coming__date", { yPercent: 600});
gsap.set(".coming__tip", { yPercent: 800});
gsap.set(".coming__address", { yPercent: 1000});
gsap.set(".coming__desc-list li:nth-child(1)", { yPercent: 1200});
gsap.set(".coming__desc-list li:nth-child(2)", { yPercent: 1400});
gsap.set(".coming__desc-list li:nth-child(3)", { yPercent: 1600});
gsap.set(".coming__desc-list li:nth-child(4)", { yPercent: 1800});
gsap.set(".coming__map", { yPercent: 200});

gsap.to(".coming", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 0.8
    }, 
});
gsap.to(".coming-line", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 0.8
    }, 
});
gsap.to(".coming__tit", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 1
    }, 
});
gsap.to(".coming__date", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 1.3
    }, 
});
gsap.to(".coming__tip", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 1.7
    }, 
});
gsap.to(".coming__address", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 2.1
    }, 
});
gsap.to(".coming__desc-list li:nth-child(1)", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 2.5
    }, 
});
gsap.to(".coming__desc-list li:nth-child(2)", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 2.9
    }, 
});
gsap.to(".coming__desc-list li:nth-child(3)", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 3.3
    }, 
});
gsap.to(".coming__desc-list li:nth-child(4)", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 3.7
    }, 
});
gsap.to(".coming__map", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 3.7
    }, 
});


gsap.set(".history-line", { yPercent: 200});
gsap.set(".history__tit", { yPercent: 400});
gsap.set(".history__desc", { yPercent: 600});
gsap.set(".history__pic01", { yPercent: 0, xPercent: 10});
gsap.set(".history__pic02", { yPercent: 50, xPercent: 30});
gsap.set(".history__pic03", { yPercent: 30, xPercent: 10});
gsap.set(".history__pic04", { yPercent: 50, xPercent: 35});
gsap.set(".history__pic05", { yPercent: -10});
gsap.set(".history__pic06", { yPercent: 50});
gsap.set(".history__pic07", { yPercent: -10, xPercent: 10});
gsap.set(".history__pic08", { yPercent: -5});
gsap.set(".history__pic09", { yPercent: 10, xPercent: 10});
gsap.set(".history__pic10", { yPercent: 20, xPercent: 30});
gsap.set(".history__pic11", { yPercent: -20, xPercent: -2});
gsap.set(".history__pic12", { yPercent: 30, xPercent: 25});


gsap.to(".history-line", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".coming",
        scrub: 0.8
    }, 
});
gsap.to(".history__tit", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".coming",
        scrub: 1
    }, 
});
gsap.to(".history__desc", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".coming",
        scrub: 1.3
    }, 
});
gsap.to(".history__pic01", {
    yPercent: 50,
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
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box05",
        scrub: 1
    }, 
});
gsap.to(".history__pic06", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box06",
        scrub: 1
    }, 
});
gsap.to(".history__pic07", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box07",
        scrub: 1
    }, 
});
gsap.to(".history__pic08", {
    yPercent:20,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box08",
        scrub: 1
    }, 
});
gsap.to(".history__pic09", {
    yPercent: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box09",
        scrub: 1
    }, 
});
gsap.to(".history__pic10", {
    yPercent: -20,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box10",
        scrub: 1
    }, 
});
gsap.to(".history__pic11", {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box11",
        scrub: 1
    }, 
});
gsap.to(".history__pic12", {
    yPercent: -30,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box12",
        scrub: 1
    }, 
});



gsap.set(".obj01", { yPercent: -80});
gsap.set(".obj02", { yPercent: 0, rotate: -20});
gsap.set(".obj04", { yPercent: -100});
gsap.set(".obj05", { yPercent: -80});
gsap.set(".obj10", { yPercent: -80, xPercent:5});
gsap.set(".obj11", { yPercent: -150});
gsap.set(".obj13", { yPercent: -150, rotate: -200});

gsap.to(".obj01", {
    yPercent: 80,
    rotate: 120,
    ease: "none",
    scrollTrigger: {
        trigger: ".top",
        scrub: 1.5
    }, 
});
gsap.to(".obj02", {
    yPercent: -80,
    rotate: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".top",
        scrub: 1.5
    }, 
});
gsap.to(".obj03", {
    yPercent: -80,
    rotate: 50,
    ease: "none",
    scrollTrigger: {
        trigger: ".top",
        scrub: 1.5
    }, 
});
gsap.to(".obj04", {
    yPercent: 100,
    rotate: -100,
    ease: "none",
    scrollTrigger: {
        trigger: ".top",
        scrub: 1.5
    }, 
});
gsap.to(".obj05", {
    yPercent: 30,
    rotate: 120,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 1.5
    }, 
});
gsap.to(".obj06", {
    yPercent: -80,
    rotate: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".top__txt__name",
        scrub: 1.5
    }, 
});
gsap.to(".obj07", {
    yPercent: -80,
    rotate: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box02",
        scrub: 1.5
    }, 
});
gsap.to(".obj08", {
    yPercent: 80,
    rotate: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box03",
        scrub: 1.5
    }, 
});
gsap.to(".obj09", {
    yPercent: -30,
    rotate: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box04",
        scrub: 1.5
    }, 
});
gsap.to(".obj10", {
    yPercent: 300,
    rotate: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box05",
        scrub: 1.5
    }, 
});
gsap.to(".obj11", {
    yPercent: 200,
    rotate: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box08",
        scrub: 1.5
    }, 
});
gsap.to(".obj12", {
    yPercent: 200,
    rotate: -50,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box10",
        scrub: 1.5
    }, 
});
gsap.to(".obj13", {
    yPercent: 310,
    xPercent: 380,
    rotate: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box12",
        scrub: 1.5
    }, 
});
gsap.to(".obj13.mo", {
    yPercent: 550,
    xPercent: 600,
    rotate: 190,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box12",
        scrub: 1.5
    }, 
});

gsap.set(".last-txt", { yPercent: 200, opacity: 0.5});
gsap.to(".last-txt", {
    yPercent: -20,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
        trigger: ".history__pic-box12",
        scrub: 1
    }, 
});