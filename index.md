<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pomato</title>
      <link rel="stylesheet" href="styles/main.css">
   </head>
   <body>
      <header>
         <div class="container">
            <div class="containerLogo">
               <img class="containerLogo__pomatoLogo" src="images/logo.png" alt="Pomato Logo">
            </div>
            <div class="navContainer">
               <button class="hamburger" aria-label="Menu">
               <span class="hamburger__container" tabindex="-1">
               <span class="hamburger__bars">
               </span>
               </span>
               </button>
            </div>
            <div class="navList">
               <ul class="navList__list">
                  <li><a href="index.html">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Our Brand</a></li>
                  <li><a href="#">Work with us</a></li>
               </ul>
            </div>
         </div>
      </header>
      <main>
         <div class="slideContainer">
            <img class="slideContainer__slide" src="images\banner.jpg" alt="banner.jpg, here will be slide">
         </div>
         <div class="about">
            <img class="about__photo" src="images\about.png" alt="about phone image">
            <div class="about__text">
               <h3>About Us</h3>
               <span>Our mobile shop</span>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident praesentium, eveniet sed necessitatibus aut accusantium, dolorem nulla iste dolores dolore cumque debitis. Eligendi consequatur voluptatum quis ratione ipsa earum.
                  Quod iusto non explicabo ratione libero cumque alias harum cum dicta culpa aliquid itaque similique corporis voluptatum iste laboriosam dolore perferendis, recusandae unde molestias. Sequi in esse quisquam facilis earum.
               </p>
            </div>
         </div>
         <div class="ourBrand">
            <div class="ourBrand_header">
               <h2>Our brand</h2>
            </div>
            <div class="landscape">
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\1.png" alt="phone 1">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\2.png" alt="phone 2">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\3.png" alt="phone 3">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\4.png" alt="phone 4">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\5.png" alt="phone 5">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
               <div class='imageBox'>
                  <img class="ourBrand__images" src="images\1.png" alt="phone 6">
                  <h3>$<strong>100</strong></h3>
                  <span>Mobile phone</span>
                  <ul>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                     <li><img src="images/star.png"></li>
                  </ul>
               </div>
            </div>
            <a class="ourBrand__seeMore">See more</a>
         </div>
         <div class="comments">
            <h2>What say our clients</h2>
            <div class="comments__clientBox">
               <div class="comments__clientBox__ourClients">
                  <h3>Simon Simon</h3>
                  <h4>rental</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi repellendus voluptas excepturi harum laborum aliquid, omnis ad magni culpa, porro dicta eligendi? Ratione quod ullam aut. Animi, recusandae similique.
                     Blanditiis vel inventore unde reiciendis voluptatibus atque similique placeat tempora repellendus! Consequatur eos qui quibusdam eligendi dolorem quis enim, aperiam, neque esse quasi, maxime exercitationem tenetur aliquam praesentium blanditiis culpa.
                  </p>
                  <img class="comments__clientBox__ourClients__quote" src="icon\testimonial_qoute.png">
               </div>
               <ul>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
            </div>
         </div>
         <div class="contactUsBox">
            <h2>Contact us</h2>
            <form class="contactUsForm" action="">
               <fieldset class="formFieldset">
                  <input type="text" class="formFieldset__input" name="firstname" placeholder="Your name">
                  <input type="text" class="formFieldset__input" name="firstname" placeholder="E-mail">
                  <input type="text" class="formFieldset__phoneInput" name="firstname" placeholder="Phone">
                  <textarea type="text" class="formFieldset__textarea" name="firstname" placeholder="Message"></textarea>
                  <button class="formFieldset__send">Send</button>
               </fieldset>
            </form>
         </div>
         <div class="myAddress">
            <h3>Address</h3>
            <address>Healing Center, 176 W Streetname,New York, NY 10014, US</address>
            <p>(+71) 8522369417</p>
            <p>demo@gmail.com</p>
            <ul>
               <li><a href="#"><img class="myAddress__images" src="icon/facebook.png"></a></li>
               <li><a href="#"><img class="myAddress__images" src="icon/twitter.png"></a></li>
               <li><a href="#"><img class="myAddress__images" src="icon/instagram.png"></a></li>
            </ul>
            <div class="listBox">
               <ul class="listForm">
                  <li class="listForm__links"><a class="listForm__links --activator" href="#">Home</a></li>
                  <li class="listForm__links"><a class="listForm__links --activator" href="#">About</a></li>
                  <li class="listForm__links"><a class="listForm__links --activator" href="#">Brand</a></li>
                  <li class="listForm__links"><a class="listForm__links --activator" href="#">Specjals</a></li>
                  <li class="listForm__links"><a class="listForm__links --activator" href="#">About Us</a></li>
               </ul>
            </div>
         </div>
      </main>
      <script type="text/javascript" src="scripts/hamburger.js"></script>
   </body>
</html>