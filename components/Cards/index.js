// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

//Axios Get request
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

        let cards = Object.entries(response.data.articles);
        createCards(cards);
        console.log('this response: ', response);
    });

//Function to create DOM components
function createCards(data){
     
        data.forEach(element => {
            element[1].forEach(cardInfo => {
                const card = document.createElement('div');
                const headline = document.createElement('div');
                const author = document.createElement('div');
                const imgContainer = document.createElement('div');
                const authorImg = document.createElement('img');
                const by = document.createElement('span');

        //Add Class List
                card.classList.add('card');
                headline.classList.add('headline');
                author.classList.add('author');
                imgContainer.classList.add('img-container');

        //Add Text Content
                headline.textContent = cardInfo.headline;
                authorImg.src = cardInfo.authorPhoto;
                by.textContent = cardInfo.authorName;

        //Append children
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgContainer);
            imgContainer.appendChild(authorImg);
            author.appendChild(by);

              
        const container = document.querySelector('.cards-container');  
            container.appendChild(card);

            })
        });

}