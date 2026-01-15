class PomodoroTimer {
    constructor() {
        this.totalTime = 30 * 60; // 30 minutes in seconds
        this.timeLeft = this.totalTime;
        this.isRunning = false;
        this.intervalId = null;
        
        // DOM elements
        this.timeDisplay = document.getElementById('time');
        this.statusDisplay = document.getElementById('status');
        this.startBtn = document.getElementById('startBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.progressCircle = document.querySelector('.progress-ring-circle');
        this.timerCircle = document.querySelector('.timer-circle');
        
        // Calculate circumference for progress ring
        const radius = 140;
        this.circumference = 2 * Math.PI * radius;
        
        // Initialize progress ring
        this.progressCircle.style.strokeDasharray = this.circumference;
        this.progressCircle.style.strokeDashoffset = this.circumference;
        
        // Event listeners
        this.startBtn.addEventListener('click', () => this.start());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        
        // Update display
        this.updateDisplay();
    }
    
    start() {
        if (this.timeLeft === 0) {
            this.reset();
        }
        
        this.isRunning = true;
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.statusDisplay.textContent = 'Focus time';
        this.progressCircle.classList.add('active');
        
        this.intervalId = setInterval(() => {
            this.timeLeft--;
            this.updateDisplay();
            
            if (this.timeLeft <= 0) {
                this.complete();
            }
        }, 1000);
    }
    
    pause() {
        this.isRunning = false;
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.statusDisplay.textContent = 'Paused';
        this.progressCircle.classList.remove('active');
        
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    
    reset() {
        this.pause();
        this.timeLeft = this.totalTime;
        this.updateDisplay();
        this.statusDisplay.textContent = 'Ready to start';
        this.timerCircle.classList.remove('complete');
        // Reset progress ring color to primary
        this.progressCircle.style.stroke = '';
    }
    
    complete() {
        this.pause();
        this.timeLeft = 0;
        this.updateDisplay();
        this.statusDisplay.textContent = 'Time\'s up!';
        this.timerCircle.classList.add('complete');
        
        // Visual feedback
        this.progressCircle.style.stroke = '#4ecdc4';
        
        // Optional: Play notification sound or show alert
        // You can add a sound file in assets/ and play it here
        this.showCompletionNotification();
    }
    
    showCompletionNotification() {
        // Create a visual notification
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #4ecdc4, #44a08d);
            color: white;
            padding: 1rem 2rem;
            border-radius: 50px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideDown 0.3s ease;
        `;
        notification.textContent = '🎉 Pomodoro Complete!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    updateDisplay() {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        this.timeDisplay.textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        // Update progress ring
        const progress = (this.totalTime - this.timeLeft) / this.totalTime;
        const offset = this.circumference - (progress * this.circumference);
        this.progressCircle.style.strokeDashoffset = offset;
    }
}

// Add notification animations to style
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize timer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PomodoroTimer();
});
