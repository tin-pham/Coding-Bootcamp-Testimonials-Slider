const people = [
    {
        name: 'Tanya Sinclair',
        job:'UX Engineer',
        image: '../images/image-tanya.jpg',
        quote:`“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`
    },

    {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        image: '../images/image-john.jpg',
        quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`
    }
]

const image = document.querySelector('.image');
const job = document.querySelector('.job');
const name = document.querySelector('.name');
const quote = document.querySelector('.quote');

const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let count = 0;


const changeInfo = () => {
    job.innerHTML = `${people[count].job}`
    name.innerHTML = `${people[count].name}`
    image.setAttribute('src', `${people[count].image}`)
    quote.innerHTML = `${people[count].quote}`
}

nextButton.addEventListener('click', e => {
    if(count == 1)
        count = -1;
    count++;
    
    changeInfo();
})

prevButton.addEventListener('click', e => {
    if(count == 0){
        count = 2;
    }

    count--;
    
    changeInfo();
})