# Build a Modern Static Digital Marketing & Software Solutions Website

Create a **modern, premium, attractive and fully responsive static company website** for a company that provides digital marketing and software development solutions.

The website is **frontend-only**.

There must be:

* No backend
* No database
* No API
* No authentication
* No mock API
* No server-side functionality

Everything should be implemented as a static React website.

---

## 1. TECHNOLOGY

Use only:

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Lucide React Icons

Keep dependencies minimal.

Use clean, reusable React components.

Use strict TypeScript.

---

# 2. COMPANY POSITIONING

The company provides:

### Digital Marketing

* SEO
* Social Media Marketing
* Google Ads
* Meta Ads
* Content Marketing
* Lead Generation
* Marketing Strategy

### Website Development

* Corporate Websites
* Landing Pages
* Business Websites
* Portfolio Websites

### E-commerce Development

* Online Stores
* Product Management
* Shopping Cart
* Checkout
* Payment Gateway Integration
* Order Management

### ERP Solutions

* Inventory
* Sales
* Purchase
* Finance
* HR
* Reports
* Business Operations

### CRM Solutions

* Leads
* Customers
* Sales Pipeline
* Follow-ups
* Customer Management
* Reports

### Custom Software

* Business Automation
* Custom Dashboards
* Internal Business Applications
* API Integration
* Workflow Automation

### Other Technology Services

* Mobile App Development
* UI/UX Design
* Cloud Solutions
* DevOps
* IT Consulting

---

# 3. IMPORTANT — STATIC WEBSITE ONLY

Do NOT create:

* API services
* Backend services
* Database
* Authentication
* Login
* Registration
* Admin dashboard
* API calls
* Axios
* Fetch requests
* Mock API
* Fake API responses

Forms should be **frontend-only**.

When a user submits a form:

1. Validate the fields.
2. Display a success message.
3. Do not send data anywhere.

Clearly structure the form so backend integration can be added later if required.

---

# 4. WEBSITE PAGES

Create these routes:

/

/about

/services

/services/digital-marketing

/services/website-development

/services/ecommerce-development

/services/erp-solutions

/services/crm-solutions

/services/custom-software

/portfolio

/careers

/contact

/privacy-policy

/terms

---

# 5. HEADER / NAVBAR

Create a premium sticky navbar.

Desktop:

Logo / Company Name

Home
About
Services
Portfolio
Careers
Contact

CTA button:

"Get Free Consultation"

Navbar requirements:

* Sticky
* Transparent/blurred initially
* Slight shadow when scrolling
* Smooth transitions
* Mobile responsive
* Hamburger menu on mobile
* Mobile menu should animate smoothly

---

# 6. HERO SECTION

Create a visually impressive hero.

Main headline:

"Digital Growth Meets Powerful Technology"

Supporting text:

"We help businesses grow with digital marketing, modern websites, e-commerce platforms, ERP, CRM and custom software solutions."

Buttons:

"Get Free Consultation"

"Explore Our Services"

Hero visual:

Create a modern technology-style visual using CSS/UI cards.

Show small floating cards such as:

"Revenue Growth"

"New Customers"

"Marketing Analytics"

"Automation"

"Business Dashboard"

Use subtle floating animations.

Do not use heavy 3D libraries.

---

# 7. TRUST / STATS SECTION

Create a clean stats section.

Example:

100+
Projects Delivered

50+
Businesses Supported

10+
Technology Solutions

24/7
Support

IMPORTANT:

Treat these as demo/configurable values.

Keep them in a centralized data file so they can easily be changed.

---

# 8. ABOUT SECTION

Create a professional section:

Heading:

"Your Technology Partner for Digital Growth"

Explain that the company combines:

* Digital marketing
* Software development
* Business automation
* Technology consulting

to help businesses establish a strong digital presence and improve their operations.

Add:

Mission
Vision
Values

Values:

Innovation
Quality
Transparency
Customer First
Security
Long-Term Partnership

CTA:

"Learn More About Us"

---

# 9. SERVICES SECTION

Create a premium responsive service-card grid.

Cards:

### Digital Marketing

Grow your online visibility, traffic and leads through strategic digital marketing.

### Website Development

Fast, modern and SEO-friendly websites designed to convert visitors into customers.

### E-commerce Development

Scalable online stores with modern shopping experiences.

### ERP Solutions

Manage inventory, sales, purchasing, finance and business operations.

### CRM Solutions

Manage leads, customers, sales pipelines and relationships.

### Custom Software

Software designed specifically around your business requirements.

### Mobile App Development

Modern mobile applications for Android and iOS.

### UI/UX Design

Simple, modern and conversion-focused digital experiences.

Each card must have:

* Icon
* Service name
* Description
* Learn More button
* Hover animation

---

# 10. SERVICE DETAIL PAGES

Create individual static pages.

Example:

/services/digital-marketing

Each page should contain:

Hero

Problem

Solution

Key Features

Benefits

Our Process

Technology

FAQ

CTA

Create reusable ServiceDetail component.

Store service information in:

src/data/services.ts

Do not duplicate the same layout for every service.

---

# 11. WHY CHOOSE US

Create a visually attractive section.

Cards:

### Business-Focused

We understand the business requirement before designing the solution.

### Modern Technology

Use modern technologies and development practices.

### Scalable Solutions

Solutions are designed to grow with your business.

### Security First

Security is considered throughout the development process.

### Performance

Fast and optimized digital experiences.

### Long-Term Partnership

Support and continuous improvement.

---

# 12. OUR PROCESS

Create an attractive horizontal/vertical timeline.

Steps:

01 — Discover

02 — Plan

03 — Design

04 — Develop

05 — Test

06 — Launch

07 — Support

Use connecting lines and subtle animations.

---

# 13. TECHNOLOGY SECTION

Show technologies as modern badges/cards.

Frontend:

React
Angular
Next.js
HTML
CSS
Tailwind CSS

Backend:

Node.js
Express
NestJS

Database:

MongoDB
PostgreSQL
MySQL

Cloud:

AWS
Docker
CI/CD

Marketing:

SEO
Google Ads
Meta Ads
Analytics

Keep this section visually clean.

---

# 14. PORTFOLIO

Create:

/portfolio

Show project cards.

Each card:

Project image/mockup
Project name
Category
Description
Technology tags
View Project button

Categories:

Website
E-commerce
ERP
CRM
Custom Software
Digital Marketing

Add frontend-only category filtering.

Use demo projects.

Clearly structure the data so real projects can replace them later.

---

# 15. CAREERS

Create:

/careers

Hero:

"Build the Future With Us"

Show job cards:

Frontend Developer
Backend Developer
Full Stack Developer
UI/UX Designer
SEO Specialist
Digital Marketing Executive
Sales Executive

Each card:

Job title
Experience
Location
Employment type
Skills
Description

Button:

"Apply Now"

When clicked, scroll/open a frontend-only application form.

Form:

Name
Email
Phone
Position
Experience
Resume
Message

Do not upload the resume anywhere.

For the resume field, simply allow file selection and display the selected filename.

On submit:

* Validate
* Show success message
* Do not send data anywhere

---

# 16. CONTACT PAGE

Create:

/contact

Contact form:

Name
Email
Phone
Company
Service
Budget
Message

Service options:

Digital Marketing
Website Development
E-commerce Development
ERP
CRM
Custom Software
Mobile App
Other

Budget:

Under ₹25,000
₹25,000 – ₹50,000
₹50,000 – ₹1,00,000
₹1,00,000+
Not Sure

Frontend validation:

* Required fields
* Email validation
* Phone validation
* Minimum/maximum length
* User-friendly error messages

On submit:

Show:

"Thank you! Your inquiry has been submitted successfully."

Do not send data to a server.

---

# 17. WHATSAPP BUTTON

Create a floating WhatsApp button on every page.

Position:

bottom-right.

When clicked, directly open WhatsApp.

Use:

https://wa.me/<WHATSAPP_NUMBER>?text=<ENCODED_MESSAGE>

Create configuration:

VITE_WHATSAPP_NUMBER

Example message:

"Hello, I would like to know more about your digital marketing and software development services."

The phone number must be configurable.

Add:

aria-label="Chat with us on WhatsApp"

Add tooltip:

"Chat with us on WhatsApp"

---

# 18. INSTAGRAM

Add Instagram icon in:

* Footer
* Contact section
* Social links

Use:

VITE_INSTAGRAM_URL

When clicked:

Open Instagram in a new tab.

Use:

target="_blank"

and:

rel="noopener noreferrer"

---

# 19. SOCIAL MEDIA

Prepare reusable social links for:

Instagram
Facebook
LinkedIn
YouTube
WhatsApp

Use environment variables.

Only show icons for configured URLs.

---

# 20. FOOTER

Footer should contain:

Company logo/name

Short description

Quick Links:

Home
About
Services
Portfolio
Careers
Contact

Services:

Digital Marketing
Website Development
E-commerce
ERP
CRM
Custom Software

Social icons:

WhatsApp
Instagram
Facebook
LinkedIn
YouTube

Legal:

Privacy Policy
Terms & Conditions

Copyright:

© {currentYear} Company Name. All rights reserved.

---

# 21. DESIGN

The website must look like a **premium modern technology company**.

Design style:

* Modern
* Minimal
* Premium
* Professional
* Futuristic
* Clean
* Conversion-focused

Use:

* Large typography
* Strong headings
* Soft gradients
* Glass effects
* Rounded cards
* Subtle shadows
* Beautiful spacing
* Modern icons
* Smooth animations
* Hover effects

Avoid:

* Excessive animations
* Too many colors
* Cheap-looking gradients
* Cluttered layouts
* Huge unnecessary images

---

# 22. COLOR PALETTE

Use a professional technology palette.

Primary:

Dark navy

Secondary:

Blue / Indigo

Accent:

Cyan / Purple

Background:

White / very light gray

Dark sections:

Near-black / navy

Text:

Dark gray

Maintain strong accessibility contrast.

---

# 23. RESPONSIVE DESIGN

The website must work perfectly on:

320px
375px
390px
414px
768px
1024px
1280px
1440px
1920px

Ensure:

* No horizontal scrolling
* Proper mobile typography
* Responsive cards
* Responsive navigation
* Responsive forms
* Responsive footer
* Responsive hero
* Proper spacing

---

# 24. ANIMATIONS

Use subtle animations.

Examples:

Fade-in
Slide-up
Scale
Hover elevation
Floating cards
Button transitions

Use CSS/Tailwind animations.

Do not add heavy animation libraries unless absolutely necessary.

Respect:

prefers-reduced-motion

---

# 25. SEO

This is a very important requirement.

Implement proper SEO for every page.

Every page should have:

* Unique title
* Meta description
* Canonical URL
* Open Graph tags
* Twitter Card tags

Create reusable SEO component.

Example:

SEO title for homepage:

"Digital Marketing & Software Solutions Company | Company Name"

Create appropriate SEO titles for:

About
Services
Digital Marketing
Website Development
E-commerce
ERP
CRM
Custom Software
Portfolio
Careers
Contact

---

# 26. STRUCTURED DATA

Add JSON-LD structured data where appropriate.

Use:

Organization
WebSite
Service
BreadcrumbList
FAQPage

Do not create fake business information.

Keep company details in:

src/config/company.ts

---

# 27. SITEMAP

Create:

public/sitemap.xml

Include:

/
/about
/services
/services/digital-marketing
/services/website-development
/services/ecommerce-development
/services/erp-solutions
/services/crm-solutions
/services/custom-software
/portfolio
/careers
/contact
/privacy-policy
/terms

---

# 28. ROBOTS.TXT

Create:

public/robots.txt

Allow public pages to be crawled.

---

# 29. ACCESSIBILITY

Follow good accessibility practices.

Implement:

* Semantic HTML
* Proper heading hierarchy
* Keyboard navigation
* Focus states
* aria-labels
* Accessible forms
* Alt text
* Accessible buttons
* Good color contrast
* Skip-to-content link

---

# 30. PERFORMANCE

Optimize the website for Lighthouse.

Target:

Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+

Use:

* Lazy-loaded images
* Optimized images
* WebP/AVIF where possible
* Code splitting
* Lazy-loaded routes
* Minimal dependencies
* Semantic HTML

Avoid unnecessary JavaScript.

---

# 31. SECURITY

Even though this is a static frontend, follow frontend security best practices.

Do not:

* Expose secret API keys
* Store passwords
* Use eval()
* Use dangerouslySetInnerHTML unnecessarily
* Insert unsanitized HTML
* Put private credentials in .env

For external links use:

target="_blank"
rel="noopener noreferrer"

Create:

.env.example

with only public configuration:

VITE_APP_NAME=
VITE_SITE_URL=
VITE_WHATSAPP_NUMBER=
VITE_INSTAGRAM_URL=
VITE_FACEBOOK_URL=
VITE_LINKEDIN_URL=
VITE_YOUTUBE_URL=

---

# 32. PROJECT STRUCTURE

Use:

src/

components/

common/
Button.tsx
SectionHeading.tsx
SEO.tsx
WhatsAppButton.tsx
SocialLinks.tsx

layout/
Navbar.tsx
Footer.tsx
Layout.tsx

home/
Hero.tsx
Stats.tsx
AboutPreview.tsx
ServicesPreview.tsx
WhyChooseUs.tsx
Process.tsx
Technology.tsx
PortfolioPreview.tsx
Testimonials.tsx
FAQ.tsx
CTA.tsx

pages/

Home.tsx
About.tsx
Services.tsx
ServiceDetails.tsx
Portfolio.tsx
Careers.tsx
Contact.tsx
PrivacyPolicy.tsx
Terms.tsx
NotFound.tsx

data/

services.ts
portfolio.ts
jobs.ts
faqs.ts
technologies.ts

config/

company.ts

App.tsx
main.tsx
index.css

---

# 33. CENTRALIZED COMPANY CONFIGURATION

Create:

src/config/company.ts

Example:

export const companyConfig = {
name: "YOUR COMPANY NAME",
tagline: "Digital & Technology Solutions",
website: import.meta.env.VITE_SITE_URL,
whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER,
instagram: import.meta.env.VITE_INSTAGRAM_URL,
facebook: import.meta.env.VITE_FACEBOOK_URL,
linkedin: import.meta.env.VITE_LINKEDIN_URL,
youtube: import.meta.env.VITE_YOUTUBE_URL,
};

Do not invent actual company information.

---

# 34. STATIC FORM BEHAVIOR

All forms must be frontend-only.

Create reusable form components.

Example behavior:

User fills form
↓
Validation
↓
Submit
↓
Show loading state for a short simulated duration
↓
Show success message
↓
Reset form

No API calls.

No database.

No backend.

---

# 35. IMPORTANT — NO FAKE CUSTOMER CLAIMS

Do not create fake:

* Client logos
* Customer names
* Reviews
* Certifications
* Awards
* Revenue
* Project statistics

If demo content is necessary, clearly mark it as:

"Sample Project"

"Demo Content"

or keep content generic.

---

# 36. COMPONENT REUSABILITY

Create reusable:

Button
Container
SectionHeading
ServiceCard
PortfolioCard
JobCard
FAQAccordion
SocialLinks
WhatsAppButton
Breadcrumb
SEO
CTASection

Avoid duplicate code.

---

# 37. 404 PAGE

Create an attractive 404 page.

Heading:

"Oops! Page Not Found"

Description:

"The page you're looking for doesn't exist or may have been moved."

Button:

"Back to Home"

---

# 38. README

Create README.md containing:

Project overview

Technology stack

Installation

Development

Production build

Environment variables

Deployment instructions

SEO configuration

How to change company information

How to change WhatsApp number

How to change Instagram URL

How to add services

How to add portfolio projects

---

# 39. FINAL QUALITY CHECK

Before finishing the project run:

npm install

npm run dev

npm run build

npm run preview

Fix all:

* TypeScript errors
* Build errors
* ESLint errors
* Broken routes
* Broken links
* Console errors

Check manually:

Desktop
Tablet
Mobile

Check:

✓ Navbar
✓ Mobile menu
✓ All routes
✓ Service pages
✓ Portfolio filters
✓ Contact form
✓ Career form
✓ WhatsApp button
✓ Instagram link
✓ Footer
✓ 404 page
✓ SEO metadata
✓ Sitemap
✓ Robots.txt
✓ Responsive layout
✓ Accessibility
✓ Production build

---

# 40. FINAL DESIGN GOAL

The final website should feel like a **premium digital transformation and software solutions company**.

It should communicate:

"WE HELP BUSINESSES GROW THROUGH DIGITAL MARKETING AND TECHNOLOGY."

The website should be:

Modern
Professional
Fast
SEO-friendly
Mobile-first
Accessible
Secure
Easy to maintain
Easy to customize
Conversion-focused

Most importantly:

**KEEP THE IMPLEMENTATION SIMPLE.**

This is a static frontend project.

Do not introduce backend architecture, API architecture, databases, authentication or unnecessary complexity.

Build the complete working React + TypeScript + Vite + Tailwind CSS static website.
