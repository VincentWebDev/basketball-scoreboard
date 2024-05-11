let homePoints = document.getElementById("home");
let homeCount = 0;
let guestPoints = document.getElementById("guest");
let guestCount = 0;

function addPoints(pointID) {
  switch (pointID) {
    case "homePoints1":
      homeCount++;
      homePoints.innerHTML = homeCount;
      console.log(pointID);
      break;
    case "homePoints2":
      homeCount += 2;
      homePoints.innerHTML = homeCount;
      console.log(pointID);
      break;
    case "homePoints3":
      homeCount += 3;
      homePoints.innerHTML = homeCount;
      console.log(pointID);
      break;

    case "guestPoints1":
      guestCount++;
      guestPoints.innerHTML = guestCount;
      console.log(pointID);
      break;
    case "guestPoints2":
      guestCount += 2;
      guestPoints.innerHTML = guestCount;
      console.log(pointID);
      break;
    case "guestPoints3":
      guestCount += 3;
      guestPoints.innerHTML = guestCount;
      console.log(pointID);
      break;

    default:
      alert("error");
  }

  if (homeCount > guestCount) {
    homePoints.classList.add("highlight-score");
    guest.classList.remove("highlight-score");
  } else if (guestCount > homeCount) {
    guest.classList.add("highlight-score");
    homePoints.classList.remove("highlight-score");
  } else {
    guest.classList.remove("highlight-score");
    homePoints.classList.remove("highlight-score");
  }
}

function resetCount() {
  homeCount = 0;
  guestCount = 0;
  homePoints.innerHTML = homeCount;
  guestPoints.innerHTML = guestCount;
  guest.classList.remove("highlight-score");
  homePoints.classList.remove("highlight-score");
}
