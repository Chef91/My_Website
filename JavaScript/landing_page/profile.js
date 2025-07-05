function updateCard(imageSrc, text) {
  document.getElementById('cardImage').src = imageSrc;
  document.getElementById('cardText').textContent = text;
}
const profiles = {
  profileChef: {
    image: './images/landing_images/profiles/chef.jpg',
    text: 'This is Wesley Graham. He is the founder & head developer here at Grahams Web Services. He has been programming for just over two years now.',
  },
  profile2: {
    image: 'img2.jpg',
    text: 'This is the second profile.',
  },
  profile3: {
    image: 'img3.jpg',
    text: 'This is the third profile.',
  }
};

function showProfile(profileKey) {
  const profile = profiles[profileKey];
  document.getElementById('cardImage').src = profile.image;
  document.getElementById('cardText').textContent = profile.text;
}
