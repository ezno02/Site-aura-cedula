const body = document.getElementById('bodyIndex');
let theme;

function themeHtmlDark() {
    theme = false
    open('index.html', '_self')
}
function themeHtmlLight() {
    theme = true
    open('index.html', '_self')
}

function indexHtml(){
    console.log('essa porra tbm ta indo')
    if (theme == true) {
        body.classList.remove('dark-theme');
    } else {
        body.classList.add('dark-theme');
    }
    console.log('ta funcionando e ta em', theme)
}
document.addEventListener('DOMContentLoaded', function() {
    const bodyDaPagina = document.body;
    if(bodyDaPagina && bodyDaPagina.id === 'bodyIndex'){
        indexHtml();
    }
});