// Small interactive features for Science Strength.
// No account, server, or database is used.

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Keep the demonstration form on this page.
    document.getElementById('contact-feedback').textContent =
      'Demo complete. No message was sent or stored.';
  });
}

const calorieForm = document.getElementById('calorie-form');
if (calorieForm) {
  calorieForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const age = Number(document.getElementById('age').value);
    const weight = Number(document.getElementById('weight').value);
    const height = Number(document.getElementById('height').value);
    const sex = document.getElementById('sex').value;
    const factor = Number(document.getElementById('activity').value);
    // Mifflin-St Jeor (1990): resting metabolic rate in kcal/day.
    const rmr = 10 * weight + 6.25 * height - 5 * age + (sex === 'male' ? 5 : -161);
    // An approximate daily total based on the selected activity level.
    const tdee = rmr * factor;
    document.getElementById('rmr-value').textContent = Math.round(rmr).toLocaleString() + ' kcal';
    document.getElementById('tdee-value').textContent = Math.round(tdee).toLocaleString() + ' kcal';
    document.getElementById('calorie-result').hidden = false;
  });
}

const rpeForm = document.getElementById('rpe-form');
if (rpeForm) {
  rpeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const rir = Number(document.getElementById('rir').value);
    document.getElementById('rpe-output').textContent = 'Estimated RPE: ' + (10 - rir);
  });
}
