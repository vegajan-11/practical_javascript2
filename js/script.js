const openDialog = document.getElementsByClassName("box_juice");
const dialogBox = document.getElementById('dialog-overlay');
const closeButton = document.getElementById('closeButton');
const dialogContent = document.getElementById('dialogb');
const openBanana = document.getElementById('banana');
const openOrange = document.getElementById('orange');
const openMelon = document.getElementById('melon');
const openCarrot = document.getElementById('carrot');
const openLemon = document.getElementById('lemon');
const openApple = document.getElementById('apple');
const openAvocado = document.getElementById('avocado');
const openCucumber = document.getElementById('cucumber');
const openMango = document.getElementById('mango');
const openPineapple = document.getElementById('pineapple');
const fruitDescription = document.getElementById('fruitDescription');
const fruitTitle = document.getElementById('fruitTitle');
const fruitPlaceHolder = document.getElementById('fruit-image-placeholder');
const fruitShow = document.getElementById('fruit-image-placeholder');

openBanana.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const paragraph1= document.createElement('p');
   
    fruitDescription.removeChild(fruitDescription.firstChild);
    
    paragraph1.textContent = "Refreshing and naturally sweet, banana juice is a creamy tropical drink packed with flavor and nutrients. 🍌🥤";              
    fruitDescription.appendChild(paragraph1);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Banana Juice";     
                    fruitPlaceHolder.src = 'images/banana_fruit.png';               
                }, 10);

});
openOrange.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');

    fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Boost your imunity with vitamin C-rich orange juice."
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Orange Juice"; 
                    fruitPlaceHolder.src = 'images/orange_fruit.png';                  
                }, 10);

});
openMelon.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');

        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Light, sweet, and hydrating—melon juice is perfect for cooling down. 🍈🥤";
                    
    fruitDescription.appendChild(newParagraph);
   
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Melon Juice"; 
                    fruitPlaceHolder.src = 'images/melon_fruit.png';                  
                }, 10);

});
openCarrot.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');

        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Glow from within-great for eyes and skin";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Carrot Juice"; 
                    fruitPlaceHolder.src = 'images/carrot_fruit.png';                  
                }, 10);

});
openLemon.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');
        fruitDescription.removeChild(fruitDescription.firstChild);
   
    newParagraph.textContent = "Zesty and invigorating, lemon juice is a tangy burst of citrus freshness. 🍋💧";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Lemon Juice"; 
                    fruitPlaceHolder.src = 'images/lemon_fruit.png';                  
                }, 10);

});
openApple.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');

        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "A heart-healthy sip packed with antioxidants";
                    
    fruitDescription.appendChild(newParagraph);
  
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Apple Juice"; 
                    fruitPlaceHolder.src = 'images/apple_fruit.png';                  
                }, 10);

});
openAvocado.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');

        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Smooth and creamy, avocado juice offers a rich, nutritious treat. 🥑✨";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Avocado Juice"; 
                    fruitPlaceHolder.src = 'images/avocado_fruit.png';                  
                }, 10);

});
openCucumber.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');
        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Crisp and refreshing, cucumber juice is your go-to for a natural detox. 🥒💦";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Cucumber Juice"; 
                    fruitPlaceHolder.src = 'images/cucumber_fruit.png';                  
                }, 10);

});
openMango.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');
   
        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Lusciously sweet and tropical—mango juice is summer in a glass. 🥭🌞";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Mango Juice"; 
                    fruitPlaceHolder.src = 'images/mango_fruit.png';                  
                }, 10);

});
openPineapple.addEventListener('click', function(){
    dialogBox.style.display = "flex";
    const newParagraph = document.createElement('p');
 
        fruitDescription.removeChild(fruitDescription.firstChild);
    
    newParagraph.textContent = "Aid digestion and fith inflamation the tropical way";
                    
    fruitDescription.appendChild(newParagraph);
    setTimeout(()=>{
                    dialogContent.classList.add('show');
                    fruitTitle.classList.add('show');
                    fruitDescription.classList.add('show');
                    fruitShow.classList.add('show');
                    fruitTitle.textContent = "Pineapple Juice"; 
                    fruitPlaceHolder.src = 'images/pineapple_fruit.png';                  
                }, 10);

});


closeButton.addEventListener('click', function(){
    dialogContent.classList.remove('show');
    fruitTitle.classList.remove('show');
    fruitDescription.classList.remove('show');
    fruitShow.classList.remove('show');
    setTimeout(()=>{
        dialogBox.style.display ='none';
    }, 10);
});
