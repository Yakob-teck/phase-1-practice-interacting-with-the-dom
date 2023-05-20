document.addEventListener('DOMContentLoaded', function() {
    const timerElement = document.getElementById('counter');
    let time = 0;
    let timerInterval;
    let pausedTime = 0;
    let isPaused = false;
  
    // Function to format the time as HH:MM:SS
    function formatTime(time) {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
  
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  
    // Function to increment the timer
    function incrementTimer() {
      time++;
      timerElement.innerText = formatTime(time);
    }
  
    // Start the timer
    function startTimer() {
      timerInterval = setInterval(incrementTimer, 1000);
    }
  
    // Pause the timer
    function pauseTimer() {
      clearInterval(timerInterval);
      pausedTime = time;
      isPaused = true;
    }
  
    // Resume the timer
    function resumeTimer() {
      time = pausedTime;
      pausedTime = 0;
      isPaused = false;
      startTimer();
    }
  
    // Event listener for the "plus" button
    document.getElementById('plus').addEventListener('click', function() {
      time++;
      timerElement.innerText = formatTime(time);
    });
  
    // Event listener for the "minus" button
    document.getElementById('minus').addEventListener('click', function() {
      if (time > 0) {
        time--;
        timerElement.innerText = formatTime(time);
      }
    });
  
    // Event listener for the "pause" button
    const pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function() {
      if (isPaused) {
        resumeTimer();
        this.innerText = 'pause';
      } else {
        pauseTimer();
        this.innerText = 'resume';
      }
    });
    document.addEventListener('DOMContentLoaded', function() {
        // Get the necessary elements
        const heartButton = document.getElementById('heartButton');
        const heartCountElement = document.getElementById('heartCount');
        
        let heartCount = 0;
        
        // Event listener for the heart button click
        heartButton.addEventListener('click', function() {
          heartCount++;
          heartCountElement.innerText = heartCount;
        });
      });
  
    // Start the timer on page load
    startTimer();
  });
  