const reviews = [
    {
    image: "img/photo1" ,
    name: "Susan Smith" ,
    job: "web developper" ,
    infostext: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry" ,
    },
    {
    image: "img/photo2" ,
    name: "Peter Jones" ,
    job: "intern" ,
    infostext: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag." ,
    },
    {
    image: "img/photo3" ,
    name: "Anna Jonhson" ,
    job: "web designer" ,
    infostext: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal." ,
    },
];


function displayReview(currentReview) {
    imageElt.src = currentReview.image;
    nameElt.innerHTML = currentReview.name;
    jobElt.innerHTML = currentReview.job;
    infostextElt.innerHTML = currentReview.infostext;
    }
    displayReview(review);


const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
 
    function prevReview() {
console.log("Display previous review");
 }
    function nextReview() {
console.log("Display next review");
 }

prevBtn.addEventListener("click", prevReview);
nextBtn.addEventListener("click", nextReview);