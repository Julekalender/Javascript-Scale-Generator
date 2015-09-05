// Initialize all variables needed for app.
var notes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
var scales = ['Major', 'Melodic', 'Harmonic', 'Chromatic', 'Diminished', 'Dominant', 'Major Arpeggio', 'Minor Arpeggio'];
var note;
var scale;
var randomScale = document.getElementById('randomScale');

// Function that retrieves random note and scale.
var getRandomScale = function() {
    note = notes[Math.floor(Math.random() * notes.length)];
    scale = scales[Math.floor(Math.random() * scales.length)];
    randomScale.innerHTML = note + " " + scale;
};