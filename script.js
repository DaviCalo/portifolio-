var mains = document.getElementById('main');
mains.addEventListener('scroll', () => {
        var section = document.getElementById('projectcard'); // Substitua 'sua-secao' pelo ID da seção
        var sectionTop = section.offsetTop; // Distância da seção ao topo da página
        var nav = document.getElementById('projecticon');
        var scrollVertical = document.getElementById('main').scrollTop

        if (scrollVertical>= sectionTop) {
            nav.classList.add('hover');
            console.log("asddv");
        } else {
            nav.classList.remove('hover');
            console.log("asdd");
            console.log(scrollVertical, sectionTop );
        }
    })
