// Sticky nav and smooth scroll function
$(document).ready(function(){
  var docEl = $(document),
      headerEl = $('header'),
      headerWrapEl = $('.header-container'),
      navEl = $('nav'),
      linkScroll = $('.scroll');
  
  docEl.on('scroll', function(){
    if ( docEl.scrollTop() > 60 ){
      headerEl.addClass('fixed-to-top');
      headerWrapEl.addClass('fixed-to-top');
      navEl.addClass('fixed-to-top');
    }
    else {
      headerEl.removeClass('fixed-to-top');
      headerWrapEl.removeClass('fixed-to-top');
      navEl.removeClass('fixed-to-top');
    }
  });
  
  linkScroll.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top - 45
      }, 600);
   });
});

// home button event listener

// document.getElementById("aboutButton").addEventListener("click", () => {

// });

// Google Sheets API 
// let originalURL = 'https://docs.google.com/spreadsheets/d/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/edit#gid=0'
// let originalURL2 = 'https://docs.google.com/spreadsheets/d/1mFlMqmGzEQ8y5tbGUzfgQ7HWX41RLEKKve1RlTCdds0/edit#gid=0'

// // ID COMES FROM THE URL THAT IS IN THE ADDRESS BAR ONCE THE SHEET HAS BEEN CREATED/SHARED
// let id =  '15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk'
// let id2 = '1mFlMqmGzEQ8y5tbGUzfgQ7HWX41RLEKKve1RlTCdds0'
// // BELOW URL IS HOW GOOGLE ALLOWS US TO ACCESS THE SHARED FILE AS JSON
// let source = `https://spreadsheets.google.com/feeds/list/${id2}/od6/public/values?alt=json`

// // https://spreadsheets.google.com/feeds/list/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/1/public/values?alt=json

// fetch(source)
//   .then( res => res.json())
//   .then( data => {
//      console.log('this id data.feed.entry', data.feed.entry)
//      let projects = data.feed.entry.map( d => {
//        return {
//           title: d.gsx$title.$t,
//           image: d.gsx$image.$t,
//           description: d.gsx$description.$t
//        }
//      })
//      console.log('this is  projects', projects)
//      createCards(projects)
// })


// class Card {
//   constructor(obj) {
//     this.title = obj.title
//     this.image = obj.image
//     this.description = obj.description
//   }
  
//   render() {
//     const col = document.createElement('div')
//     col.classList.add('card-container')
    
//     const card = document.createElement('div')
//     card.classList.add('card');
    
//     const cardImage = document.createElement('div')
//     cardImage.classList.add('card-image');
    
//     const image  = document.createElement('img')
//     image.setAttribute('src', this.image)
    
//     const cardTitle = document.createElement('span')
//     cardTitle.classList.add('card-title');
//     cardTitle.innerText = this.title
    
//     const cardContent = new CardContent(this.description)
//     console.log('this is cardConten ', cardContent)
//     cardImage.appendChild(image)
//    card.appendChild(cardTitle)
//     card.appendChild(cardImage)

//     card.appendChild(cardContent.render())
//     col.appendChild(card)
    
//     return col
//   }
// }

// class CardContent {
//   constructor(desc) {
//     this.desc = desc
//   }
//   render () {
//     console.log('this is desc', this.desc)
//     const cardContent = document.createElement('div')
//     cardContent.classList.add('card-content');
    
//     const paragraph = document.createElement('p')
//     paragraph.innerText = this.desc
    
//     cardContent.appendChild(paragraph)
//     return cardContent
//   }
// }
// function createCards(projects){
//   const projectDiv = document.querySelector('.projects-container')
//   projects.forEach( obj => {
//     let card = new Card(obj)
//     console.log('this is card', card)
//     projectDiv.appendChild(card.render())
//   })
  
// }