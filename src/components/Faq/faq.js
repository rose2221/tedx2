// import React from 'react';
// import './faq.css';
// import iconf from '../../assets/iconf.png'


// const Faq = () => {
//     return ( 
//         <section id="faq">
//           <span className="what">Frequently Asked Questions</span>
         



//         <h1 class="faq-heading">FAQ'S</h1>
//         <section class="faq-container">
//             <div class="faq-one">

                
//                 <h1 class="faq-page">What is an FAQ Page?</h1>

//                 <div class="faq-body">
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                         necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                         aperiam.
//                         Perspiciatis, porro!</p>
//                 </div>
//             </div>
//             <hr  style={{
//      width: 60,
     
// }}/>

//             <div class="faq-two">

//                 <h1 class="faq-page">Why do you need an FAQ page?</h1>

          

//                 <div class="faq-body">
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                         necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                         aperiam.
//                         Perspiciatis, porro!</p>
//                 </div>
//             </div>
//             <hr class="hr-line">


//             <div class="faq-three">

            
// <h1 class="faq-page">Does it improves the user experience of a website?</h1>

             
//                 <div class="faq-body">
//                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                         necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                         aperiam.
//                         Perspiciatis, porro!</p>
//                 </div>
//             </div>

//     </section>
//     </section>
// // </section>
//     );
// }
// var faq = document.getElementsByClassName("faq-page");
// var i;
// for (i = 0; i < faq.length; i++) {
//     faq[i].addEventListener("click", function () {
//         /* Toggle between adding and removing the "active" class,
//         to highlight the button that controls the panel */
//         this.classList.toggle("active");
//         /* Toggle between hiding and showing the active panel */
//         var body = this.nextElementSibling;
//         if (body.style.display === "block") {
//             body.style.display = "none";
//         } else {
//             body.style.display = "block";
//         }
//     });
// }

// export default Faq;
// import React, { useEffect } from 'react';
// import './faq.css';
// import iconf from '../../assets/iconf.png';

// const Faq = () => {
//     useEffect(() => {
//         var faq = document.getElementsByClassName("faq-page");
//         var i;
//         for (i = 0; i < faq.length; i++) {
//             faq[i].addEventListener("click", function () {
//                 /* Toggle between adding and removing the "active" class,
//                 to highlight the button that controls the panel */
//                 this.classList.toggle("active");
//                 /* Toggle between hiding and showing the active panel */
//                 var body = this.nextElementSibling;
//                 if (body.style.display === "block") {
//                     body.style.display = "none";
//                 } else {
//                     body.style.display = "block";
//                 }
//             });
//         };
        
//         // Clean up event listeners when the component unmounts
        

//     return ( 
//         <section id="faq">
          

//           <h1 className="faq-heading">FAQ'S</h1>
//           <section className="faq-container">
//           <span className="what">Frequently Asked Questions</span>

// <h1 className="faq-heading">FAQ'S</h1>
// <section className="faq-container">
//     <div className="faq-one">
//         <h1 className="faq-page">What is an FAQ Page?</h1>
//         <div className="faq-body">
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                 necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                 aperiam. Perspiciatis, porro!</p>
//         </div>
//     </div>
//     <hr className="hr-line" />
//     <div className="faq-two">
//         <h1 className="faq-page">Why do you need an FAQ page?</h1>
//         <div className="faq-body">
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                 necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                 aperiam. Perspiciatis, porro!</p>
//         </div>
//     </div>
//     <hr className="hr-line" />
//     <div className="faq-three">
//         <h1 className="faq-page">Does it improve the user experience of a website?</h1>
//         <div className="faq-body">
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit saepe sequi, illum facere
//                 necessitatibus cum aliquam id illo omnis maxime, totam soluta voluptate amet ut sit ipsum
//                 aperiam. Perspiciatis, porro!</p>
//         </div>
//     </div>
// </section>
// </section>
//           </section>
        
//     );
// }

// export default Faq;
import React, { useEffect } from 'react';
import './faq.css';
import iconf from '../../assets/iconf.png';

const Faq = () => {
    useEffect(() => {
        const faqPages = document.getElementsByClassName("faq-page");
        
        const clickHandler = function () {
          
            this.classList.toggle("active");
            
           
            const body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        };

       
        for (let i = 0; i < faqPages.length; i++) {
            faqPages[i].addEventListener("click", clickHandler);
        }
        
       
        return () => {
            for (let i = 0; i < faqPages.length; i++) {
                faqPages[i].removeEventListener("click", clickHandler);
            }
        };
    }, []); // Empty dependency array to run the effect once

    return ( 
        <section id="faq">
         
          {/* <h1 className="faq-heading">Frequently Asked Questions</h1>
          <section className="faq-container">
          <section id="faq">
          

          <h1 className="faq-heading">FAQ'S</h1>
          <section className="faq-container">
          <span className="what">Frequently Asked Questions</span> */}

<h1 className="faq-heading">Frequently Asked Questions</h1>
<section className="faq-container">
    <div className="faq-one">
        {/* <img src={iconf} alt="" className="faq1" /> */}
        <h1 className="faq-page">What is xuy.............?</h1>
        <div className="faq-body">
            <p>it is xyz and runned by xy..........</p>
        </div>
    </div>
    <hr className="hr-line" />
    <div className="faq-two">
    {/* <img src={iconf} alt="" className="faq1" /> */}
        <h1 className="faq-page">WWhat is xuy.............??</h1>
        <div className="faq-body">
            <p>it is xyz and runned by xy..........</p>
        </div>
    </div>
    <hr className="hr-line" />
    <div className="faq-three">
    {/* <img src={iconf} alt="" className="faq1" /> */}
        <h1 className="faq-page">WWhat is xuy.............??</h1>
        <div className="faq-body">
            <p>it is xyz and runned by xy..........!</p>
        </div>
    </div>
</section>
</section>
         
    );
}

export default Faq;

