function onNavMenuClick() {
    $('#menu-icon').click(e => {
        console.log('hi')
        $('#myLinks').toggleClass('hide');
    })
}

function watchDoc() {
    onNavMenuClick();
}
$(watchDoc);