function meteo(lat,lon) {
    let url = `https://www.7timer.info/bin/civil.php?lon=${lon}&lat=${lat}&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;
    window.location.href = url;
   
  }
  meteo(4.8566, 2.3522)