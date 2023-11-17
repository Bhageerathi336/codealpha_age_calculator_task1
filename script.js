function calculateAge() {
    const dob = document.getElementById('dob').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
  
    if (dob && month && year) {
      const today = new Date();
      const birthDate = new Date(`${year}-${month}-${dob}`);
      const age = today.getFullYear() - birthDate.getFullYear();
  
      if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) {
        age--;
      }
  
      document.getElementById('result').innerText = `You are ${age} years old.`;
    } else {
      document.getElementById('result').innerText = 'Please enter valid information.';
    }
  }
  