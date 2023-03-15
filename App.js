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

professorsArray.forEach((professor) => {
  const htmlToAdd = professorsDisplay(professor.name,
    professor.summary,
    professor.studies,
    professor.imgSrc);
  professorsContainer.insertAdjacentHTML('afterbegin', htmlToAdd);
});

const date = new Date();

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const currentDate = `${day}.${month}.${year}`;

const todayDate = document.getElementById('date');
todayDate.innerHTML = currentDate;