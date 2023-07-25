//Variables
const contactUsBtn = document.querySelector('.contact-us-button');
const projectsHeader = document.querySelector('.projects-page');
const aboutUsHeader = document.querySelector('.about-us-page');
const homePageHeader = document.querySelector('.home-page');
const servicesHeader = document.querySelector('.services-page')
const galleryHeader = document.querySelector('.gallery-page');
//for pages that are hidden
const projectsPage = document.getElementById('projects');
const aboutUsPage = document.getElementById('about-us');
const homePage = document.getElementById('home');
const servicesPage =document.getElementById('services');
const galleryPage = document.getElementById('gallery');
const contactUsPage = document.getElementById('contact-us');


//Event Listeners

//CONTACT US PAGE
contactUsBtn.addEventListener('mouseover', ()=>{
    contactUsBtn.style.backgroundColor = '#adadad';
});
contactUsBtn.addEventListener('mouseout', ()=>{
    contactUsBtn.style.backgroundColor='';
})
contactUsBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    contactUsPage.style.display='block';
})

//projects header link
projectsHeader.addEventListener('mouseover', ()=>{
    projectsHeader.style.fontWeight = '500';
})
projectsHeader.addEventListener('mouseout', ()=>{
    projectsHeader.style.fontWeight = '';
})
projectsHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    projectsPage.style.display='block';
    
})

//about us header link
aboutUsHeader.addEventListener('mouseover', ()=>{
    aboutUsHeader.style.fontWeight = '500';
})
aboutUsHeader.addEventListener('mouseout', ()=>{
    aboutUsHeader.style.fontWeight = '';
})
aboutUsHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    aboutUsPage.style.display='block';
})

//services header link
servicesHeader.addEventListener('mouseover', ()=>{
    servicesHeader.style.fontWeight = '500';
})
servicesHeader.addEventListener('mouseout', ()=>{
    servicesHeader.style.fontWeight = '';
})
servicesHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    servicesPage.style.display='block';
})

//gallery header link
galleryHeader.addEventListener('mouseover', ()=>{
    galleryHeader.style.fontWeight = '500';
})
galleryHeader.addEventListener('mouseout', ()=>{
    galleryHeader.style.fontWeight = '';
})
galleryHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    galleryPage.style.display='block';
})

//Home Page Header Link
homePageHeader.addEventListener('click', (event)=>{
    event.preventDefault();
    hideAllPages();
    homePage.style.display='block';
})


//FUNCTIONS
const hideAllPages = ()=>{
    projectsPage.style.display='none';
    aboutUsPage.style.display='none';
    homePage.style.display='none';
    servicesPage.style.display='none';
    galleryPage.style.display='none';
    contactUsPage.style.display='none';
}