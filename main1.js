const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

const textElement = document.getElementById('text');
const nameElement = document.getElementById('name');
const roleElement = document.getElementById('role');
const imageElement = document.getElementById('img');

let arrayIndex = 0;

let sliderData = [
  {
    text: '“ Stand at the edge of your mat, keep your feet together and balance your weight equally on both feet. Expand your chest and relax your shoulders. As you breathe in, lift both arms up from the sides, and as you exhale, bring your palms together in front of the chest in a prayer position.”',
    name: 'Prayer pose:',
    role: 'Pranamasana',
    img: './assets/images/1.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing in, lift the arms up and back, keeping the biceps close to the ears. In this pose, the effort is to stretch the whole body up from the heels to the tips of the fingers.”',
    name: 'Raised arms pose:',
    role: 'Hasta Uttanasana',
    img: './assets/images/2.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing out, bend forward from the waist keeping the spine erect. As you exhale completely, bring the hands down to the floor beside the feet.”',
    name: 'Hand to foot pose:',
    role: 'Hasta Padasana',
    img: './assets/images/3.png',
    imgAlt:
      'Image',
  },
  {
    text: '“Breathing in, push your right leg back, as far back as possible. Bring the right knee to the floor and look up.”',
    name: 'Equestrian pose:',
    role: 'Ashwa Sanchalanasana',
    img: './assets/images/4.png',
    imgAlt:
      'Image',
  },
  {
    text: '“As you breathe in, take the left leg back and bring the whole body in a straight line.”',
    name: 'Mountain pose:',
    role: 'Parvatasana',
    img: './assets/images/5.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Gently bring your knees down to the floor and exhale. Take the hips back slightly, slide forward, rest your chest and chin on the floor. Raise your posterior a little bit. The two hands, two feet, two knees, chest and chin (eight parts of the body) should touch the floor.”',
    name: 'Pose 6:',
    role: 'Ashtanga Namaskara',
    img: './assets/images/6.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Slide forward and raise the chest up into the Cobra pose. You may keep your elbows bent in this pose with the shoulders away from the ears. Look up at the ceiling.”',
    name: 'Cobra pose:',
    role: 'Bhujangasana',
    img: './assets/images/7.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing out, lift the hips and the tailbone up to bring the body into an inverted ‘V’ pose.”',
    name: 'Mountain pose:',
    role: 'Parvatasana',
    img: './assets/images/8.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing in, bring the right foot forward in between the two hands. The left knee goes down on the floor. Press the hips down and look up.”',
    name: 'Equestrian pose:',
    role: 'Ashwa Sanchalanasana',
    img: './assets/images/9.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing out, bring the left foot forward. Keep the palms on the floor. You may bend the knees, if necessary. ”',
    name: 'Hand to foot pose:',
    role: 'Hasta Padasana',
    img: './assets/images/10.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ Breathing in, roll the spine up. Raise the hands up and bend backward a little bit, pushing the hips slightly outward.”',
    name: 'Raised Arms Pose:',
    role: 'Hasta Uttanasana',
    img: './assets/images/11.png',
    imgAlt:
      'Image',
  },
  {
    text: '“ As you exhale, first straighten the body, then bring the arms down. Relax in this position and observe the sensations in your body. This completes one set of Surya Namaskar. Complete the round by repeating the steps. ”',
    name: 'Standing Mountain pose:',
    role: 'Tadasana',
    img: './assets/images/12.png',
    imgAlt:
      'Image',
  },
  
];

function updateContent() {
  // Forces the fadeIn animation we have declared in CSS
  document.body.classList.remove('animate');

  //   For some reason this is needed (web development is weird)??
  void document.body.offsetWidth;

  document.body.classList.add('animate');

  textElement.innerText = sliderData[arrayIndex].text;
  nameElement.innerText = sliderData[arrayIndex].name;
  roleElement.innerText = sliderData[arrayIndex].role;
  imageElement.src = sliderData[arrayIndex].img;
  imageElement.alt = sliderData[arrayIndex].imgAlt;
}

function displayPrevious() {
  if (arrayIndex - 1 === -1) {
    arrayIndex = sliderData.length - 1;
  } else {
    arrayIndex -= 1;
  }

  return updateContent();
}

function displayNext() {
  if (arrayIndex + 1 === sliderData.length) {
    arrayIndex = 0;
  } else {
    arrayIndex += 1;
  }

  return updateContent();
}

// Enable use of slider with keyboard right and left arrows
document.body.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft') {
    previousBtn.focus();
    return displayPrevious();
  }

  if (event.key === 'ArrowRight') {
    nextBtn.focus();
    return displayNext();
  }

  return;
});

previousBtn.addEventListener('click', displayPrevious);

nextBtn.addEventListener('click', displayNext);
