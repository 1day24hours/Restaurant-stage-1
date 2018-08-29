# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_



## 项目概况 & 心得 Project Overview: Stage 1 & Experience

* 在餐厅点评项目中，我需要逐步将静态网页转换为适用于移动端的 web 应用程序。在 阶段1 中，我将对不具备可访问性的静态网页进行转换，使其对不同尺寸的显示器做出响应，可以允许屏幕阅读器访问。我还需要通过缓存一些 asset 将其转换为渐进式 Web 应用以供离线使用。

* For the **Restaurant Reviews** projects, I will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I will also add a service worker to begin the process of creating a seamless offline experience for My users. 

* 初始代码存在许多问题，几乎无法在桌面浏览器上使用，同样也不适用于移动设备。它不包括任何标准的可访问特性，也无法离线工作。我的任务就是在已有功能的基础上，更新代码 来解决这些问题。最终使站点具备可访问性,缓存静态站点供离线使用

* The default code has lots of issues.It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. My job is to update the code to resolve these issues while still maintaining the included functionality.

### 运行 How to Run

1. Python 2: python -m SimpleHTTPServer 8000 
2. Python 3: python3 -m http.server 8000
3. Local browser: http://localhost:8000


### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and make start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write. 
