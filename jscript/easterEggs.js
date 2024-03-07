function changeBackground() {
    document.getElementById("easterEgg").style.background = 'yellow';
    document.getElementById("header").style.background = 'purple';
    document.getElementById("who-am-i").style.background = 'purple';
    document.getElementById("my-interests").style.background = 'purple';
    document.getElementById("my-interests").style.color = 'white';

};

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('easterEggMessage');
    let combination = '';
  
    document.addEventListener('keydown', function(event) {
      combination += event.key;
  
      if (combination === '1337') {
        modal.style.display = 'block';
        combination = '';
      }
    });
  
    var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });