const valOfDIV = document.querySelector('.coming__address');
valOfDIV.onclick = () => {
    console.log(valOfDIV.textContent)
    window.navigator.clipboard.writeText(valOfDIV.textContent).then(() => {
        alert("주소가 복사 됐습니다");
    });
}

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


var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".top__tit", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
    duration: 0.8,
    opacity:0,
    y:10,
    ease:"circ.out",
    stagger: 0.1,
}, "+=0");
