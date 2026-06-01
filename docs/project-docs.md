GLAMOUR MAKEOVER — Project Documentation
Cinematic 3D Portfolio Website for Rupali Zine

1. BRIEF (One-Paragraph Pitch)
Glamour Makeover is a dark, cinematic, and highly immersive portfolio website for Rupali Zine, a certified airbrush makeup artist and hairstylist based in Ahillyanagar. The site uses rich dark tones, gold accents, and embedded 3D cinematic experiences to create a luxurious, high-fashion atmosphere that feels like an editorial fashion film. Visitors can explore her work, understand her artistic philosophy, and book their special day through a seamless, premium digital experience.

2. PRD (Product Requirements Document)
User Personas
Persona	Description	Goals	Pain Points
Bride-to-be (Priya)	26–32 years old, planning her wedding	Wants to feel confident and look flawless on her big day	Overwhelmed by too many makeup artists, wants to see real work
Event Host (Ananya)	Planning engagement or special event	Looking for premium, reliable artist	Needs to quickly understand credibility and style
Curious Explorer	Scrolling Instagram or Google	Wants inspiration and to discover local talent	Wants a visually rich, scroll-stopping experience

User Journey
Land on homepage → Dramatic cinematic hero
Scroll to understand the artist → About section
Experience the 3D cinematic moment → Interactive 3D section
View signature work → High-quality gallery
Understand credibility → Experience & certification
Book or connect → WhatsApp / Instagram / Contact

Feature Requirements
Cinematic dark luxury visual language
Embedded Spline 3D scene (makeup brush / product / artistic element)
Smooth scroll experience
Fully responsive (mobile-first)
Direct WhatsApp booking
Instagram integration
Location with Google Maps
Subtle cinematic animations
Background music (optional toggle)

3. TRD (Technical Requirements Document)
Tech Stack
Category	Technology	Reason
Frontend	HTML + Tailwind CSS	Fast, beautiful, fully controllable
3D	Spline (embedded)	Best cinematic 3D experience with low code
Animations	Tailwind + CSS transitions + AOS (optional)	Smooth and lightweight
Audio	Howler.js	Professional audio control
Deployment	Vercel	Free, fast, automatic deploys
Version Control	Git + GitHub	Best practice

File Structure
glamour-makeover/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   ├── main.js
│   └── audio.js
├── assets/
│   ├── images/
│   └── spline-scenes/
├── docs/
│   └── project-docs.md
└── README.md

Critical Technical Decisions
Use Spline instead of Three.js for faster cinematic results
Single-file approach initially (index.html) for speed, then modularize
All images will be optimized (WebP where possible)
Dark theme only (no light mode)
Mobile-first responsive design

Development Phases
Phase	Focus	Deliverable
Phase 1	Core structure + Design System	Dark cinematic HTML skeleton
Phase 2	3D Integration	Spline scene embedded
Phase 3	Content & Polish	All copy, gallery, animations
Phase 4	Audio	Howler.js background music
Phase 5	Deployment	Live on Vercel

4. Design System
Colors
Token	Hex	Usage
--bg-primary	#0A0A0A	Main background
--bg-secondary	#111111	Cards & sections
--accent-gold	#C9A88C	Primary accent, buttons, highlights
--text-primary	#EDEDED	Main text
--text-secondary	#A1A1A1	Subtle text
--border	#2A2A2A	Dividers and cards

Typography
Headings: Playfair Display (700)
Body: Inter (300/400/500)
Tracking: Headings use -3px to -6px

Spacing
Base unit: 8px
Section padding: 120px (desktop), 80px (mobile)
Card padding: 36px

Animation Principles
Duration: 400ms–700ms
Easing: cubic-bezier(0.23, 1, 0.32, 1)
Subtle scale + translate on hover
Smooth scroll behavior

5. User Flow Diagram
[Open Website]
        ↓
[Cinematic Hero]
        ↓
[Scroll → About the Artist]
        ↓
[3D Cinematic Experience]
        ↓
[Signature Work Gallery]
        ↓
[Credibility (4 Years + Certification)]
        ↓
[Connect / Book]
        ↓
[WhatsApp / Instagram / Maps]

6. Component Inventory
Component	File Path	Status
Navbar	index.html	Ready
Hero Section	index.html	Ready
About Section	index.html	Ready
3D Cinematic Section	index.html	Placeholder
Gallery	index.html	Placeholder images
Experience Cards	index.html	Ready
Contact Section	index.html	Ready
Footer	index.html	Ready

7. Content Copy
Hero
Headline: GLAMOUR MAKEOVER
Subheadline: Airbrush Makeup Artist & Hairstylist

About
"A certified airbrush makeup artist and hairstylist with 4 years of experience creating unforgettable transformations."
"Trained under the renowned Rohini Kakde, Rupali brings technical precision and artistic vision to every face she touches."

Experience Cards
04 — Years of Mastery
01 — Certification (Rohini Kakde)
∞ — Personalized Approach

Contact
Phone: 92841 97003
Location: Rasne Nagar, Behind Daule Hospital, Ahillyanagar
Instagram: @rupali_zine_makeup_artist

8. Audio Plan
Recommended Free Sources
Pixabay Music (royalty-free)
Epidemic Sound (free trial)
YouTube Audio Library (Cinematic / Ambient)

Implementation
Use Howler.js for background music
Add a subtle toggle (sound on/off) in the navbar
Music should be low-volume ambient cinematic track
Autoplay with user interaction (browser policy)

9. Deployment Plan
Vercel Setup
Push code to GitHub
Import repository on Vercel
Deploy automatically on every push
Custom domain (optional later)

Recommended Workflow
Main branch = Production
Use feature branches for big changes
Preview deployments for every PR

10. Success Criteria
"Done" looks like:
 Dark cinematic luxury aesthetic fully implemented
 Real Spline 3D scene embedded and working smoothly
 All content (copy, images, details) replaced with final assets
 Background music with toggle working via Howler.js
 Fully responsive on mobile, tablet, and desktop
 WhatsApp booking, Instagram, and Maps links functional
 Site deployed live on Vercel
 Loads fast (< 3 seconds on 4G)
 Feels premium and high-fashion when viewed
Status: Documentation complete. Ready to proceed with development.
