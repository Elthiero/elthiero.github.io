# Portfolio Upgrade Recommendations — Elthiero

## 1. Executive Assessment

The portfolio has a clean foundation, straightforward navigation, and a credible technical stack. The main opportunity is **positioning**.

The current site reads more like a **student portfolio**. The goal should be to reposition it as the portfolio of a **Data Engineer / ML Engineer / Cloud professional with a Master's degree and professional engineering experience**.

### Core positioning

**Recommended headline:**

> Data Engineer | Machine Learning | Cloud

**Recommended supporting stack:**

> Python · SQL · Spark · Kafka · AWS · PostgreSQL · Django · Machine Learning

The portfolio should communicate:

> **I build reliable data systems and machine-learning applications for real-world problems.**

---

# 2. Highest-Priority Changes

## Priority 1 — Update the professional status

If the Master's degree is now completed, remove wording such as:

- "Big Data Analytics Master's student"
- "In Progress"
- "Student Researcher"

Replace it with the current status:

> Master's Degree in Big Data Analytics

The portfolio should always reflect the latest professional stage.

---

## Priority 2 — Remove overly junior positioning

The current CTA emphasizes:

> "Actively seeking Student Researcher and Data Engineering internship opportunities for 2026."

For the current profile, use broader professional positioning:

> **Open to Data Engineering, Machine Learning, and Backend Engineering opportunities.**

This does not prevent internship applications, but it avoids making the entire portfolio look like a student/intern profile.

---

## Priority 3 — Replace weaker featured projects

The current featured projects include:

- Smart Greenhouse Monitoring
- Automated Data Cleaning Pipeline
- Spotify & Netflix User Behavior Analysis

These are useful supporting projects, but they should not dominate the portfolio.

Prioritize projects that demonstrate stronger engineering depth:

1. **Real-Time Fraud Detection Platform**
2. **UNMAPPED — AI / Employment Intelligence**
3. **Rwanda Agri-Food Demand Forecasting & Supply Chain Optimization**
4. **Hybrid Satellite-Terrestrial Flood Forecasting**
5. **Smart Greenhouse Monitoring**

The first four should become the main portfolio story.

---

# 3. Recommended Homepage Structure

Use this structure:

```text
HERO
↓
ABOUT
↓
WHAT I BUILD
↓
FEATURED PROJECTS
↓
EXPERIENCE
↓
EDUCATION & CERTIFICATIONS
↓
TECHNICAL STACK
↓
CONTACT
```

The homepage should be short enough to scan quickly while providing deeper project pages/details for people who want technical information.

---

# 4. Hero Section

## Recommended content

### Name

**Ahourdet Donambi Thierry**

### Main title

**Data Engineer | Machine Learning | Cloud**

### Description

> I build reliable data systems and machine-learning applications that turn complex data into useful, real-world solutions.

### Technology line

> Python · SQL · Spark · Kafka · AWS · PostgreSQL · Django · Machine Learning

### CTAs

- **View Projects**
- **Download CV**

Optional secondary link:

- **GitHub**

---

# 5. About Section

Keep the About section short: approximately 3–5 sentences.

Suggested structure:

> I am a Data Engineer with a Master's degree in Big Data Analytics and professional experience working with data and infrastructure systems. My work combines data engineering, machine learning, cloud technologies, and backend development. I enjoy building end-to-end systems that move from raw data collection and processing to analytics, prediction, APIs, and operational dashboards. My interests include scalable data platforms, applied machine learning, and technology solutions for real-world problems in Africa.

Do not make the About section a long autobiography.

---

# 6. "What I Build" Section

Instead of presenting a large undifferentiated list of technologies, organize capabilities into three areas.

## Data Engineering

> ETL/ELT pipelines, data processing, SQL, distributed systems, Spark, Kafka, data quality, and data workflows.

Technologies:

- Python
- SQL
- PySpark
- Apache Kafka
- Hadoop/HDFS
- PostgreSQL
- MySQL
- Pandas
- ETL/ELT

## Machine Learning

> Predictive modeling, feature engineering, classification, forecasting, model evaluation, and applied machine learning.

Technologies:

- Scikit-learn
- LightGBM
- Pandas
- NumPy
- Statistical Analysis
- Time-Series Forecasting
- Feature Engineering
- Model Evaluation

## Cloud & Backend

> Cloud infrastructure, APIs, backend systems, databases, deployment, and production-oriented applications.

Technologies:

- AWS
- Django
- Django REST Framework
- FastAPI
- PostgreSQL
- MySQL
- Docker
- Linux
- REST APIs

---

# 7. Featured Projects

The project section should be the centerpiece of the portfolio.

Each project should include:

- Project name
- One-sentence problem statement
- Architecture/technology stack
- What you built
- Measurable result or scale where available
- GitHub link
- Live demo where available
- Architecture diagram when useful

Avoid describing projects only as lists of technologies.

---

## Project 1 — Real-Time Fraud Detection Platform

### Positioning

**End-to-end real-time fraud detection system**

### Suggested description

> An enterprise-style fraud detection platform designed to process transaction data, generate machine-learning predictions, and expose operational results through a dashboard.

### Technology stack

- Python
- PySpark
- Apache Kafka
- Scikit-learn / LightGBM
- MySQL / PostgreSQL
- Django
- AWS
- Docker

### Highlight metrics

Where accurate, show:

- 590K+ transaction records
- Streaming architecture
- ML classification
- Batch retraining
- Real-time prediction flow
- Operational dashboard

### Architecture

Show a diagram similar to:

```text
Transaction Data
      │
      ├──────────────┐
      ↓              ↓
 Historical Data   Kafka
      │              │
      ↓              ↓
 Data Lake        Streaming
      │           Processing
      └──────┬───────┘
             ↓
       Feature Engineering
             ↓
        ML Prediction
             ↓
       Database / Storage
             ↓
       Django Dashboard
```

This project should be one of the most prominent projects on the homepage.

---

# 8. Project 2 — UNMAPPED

### Positioning

**AI-powered employment and skills intelligence platform**

### Suggested description

> An AI-powered platform that combines labor-market and economic data with occupational and skills taxonomies to help users understand automation risk, skills requirements, and employment opportunities.

### Technology

- Python
- Streamlit
- GPT-4o-mini
- World Bank WDI
- ILOSTAT
- ESCO
- ISCO-08
- ReportLab

### Highlight capabilities

- Skill mapping
- Occupation mapping
- Automation-risk analysis
- Opportunity matching
- AI-assisted analysis
- PDF report generation
- User and policymaker views

This project demonstrates that you can combine:

**Data Engineering + AI + Research + Product Development**

---

# 9. Project 3 — Rwanda Agri-Food Demand Forecasting

### Suggested title

**Predictive Analytics for Rwanda's Agri-Food Supply Chain**

### Suggested description

> A predictive analytics framework for forecasting agricultural demand and prices and supporting supply-chain planning in Rwanda.

### Possible components

- Agricultural production data
- Market prices
- Weather data
- Trade data
- Time-series forecasting
- Feature engineering
- Demand prediction
- Supply-chain optimization
- Visualization

### Why it belongs on the portfolio

This project connects:

- Data Engineering
- Machine Learning
- Forecasting
- Optimization
- African development
- Real-world business problems

It also aligns naturally with your Master's work.

---

# 10. Project 4 — Hybrid Satellite-Terrestrial Flood Forecasting

### Suggested title

**Hybrid Satellite-Terrestrial Machine Learning Framework for Flood Forecasting**

### Suggested description

> A machine-learning framework combining satellite precipitation data and terrestrial/weather data to support flood forecasting in data-scarce regions.

### Technology

- NASA GPM IMERG
- Open-Meteo
- Google Earth Engine
- Python
- Random Forest
- Time-series validation
- Docker
- FastAPI

### Highlight capabilities

- Satellite data processing
- Data fusion
- Geospatial machine learning
- Time-series validation
- API deployment
- Data-scarce-region modeling

This is a distinctive project and can help differentiate the portfolio from generic data-analysis portfolios.

---

# 11. Project 5 — Smart Greenhouse Monitoring

Keep this project as a supporting project.

### Suggested positioning

**IoT Monitoring & Cloud Dashboard**

### Technology

- Django 5
- Django REST Framework
- AWS RDS
- MySQL
- Chart.js
- Email alerts

Emphasize the architecture and cloud/backend aspects rather than treating it as another generic dashboard.

---

# 12. What to Do With Smaller Projects

Smaller projects such as:

- Spotify Streaming History
- Cafe Sales Analysis
- Domain Lookup Tool
- Basic data-cleaning projects

should not disappear.

Move them into a secondary section:

## More Projects

Use compact cards with:

- Name
- One-line description
- Technology
- GitHub

This keeps the portfolio comprehensive without weakening the main story.

---

# 13. Project Card Design

Each featured project card should answer four questions quickly:

### 1. What problem did you solve?

Example:

> Detect potentially fraudulent financial transactions in a streaming environment.

### 2. What did you build?

Example:

> A streaming ML pipeline with Kafka, PySpark, a prediction service, database storage, and an operational dashboard.

### 3. What technology did you use?

Example:

> Python · PySpark · Kafka · LightGBM · MySQL · Django · AWS

### 4. What was the result?

Use real measurements wherever possible.

Examples:

> 590K+ transactions processed

> 65% recall for the positive fraud class

> Automated model retraining pipeline

Only use numbers that can be verified from the project.

---

# 14. Add Architecture Diagrams

Architecture diagrams are one of the best ways to make the portfolio look more engineering-focused.

For major projects, show:

```text
Data Sources
     ↓
Ingestion
     ↓
Storage
     ↓
Processing
     ↓
Feature Engineering
     ↓
Machine Learning
     ↓
API / Database
     ↓
Dashboard / Application
```

Do not put huge diagrams directly on the homepage.

Use a compact diagram preview with an option to view the detailed architecture.

---

# 15. Technical Skills Section

The current portfolio gives too much visual weight to every technology.

Prioritize skills according to the roles you want.

## Tier 1 — Core

- Python
- SQL
- PySpark
- Apache Kafka
- PostgreSQL
- AWS
- Machine Learning
- Docker
- Linux

## Tier 2 — Strong supporting skills

- Django
- Django REST Framework
- FastAPI
- Pandas
- NumPy
- Scikit-learn
- LightGBM
- MySQL
- Hadoop/HDFS
- Git

## Tier 3 — Supporting technologies

- R
- JavaScript
- HTML/CSS
- Chart.js
- Tailwind CSS
- Bootstrap
- HTMX
- SQLAlchemy

This hierarchy makes your target role obvious.

---

# 16. Reduce the Soft Skills Section

The current portfolio gives significant space to:

- Communication
- Collaboration
- Problem Solving
- Time Management
- Proactivity

These are difficult to prove through a portfolio.

Instead, demonstrate them through projects.

For example:

Instead of:

> Problem Solving — Structured, first-principles approach.

Show:

> Faced severe class imbalance in fraud detection → engineered features → evaluated precision/recall → optimized for fraud recall.

The evidence is more persuasive than the label.

Keep:

### Languages

- English
- French

Bilingual ability is relevant and concrete.

---

# 17. Add Professional Experience

The portfolio should have a concise experience section.

For each role:

### Company

**Position**

**Dates**

Then 2–4 achievement-oriented bullets.

For example, for network/data infrastructure work:

- Monitored critical network KPIs and infrastructure systems.
- Investigated service anomalies and escalated L2/L3 incidents.
- Worked within a 24/7 operations environment.
- Supported system reliability and data-flow monitoring.

Focus on outcomes and technical responsibility rather than generic job descriptions.

---

# 18. Education & Certifications

## Education

### Master's Degree in Big Data Analytics

Adventist University of Central Africa (AUCA)

Include:

- Relevant coursework
- Thesis/project
- Key technical areas

### Bachelor's Degree in Information Technology

Major: Networks and Communication Systems

Adventist University of Central Africa (AUCA)

---

## Certifications

Only display relevant and verified certifications.

Potential categories include:

- AWS
- Google
- Cisco
- Security
- Cloud

Use logos sparingly.

Do not turn the section into a wall of certification badges.

---

# 19. GitHub Integration

Every major project should have:

**View GitHub →**

The GitHub repository should contain:

- Clear README
- Architecture diagram
- Setup instructions
- Dataset/source information
- Methodology
- Results
- Screenshots
- API documentation where relevant
- Limitations
- Future improvements

The portfolio should act as the **front door**, while GitHub contains the technical evidence.

---

# 20. Live Demos

Where possible, provide:

**Live Demo**

For example:

- Streamlit application
- API documentation
- Dashboard
- Deployed web application

If a project is not deployed, do not create a fake demo button.

Use:

> GitHub Repository

instead.

---

# 21. Add a Case-Study View

For the strongest projects, clicking the project should open a detailed case study.

Recommended structure:

```text
Project Overview
↓
Problem
↓
Data
↓
Architecture
↓
Methodology
↓
Implementation
↓
Results
↓
Challenges
↓
Lessons Learned
↓
Future Improvements
↓
GitHub / Demo
```

This is much stronger than a simple project screenshot.

---

# 22. Add Measurable Results

Whenever possible, quantify your work.

Examples:

- Dataset size
- Number of transactions
- Processing time
- Model accuracy
- Precision
- Recall
- F1 score
- API latency
- Number of records processed
- Data reduction after cleaning
- Pipeline execution time

Do not manufacture metrics.

Only display numbers that can be reproduced or verified.

---

# 23. Design Recommendations

The existing visual design is already clean.

Do **not** redesign everything just for the sake of redesigning it.

Focus on:

- Stronger typography hierarchy
- More whitespace
- Clear project cards
- Better project screenshots
- Architecture previews
- Consistent buttons
- Strong mobile responsiveness
- Subtle animations

Avoid:

- Excessive animations
- Huge skill clouds
- Too many gradients
- Excessive icons
- Autoplay video
- Decorative elements that compete with the content

The goal is:

> **Minimal, technical, professional.**

---

# 24. Recruiter UX

A recruiter should understand your profile in approximately 10–20 seconds.

The first screen should communicate:

1. Who you are
2. What role you target
3. What technologies you work with
4. What your strongest projects are
5. How to contact you

The recruiter should not need to read the entire website to understand this.

---

# 25. Recommended Navigation

Keep navigation simple:

```text
Home
Projects
Experience
About
Resume
Contact
```

Optional:

```text
GitHub
LinkedIn
```

Do not create too many navigation categories.

---

# 26. Contact Section

Use a strong but simple CTA.

Example:

> **Let's build something useful with data.**

Then provide:

- Email
- LinkedIn
- GitHub
- Kigali, Rwanda

Avoid unnecessary contact forms unless they are actually functional.

---

# 27. SEO

Add a strong page title:

> Ahourdet Donambi Thierry | Data Engineer | Machine Learning | Cloud

Meta description:

> Portfolio of Ahourdet Donambi Thierry, a Data Engineer specializing in Python, SQL, Spark, Kafka, AWS, machine learning, and data-intensive applications.

Also add:

- Open Graph metadata
- Twitter/X metadata
- Canonical URL
- Favicon
- Structured data where appropriate

Use meaningful project titles and descriptions.

---

# 28. Accessibility

Make sure the site has:

- Good color contrast
- Keyboard navigation
- Alt text for images
- Proper heading hierarchy
- Visible focus states
- Accessible buttons
- Readable font sizes
- Reduced-motion support

Do not sacrifice accessibility for visual effects.

---

# 29. Mobile Experience

Test the portfolio on:

- Desktop
- Tablet
- Mobile

Especially verify:

- Hero text
- Navigation
- Project cards
- Architecture diagrams
- Code blocks
- Buttons
- Contact information

Architecture diagrams should be responsive or scrollable rather than being squeezed into unreadable thumbnails.

---

# 30. Recommended Portfolio Identity

The overall brand should communicate:

### Primary identity

**Data Engineer**

### Secondary identity

**Machine Learning / AI**

### Supporting identity

**Cloud & Backend Engineering**

This is more coherent than trying to market yourself equally as:

- Network Engineer
- Cybersecurity Analyst
- Web Developer
- Data Analyst
- Data Scientist
- Data Engineer
- ML Engineer
- Cloud Architect

Those skills can remain in your CV, but the portfolio needs a clear center of gravity.

---

# 31. Recommended Personal Brand Statement

A concise version:

> **I build data systems and machine-learning applications that turn complex data into reliable, actionable solutions.**

Alternative:

> **Data Engineer focused on scalable data pipelines, machine learning, cloud infrastructure, and real-world applications.**

---

# 32. Suggested Homepage Copy

## Hero

**Ahourdet Donambi Thierry**

**Data Engineer | Machine Learning | Cloud**

> I build reliable data systems and machine-learning applications that turn complex data into useful, real-world solutions.

**Python · SQL · Spark · Kafka · AWS · PostgreSQL · Django**

**[View Projects] [Download CV]**

---

## About

> I am a Data Engineer with a Master's degree in Big Data Analytics and professional experience working with data and infrastructure systems. My work combines data engineering, machine learning, cloud technologies, and backend development. I enjoy building end-to-end systems that move from raw data collection and processing to analytics, prediction, APIs, and operational dashboards.

---

## What I Build

### Data Engineering

> ETL/ELT pipelines, distributed processing, data integration, SQL, streaming, and data platforms.

### Machine Learning

> Predictive modeling, forecasting, classification, feature engineering, and model evaluation.

### Cloud & Backend

> AWS infrastructure, REST APIs, backend applications, databases, Docker, and Linux.

---

# 33. Recommended Portfolio Story

The portfolio should tell this progression:

```text
RAW DATA
   ↓
DATA ENGINEERING
   ↓
PROCESSING & STORAGE
   ↓
ANALYTICS
   ↓
MACHINE LEARNING
   ↓
API / APPLICATION
   ↓
REAL-WORLD IMPACT
```

This should be the underlying story of the entire website.

---

# 34. What Not to Do

Avoid turning the portfolio into:

- A giant CV
- A list of every technology you've ever touched
- A collection of tutorial projects
- A wall of certification badges
- A generic "I am passionate about technology" website
- An overly animated developer template
- A student-only portfolio

The portfolio should show **evidence of engineering ability**.

---

# 35. Final Priority Roadmap

## Phase 1 — Positioning

- [ ] Update Master's status
- [ ] Update professional title
- [ ] Remove overly junior/intern-only homepage wording
- [ ] Rewrite Hero
- [ ] Rewrite About
- [ ] Define core technology stack

## Phase 2 — Projects

- [ ] Feature Fraud Detection
- [ ] Feature UNMAPPED
- [ ] Feature Agri-Food Forecasting
- [ ] Feature Flood Forecasting
- [ ] Keep Smart Greenhouse as supporting project
- [ ] Move smaller projects into "More Projects"

## Phase 3 — Engineering Evidence

- [ ] Add architecture diagrams
- [ ] Add measurable results
- [ ] Add GitHub links
- [ ] Add live demos where available
- [ ] Create detailed case-study pages
- [ ] Add screenshots

## Phase 4 — Professional Profile

- [ ] Add professional experience
- [ ] Update education
- [ ] Add relevant certifications
- [ ] Add English/French
- [ ] Add CV download

## Phase 5 — Technical Quality

- [ ] Mobile optimization
- [ ] Accessibility
- [ ] SEO
- [ ] Open Graph metadata
- [ ] Performance optimization
- [ ] Check all links
- [ ] Check GitHub repositories
- [ ] Check contact information

---

# 36. Target End Result

The finished portfolio should make a visitor think:

> **This is a Data Engineer who can build an entire data product — not just analyze a dataset.**

The strongest evidence should be:

**Data ingestion → processing → storage → ML → API → cloud → dashboard**

Your portfolio should make that capability visible within the first few minutes.

---

# 37. Final Recommended Stack Positioning

```text
                    DATA ENGINEER
                         │
          ┌──────────────┼──────────────┐
          ↓              ↓              ↓
   DATA ENGINEERING      ML       CLOUD / BACKEND
          │              │              │
 Python / SQL        Scikit-learn       AWS
 Spark               LightGBM           Docker
 Kafka               Forecasting        Django
 Hadoop              Classification     FastAPI
 PostgreSQL          Feature Eng.       Linux
```

This is the professional identity the portfolio should consistently reinforce.

---

## Bottom Line

The current portfolio has a good visual foundation. The next iteration should focus less on adding visual decoration and more on **professional positioning, stronger projects, architecture, measurable results, and engineering evidence**.

The most important transformation is:

> **From "Master's student with projects" → "Data Engineer who builds production-oriented data and ML systems."**
