//current year
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

//last modification
const oLastModif = new Date(document.lastModified);
const last = document.querySelector("#lastModified");

const lastDate = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
last.innerHTML = `Last Modification: <span>${oLastModif.toLocaleString('en-US', lastDate)}</span>`;


// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Add a click event listener to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.parentElement.classList.toggle('show'); // toggle .show on nav
    hambutton.classList.toggle('show');
});

//heroes array
const heroes = [
    {
      heroName: "Spiderman",
      imageUrl:
      "https://cdn.europosters.eu/image/750/posters/spider-man-i34546.jpg",
      image3d:"https://preview.redd.it/2f97an638ty71.png?auto=webp&s=86daa412084340c70f70ef49a0ad06487a7fc49a"
    },
    {
        heroName: "Wolverine",
        imageUrl:
        "https://www.omelete.com.br/imagens/quadrinhos/news/marvel/previews/origins_1_capa.jpg",
        image3d:"https://pngimg.com/d/wolverine_PNG37.png"
      },
      {
        heroName: "Storm",
        imageUrl:
        "https://i.pinimg.com/originals/58/24/14/582414600d323db4b5245545f480a414.jpg",
        image3d:"https://i.pinimg.com/originals/42/c4/9d/42c49da825960cf5a8cbcf7ef5049588.png"
      },
      {
        heroName: "Cyclops",
        imageUrl:
        "https://preview.redd.it/cyclops-by-jason-fabok-v0-s5h7kte9qzbb1.jpg?auto=webp&s=26b1c43090f1efc1e406ece5c3e9dd37abea4119",
        image3d:"https://i.pinimg.com/originals/db/b8/3e/dbb83e35e4fd9f11082a862db1d719b4.png"
      },
      {
        heroName: "Daredevil",
        imageUrl:
        "https://i.pinimg.com/736x/0f/9a/73/0f9a7361139af23af9f1469e7e7e6d9f.jpg",
        image3d:"https://i.pinimg.com/originals/97/aa/ba/97aabac35401dd58abee12195099a011.png"
      },
      {
        heroName: "Iron Fist",
        imageUrl:
        "https://i.pinimg.com/originals/2a/d0/ea/2ad0ea33a6274832a7f23707b29354fd.jpg",
        image3d:"https://www.nicepng.com/png/full/137-1379237_marvel-png-573886-luke-cage-iron-iron-fist.png"
      },
      {
        heroName: "Captain Marvel",
        imageUrl:
        "https://i.pinimg.com/736x/ee/5a/e8/ee5ae8918bd4d0b31a0b23ea2c4e5dcb.jpg",
        image3d:"https://www.pngall.com/wp-content/uploads/4/Marvel-PNG.png"
      },
      {
        heroName: "Captain America",
        imageUrl:
        "https://i.pinimg.com/736x/05/14/4a/05144a40f6c569780220b35eb226f4b3.jpg",
        image3d:"https://i.pinimg.com/originals/70/62/9c/70629c19c5204f4d43956e85b316531c.png"
      },
      {
        heroName: "Fantastic Four",
        imageUrl:
        "https://i.pinimg.com/736x/2e/3c/76/2e3c766cef11c93f02ac51b71b0bc80f.jpg",
        image3d:"https://i.pinimg.com/originals/ce/0b/b9/ce0bb9b2f562ffd9d8868c074f81d635.gif"
      },
      {
        heroName: "Hulk",
        imageUrl:
        "https://jamesons.com.br/wp-content/uploads/2023/05/o-incrivel-hulk-2023-1-preview-4.jpg",
        image3d:"https://rika.vtexassets.com/assets/vtex/assets-builder/rika.store-theme/0.0.91/img/footer-newsletter___9b4bc5fd5bc777bb29755b7549481e36.png"
      },
      {
        heroName: "Ironman",
        imageUrl:
        "https://upload.wikimedia.org/wikipedia/pt/b/be/Invincible_Iron_Man_Vol_2_2.jpg",
        image3d:"https://i.pinimg.com/originals/a8/71/6f/a8716f8f85b1ac5963700d971462c70a.png"
      },
      {
        heroName: "Thor",
        imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuY5l6Th9ExI7PNJ5itfNsbvdc-HaXleObZg&s",
        image3d:"https://i.pinimg.com/originals/a0/56/c4/a056c4e33a742011af6f8bfad1d3c7a3.png"
      },
      {
        heroName: "Black Widow",
        imageUrl:
        "https://i.pinimg.com/474x/ee/a4/11/eea4119aeb6a5ec4cbe0d8af58324174.jpg",
        image3d:"https://i.pinimg.com/originals/13/60/0f/13600fd67ae698603e2f2c9d6fb4b10b.png"
      },
      {
        heroName: "Black Panther",
        imageUrl:
        "https://i.pinimg.com/736x/2b/22/0a/2b220ad838ecdc3056d2847726fae843.jpg",
        image3d:"https://i.pinimg.com/originals/79/97/ce/7997ce99ab66b0e3d43ff32ac5155dfe.png"
      },
      {
        heroName: "Ghost Rider",
        imageUrl:
        "https://i.pinimg.com/564x/24/07/2a/24072ae6b7350985ac8802e1516b3d60.jpg",
        image3d:"https://freepngimg.com/thumb/categories/1967.png"
      },
      {
        heroName: "Moon Knight",
        imageUrl:
        "https://i.pinimg.com/564x/9b/b4/55/9bb4555c9fb02a5b659726f7533fbf91.jpg",
        image3d:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4f7fb8ac-ed8a-4476-911c-c81affaa3f15/deukpme-2e7391f4-6b75-46f8-8182-2b1c95a4de17.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmN2ZiOGFjLWVkOGEtNDQ3Ni05MTFjLWM4MWFmZmFhM2YxNVwvZGV1a3BtZS0yZTczOTFmNC02Yjc1LTQ2ZjgtODE4Mi0yYjFjOTVhNGRlMTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TnTGQFY-TA1u5RIxhwMndOua1XWT1W8wb4xO8EvfjEM"
      },
  ];

  document.addEventListener("DOMContentLoaded", () => {
    const heroSelect = document.getElementById("heroSelect");
    const letraSelect = document.getElementById("letterSelect");
    const showAllButton = document.getElementById("showAll");

    //populate hero name
    if (heroSelect) {
        heroes.forEach(selectHero => {
            const option = document.createElement("option");
            option.value = selectHero.heroName;
            option.textContent = selectHero.heroName;
            heroSelect.appendChild(option);
        });
    }

    //populate alphabet
    if (letraSelect) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        alphabet.split("").forEach(letter => {
            const option = document.createElement("option");
            option.value = letter;
            option.textContent = letter;
            letraSelect.appendChild(option);
        });
    }

    //show all heroes
    showAllButton.addEventListener("click", () => {
        createHeroesCards(heroes);
    });

    //eltter filter 
    letraSelect.addEventListener("change", () => {
        const letraSelecionada = letraSelect.value;
        const filteredHeroes = heroes.filter(hero => 
            hero.heroName.toUpperCase().startsWith(letraSelecionada.toUpperCase())
        );
        createHeroesCards(filteredHeroes);
    });
});

  
  //show filtered heroes
  function createHeroesCards(heroes) {
    const container = document.getElementById("card3d");

    container.innerHTML = '';
    heroes.forEach(hero => {
        const aLink = document.createElement('div');
        aLink.classList.add('containerCard');
        
        aLink.innerHTML = `
            
              <a href="project-form.html" class="aLink" target="_blank">
                    <div class="card3D">
                    <div class="wrapper">
                        <img src="${hero.imageUrl}" alt="${hero.heroName}" loading="lazy" width="200" class="cover-image">
                    </div>
                        <img src="${hero.image3d}" alt="${hero.heroName}" loading="lazy" width="200" class="character">
                    </div>
                </a>
        `;
        
        container.appendChild(aLink);
    });
  }

  //create heroes card
  CreateHero(heroes);
  function CreateHero(filteredhero) {
    const container = document.getElementById("card3d");

    container.innerHTML = '';
    filteredhero.forEach(hero => {
        const aLink = document.createElement('div');
        aLink.classList.add('containerCard');
        
        aLink.innerHTML = `
            
              <a href="project-form.html" class="aLink" target="_blank">
                    <div class="card3D">
                    <div class="wrapper">
                        <img src="${hero.imageUrl}" alt="${hero.heroName}" loading="lazy" width="200" class="cover-image">
                    </div>
                        <img src="${hero.image3d}" alt="${hero.heroName}" loading="lazy" width="200" class="character">
                    </div>
                </a>
        `;
        
        container.appendChild(aLink);
    });

 
}

