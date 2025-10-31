const radios = document.querySelectorAll('input[name="pet"]');
const petImage = document.getElementById('petImage');


const petImages = {
    Bird:   "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f426.png",
    Cat:    "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f431.png",
    Dog:    "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f436.png",
    Rabbit: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f430.png",
    Pig:    "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f437.png"
};

radios.forEach(radio => {
  radio.addEventListener('change', (event) => {
    const selectedPet = event.target.value;
    petImage.src = petImages[selectedPet];
    alert(`You selected: ${selectedPet}`);
    console.log(`Selected pet: ${selectedPet}`, `Image URL: ${petImages[selectedPet]}`);
  });
});
