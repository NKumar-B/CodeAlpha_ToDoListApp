# FocusForge

**FocusForge** is a modern, responsive web application designed to help users streamline their daily workflow. By minimizing distractions and focusing on a clean, intuitive design, it empowers users to organize tasks efficiently and achieve their goals with clarity.

<img width="1897" height="846" alt="image" src="https://github.com/user-attachments/assets/6396f74b-588c-46d3-9b0e-3a36904a4575" /><br/>
<img width="1861" height="802" alt="image" src="https://github.com/user-attachments/assets/de676f91-c771-4aad-9aca-66e875265abd" /><br/>
<img width="1844" height="815" alt="image" src="https://github.com/user-attachments/assets/3e129203-81ca-485a-86f7-542f98b6a61b" /><br/>
<img width="1860" height="853" alt="image" src="https://github.com/user-attachments/assets/2b7565da-7da2-42e1-8358-f70b40acd459" /><br/>
<img width="1864" height="851" alt="image" src="https://github.com/user-attachments/assets/fd05fad0-90de-4f7f-8539-73a236d6d515" />




## Features

* **Interactive Landing Page:** Features an auto-sliding hero banner and smooth scroll-spy navigation that highlights the active section.
* **Full-Screen Snapping:** Sections snap perfectly to the viewport for a modern, presentation-like browsing experience.
* **Light/Dark Mode Theme:** Includes a seamless theme toggle that remembers your preference across sessions using `localStorage`.
* **Complete Task Workspace (CRUD):**  **Create:** Add new tasks easily.
    * **Read:** View your active and completed tasks.
    * **Update:** Edit existing tasks and mark them as complete/incomplete.
    * **Delete:** Remove tasks when they are no longer needed.
* **Data Persistence:** Tasks are securely saved in the browser's `localStorage` so you never lose your progress when refreshing or closing the tab.
* **Fully Responsive:** Designed to look and function beautifully on both desktop and mobile devices.

## Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Variables, Flexbox, Scroll-Snapping, Hover/Glow Effects)
* **Logic & Interactivity:** JavaScript (DOM Manipulation, LocalStorage API)

## File Structure

```text
focusforge/
├── index.html       # Landing page (Home, About, Preview, Contact)
├── tasks.html       # Dedicated To-Do List workspace
├── style.css        # Global stylesheet (themes, layout, animations)
├── main.js          # Logic for landing page (slider, scroll-spy)
├── tasks.js         # Logic for task management and CRUD operations
└── theme.js         # Logic for Light/Dark mode toggle and persistence
```

## Installation & Setup

Because FocusForge is built entirely with frontend web technologies, no complex environment setup or build tools are required.

1. **Clone the repository** (or download the ZIP file):
   ```bash
   git clone https://github.com/NKumar-B/CodeAlpha_ToDoListApp.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd CodeAlpha_ToDoListApp
   ```
3. **Run the application:**
   Simply double-click `index.html` to open it in your default web browser, or use an extension like VS Code's "Live Server" for a better development experience.

## Usage Guide

1. **Navigating the Site:** Use the top navigation bar to jump between the Home, About, and Contact sections. Watch as the sections snap seamlessly into place.
2. **Changing Themes:** Click the "Dark Mode" / "Light Mode" text in the top right corner of the navigation bar to switch the aesthetic.
3. **Managing Tasks:** * Click the **"View Tasks Workspace"** button on the home page or navigate directly to `tasks.html`.
   * Type a task in the input field and hit **"Add Task"** (or press Enter).
   * Use the **Done/Undo**, **Edit**, and **Delete** buttons to manage your workflow.

## Future Enhancements

The current iteration of FocusForge serves as a robust baseline. Planned technical upgrades and feature additions include:

* **Frontend Framework Migration:** Transition the vanilla architecture to **React.js** utilizing **Vite** and **Tailwind CSS** for highly reusable components and faster state management.
* **Backend Architecture:** Implement a scalable backend (e.g., **Django** or **FastAPI**) integrated with a database to replace `localStorage`, enabling secure cross-device task syncing.
* **AI-Powered Task Assistant:** Integrate a natural language processing model to automatically categorize tasks, estimate completion times, or suggest priority levels.
* **Analytics Dashboard:** Build a visual progress tracker to measure productivity metrics and daily completion rates over time.

## Author

**Nithin Kumar Badduluri** *Undergraduate Student | Full-Stack Developer* Passionate about crafting clean user interfaces, exploring artificial intelligence, and building scalable web applications. 

* **GitHub:** [@NithinKumar](https://github.com/NKumar-B)
* **LinkedIn:** [@Nithin Kumar Badduluri](https://www.linkedin.com/in/nithin-kumar-badduluri-3942512a6)
