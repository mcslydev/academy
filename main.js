// Constants and Configurations
const CONFIG = {
  workingTime: {
    start: 9, // 9 AM
    end: 15.75, // 3:45 PM
  },
  refreshInterval: 60000, // 1 minute
  facts: [
    "The first electric motor was invented by Michael Faraday in 1821.",
    "Lightning strikes the Earth about 100 times every second.",
    "Electricity travels at the speed of light, which is 186,000 miles per second.",
    "The first power plant opened in 1882 and was built by Thomas Edison.",
    "The average bolt of lightning contains enough energy to power a house for a month.",
  ],
};

// Fact Manager
class FactManager {
  constructor() {
    this.factText = document.getElementById("dailyFact");
    this.refreshButton = document.getElementById("refreshFact");
    this.init();
  }

  init() {
    this.refreshButton.addEventListener("click", () => this.updateFact());
    this.updateFact();
  }

  updateFact() {
    const randomFact =
      CONFIG.facts[Math.floor(Math.random() * CONFIG.facts.length)];
    this.factText.textContent = randomFact;
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  new FactManager();
});

// Class Schedule Data
const CLASS_SCHEDULES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr1)(PS,LK) /LIB (grp 2)",
      instructor: "Staff",
      room: "Lab 101",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EM-I",
      instructor: "P.S",
      room: "Room 201",
    },
  ],
  2: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "P.C",
      room: "Room 301",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "P.S",
      room: "Room 202",
    },
  ],
  3: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "Mathematics III",
      instructor: "J.B",
      room: "Room 401",
    },
    {
      time: "10:00 AM — 1:45 PM",
      subject: "PE LAB",
      instructor: "K.D",
      room: "Lab 102",
    },
  ],
  4: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "Circuit Analysis",
      instructor: "S.D",
      room: "Room 301",
    },
    {
      time: "12:45 PM — 3:45 PM",
      subject: "EME LAB",
      instructor: "P.C",
      room: "Lab 103",
    },
  ],
  5: [
    {
      time: "9:00 AM — 1:45 PM",
      subject: "Project Work",
      instructor: "Multiple Staff",
      room: "Project Lab",
    },
  ],
};

// Calendar Data
const CALENDAR_DATA = [
  {
    date: "2025-01-20",
    day: "Monday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-21",
    day: "Tuesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-22",
    day: "Wednesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-23",
    day: "Thursday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Netaji Birthday",
  },
  {
    date: "2025-01-24",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Netaji Birthday",
  },
  {
    date: "2025-01-25",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-01-26",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Republic Day",
  },
];

// Theme Management
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.init();
  }

  init() {
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.setInitialTheme();
  }

  setInitialTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateToggleIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateToggleIcon(newTheme);
  }

  updateToggleIcon(theme) {
    const icon = this.themeToggle.querySelector("i");
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}

// Main functionality
class AcademicCalendar {
  constructor() {
    this.init();
  }

  init() {
    this.updateDateTime();
    this.updateSchedule();
    this.setupEventListeners();
  }

  updateDateTime() {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];

    // Find current day in calendar data
    const todayData = CALENDAR_DATA.find(
      (item) => item.date === currentDate
    ) || {
      day: now.toLocaleDateString("en-US", { weekday: "long" }),
      workingDay: "-",
      status: "Working",
      remarks: "",
    };

    // Update DOM
    document.getElementById("currentDate").textContent = now.toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
    document.getElementById("currentDay").textContent = todayData.day;

    // Update working day badge
    const badge = document.getElementById("workingDayBadge");
    if (todayData.status === "Holiday") {
      badge.classList.add("holiday-badge");
      badge.innerHTML = `
            <i class="fas fa-calendar-times"></i>
            <span>${todayData.remarks || "Holiday"}</span>
        `;
    } else {
      badge.classList.remove("holiday-badge");
      badge.innerHTML = `
            <i class="fas fa-calendar-day"></i>
            <span>Working Day ${todayData.workingDay}</span>
        `;
    }

    // Update status indicator
    this.updateStatusIndicator();
  }

  updateStatusIndicator() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;

    const indicator = document.getElementById("statusIndicator");
    const isWorkingHours = currentTime >= 540 && currentTime <= 945; // 9:00 AM to 3:45 PM

    indicator.classList.toggle("active", isWorkingHours);
    indicator.classList.toggle("inactive", !isWorkingHours);
  }

  updateSchedule() {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const todayData = CALENDAR_DATA.find((item) => item.date === currentDate);

    const scheduleGrid = document.getElementById("scheduleGrid");

    if (!todayData || todayData.status === "Holiday") {
      scheduleGrid.innerHTML = this.generateNoClassesHTML(todayData?.remarks);
      return;
    }

    const schedules = CLASS_SCHEDULES[todayData.workingDay] || [];
    scheduleGrid.innerHTML = schedules
      .map((schedule) => this.generateScheduleCardHTML(schedule))
      .join("");
  }

  generateScheduleCardHTML(schedule) {
    return `
        <div class="schedule-card">
            <div class="schedule-time">
                <i class="far fa-clock"></i>
                <span>${schedule.time}</span>
            </div>
            <h3 class="schedule-subject">${schedule.subject}</h3>
            <p class="schedule-details">${schedule.room}</p>
            <div class="schedule-instructor">
                <div class="instructor-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <span>${schedule.instructor}</span>
            </div>
        </div>
    `;
  }

  generateNoClassesHTML(reason) {
    return `
        <div class="no-classes animate__animated animate__fadeIn">
              <i class="fas fa-coffee"></i>
              <h3>No Classes Today</h3>
              <p>${reason}</p>
              <p>Enjoy your break! 😉</p>
          </div>
    `;
  }

  setupEventListeners() {
    // Update every minute
    setInterval(() => {
      this.updateDateTime();
      this.updateStatusIndicator();
    }, 60000);
  }
}

// Initialize the calendar when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new AcademicCalendar();
});

// Image slider
class GallerySlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [
      {
        image:
          "https://storage.googleapis.com/a1aa/image/0dd95d03-1da6-4ec6-9c0e-8210b8f6ab01.jpeg",
        title: "Campus Life",
        description: "Exploring the vibrant academic atmosphere",
      },
      {
        image:
          "https://storage.googleapis.com/a1aa/image/cf6319ed-bb8f-479a-a7a4-cbfe39a0563c.jpeg",
        title: "Research Excellence",
        description: "Advancing knowledge through innovation",
      },
      {
        image: "https://source.unsplash.com/1600x900/?library,study",
        title: "Learning Spaces",
        description: "Modern facilities for modern education",
      },
      {
        image: "https://source.unsplash.com/1600x900/?graduation,ceremony",
        title: "Academic Success",
        description: "Celebrating achievements and milestones",
      },
    ];

    this.track = document.getElementById("galleryTrack");
    this.dotsContainer = document.getElementById("galleryDots");
    this.init();
  }

  init() {
    // Create slides
    this.createSlides();

    // Create dots
    this.createDots();

    // Add event listeners
    document
      .querySelector(".gallery-button.prev")
      .addEventListener("click", () => this.prevSlide());
    document
      .querySelector(".gallery-button.next")
      .addEventListener("click", () => this.nextSlide());

    // Auto advance slides
    this.startAutoAdvance();

    // Pause auto-advance on hover
    const slider = document.getElementById("gallerySlider");
    slider.addEventListener("mouseenter", () => this.pauseAutoAdvance());
    slider.addEventListener("mouseleave", () => this.startAutoAdvance());
  }

  createSlides() {
    this.slides.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = "gallery-slide";
      slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" class="gallery-image">
            <div class="gallery-content">
                <h3>${slide.title}</h3>
                <p>${slide.description}</p>
            </div>
        `;
      this.track.appendChild(slideElement);
    });
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `gallery-dot${index === 0 ? " active" : ""}`;
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  updateDots() {
    const dots = this.dotsContainer.children;
    Array.from(dots).forEach((dot, index) => {
      dot.className = `gallery-dot${
        index === this.currentSlide ? " active" : ""
      }`;
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.track.style.transform = `translateX(-${index * 100}%)`;
    this.updateDots();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  startAutoAdvance() {
    this.autoAdvance = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoAdvance() {
    clearInterval(this.autoAdvance);
  }
}

// Create the popup style
const style = document.createElement("style");
style.textContent = `
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: none;
        z-index: 999;
    }

    .popup-notification {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 30px 40px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: none;
        width: 90%;
        max-width: 500px;
        animation: slideIn 0.6s ease-out;
    }

    .calendar-ended-message {
        text-align: center;
    }

    .calendar-ended-message i {
        font-size: 48px;
        color: #e74c3c;
        margin-bottom: 20px;
    }

    .calendar-ended-message h2 {
        color: #2c3e50;
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .calendar-ended-message p {
        color: #34495e;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .period-info {
        background: #f8f9fa;
        padding: 12px;
        border-radius: 8px;
        margin: 15px 0;
        border: 1px solid #e9ecef;
    }

    .contact-btn {
        background: #3498db;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 25px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 20px;
        font-weight: 500;
    }

    .contact-btn:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
    }

    @keyframes slideIn {
        0% {
            transform: translate(-50%, -60%);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Create overlay
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Create popup element
const popup = document.createElement("div");
popup.className = "popup-notification";
popup.innerHTML = `
    <div class="calendar-ended-message">
        <i class="fas fa-calendar-times"></i>
        <h2>Academic Calendar Has Ended</h2>
        <p>No schedules available.</p>
        <p class="period-info">Academic calendar period: January 20, 2025 - May 11, 2025</p>
        <button class="contact-btn" onclick="handleContact()">Contact Us</button>
    </div>
`;
document.body.appendChild(popup);

// Contact button handler
function handleContact() {
  window.location.href = "/contact"; // Replace with your contact page URL
}

// Function to show popup and overlay
function showPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";

  setTimeout(() => {
    hidePopup();
  }, 10000); // Show for 10 seconds
}

// Function to hide popup and overlay
function hidePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";

  setTimeout(() => {
    showPopup();
  }, 5000); // Hide for 5 seconds
}

// Function to check date and start popup loop
function startPopupLoop() {
  const targetDate = new Date("2025-01-24T00:00:00");
  const now = new Date();

  if (now >= targetDate) {
    // Initial delay of 3 seconds when user first visits
    setTimeout(() => {
      showPopup();
    }, 3000);
  } else {
    // If it's not time yet, check again in a minute
    setTimeout(startPopupLoop, 60000);
  }
}

// Function to handle escape key press
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    hidePopup();
  }
}

// Add event listeners
document.addEventListener("keydown", handleEscapeKey);
window.addEventListener("load", startPopupLoop);

// Optional: Add click outside to close
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hidePopup();
  }
});

// Initialize Gallery Slidera
document.addEventListener("DOMContentLoaded", () => {
  new GallerySlider();
  new ThemeManager();
});
