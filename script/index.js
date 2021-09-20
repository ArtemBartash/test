const links = document.querySelectorAll('.menu__link[data-goto]');
if(links.length > 0) {
    links.forEach(link => {
        link.addEventListener("click", onLink)
    })
}

function onLink(e) {
    e.preventDefault();
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const value = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

        window.scrollTo({
            top: value,
            behavior: "smooth"
        });
    }
}

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__nav');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}


/*$(document).ready(function() {
    var textblock = $("pre code").html();
    var lines = textblock.split("\n");
    lines.splice(0, 1);
    var newtext = lines.join("\n");
    $("pre code").html(newtext);
  
    $("pre code").each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });*/
  