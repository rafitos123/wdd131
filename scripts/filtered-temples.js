//current year
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

//last modification
const oLastModif = new Date(document.lastModified);
const last = document.querySelector("#lastModified");

const lastDate = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
last.innerHTML = `Last Modification: <span>${oLastModif.toLocaleString('en-US', lastDate)}</span>`;


//hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');


hambutton.addEventListener('click', () => {
    mainnav.parentElement.classList.toggle('show'); // toggle .show on nav
    hambutton.classList.toggle('show');
});

//temple array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Curitiba",
        location: "Curitiba, Brazil",
        dedicated: "2008, June, 1",
        area: 27850,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/583c7d3f3737f0048a14151a9b218b5b38e7ac6e/full/800%2C/0/default"
      },

      {
        templeName: "Campinas",
        location: "Campinas, Brazil",
        dedicated: "2002, May, 17",
        area: 49100,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/8540649d4237393e9b6ae327ab4aac3992f62bd9/full/1920%2C/0/default"
      },
      {
        templeName: "Hong Kong",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 51921,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/9df3383b1d493e35c2679232f417bf61e3778dbe/full/1920%2C/0/default"
      },
  ];

//show temples in html
CreateTemple(temples);

const odd = document.querySelector('#odd');
const newTemple = document.querySelector('#new');
const large = document.querySelector('#large');
const small = document.querySelector('#small');
const home = document.querySelector('#home');


odd.addEventListener("click", () => {
  const oldestTemple = temples.reduce((oldest, current) => {
    return new Date(current.dedicated) < new Date(oldest.dedicated) ? current : oldest;
});
  CreateTemple([oldestTemple]);
});

newTemple.addEventListener("click", () => {
  const newestTemple = temples.reduce((newest, current) => {
    return new Date(current.dedicated) > new Date(newest.dedicated) ? current : newest;
});
CreateTemple([newestTemple]);
});

large.addEventListener("click", () => {
  const largestTemple = temples.reduce((largest, size) => {
    return new Date(size.area) > new Date(largest.area) ? size : largest;
});
CreateTemple([largestTemple]);
});

small.addEventListener("click", () => {
  const smallestTemple = temples.reduce((smallest, size) => {
    return new Date(size.area) < new Date(smallest.area) ? size : smallest;
});
CreateTemple([smallestTemple]);
});

home.addEventListener("click", () => {
  CreateTemple(temples);
});



function CreateTemple(filteredTemples) {
    const container = document.getElementById("card-container");

    container.innerHTML = '';

    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area}</p>
        `;
        
        container.appendChild(card);
    });
}