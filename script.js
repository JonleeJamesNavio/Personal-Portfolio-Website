// Projects data
const projects = [
  {
    title: "Automated Daily Ad Campaign Data Processing & Reporting System",
    description:
      "An automated system that extracts, processes, and reports Facebook/Meta ad campaign data daily. It saves 5–8 staff hours weekly, removes human error, and provides real-time insights.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Monday.com", icon: "assets/images/Monday.com-Logo.wine.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
      },
    ],
    images: [
      "assets/projects/liberty.png",
      "assets/projects/Liberty1.png",
      "assets/projects/Liberty2.png",
    ],
  },
  {
    title: "Oas Volleyball Alliance Messenger Assistant",
    description:
      "Saved time and improved communication quality by automating replies, organizing conversations, and logging messages into structured records.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
      },
    ],
    images: [
      "assets/projects/ova.png",
      "assets/projects/ova1.png",
      "assets/projects/ova2.png",
      "assets/projects/ova3.png",
      "assets/projects/ova4.png",
    ],
  },
  {
    title:
      "Manage Calendar with Voice & Text using GPT-4, Telegram & Google Calendar",
    client: "Personal Productivity Tool",
    description:
      "Accepts voice or text via Telegram to create, update, and delete Google Calendar events intelligently with GPT-4.",
    images: [],
  },
  {
    title: "Automated Email Filtering & AI Summarization",
    client: "Productivity Enhancement",
    description:
      "Intelligent email filtering system that categorizes, prioritizes, and summarizes emails for quick inbox management.",
    images: [],
  },
  {
    title: "Expense Tracking System with Telegram, OpenAI & Google Sheets",
    description:
      "Reduced manual expense tracking and errors by automating Telegram-based transaction logging with real-time confirmations.",
    TechStack: [
      { name: "Make.com", icon: "assets/images/make-color.webp" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
      },
    ],
    images: [
      "assets/projects/image.png",
      "assets/projects/ExpenseT.png",
      "assets/projects/ExpenseTr.png",
    ],
  },
  {
    title:
      "AI-Powered Food Order Processing with Facebook Messenger, Telegram, Google Sheets & Calendar",
    description:
      "Transformed manual order processing into an automated system that handles customer inquiries, validates business hours and inventory, and maintains organized order records with instant staff notifications.",
    TechStack: [
      { name: "n8n", icon: "assets/images/n8n-color.webp" },
      { name: "Messenger", icon: "assets/images/messenger.svg" },
      { name: "Telegram", icon: "assets/images/telegram.svg" },
      { name: "Google Sheets", icon: "assets/images/googlesheet.svg" },
      { name: "Meta API", icon: "assets/images/meta.webp" },
      { name: "Claude AI", icon: "assets/images/claude-color.webp" },
      {
        name: "OpenAI",
        icon: "https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png",
      },
    ],
    images: [
      "assets/projects/Food.png",
      "assets/projects/Food I.png",
      "assets/projects/Food II.png",
      "assets/projects/Food III.png",
    ],
  },
];

let currentSlideIndex = 0;

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    document.getElementById("navMenu").classList.remove("active");
  });
});

// Navbar active state on scroll
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Fade-in animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
document
  .querySelectorAll("section")
  .forEach((section) => observer.observe(section));

// Modal functions
function openModal(index) {
  const modal = document.getElementById("projectModal");
  const project = projects[index];

  document.getElementById("modalTitle").textContent = project.title;

  // Render TechStack icons
  const techContainer = document.getElementById("modalClient");
  techContainer.innerHTML = "";

  if (project.TechStack && project.TechStack.length > 0) {
    // Add "Tech Stack" label
    const title = document.createElement("h4");
    title.textContent = "Tech Stack:";
    title.className = "tech-stack-title";
    techContainer.appendChild(title);

    // Create icons wrapper
    const stackWrapper = document.createElement("div");
    stackWrapper.className = "tech-stack";

    project.TechStack.forEach((tech) => {
      const item = document.createElement("div");
      item.className = "tech-item";

      const img = document.createElement("img");
      img.src = tech.icon || "";
      img.alt = tech.name;
      img.title = tech.name;
      img.className = "tech-icon";

      const label = document.createElement("span");
      label.textContent = tech.name;
      label.className = "tech-label";

      item.appendChild(img);
      item.appendChild(label);
      stackWrapper.appendChild(item);
    });

    techContainer.appendChild(stackWrapper);
  }

  document.getElementById("modalDescription").textContent = project.description;

  // Slideshow
  const slideshowInner = document.getElementById("slideshowInner");
  const slideshowContainer = document.getElementById("modalSlideshow");
  slideshowInner.innerHTML = "";

  if (project.images && project.images.length > 0) {
    slideshowContainer.style.display = "block";
    currentSlideIndex = 0;
    project.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${project.title} screenshot ${i + 1}`;
      img.className = "slideshow-image" + (i === 0 ? " active" : "");
      slideshowInner.appendChild(img);
    });
  } else {
    slideshowContainer.style.display = "none";
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeSlide(direction) {
  const images = document.querySelectorAll(".slideshow-image");
  if (images.length === 0) return;
  images[currentSlideIndex].classList.remove("active");
  currentSlideIndex =
    (currentSlideIndex + direction + images.length) % images.length;
  images[currentSlideIndex].classList.add("active");
}

function closeModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

document.getElementById("projectModal").addEventListener("click", (e) => {
  if (e.target.id === "projectModal") closeModal();
});

function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for your message! I will get back to you soon.");
  event.target.reset();
}

window.addEventListener("load", () => {
  document.getElementById("hero").classList.add("visible");
});
