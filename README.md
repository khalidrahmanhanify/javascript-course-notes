# 📘 My Notes Website

A personal website to organize and share notes from different courses in a clean and structured way. Each course has its own section with HTML pages and Markdown notes for easy access and readability.  

## 🚀 Features  
- 📂 Well-structured notes organized by course  
- 🖼️ Course cards with banners and icons  
- 📑 Breadcrumb navigation for better orientation  
- 📝 Mix of **HTML pages** and **Markdown files** for notes  
- 🎨 Responsive layout with custom CSS  

## 🛠️ Tech Stack  
- **HTML5** – page structure  
- **CSS3** – styling (with modular files)  
- **JavaScript (Vanilla)** – interactivity and breadcrumb generation  

## 📂 Project Structure  
```
My Notes Website/
│   index.html                # Homepage (list of courses)
│
├───assets
│   ├───css
│   │       general.css       # General reusable styles
│   │       notion.css        # Notion-like styling for notes
│   │       styles.css        # Main stylesheet
│   │
│   ├───Icons                 # Icons for courses and navigation
│   │       arrow_right.png
│   │       javascript.png
│   │       monitor.png
│   │       open link.png
│   │       pen.png
│   │
│   ├───Images
│   │   └───Courses Banner    # Banner images for courses
│   │           JavaScript.jpg
│   │
│   └───js
│           generateBreadcrumb.js # Dynamically generates breadcrumbs
│           script.js             # General scripts
│
└───Courses
    │   index.html             # Courses page
    │
    ├───HTML and CSS           # Placeholder for HTML & CSS notes
    │
    └───JavaScript
        │   index.html
        │
        └───JavaScript Fundamentals Part - 1
                functions.html
```

## 📖 How to Use  
1. Clone this repository:  
   ```bash
   git clone https://github.com/khalidrahmanhanify/my-notes-website.git
   ```
2. Open `index.html` in your browser to view the homepage.  
3. Navigate through the course cards to view notes.  
4. To add a new course:  
   - Create a new folder inside `Courses/`.  
   - Add an `index.html` file (and optionally `.md` files for notes).  
   - Add a course card in the homepage (`index.html`).  

## 📌 Future Enhancements  
- 🔍 Global search across notes  
- 📊 Progress tracking with percentage completion  
- 🌗 Dark/Light mode toggle  
- 🌍 Deployment with GitHub Pages  

## 📜 License  
This project is for **personal and educational use**. You’re welcome to fork and customize it for your own learning notes.  
