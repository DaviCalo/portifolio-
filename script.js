document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('aboutmeicon').classList.add('hover');
  });
var mains = document.getElementById('main').addEventListener('scroll', () => {
        var scrollVertical = document.getElementById('main').scrollTop;

        var aboutmeicon = document.getElementById('aboutmeicon');

        var projectsectionTop = (document.getElementById('articleproject')).offsetTop; 
        var projecticon = document.getElementById('projecticon');

        var contatsectionTop = (document.getElementById('articlecontat')).offsetTop; 
        var contaticon = document.getElementById('contaticon');

        const icons = {
            aboutmeicon: aboutmeicon.classList,
            projecticon: projecticon.classList,
            contaticon: contaticon.classList
        };

        const removeHover = (icon) => icons[icon].remove('hover');
        const addHover = (icon) => icons[icon].add('hover');

        if (scrollVertical+50 >= projectsectionTop && scrollVertical <= contatsectionTop) {
            //GAMBIARRA
            ['aboutmeicon', 'contaticon'].forEach(removeHover);
            addHover('projecticon');
        } else if(scrollVertical <= projectsectionTop){
            ['projecticon', 'contaticon'].forEach(removeHover);
            addHover('aboutmeicon'); 
        } else {
            ['projecticon', 'aboutmeicon'].forEach(removeHover);
            addHover('contaticon');
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
    // Get a reference to the scrollTo function
    
    })

    const { scrollTo } = document.getElementById('main');

    // Override the scrollTo function
    document.getElementById('main').scrollTo = (...args) => {
        // Create a new scrollTo function that scrolls smoothly
        const [x = 0, y = 0] = args;
        document.getElementById('main').scroll({
            top: y,
            left: x,
            behavior: 'smooth'
        });
    };