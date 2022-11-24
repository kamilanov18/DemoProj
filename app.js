window.addEventListener("load",(e)=>{
    const accordian = document.querySelectorAll('.content-container');
    console.log(accordian);
    for(let i=0;i<accordian.length;i++)
    {
        accordian[i].addEventListener('click',(e)=>{
            accordian[i].classList.toggle('active');
        });
    }
});

