const btnToggle = document.querySelector('toggle-btn');
const closeWindow = document.querySelector('.close');
const close = document.querySelector('.enlace');
const close1 = document.querySelector('.enlace1');


    btnToggle.addEventListener('click', function(){
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('toggle-btn').style.visibility = 'hidden';
    })


    closeWindow.addEventListener('click', function(){
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('toggle-btn').style.visibility = 'visible';
    })

    close.addEventListener('click', function(){
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('toggle-btn').style.visibility = 'visible';
    })

    close1.addEventListener('click', function(){
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('toggle-btn').style.visibility = 'visible';
    })
