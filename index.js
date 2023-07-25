
 function fetchCourses(){
    
      
       xmlReq = new XMLHttpRequest();
       xmlReq.onload = function(){

         var jsonResponse = JSON.parse(xmlReq.response);
         var cardContainer =  document.getElementById('card-section');
         
         for(let i=0;i<jsonResponse.data.courses.length;i++){
            var data =jsonResponse.data.courses[i];
            if(data.preview_image_url != ""){
                const card = document.createElement('div');
                //adding class for the card 
                card.classList.add('card-info');
                cardContainer.appendChild(card);
                const courseElement = document.createElement('p');
                const imgElement = document.createElement('img');
                const levelElement = document.createElement('p'); 
                imgElement.src = data.preview_image_url;
                //adding style to the img 
                imgElement.style.width ='100%';
                imgElement.style.height='50%';
                // imgElement.style.marginTop='30px'
                courseElement.textContent = data.title;
                levelElement.textContent = data.level;
                card.appendChild(imgElement);
                card.appendChild(courseElement);
                card.appendChild(levelElement);    
            }

         };

         //adding style to card section
         cardSection.style.display = 'flex';
         cardSection.style.flexWrap = 'wrap';
         cardSection.style.justifyContent='space-between';
         
         //hide fetch button
         var fetchDiv = document.getElementById('main-container');
          fetchDiv.style.display = 'none';

       }; 
       xmlReq.open('get','https://api.codingninjas.in/api/v3/courses');
       xmlReq.send();
 }

const cardSection =document.getElementById('card-section');
cardSection.style.display = 'none';
const  fetchButton = document.getElementById('fetch-btn');
fetchButton.addEventListener('click',fetchCourses);