document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('aboutmenav').classList.add('hover');
    document.getElementById('linkaboutme').classList.add('hover');
  });

var aboutmenav = document.getElementById('aboutmenav');
var aboutmesectionnav = document.getElementById('linkaboutme');

var projectnav = document.getElementById('projectnav');
var projectsectionnav = document.getElementById('linkproject');

var contatnav = document.getElementById('contatnav');

const icons = {
    aboutmenav: aboutmenav.classList,
    projectnav: projectnav.classList,
    contatnav: contatnav.classList,
    projectsectionnav: projectsectionnav.classList,
    aboutmesectionnav: aboutmesectionnav.classList
};

const removeHover = (icon) => icons[icon].remove('hover');
const addHover = (icon) => icons[icon].add('hover');

var mains = document.getElementById('main').addEventListener('scroll', () => {
    var scrollVertical = document.getElementById('main').scrollTop;

    var projectsectionTop = (document.getElementById('articleproject')).offsetTop; 

    var contatsectionTop = (document.getElementById('articlecontat')).offsetTop; 

    if (scrollVertical+50 >= projectsectionTop && scrollVertical <= contatsectionTop) {
        //GAMBIARRA
        ['aboutmenav', 'contatnav','aboutmesectionnav'].forEach(removeHover);
        ['projectnav', 'projectsectionnav'].forEach(addHover);
    } else if(scrollVertical <= projectsectionTop){
        ['projectnav', 'contatnav','projectsectionnav'].forEach(removeHover);
        ['aboutmenav', 'aboutmesectionnav'].forEach(addHover);
    } else {
        ['projectnav', 'aboutmenav','aboutmesectionnav'].forEach(removeHover);
        addHover('contatnav');
    }
      /** 
          if (scrollVertical >= projectsectionTop && scrollVertical <= contatsectionTop) {
            projecticon.classList.add('hover');
            aboutmeicon.classList.remove('hover');
            contaticon.classList.remove('hover');  

        } else if(scrollVertical <= projectsectionTop){
            aboutmeicon.classList.add('hover');
            projecticon.classList.remove('hover');
            contaticon.classList.remove('hover');
        }
        else{
            contaticon.classList.add('hover');
            projecticon.classList.remove('hover');
            aboutmeicon.classList.remove('hover');
        }
        */
    })