function updateTime() {
    // Create a new Date object to get the current time
    const currentDate = new Date();
  
    // Get the current date in YYYY-MM-DD format
    const date = currentDate.toISOString().slice(0, 10);
  
    // Get the current time components (hours, minutes, seconds, milliseconds)
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");
    const seconds = currentDate.getSeconds().toString().padStart(2, "0");
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, "0");
  
    // Combine the date and time components
    const dateTime = date + " " + hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
  
    // Display the formatted date and time in the HTML element
    document.getElementById("currentTime").innerText = "Current time: " + dateTime;
  }
  
  // Call updateTime initially to display the current time immediately
  updateTime();
  
  // Update the time every millisecond
  setInterval(updateTime, 1);
  