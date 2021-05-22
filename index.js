let SlideMenus = document.querySelectorAll('.slides'),
    SlideDescription = document.querySelectorAll('.description-slide'),
    NextSlide = document.querySelectorAll('.link-suivant'),
    AllLinkimg = document.querySelectorAll('.img-apk'),
    leftImg = document.createElement('div'),
    rightImg = document.createElement('div');
let Menu = document.getElementById('en-tete'),
    heights = getComputedStyle(Menu, null).height;
leftImg.className = "slideImage";
rightImg.className = "slideImage";
leftImg.id = "left";
leftImg.title = "Image précédente";
rightImg.id = "right";
rightImg.title = "Image suivante";
NextSlide[0].addEventListener('click', function(e) {
    ActiveSlideMenu(1);
    HiddensDescriptionSlide();
    SlideDescription[1].style.display = "flex";
    e.preventDefault();
}, false);
NextSlide[1].addEventListener('click', function(e) {
    ActiveSlideMenu(2);
    HiddensDescriptionSlide();
    SlideDescription[2].style.display = "flex";
    e.preventDefault();
}, false);
NextSlide[2].addEventListener('click', function(e) {
    ActiveSlideMenu(3);
    HiddensDescriptionSlide();
    SlideDescription[3].style.display = "flex";
    e.preventDefault();
}, false);
NextSlide[3].addEventListener('click', function(e) {
    ActiveSlideMenu(4);
    HiddensDescriptionSlide();
    SlideDescription[4].style.display = "flex";
    e.preventDefault();
}, false);
NextSlide[4].addEventListener('click', function(e) {
    ActiveSlideMenu(5);
    HiddensDescriptionSlide();
    SlideDescription[5].style.display = "flex";
    e.preventDefault();
}, false);
for (let i = 0; i < AllLinkimg.length; i++) {
    AllLinkimg[i].onclick = function() {
        Lightbox(this);
        return false;
    }
}

function Lightbox(link) {
    let img = new Image(),
        overlay = document.getElementById('overlay');
    if (link.href === AllLinkimg[0].href) {
        leftImg.style.visibility = "hidden";
        rightImg.style.visibility = "visible";
    } else if (link.href === AllLinkimg[5].href) {
        rightImg.style.visibility = "hidden";
        leftImg.style.visibility = "visible";
    } else {
        leftImg.style.visibility = "visible";
        rightImg.style.visibility = "visible";
    }
    img.onload = function() {
        overlay.innerHTML = '';
        overlay.appendChild(leftImg);
        overlay.appendChild(img);
        overlay.appendChild(rightImg);
        rightImg.onclick = function() {
            if (img.src === AllLinkimg[0].href) {
                img.src = AllLinkimg[1].href;
                leftImg.style.visibility = "visible";
            } else if (img.src === AllLinkimg[1].href) {
                img.src = AllLinkimg[2].href;
            } else if (img.src === AllLinkimg[2].href) {
                img.src = AllLinkimg[3].href;
            } else if (img.src === AllLinkimg[3].href) {
                img.src = AllLinkimg[4].href;
            } else if (img.src === AllLinkimg[4].href) {
                img.src = AllLinkimg[5].href;
                rightImg.style.visibility = "hidden";
            } else {
                img.src = AllLinkimg[0].href;


            }
        };

        leftImg.onclick = function() {
            if (img.src === AllLinkimg[0].href) {
                img.src = AllLinkimg[4].href;
                rightImg.style.visibility = "visible";
            } else if (img.src === AllLinkimg[4].href) {
                img.src = AllLinkimg[3].href;
            } else if (img.src === AllLinkimg[3].href) {
                img.src = AllLinkimg[2].href;
            } else if (img.src === AllLinkimg[2].href) {
                img.src = AllLinkimg[1].href;
            } else if (img.src === AllLinkimg[1].href) {
                img.src = AllLinkimg[0].href;
                leftImg.style.visibility = "hidden";
            } else {
                img.src = AllLinkimg[4].href;
                rightImg.style.visibility = "visible";
            }
        };
    };
    img.src = link.href;
    img.style.alignSelf = "center";
    img.id = "pics";
    overlay.style.justifyContent = "center";
    overlay.style.display = 'flex';
    overlay.innerHTML = '<span>Chargement en cours...</span>';
}

function DisablingAllSlideMenu() {
    SlideMenus[0].style.backgroundColor = "#fff";
    SlideMenus[0].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[0].style.color = "black";
    SlideMenus[1].style.backgroundColor = "#fff";
    SlideMenus[1].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[1].style.color = "black";
    SlideMenus[2].style.backgroundColor = "#fff";
    SlideMenus[2].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[2].style.color = "black";
    SlideMenus[3].style.backgroundColor = "#fff";
    SlideMenus[3].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[3].style.color = "black";
    SlideMenus[4].style.backgroundColor = "#fff";
    SlideMenus[4].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[4].style.color = "black";
    SlideMenus[5].style.backgroundColor = "#fff";
    SlideMenus[5].style.borderColor = "rgba(83, 83, 83, 0.534)";
    SlideMenus[5].style.color = "black";
}

function HiddensDescriptionSlide() {
    SlideDescription[0].style.display = "none";
    SlideDescription[1].style.display = "none";
    SlideDescription[2].style.display = "none";
    SlideDescription[3].style.display = "none";
    SlideDescription[4].style.display = "none";
    SlideDescription[5].style.display = "none";
}

function ActiveSlideMenu(idSlide) {
    DisablingAllSlideMenu();
    SlideMenus[idSlide].style.backgroundColor = "rgb(224, 58, 60)";
    SlideMenus[idSlide].style.borderColor = "rgb(224, 58, 60)";
    SlideMenus[idSlide].style.color = "white";
}

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
SlideMenus[0].addEventListener('click', () => {
    ActiveSlideMenu(0);
    HiddensDescriptionSlide();
    SlideDescription[0].style.display = "flex";
}, false);
SlideMenus[1].addEventListener('click', () => {
    ActiveSlideMenu(1);
    HiddensDescriptionSlide();
    SlideDescription[1].style.display = "flex";
}, false);
SlideMenus[2].addEventListener('click', () => {
    ActiveSlideMenu(2);
    HiddensDescriptionSlide();
    SlideDescription[2].style.display = "flex";
}, false);
SlideMenus[3].addEventListener('click', () => {
    ActiveSlideMenu(3);
    HiddensDescriptionSlide();
    SlideDescription[3].style.display = "flex";
}, false);
SlideMenus[4].addEventListener('click', () => {
    ActiveSlideMenu(4);
    HiddensDescriptionSlide();
    SlideDescription[4].style.display = "flex";
}, false);
SlideMenus[5].addEventListener('click', () => {
    ActiveSlideMenu(5);
    HiddensDescriptionSlide();
    SlideDescription[5].style.display = "flex";
}, false);
window.addEventListener('load', () => {
    ActiveSlideMenu(0);
    HiddensDescriptionSlide();
    SlideDescription[0].style.display = "flex";
}, false);
document.getElementById('overlay').addEventListener('click', function(e) {
    if (e.target.id === "overlay") {
        this.style.display = "none";
    }
}, false);
window.addEventListener('scroll', () => {
    reveal();
});
/*window.addEventListener('resize', () => {
    let liens = document.querySelector('.liens-pages');
    if (window.innerWidth <= 876) {
        liens.style.display = "none";
    } else {
        liens.style.display = "flex";
    }
})*/