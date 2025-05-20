// Chargement et affichage indépendant des sous-titres .vtt
fetch("subtitles.vtt")
  .then(response => response.text())
  .then(data => {
    const lines = data.split('\n').filter(line => line && !line.includes('-->') && !/^\d+$/.test(line));
    let index = 0;
    const subtitleBox = document.getElementById("subtitles");

    function updateSubtitle() {
      subtitleBox.textContent = lines[index];
      index = (index + 1) % lines.length;
    }

    updateSubtitle();
    setInterval(updateSubtitle, 2500); // Change toutes les 2,5 sec
  });
