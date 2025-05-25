
class AcademicCalendar {
  constructor() {
      this.init();
  }

  init() {
      this.initTheme();
      this.updateDateTime();
      this.updateStatusIndicator();
      this.setEventListeners();
  }

  initTheme() {
      const preference = window.matchMedia("(prefers-color-scheme: dark)");
      document.body.setAttribute("data-theme", preference ? "dark" : "light");
  }

  updateDateTime() {
      const now = new Date();
      const currentDate = now.toISOString().split('T')[0];
      
      const todayData = CALENDAR_DATA.find(
          item => item.date === currentDate
      );

      if (todayData) {
          const workingDay = todayData.workingDay;
          document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-US", {
              weekday: "long"
          });
      }

      document.getElementById("currentDate").textContent = now.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
      });
      
      document.getElementById("currentDay").textContent = todayData?.day;

      const badge = document.getElementById("workingDayBadge");
      if (todayData?.status === "Holiday") {
          badge.innerHTML = `
              <i class="fas fa-calendar-times"></i>
              <span>${todayData.remarks || "Holiday"}</span>
          `;
          badge.classList.remove("working-badge");
          badge.classList.add("holiday-badge");
      } else {
          badge.innerHTML = `
              <i class="fas fa-calendar-day"></i>
              <span>Working Day ${todayData?.workingDay}</span>
          `;
      }
  }

  updateStatusIndicator() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTime = hours + minutes / 60;

      const indicator = document.querySelector('.status-indicator');
      const startDate = new Date('2025-01-20');
      const endDate = new Date('2025-05-11');
      
      // Check if current date is within academic calendar period
      if (now < startDate || now > endDate) {
          this.showCalendarEndedMessage();
          indicator.style.backgroundColor = 'red';
          return;
      }

      // Check if it's a working day
      const isWorkingDay = this.isWorkingDay(now);
      const isWorkingHours = currentTime >= 9 && currentTime <= 16.75; // 16.75 = 4:45 PM

      // Set indicator color
      if (isWorkingDay && isWorkingHours) {
          indicator.style.backgroundColor = 'green';
      } else {
          indicator.style.backgroundColor = 'red';
      }
  }

  isWorkingDay(date) {
      const day = date.getDay();
      const dateStr = date.toISOString().split('T')[0];
      const calendarEntry = CALENDAR_DATA.find(entry => entry.date === dateStr);

      // Check if it's a holiday
      if (calendarEntry?.status === 'Holiday') return false;

      // Check if it's Sunday
      if (day === 0) return false;

      // Check if it's 2nd or 4th Saturday
      if (day === 6) {
          const weekNumber = Math.ceil(date.getDate() / 7);
          if (weekNumber === 2 || weekNumber === 4) return false;
      }

      return true;
  }

  showCalendarEndedMessage() {
      const scheduleContainer = document.querySelector('.schedule-container');
      if (scheduleContainer) {
          scheduleContainer.innerHTML = `
              <div class="calendar-ended-message">
                  <i class="fas fa-calendar-times"></i>
                  <h2>Academic Calendar Has Ended</h2>
                  <p>No schedules available.</p>
                  <p class="period-info">Academic calendar period: 
                      January 20, 2025 - May 11, 2025
                  </p>
              </div>
          `;
      }
  }

  updateFact() {
      const factElement = document.querySelector('.fact-content');
      const randomFact = ELECTRICAL_FACTS[Math.floor(Math.random() * ELECTRICAL_FACTS.length)];
      factElement.textContent = randomFact;
  }

  setEventListeners() {
      document.getElementById("themeToggle").addEventListener("click", () => {
          const currentTheme = document.body.getAttribute("data-theme");
          document.body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
      });

      // Update status every minute
      setInterval(() => {
          this.updateDateTime();
          this.updateStatusIndicator();
      }, 60000);
  }
}

// Add these styles to your CSS
const styles = `
  .status-indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      transition: background-color 0.3s ease;
      display: inline-block;
      margin-left: 10px;
  }

  .calendar-ended-message {
      text-align: center;
      padding: 2rem;
      background: var(--secondary-bg);
      border-radius: 15px;
      margin: 2rem 0;
      border: 1px solid var(--border-color);
  }

  .calendar-ended-message i {
      font-size: 3rem;
      color: #dc3545;
      margin-bottom: 1rem;
  }

  .calendar-ended-message h2 {
      color: #dc3545;
      margin-bottom: 1rem;
  }

  .period-info {
      font-size: 0.9rem;
      padding-top: 1rem;
      border-top: 1px solid var(--border-color);
      margin-top: 1rem;
  }
`;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Add styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Initialize calendar
  new AcademicCalendar();
});