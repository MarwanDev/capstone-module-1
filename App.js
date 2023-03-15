/* eslint-disable no-unused-vars */
function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

const professorsArray = [
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/julia_reda.jpg',
  },
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/julia_reda.jpg',
  },
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/julia_reda.jpg',
  },
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/julia_reda.jpg',
  },
  {
    name: 'Yochai Benkler',
    summary: 'Berkman Professor of EnterPreneurial Legal Studies at Harvard Law School',
    studies: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
    imgSrc: 'assets/julia_reda.jpg',
  },
];

const professorsContainer = document.getElementById('professors-list');
const professorsDisplay = (name, summary, studies, imgSrc) => `<div class="professor">
<div class="img-container">
    <img src="${imgSrc}" alt="professor">
</div>
  <div class="professor-info-container">
    <h4 class="professor-name">${name}</h4>
    <p class="professor-summary">${summary}</p>
    <hr>
    <p class="professor-studies">${studies}</p>
  </div>
</div>`;

const professorsButton = document.getElementById('more-professors-btn');
if (professorsButton.style.display === 'none') {
  for (let i = 0; i < professorsArray.length; i += 1) {
    const htmlToAdd = professorsDisplay(professorsArray[i].name,
      professorsArray[i].summary,
      professorsArray[i].studies,
      professorsArray[i].imgSrc);
    professorsContainer.insertAdjacentHTML('afterbegin', htmlToAdd);
  }
} else {
  for (let i = 0; i < 2; i += 1) {
    const htmlToAdd = professorsDisplay(professorsArray[i].name,
      professorsArray[i].summary,
      professorsArray[i].studies,
      professorsArray[i].imgSrc);
    professorsContainer.insertAdjacentHTML('afterbegin', htmlToAdd);
  }
  professorsButton.addEventListener('click', () => {
    for (let i = 2; i < professorsArray.length; i += 1) {
      const htmlToAdd = professorsDisplay(professorsArray[i].name,
        professorsArray[i].summary,
        professorsArray[i].studies,
        professorsArray[i].imgSrc);
      professorsContainer.insertAdjacentHTML('afterbegin', htmlToAdd);
    }
    professorsButton.style.display = 'none';
  });
}
// });
// console.log(professorsArray[1].imgSrc);
const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}.${month}.${year}`;

const todayDate = document.getElementById('date');
todayDate.innerHTML = currentDate;