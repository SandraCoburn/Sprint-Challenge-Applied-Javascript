// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    //Add ClassList
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Append Children
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    //Add Text Content
    title.textContent = 'Lambda Times';
    date.textContent = 'december 6, 2019';
    temp.textContent = '98°';

    return header
}
//Get Parent element to append the children
const container = document.querySelector('.header-container');
container.appendChild(Header());

