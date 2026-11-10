# Yosephine Manihuruk — Personal Portfolio

**[Visit my portfolio](https://portfolio-yospepin.netlify.app/)**

I'm a Data Science and International Studies graduate from Macalester College, interested in the intersection of people, institutions, and data.

My work moves between subjects that don't always seem closely related: urban transportation, medical device reporting, historical archives, language, and cultural collections. What connects them is my curiosity about how information is collected, interpreted, and used—and what might get lost along the way.

This repository contains the source code for my personal portfolio, where I document selected research, data analysis, and visualization projects.

## Featured projects

### Where Scooters Meet Public Transit
*R · Shiny · Geospatial Analysis*

Examining how shared scooters and e-bikes interact with public transit in Minneapolis. The project combines micromobility trip records, transit network data, and geographic analysis to explore potential first- and last-mile connections, substitution, and accessibility gaps.

### Behind the Spike: Medical Device Reporting Trend Review
*Python · Excel · Data Quality · Text Analysis*

Investigating an unusual increase in FDA medical device reports in May 2025. Starting with monthly reporting trends, I worked through the underlying report narratives and identified how registry reporting and incomplete event dates affected the interpretation of the data.

### Fashion, Through the Collection
*JavaScript · D3.js · Data Visualization*

Exploring The Metropolitan Museum of Art's Costume Institute collection through interactive visualizations of historical garments, materials, and collection patterns.

## Other projects

The portfolio also includes smaller projects covering:

- **Twin Cities Performing Arts Database:** A collaborative relational database project using MariaDB and SQL to model theater productions, venues, performers, and schedules.
- **Who Gets to Define a Language?:** A computational linguistics project examining Spanish vocabulary recognition and everyday usage on social media.
- **Mapping a Changing Minnesota:** An exploration of income and demographic patterns using public datasets and interactive visualization.

Each project has its own page with additional context, methods, and links to available code or outputs.

## Built with

This website uses **Astro**, with custom CSS, JavaScript, and Astro's content collections to organize project pages. It is hosted on **Netlify** and deployed from GitHub.

I wanted the site to reflect both sides of how I work: a humanities-driven perspective and an interest in the technical details of data analysis. The design is intentionally personal rather than a conventional developer portfolio template.

## Running locally

You'll need Node.js 22 or newer and npm.

Clone the repository:

```bash
git clone https://github.com/yospepin/portfolio-yospepin.git
cd portfolio-yospepin
```

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open `http://localhost:4321` to view the site locally.

To build and preview the production version:

```bash
npm run build
npm run preview
```

## Repository structure

```text
public/                    Static files and documents
src/
├── assets/                Images and visual assets
├── content/
│   └── projects/          Project information and images
├── data/                  Additional content data
├── layout/                Shared page layout
└── pages/
    ├── index.astro        Homepage
    └── projects/          Individual project pages
```

Project information is stored separately from the page layouts, making it easier to update project descriptions or add new work.

The repository also retains earlier research and writing content, even when it isn't displayed on the homepage.

## Contact

I'm always interested in conversations about data, research, and the questions that connect different fields.

- [Portfolio](https://portfolio-yospepin.netlify.app/)
- [LinkedIn](https://www.linkedin.com/in/yosephinemanihuruk/)
- [GitHub](https://github.com/yospepin)

---

*The projects documented here include individual and collaborative academic work. Collaborators and external data sources are credited in the relevant project materials.*