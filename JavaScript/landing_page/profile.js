// landing page profile cards
function updateCard(imageSrc, text) {
  document.getElementById('cardImage').src = imageSrc;
  document.getElementById('cardText').innerHTML = profile.text;
}
//Profiles
const profiles = {
  profileChef: {
    image: './images/landing_images/profiles/chef.jpg',
    text: `This is Wesley Graham. He is the founder of our company. Also in this photo is his dog, Biscuit. She likes to tag along for the good times.
    Wesley has been programming for just over two years. He studies full-stack, but his strongest skills are currently in Front-End Development. He likes
    to program mostly in JavaScript, Python, and PHP right now. You can look below to see his skills:`,
    heading: 'Wesleys Skills',
    image1: '<i class="fa-brands fa-html5 fa-3x "></i>',
    image2: '<i class="fa-brands fa-css3-alt fa-3x"></i>',
    image3: '<i class="fa-brands fa-js fa-3x"></i>',
    image4: '<i class="fa-brands fa-php fa-3x"></i>',
    image5: '<i class="fa-brands fa-react fa-3x"></i>'
  },
  // Placeholder
  profileJohn: {
    image: './images/landing_images/profiles/johndoe.jpg',
    text: `This is John Doe, our senior back-end developer. John has been with the company for several years now. He is in charge of all of our back-end operations.
    This means he deals with a lot of programming languages like Python, PHP, MySql, and so on. He's a reliable part of the team because he takes care of all the things
    you don't see when you are looking at our website.`,
    heading: 'Johns skills',
    image1: '<i class="fa-brands fa-php fa-3x"></i>',
    image2: '<i class="fa-brands fa-python fa-3x"></i>',
    image3: '<i class="fa-brands fa-java fa-3x"></i>',
    image4: '<i class="fa-brands fa-golang fa-3x"></i>',
    image5: ''
  },
  // Placeholder
  profileJane: {
    image: './images/landing_images/profiles/janedoe.jpg',
    text: `This is John Doe, our senior back-end developer. John has been with the company for several years now. He is in charge of all of our back-end operations.
    This means he deals with a lot of programming languages like Python, PHP, MySql, and so on. He's a reliable part of the team because he takes care of all the things
    you don't see when you are looking at our website.`,
    heading: 'Johns skills',
    image1: '<i class="fa-brands fa-html5 fa-3x"></i>',
    image2: '<i class="fa-brands fa-css3-alt fa-3x"></i>',
    image3: '<i class="fa-brands fa-js fa-3x"></i>',
    image4: '<i class="fa-brands fa-react fa-3x"></i>',
    image5: ''
  },
};
// Function runs profile cards on website
// cardSkills are the programming language icons
function showProfile(profileKey) {
  const profile = profiles[profileKey];
  document.getElementById('cardImage').src = profile.image;
  document.getElementById('cardText').innerHTML = profile.text;
  document.getElementById('cardText2').textContent = profile.heading || '';
  document.getElementById('cardSkill1').innerHTML = profile.image1;
  document.getElementById('cardSkill2').innerHTML = profile.image2;
  document.getElementById('cardSkill3').innerHTML = profile.image3;
  document.getElementById('cardSkill4').innerHTML = profile.image4;
  document.getElementById('cardSkill5').innerHTML = profile.image5;
}