document.addEventListener('DOMContentLoaded',()=>{
    const sidenav=document.querySelector('.side-nav');
    const btntouch=document.querySelector('.butt');
    const overlay=document.querySelector('.nav-overlay');
    
    btntouch.addEventListener('click',()=>{
        sidenav.classList.add('open');
    });
    overlay.addEventListener('click',()=>{
        sidenav.classList.remove('open');
    });

});

