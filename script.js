// --- 1. CONFIGURATION ---
// One array, one set of rules.
const lights = [
  { id: 'red', duration: 3000 },    // Standard Red duration
   { id: 'yellow', duration: 1000 },  // Standard Yellow duration
  { id: 'green', duration: 3000 }  // Standard Green duration
 
];

let currentIndex = 0;           
let pedestrianRequested = false; 

// --- 2. DOM ELEMENTS ---
// Make sure these IDs match your HTML exactly!
const pedBtn = document.getElementById('cross-btn');
const pedSignal = document.getElementById('ped-signal');

// --- 3. EVENT LISTENER ---
// Handles the "Request" part of the pedestrian crossing
pedBtn.addEventListener('click', () => {
  if (!pedestrianRequested) {
    pedestrianRequested = true;      
    pedBtn.innerText = "Wait for Red..."; 
    pedBtn.disabled = true;          
  }
});

// --- 4. THE MAIN ENGINE ---
function changeLight() {
  // Clear previous active states
  document.querySelectorAll('.light').forEach(light => {
    light.classList.remove('active');
  });

  // Get current light settings
  const currentConfig = lights[currentIndex];
  const activeElement = document.getElementById(currentConfig.id);
  
  if (activeElement) {
    activeElement.classList.add('active'); 
  }

  // Calculate timing based on whether a pedestrian is waiting
  let nextDuration = currentConfig.duration;

  if (pedestrianRequested) {
    // If Green is on, cut it short to get to Red faster
    if (currentConfig.id === 'green') {
      nextDuration = 1000; 
    } 
    // If we just landed on Red, activate the "WALK" signal
    else if (currentConfig.id === 'red') {
      pedSignal.innerText = "WALK!";    
      pedSignal.classList.add('walk');  
      nextDuration = 5000; // Extra time for crossing

      // Cleanup: After 5s, reset the pedestrian flag for the next cycle
      setTimeout(() => {
        pedestrianRequested = false;
        pedBtn.innerText = "Request Crossing";
        pedBtn.disabled = false;
        pedSignal.innerText = "WAIT";
        pedSignal.classList.remove('walk');
      }, 5000);
    }
  }

  // Move the counter forward (loops 0 -> 1 -> 2 -> 0)
  currentIndex = (currentIndex + 1) % lights.length;

  // Run this function again after the delay
  setTimeout(changeLight, nextDuration);
}

// --- 5. INITIALIZE ---
// Run the function once to start the infinite loop
changeLight();