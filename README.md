# Landing4HR

This project is a modern web-based platform that focuses on recruitment and HR strategies using the latest digital tools and animations for a dynamic user experience. It integrates GSAP animations, a Contact Form powered by EmailJS, and a visually interactive Globe to illustrate the global reach of the recruitment system.

Link: https://aitishnitsa.github.io/landing4hr/

## Features

- Animated Globe Interaction: A rotating globe showcases the platform's international reach, which animates in from the right side of the screen on load.
- Dynamic GSAP Animations: Smooth animations for displaying recruitment stats, testimonials, and content using GSAP (GreenSock Animation Platform).
- Context-Based Contact Form: A form powered by EmailJS for handling inquiries, displayed dynamically using React’s Context API.
- Responsive Design: Fully responsive, supporting both desktop and mobile views with dynamic adjustments in the layout.

## Technologies Used

- React: Core library for building the interactive user interface.
- GSAP: For smooth animations and transitions across the page.
- React Globe: A globe visualization for showcasing global reach.
- EmailJS: Allows sending email messages through the contact form without a backend.
- Tailwind CSS: For responsive and utility-first styling.
- Lenis: For smooth scrolling effects.

## Installation

1. Clone the repository:

```
git clone https://github.com/Aitishnitsa/landing4hr.git
```

2. Install dependencies:

```
npm install
```

3. Configure the .env file with your EmailJS credentials:

```
REACT_APP_SERVICE_ID=your_service_id
REACT_APP_TEMPLATE_ID=your_template_id
REACT_APP_PUBLIC_KEY=your_public_key
```

4. Start the development server:

```
npm start
```
