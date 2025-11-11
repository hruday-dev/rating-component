const rating = document.querySelectorAll('.scale');
const submit =document.querySelector('#submit');
const feedback = document.getElementById('feedback-form');
const thankMessage = document.getElementById('thanks-message');
const displayrating = document.querySelector('span');
let rated = 0;
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    feedback.style.display = 'none';
    thankMessage.style.display ='flex';
    displayrating.textContent = `You selected ${rated} out of 5`
})

for(let ratebtn of rating){
    ratebtn.addEventListener('click',(e)=>{
        e.preventDefault();
        rating.forEach((r)=>r.classList.remove('clicked'));
        ratebtn.classList.add('clicked');
        rated = ratebtn.textContent;
        console.log(ratebtn.textContent)
    })
}
