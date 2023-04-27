function toggleTheme() {
    let x = document.querySelector("body");
    x.classList.toggle("dark-mode");  
  }

  document.getElementById("toggleButton").onclick = toggleTheme;
