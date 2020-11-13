$(document).ready(function() {

    function init() {
        configureMenu();
    }

    function configureMenu() {
        openPageWhenClick("index")
        openPageWhenClick("android")
        openPageWhenClick("ai")
    }

    function openPageWhenClick(page) {
        var execute = document.getElementById('menu_' + page);
        execute.addEventListener('click', function() {
            document.location.href = page + '.php';
            console.log(page)
        });
    }

    init();

});