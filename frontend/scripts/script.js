document.addEventListener('DOMContentLoaded', function () {
    const popOverlay = document.getElementById('popOverlay');
    //const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    function openPopup () {
        popOverlay.style.display = 'block';
    }

    function closePopup () {
        popOverlay.style.display = 'none';
    }

    function bizRegistered () {
        console.log("Business registered sucessfully!");
        closePopup();
    }

    openPopup();

    closePopup.addEventListener('click', closePopup);

    popOverlay.addEventListener('click', function(event) {
        if(event.target === popOverlay) {
            closePopup();
        }
    });
});