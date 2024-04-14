var mains = document.getElementById('main').addEventListener('scroll', () => {
        var scrollVertical = document.getElementById('main').scrollTop;

        var projectsection = document.getElementById('articleproject');
        var projectsectionTop = projectsection.offsetTop; 
        var projecticon = document.getElementById('projecticon');

        var aboutsection = document.getElementById('articlaboutme');
        var aboutmesectionTop = aboutsection.offsetTop; 
        var aboutmeicon = document.getElementById('aboutmeicon');

        var contatsection = document.getElementById('articlacontat');
        var contatsectionTop = contatsection.offsetTop; 
        var contaticon = document.getElementById('contaticon');

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
    })
