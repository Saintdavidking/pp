document.addEventListener("DOMContentLoaded", function() {

    // Typing effect for roles
    if (document.getElementById('typed-roles')) {
        new Typed('#typed-roles', {
            strings: ['Software Developer.', 'Technical Writer.', 'Golang and Python Expert.'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1500,
            loop: true,
            smartBackspace: true
        });
    }

    // Typing effect for the tagline
    if (document.getElementById('typed-tagline')) {
        new Typed('#typed-tagline', {
            strings: ['Crafting Code and Content That Connects'],
            typeSpeed: 40,
            loop: false,
            showCursor: false,
        });
    }


    const tutorials = [
        {
            title: "How to scrape website data using Python",
            description: "In this tutorial, we’ll go over what you need to get started with a basic web scraping application that will collect text-based data from various sources, save it to a file, and sort the output based on the settings you provide.",
            imageUrl: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop",
            link: "https://mattermost.com/blog/how-to-scrape-website-data-using-python/"
        },
        {
            title: "Build a One-Time Password-Based Login System using Go and Twilio",
            description: "In a world where data breaches are a constant threat, passwordless authentication methods like One-Time Passwords (OTPs) have become the go-to solution for secure logins. Pairing the simplicity of Go with the robust messaging power of Twilio, you can build a seamless OTP login system in no time.",
            imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
            link: "https://www.twilio.com/en-us/blog/build-one-time-password-based-login-system-using-go-twilio"
        },
        {
            title: "How to Build a Real-Time SMS Status Tracking and Logging App Using Go and Twilio",
            description: "This tutorial will walk you through creating a simplistic SMS status tracking and logging system using Go and Twilio. Because Twilio provides reliable SMS and status callback functionality, while Go’s concurrency and efficiency make it ideal for handling real-time data.",
            imageUrl: "smstrack.png",
            link: "https://www.twilio.com/en-us/blog/developers/community/build-realtime-sms-status-tracking-logging-go-twilio"
        },
        {
            title: "How to Build an SMS Stock Notification App with Go and Twilio",
            description: "This tutorial will guide you through creating a powerful SMS-based stock price update system using Go and Twilio. By the end of this tutorial, you'll have a working application that sends real-time stock price notifications directly to your mobile device, allowing you to make informed investment decisions on the go.",
            imageUrl: "smstrack.png",
            link: "https://www.twilio.com/en-us/blog/archive/2025/build-sms-stock-notification-app-go-twilio"
        },
        {
            title: "How to send a follow-up call to users in a Symfony app using Twilio",
            description: "In this article, you will learn how to send periodic messages to users who are inactive in a Symfony application using Twilio Programmable Voice.",
            imageUrl: "https://images.unsplash.com/photo-1544256718-3b62ff080b94?q=80&w=2070&auto=format&fit=crop",
            link: "https://medium.com/@davidfagb/how-to-send-a-follow-up-call-to-users-in-a-symfony-app-using-twilio-212b1f00706f"
        },
        {
            title: "Top Python Frameworks For Game Development",
            description: "This article will teach you about the top Python frameworks for your next game development adventure.",
            imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1974&auto=format&fit=crop",
            link: "https://medium.com/@davidfagb/top-python-frameworks-for-game-development-d66500c06df5"
        },
        {
            title: "The Future of Workflow Orchestration",
            description: "This article explores how Kestra is not just keeping pace with the rapid changes in workflow orchestration but is leading the way. We’ll examine the key innovations that set Kestra apart from other tools, discuss how it addresses the current challenges in the field, and look ahead at the future trends in orchestration that Kestra is poised to influence.",
            imageUrl: "https://images.unsplash.com/photo-1605995493414-9b2d2d38524a?q=80&w=1974&auto=format&fit=crop",
            link: "https://medium.com/@davidfagb/the-future-of-workflow-orchestration-how-kestra-is-leading-the-way-e95bd5e56d2c"
        },
        {
            title: "Benefits of Using Static Code Analysis Tools for Software Testing",
            description: "In this article, you will learn the importance of static code analysis in the software development process and how it improves software quality, reliability, and security. Additionally, the article will explore the advantages and disadvantages of static code analysis tools.",
            imageUrl: "https://images.unsplash.com/photo-1614741118884-62ac62b22863?q=80&w=1974&auto=format&fit=crop",
            link: "https://www.stickyminds.com/article/benefits-using-static-code-analysis-tools-software-testing"
        }
    ];

    const projects = [
        {
            name: "Youtube Video Downloader",
            description: "Python code to download YouTube videos. As you may know, one of Python's great strengths is its huge number of modules and libraries.",
            tech: ["Pycharm", "Python", "Pytube"],
            link: "https://github.com/Saintdavidking/Next-Turbopack",
            imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "Real-Time User Login Alert",
            description: "Real-time login alerts can help you detect unauthorized access attempts or provide useful analytics.",
            tech: ["Nextjs", "Strapi", "Nodejs", "SendGrid", "Twilio"],
            link: "https://github.com/Saintdavidking/UserLoginAlerts",
            imageUrl: "soup.png"
        },
        {
            name: "Facial-Emotion-Recognition-With-Python-and-OpenCV",
            description: "Facial emotion recognition is a fascinating and powerful application of computer vision and machine learning, offering insights into human emotions through advanced technology.",
            tech: ["Python", "OpenCV", "Vscode"],
            link: "https://github.com/Saintdavidking/Facial-Emotion-Recognition-With-Python-and-OpenCV",
            imageUrl: "soup.png"
        },
        {
            name: "SMS-Auto-Respond-With-Twilio-and-Golang",
            description: "Real-time SMS suto- responder using both Golang and Twilio for business.",
            tech: ["Phone", "Golang", "Twilio"],
            link: "https://github.com/Saintdavidking/sms-auto-respond-with-Twilio-and-Golang",
            imageUrl: "soup.png"
        },
        {
            name: "Next.js + Turbopack App",
            description: "This playground is a mirror of the Next.js v13 App Directory Playground, but uses Turbopack as the Next.js development server (next dev --turbo).",
            tech: ["JavaScript", "Turbopack", "Next.js", "Tailwind CSS via PostCSS", ],
            link: "https://github.com/Saintdavidking/Go-URL-Shortener",
            imageUrl: "webpack.png"
        },
        {
            name: "Python-Web-Scraper",
            description: "A versatile web scraping tool built with Python, using Beautiful Soup and Scrapy to extract data from websites.",
            tech: ["Python", "Scrapy", "Beautiful Soup"],
            link: "https://github.com/Saintdavidking/Python-Web-Scraper",
            imageUrl: "soup.png"
        },
        {
            name: "Temperature_Converter",
            description: "Temperature conversion is a fundamental topic in physics and engineering. It's also important in many disciplines for research and various applications.",
            tech: ["Python", "Material-UI"],
            link: "https://github.com/Saintdavidking/Temperature_Converter",
            imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "AI-Powered CLI Tool",
            description: "A command-line interface tool that uses AI to automate common developer tasks and answer queries.",
            tech: ["Python", "OpenAI API", "Typer"],
            link: "https://github.com/Saintdavidking/AI-CLI-Tool",
            imageUrl: "soup.png"
        },
        {
            name: "Go-GRPC-Microservice",
            description: "An example of a high-performance microservice architecture using Go and gRPC for efficient communication.",
            tech: ["Go", "gRPC", "Protobuf"],
            link: "https://github.com/Saintdavidking/UserLoginAlerts",
            imageUrl: "soup.png"
        }
    ];

    /**
     * Reusable function to create a paginated section.
     */
    function createPaginatedSection(config) {
        let currentPage = 1;
        const { data, gridElement, paginationElement, itemsPerPage, cardRenderer } = config;

        function displayPage(page) {
            gridElement.innerHTML = "";
            page--; // Adjust for zero-based index

            const startIndex = itemsPerPage * page;
            const paginatedItems = data.slice(startIndex, startIndex + itemsPerPage);

            paginatedItems.forEach(item => {
                const cardWrapper = document.createElement("div");
                cardWrapper.className = "col-lg-6 col-md-6"; // 2 cards per row
                cardWrapper.innerHTML = cardRenderer(item);
                gridElement.appendChild(cardWrapper);
            });
        }

        function setupPaginationControls() {
            paginationElement.innerHTML = "";
            const pageCount = Math.ceil(data.length / itemsPerPage);

            if (pageCount <= 1) return; 

            for (let i = 1; i <= pageCount; i++) {
                const pageItem = document.createElement('li');
                pageItem.className = `page-item ${i === currentPage ? 'active' : ''}`;
                const pageLink = document.createElement('a');
                pageLink.className = 'page-link';
                pageLink.href = '#';
                pageLink.innerText = i;

                pageLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    const targetSection = gridElement.closest('section');
                    currentPage = i;
                    displayPage(currentPage);

                    const currentActive = paginationElement.querySelector('.active');
                    if (currentActive) currentActive.classList.remove('active');
                    pageItem.classList.add('active');

                    // Scroll to the top of the section after changing page
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });

                pageItem.appendChild(pageLink);
                paginationElement.appendChild(pageItem);
            }
        }
        
        displayPage(currentPage);
        setupPaginationControls();
    }
    
    // --- RENDERER FUNCTIONS ---
    
    const renderTutorialCard = (tutorial) => `
        <div class="card">
            <img src="${tutorial.imageUrl}" class="card-img-top" alt="${tutorial.title}">
            <div class="card-body p-4">
                <h5 class="card-title">${tutorial.title}</h5>
                <p class="card-text">${tutorial.description}</p>
                <a href="${tutorial.link}" target="_blank" class="btn btn-gradient mt-auto align-self-start">
                    Read More <i class="bi bi-box-arrow-up-right ms-1"></i>
                </a>
            </div>
        </div>
    `;

    const renderProjectCard = (project) => {
        const techStackHtml = project.tech.map(t => `<span class="me-2 mb-2 d-inline-block">${t}</span>`).join('');
        return `
            <div class="card">
                <img src="${project.imageUrl}" class="card-img-top" alt="${project.name}">
                <div class="card-body p-4">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="tech-stack my-3">
                        ${techStackHtml}
                    </div>
                    <a href="${project.link}" target="_blank" class="btn btn-gradient mt-auto align-self-start">
                        View on GitHub <i class="bi bi-github ms-1"></i>
                    </a>
                </div>
            </div>
        `;
    };

    // --- INITIALIZE PAGINATED SECTIONS ---

    createPaginatedSection({
        data: tutorials,
        gridElement: document.getElementById("tutorials-grid"),
        paginationElement: document.getElementById("tutorials-pagination"),
        itemsPerPage: 4, 
        cardRenderer: renderTutorialCard
    });

    createPaginatedSection({
        data: projects,
        gridElement: document.getElementById("github-projects-grid"),
        paginationElement: document.getElementById("projects-pagination"),
        itemsPerPage: 4, 
        cardRenderer: renderProjectCard
    });
});
