const data = [
  {
    id: 1,
    img: "./asset/images/2022.jpeg",
    title: "Indonesia Bersinar",
    text: `Ahmad Syahreza`,
    year: "2022",
  },
  {
    id: 2,
    img: "./asset/images/2019.png",
    title: "Bakti Indonesia",
    text: `Ahmad Syahreza`,
    year: "2019",
  },
  {
    id: 3,
    img: "./asset/images/2018.png",
    title: "Menjadi Indonesia",
    text: `Dimas Ginanjar`,
    year: "2018",
  },
  {
    id: 4,
    img: "./asset/images/2017.png",
    title: "Indonesia Cerdas",
    text: `Wisnu Wardoyo`,
    year: "2017",
  },
  {
    id: 5,
    img: "./asset/images/2016.png",
    title: "Indonesia Sehat",
    text: `Sarah Saraswati`,
    year: "2016",
  },
  {
    id: 6,
    img: "./asset/images/2015.png",
    title: "Merajut Indonesia",
    text: `Ahmad Syahreza`,
    year: "2015",
  },
  {
    id: 7,
    img: "./asset/images/2014.png",
    title: "Indonesia Ok",
    text: `Ahmad Syahreza`,
    year: "2014",
  },
  {
    id: 8,
    img: "./asset/images/2013.png",
    title: "Harmoni Indonesia",
    text: `Dimas Ginanjar`,
    year: "2013",
  },
  {
    id: 9,
    img: "./asset/images/2012.png",
    title: "Indonesia Tangguh",
    text: `Ahmad Syahreza`,
    year: "2012",
  },
  {
    id: 10,
    img: "./asset/images/2011.png",
    title: "Bagimu Indonesia",
    text: `Sarah Saraswati`,
    year: "2011",
  },
  {
    id: 11,
    img: "./asset/images/2010.png",
    title: "Cerdas Indonesiaku",
    text: `Sarah Saraswati`,
    year: "2010",
  },
  {
    id: 12,
    img: "./asset/images/2009.png",
    title: "Indonesia Kreatif",
    text: `Sarah Saraswati`,
    year: "2009",
  },
  {
    id: 13,
    img: "./asset/images/2007.png",
    title: "Hitam Putih Indonesiaku",
    text: `Sarah Saraswati`,
    year: "2007",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container ul");

window.addEventListener("DOMContentLoaded", function () {
  displayDataItems(data);
  displayYearButtons();
});

// MENAMPILKAN DATA ITEM
function displayDataItems(dataItems) {
  let displayItems = dataItems.map(function (item) {
    return `<div class="col">
            <div class="card h-100">
            <img loading="lazy"src="${item.img}" alt="..." class="card-img-top" loading="lazy" />
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.text}</p>
            </div>
            </div>
        </div>`;
  });

  displayItems = displayItems.join("");
  // console.log(displayItems)
  sectionCenter.innerHTML = displayItems;
}

// DISPLAY YEAR FILTER
function displayYearButtons() {
  const years = data.reduce(
    function (values, tahun) {
      if (!values.includes(tahun.year)) {
        values.push(tahun.year);
      }
      return values;
    },
    ["All"]
  );
  const yearBtn = years
    .map(function (year) {
      return `<li class="filter-btn" data-id=${year}>${year}</li>`;
    })
    .join("");
  btnContainer.innerHTML = yearBtn;

  const filterBtn = document.querySelectorAll(".filter-btn");

  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const year = e.currentTarget.dataset.id;
      const dataYear = data.filter(function (dataItems) {
        console.log(dataItems.year);
        if (dataItems.year === year) {
          return dataItems;
        }
      });
      if (year === "All") {
        displayDataItems(data);
      } else {
        displayDataItems(dataYear);
      }
      console.log(dataYear);
    });
  });
}
