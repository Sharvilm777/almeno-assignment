const courseDetails = [
    {
        id: 1,
        slug: 'react-native',
        name: 'Introduction to React Native',
        instructor: 'John Doe',
        description: 'Learn the basics of React Native development and build your first mobile app.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/react-native-thumbnail.png',
        duration: '8 weeks',
        startDate: '11-05-2023',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React Native',
                content: 'Overview of React Native, setting up your development environment.',
            },
            {
                week: 2,
                topic: 'Building Your First App',
                content: 'Creating a simple mobile app using React Native components.',
            },
            {
                week: 3,
                topic: 'Navigation in React Native',
                content: 'Understanding and implementing navigation in React Native.',
            },
            {
                week: 4,
                topic: 'State Management',
                content: 'Managing state in React Native applications.',
            },
            {
                week: 5,
                topic: 'API Integration',
                content: 'Connecting your React Native app to external APIs.',
            },
            {
                week: 6,
                topic: 'Styling in React Native',
                content: 'Applying styles and layouts in React Native.',
            },
            {
                week: 7,
                topic: 'Advanced Components',
                content: 'Exploring advanced React Native components.',
            },
            {
                week: 8,
                topic: 'Testing and Debugging',
                content: 'Testing and debugging techniques for React Native.',
            },

        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },

        ],
    },
    {
        id: 2,
        slug: "advance-js",
        name: 'Advanced JavaScript',
        instructor: 'Jane Smith',
        description: 'Deep dive into advanced JavaScript concepts and techniques.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/js-advance-thumbnail.png',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        mode: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Closures and Scope',
                content: 'Understanding closures, lexical scope, and variable hoisting.',
            },
            {
                week: 2,
                topic: 'Promises and Async/Await',
                content: 'Handling asynchronous operations with promises and async/await.',
            },
            {
                week: 3,
                topic: 'ES6 Features',
                content: 'Exploring the features introduced in ECMAScript 6 (ES6).',
            },
            {
                week: 4,
                topic: 'Functional Programming',
                content: 'Applying functional programming concepts in JavaScript.',
            },
            {
                week: 5,
                topic: 'Design Patterns',
                content: 'Understanding and implementing design patterns in JavaScript.',
            },
            {
                week: 6,
                topic: 'Node.js Basics',
                content: 'Introduction to server-side JavaScript with Node.js.',
            },
            {
                week: 7,
                topic: 'Express.js Framework',
                content: 'Building web applications using the Express.js framework.',
            },
            {
                week: 8,
                topic: 'RESTful API Design',
                content: 'Designing and implementing RESTful APIs with Node.js.',
            },

        ],
        students: [
            {
                id: 201,
                name: 'Charlie Brown',
                email: 'charlie@example.com',
            },
            {
                id: 202,
                name: 'Diana Miller',
                email: 'diana@example.com',
            },

        ],
    },
    {
        id: 3,
        slug: "golang",
        name: 'Golang Essentials',
        instructor: 'Alex Johnson',
        description: 'Master the fundamentals of the Go programming language.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/golang-thumbnail.png',
        duration: '10 weeks',
        schedule: 'Mondays and Thursdays, 7:00 PM - 9:00 PM',
        mode: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Go',
                content: 'Overview of Go and its key features.',
            },
            {
                week: 2,
                topic: 'Concurrency in Go',
                content: 'Understanding and implementing concurrency in Go.',
            },
            {
                week: 3,
                topic: 'Data Structures in Go',
                content: 'Exploring various data structures and their usage in Go.',
            },
            {
                week: 4,
                topic: 'Web Development with Go',
                content: 'Building web applications using the Go programming language.',
            },
            {
                week: 5,
                topic: 'RESTful APIs in Go',
                content: 'Designing and implementing RESTful APIs with Go.',
            },
            {
                week: 6,
                topic: 'Testing and Benchmarking in Go',
                content: 'Writing effective tests and benchmarking code in Go.',
            },
            {
                week: 7,
                topic: 'Error Handling in Go',
                content: 'Mastering error handling strategies in Go applications.',
            },
            {
                week: 8,
                topic: 'Advanced Go Features',
                content: 'Exploring advanced features such as reflection and interfaces in Go.',
            },
            {
                week: 9,
                topic: 'Go Modules and Dependency Management',
                content: 'Managing dependencies and using Go modules for efficient development.',
            },
            {
                week: 10,
                topic: 'Final Project Showcase',
                content: 'Presenting and discussing final projects developed during the course.',
            },

        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
            {
                id: 103,
                name: 'Charlie Davis',
                email: 'charlie@example.com',
            },
            {
                id: 104,
                name: 'Diana Turner',
                email: 'diana@example.com',
            },
        ],
    },
    {
        id: 4,
        slug: "beginner-js",
        name: 'JavaScript for Beginners',
        instructor: 'Emily Turner',
        description: 'Begin your journey into web development with JavaScript.',
        enrollmentStatus: 'Close', likes: 0,
        thumbnail: ' /js-thumbnail.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Fridays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['No prior programming experience required'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to JavaScript',
                content: 'Overview of JavaScript and its use in web development.',
            },
            {
                week: 2,
                topic: 'Basic JavaScript Concepts',
                content: 'Understanding variables, data types, and control structures.',
            },
            {
                week: 3,
                topic: 'Functions and Scope in JavaScript',
                content: 'Exploring functions and the scope of variables in JavaScript.',
            },
            {
                week: 4,
                topic: 'DOM Manipulation',
                content: 'Interacting with the Document Object Model for dynamic web content.',
            },
            {
                week: 5,
                topic: 'Event Handling',
                content: 'Handling user events and creating interactive web experiences.',
            },
            {
                week: 6,
                topic: 'AJAX and Fetch API',
                content: 'Making asynchronous requests and working with data from APIs.',
            },
            {
                week: 7,
                topic: 'Introduction to ES6+ Features',
                content: 'Exploring modern JavaScript features introduced in ECMAScript 2015 and beyond.',
            },
            {
                week: 8,
                topic: 'Building a Simple Web Application',
                content: 'Applying knowledge to create a basic web application using JavaScript.',
            },

        ],
        students: [
            {
                id: 201,
                name: 'Charlie Adams',
                email: 'charlie@example.com',
            },
            {
                id: 202,
                name: 'Diana Miller',
                email: 'diana@example.com',
            },

            {
                id: 203,
                name: 'Evan Turner',
                email: 'evan@example.com',
            },
            {
                id: 204,
                name: 'Fiona Smith',
                email: 'fiona@example.com',
            },

        ],
    },
    {
        id: 5,
        slug: "beginner-python",
        name: 'Python Basic Fundamentals',
        instructor: 'Anna Davis',
        description: 'Get started with Python programming language basics.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/python-beginner-thumbnail.png',
        duration: '6 weeks',
        schedule: 'Wednesdays and Saturdays, 5:00 PM - 7:00 PM',
        mode: 'Online',
        prerequisites: ['No prior programming experience required'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Python',
                content: 'Overview of Python and basic syntax.',
            },
            {
                week: 2,
                topic: 'Data Types and Control Structures',
                content: 'Understanding variables, data types, and control structures.',
            },
            {
                week: 3,
                topic: 'Functions and Modules in Python',
                content: 'Working with functions and organizing code using modules.',
            },
            {
                week: 4,
                topic: 'File Handling in Python',
                content: 'Reading from and writing to files in Python.',
            },
            {
                week: 5,
                topic: 'Introduction to NumPy and Pandas',
                content: 'Basic data manipulation using NumPy and Pandas libraries.',
            },
            {
                week: 6,
                topic: 'Final Project and Review',
                content: 'Applying knowledge to a small project and reviewing course concepts.',
            },

        ],
        students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },

            {
                id: 103,
                name: 'Charlie Adams',
                email: 'charlie@example.com',
            },
            {
                id: 104,
                name: 'Diana Turner',
                email: 'diana@example.com',
            },

        ],
    },
    {
        id: 6,
        slug: "advance-python",
        name: 'Python Advanced Concepts',
        instructor: 'Chris Miller',
        description: 'Dive deeper into advanced Python concepts and techniques.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/python-advance-thumbnail.png',
        duration: '8 weeks',
        schedule: 'Mondays and Thursdays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['Python Basic Fundamentals or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Object-Oriented Programming in Python',
                content: 'Understanding and implementing OOP concepts in Python.',
            },
            {
                week: 2,
                topic: 'Python Decorators and Generators',
                content: 'Exploring advanced Python features like decorators and generators.',
            },
            {
                week: 3,
                topic: 'Asynchronous Programming with Asyncio',
                content: 'Introduction to asynchronous programming using the Asyncio library.',
            },
            {
                week: 4,
                topic: 'Web Scraping with BeautifulSoup',
                content: 'Extracting data from websites using BeautifulSoup library.',
            },
            {
                week: 5,
                topic: 'Introduction to Django Framework',
                content: 'Building web applications with the Django web framework.',
            },
            {
                week: 6,
                topic: 'Database Integration with SQLAlchemy',
                content: 'Connecting Python applications to databases using SQLAlchemy.',
            },
            {
                week: 7,
                topic: 'Unit Testing in Python',
                content: 'Writing unit tests to ensure code reliability and quality.',
            },
            {
                week: 8,
                topic: 'Final Project and Presentation',
                content: 'Implementing a final project and presenting the outcomes.',
            },

        ],
        students: [
            {
                id: 201,
                name: 'Charlie Adams',
                email: 'charlie@example.com',
            },
            {
                id: 202,
                name: 'Diana Turner',
                email: 'diana@example.com',
            },

            {
                id: 203,
                name: 'Evan Smith',
                email: 'evan@example.com',
            },
            {
                id: 204,
                name: 'Fiona Davis',
                email: 'fiona@example.com',
            },

        ],
    }, {
        id: 7,
        slug: "dsa",
        name: 'Data Structures and Algorithms Mastery',
        instructor: 'David Turner',
        description: 'Master the fundamental concepts of data structures and algorithms.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/dsa-thumbnail.png',
        duration: '12 weeks',
        schedule: 'Tuesdays and Fridays, 7:00 PM - 9:00 PM',
        mode: 'Online',
        prerequisites: ['Basic programming knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Arrays and Linked Lists',
                content: 'Understanding and implementing arrays and linked lists.',
            },
            {
                week: 2,
                topic: 'Stacks and Queues',
                content: 'Exploring stack and queue data structures and their applications.',
            },
            {
                week: 3,
                topic: 'Trees and Graphs',
                content: 'Introduction to tree and graph data structures and algorithms.',
            },
            {
                week: 4,
                topic: 'Sorting and Searching',
                content: 'Algorithms for sorting and searching in various data structures.',
            },
            {
                week: 5,
                topic: 'Dynamic Programming',
                content: 'Understanding dynamic programming concepts and solving problems.',
            },
            {
                week: 6,
                topic: 'Hashing and Hash Tables',
                content: 'Applications of hashing and implementation of hash tables.',
            },
            {
                week: 7,
                topic: 'Greedy Algorithms',
                content: 'Exploring greedy algorithms and their use in optimization problems.',
            },
            {
                week: 8,
                topic: 'Advanced Topics in Algorithms',
                content: 'Advanced algorithmic concepts and problem-solving strategies.',
            },
            {
                week: 9,
                topic: 'Algorithmic Complexity Analysis',
                content: 'Analyzing the time and space complexity of algorithms.',
            },
            {
                week: 10,
                topic: 'Graph Algorithms',
                content: 'In-depth study of algorithms related to graphs and networks.',
            },
            {
                week: 11,
                topic: 'String Algorithms',
                content: 'Algorithms for string manipulation and pattern matching.',
            },
            {
                week: 12,
                topic: 'Final Project and Review',
                content: 'Applying learned concepts to a final project and reviewing the course.',
            },

        ],
        students: [
            {
                id: 301,
                name: 'Eva Johnson',
                email: 'eva@example.com',
            },
            {
                id: 302,
                name: 'Frank Adams',
                email: 'frank@example.com',
            },

            {
                id: 303,
                name: 'Gina Rodriguez',
                email: 'gina@example.com',
            },
            {
                id: 304,
                name: 'Harry Smith',
                email: 'harry@example.com',
            },

        ],
    },
    {
        id: 8,
        slug: "nodejs",
        name: 'Node.js Fundamentals',
        instructor: 'Daniel Brown',
        description: 'Learn the fundamentals of server-side development with Node.js.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/node-thumbnail.png',
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['Basic JavaScript knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Node.js',
                content: 'Overview of Node.js and asynchronous JavaScript.',
            },
            {
                week: 2,
                topic: 'Building RESTful APIs with Express',
                content: 'Creating RESTful APIs using the Express.js framework.',
            },
            {
                week: 3,
                topic: 'Middleware and Routing',
                content: 'Implementing middleware and defining routes in Express applications.',
            },
            {
                week: 4,
                topic: 'Working with Databases (MongoDB)',
                content: 'Connecting Node.js applications to MongoDB databases.',
            },
            {
                week: 5,
                topic: 'Authentication and Authorization',
                content: 'Implementing user authentication and authorization in Node.js.',
            },
            {
                week: 6,
                topic: 'Real-time Communication with Socket.io',
                content: 'Building real-time applications using the Socket.io library.',
            },
            {
                week: 7,
                topic: 'Express.js Advanced Features',
                content: 'Exploring advanced features and best practices in Express.js.',
            },
            {
                week: 8,
                topic: 'Final Project and Deployment',
                content: 'Developing a final project and deploying Node.js applications.',
            },

        ],
        students: [
            {
                id: 401,
                name: 'Grace Miller',
                email: 'grace@example.com',
            },
            {
                id: 402,
                name: 'Henry Turner',
                email: 'henry@example.com',
            },

            {
                id: 403,
                name: 'Isabella Johnson',
                email: 'isabella@example.com',
            },
            {
                id: 404,
                name: 'Jack Davis',
                email: 'jack@example.com',
            },

        ],
    },
    {
        id: 9,
        slug: "expressjs",
        name: 'Express.js Advanced Development',
        instructor: 'Sophia Smith',
        description: 'Deep dive into advanced Express.js concepts and development.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/express-thumbnail.png',
        duration: '10 weeks',
        schedule: 'Thursdays and Saturdays, 5:00 PM - 7:00 PM',
        mode: 'Online',
        prerequisites: ['Node.js Fundamentals or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Middleware and Routing',
                content: 'Understanding middleware and routing in Express.js.',
            },
            {
                week: 2,
                topic: 'Database Integration with Sequelize',
                content: 'Integrating databases using Sequelize with Express.js.',
            },
            {
                week: 3,
                topic: 'Advanced Authentication and Authorization',
                content: 'Implementing advanced user authentication and authorization mechanisms.',
            },
            {
                week: 4,
                topic: 'RESTful API Design Best Practices',
                content: 'Designing and implementing RESTful APIs with best practices.',
            },
            {
                week: 5,
                topic: 'Real-time Communication with WebSocket',
                content: 'Implementing real-time features using WebSocket technology.',
            },
            {
                week: 6,
                topic: 'Testing and Debugging Express.js Applications',
                content: 'Strategies for testing and debugging Express.js applications.',
            },
            {
                week: 7,
                topic: 'Error Handling and Logging',
                content: 'Effective error handling and logging in Express.js applications.',
            },
            {
                week: 8,
                topic: 'Performance Optimization Techniques',
                content: 'Optimizing the performance of Express.js applications.',
            },
            {
                week: 9,
                topic: 'Containerization with Docker',
                content: 'Containerizing Express.js applications using Docker.',
            },
            {
                week: 10,
                topic: 'Final Project and Showcase',
                content: 'Developing a final project and showcasing the skills learned in the course.',
            },

        ],
        students: [
            {
                id: 501,
                name: 'Isaac Turner',
                email: 'isaac@example.com',
            },
            {
                id: 502,
                name: 'Jasmine Adams',
                email: 'jasmine@example.com',
            },

            {
                id: 503,
                name: 'Kevin Miller',
                email: 'kevin@example.com',
            },
            {
                id: 504,
                name: 'Laura Johnson',
                email: 'laura@example.com',
            },

        ],
    },
    {
        id: 10,
        slug: "shell",
        name: 'Shell Scripting for DevOps',
        instructor: 'Michael Davis',
        description: 'Master the art of shell scripting for efficient DevOps automation.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/shell-thumbnail.png',
        duration: '6 weeks',
        schedule: 'Tuesdays and Fridays, 7:00 PM - 9:00 PM',
        mode: 'Online',
        prerequisites: ['Basic command-line knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Shell Scripting',
                content: 'Overview of shell scripting and basic commands.',
            },
            {
                week: 2,
                topic: 'Automation and Scripting Best Practices',
                content: 'Implementing automation and adhering to best practices.',
            },
            {
                week: 3,
                topic: 'Working with Bash Environment Variables',
                content: 'Understanding and using environment variables in shell scripts.',
            },
            {
                week: 4,
                topic: 'File and Directory Manipulation',
                content: 'Manipulating files and directories through shell scripting.',
            },
            {
                week: 5,
                topic: 'Creating Custom Bash Functions',
                content: 'Developing custom functions for more modular and reusable scripts.',
            },
            {
                week: 6,
                topic: 'Final Project and Automation Showcase',
                content: 'Applying learned concepts to a final project and showcasing automation skills.',
            },

        ],
        students: [
            {
                id: 601,
                name: 'Olivia Miller',
                email: 'olivia@example.com',
            },
            {
                id: 602,
                name: 'Peter Johnson',
                email: 'peter@example.com',
            },

            {
                id: 603,
                name: 'Quinn Adams',
                email: 'quinn@example.com',
            },
            {
                id: 604,
                name: 'Rachel Turner',
                email: 'rachel@example.com',
            },

        ],
    }, {
        id: 11,
        slug: "devops",
        name: 'Advanced DevOps with Kubernetes',
        instructor: 'Nathan Johnson',
        description: 'Explore advanced DevOps practices with a focus on Kubernetes.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/devops-thumbnail.png',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['Shell Scripting for DevOps or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Kubernetes',
                content: 'Overview of Kubernetes and its key concepts.',
            },
            {
                week: 2,
                topic: 'Kubernetes Deployment Strategies',
                content: 'Implementing different deployment strategies in Kubernetes.',
            },
            {
                week: 3,
                topic: 'Pods and Containers in Kubernetes',
                content: 'Understanding the concepts of pods and containers in Kubernetes.',
            },
            {
                week: 4,
                topic: 'Services and Networking in Kubernetes',
                content: 'Managing services and networking within a Kubernetes cluster.',
            },
            {
                week: 5,
                topic: 'Scaling and Load Balancing',
                content: 'Implementing scaling and load balancing strategies in Kubernetes.',
            },
            {
                week: 6,
                topic: 'Configuration Management with Helm',
                content: 'Using Helm for managing and versioning Kubernetes applications.',
            },
            {
                week: 7,
                topic: 'Monitoring and Logging in Kubernetes',
                content: 'Implementing monitoring and logging solutions for Kubernetes applications.',
            },
            {
                week: 8,
                topic: 'Security Best Practices in Kubernetes',
                content: 'Ensuring security through best practices in Kubernetes environments.',
            },
            {
                week: 9,
                topic: 'Continuous Integration and Deployment (CI/CD) with Kubernetes',
                content: 'Setting up CI/CD pipelines for Kubernetes applications.',
            },
            {
                week: 10,
                topic: 'Custom Resource Definitions (CRDs)',
                content: 'Understanding and using Custom Resource Definitions in Kubernetes.',
            },
            {
                week: 11,
                topic: 'Kubernetes Operators',
                content: 'Building and deploying Kubernetes Operators for automated operations.',
            },
            {
                week: 12,
                topic: 'Final Project and Showcase',
                content: 'Developing a final project and showcasing skills learned in the course.',
            },

        ],
        students: [
            {
                id: 701,
                name: 'Sophie Turner',
                email: 'sophie@example.com',
            },
            {
                id: 702,
                name: 'Jack Adams',
                email: 'jack@example.com',
            },

            {
                id: 703,
                name: 'Liam Johnson',
                email: 'liam@example.com',
            },
            {
                id: 704,
                name: 'Natalie Smith',
                email: 'natalie@example.com',
            },

        ],
    },


    {
        id: 12,
        slug: "reactjs",
        name: 'React.js Frontend Development',
        instructor: 'Oliver Smith',
        description: 'Build modern and interactive user interfaces with React.js.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/react-thumbnail.png',
        duration: '10 weeks',
        schedule: 'Thursdays and Saturdays, 4:00 PM - 6:00 PM',
        mode: 'Online',
        prerequisites: ['JavaScript for Beginners or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to React.js',
                content: 'Overview of React.js and its component-based architecture.',
            },
            {
                week: 2,
                topic: 'State Management with Redux',
                content: 'Managing state in React applications using Redux.',
            },
            {
                week: 3,
                topic: 'React Router and Navigation',
                content: 'Implementing navigation and routing in React.js applications.',
            },
            {
                week: 4,
                topic: 'Styling in React with CSS-in-JS',
                content: 'Styling React components using CSS-in-JS libraries.',
            },
            {
                week: 5,
                topic: 'Advanced React Patterns',
                content: 'Exploring advanced React patterns and best practices.',
            },
            {
                week: 6,
                topic: 'Testing React Applications',
                content: 'Writing unit tests and performing testing in React applications.',
            },
            {
                week: 7,
                topic: 'GraphQL and Apollo Client',
                content: 'Integrating GraphQL with React using the Apollo Client.',
            },
            {
                week: 8,
                topic: 'Server-Side Rendering (SSR) with Next.js',
                content: 'Implementing server-side rendering using the Next.js framework.',
            },
            {
                week: 9,
                topic: 'React Hooks and Context API',
                content: 'Understanding and using React Hooks and the Context API.',
            },
            {
                week: 10,
                topic: 'Final Project and Presentation',
                content: 'Developing a final React.js project and presenting the work.',
            },

        ],
        students: [
            {
                id: 801,
                name: 'Emma Adams',
                email: 'emma@example.com',
            },
            {
                id: 802,
                name: 'William Turner',
                email: 'william@example.com',
            },

            {
                id: 803,
                name: 'Oliver Johnson',
                email: 'oliver@example.com',
            },
            {
                id: 804,
                name: 'Sophia Miller',
                email: 'sophia@example.com',
            },

        ],
    }, {
        id: 13,
        slug: "nextjs",
        name: 'Next.js Advanced Web Development',
        instructor: 'Mia Davis',
        description: 'Take your web development skills to the next level with Next.js.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/next-thumbnail.png',
        duration: '8 weeks',
        schedule: 'Tuesdays and Fridays, 5:00 PM - 7:00 PM',
        mode: 'Online',
        prerequisites: ['React.js Frontend Development or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Next.js',
                content: 'Overview of Next.js and server-side rendering.',
            },
            {
                week: 2,
                topic: 'Static Site Generation with Next.js',
                content: 'Building static sites using Next.js.',
            },
            {
                week: 3,
                topic: 'Dynamic Routes and Data Fetching',
                content: 'Implementing dynamic routes and fetching data in Next.js.',
            },
            {
                week: 4,
                topic: 'API Routes in Next.js',
                content: 'Creating API routes and handling serverless functions in Next.js.',
            },
            {
                week: 5,
                topic: 'Authentication and Authorization in Next.js',
                content: 'Implementing user authentication and authorization in Next.js applications.',
            },
            {
                week: 6,
                topic: 'Optimizing Performance in Next.js',
                content: 'Optimizing the performance of Next.js applications.',
            },
            {
                week: 7,
                topic: 'Advanced Styling with CSS Modules',
                content: 'Using CSS Modules for advanced styling in Next.js projects.',
            },
            {
                week: 8,
                topic: 'Final Project and Presentation',
                content: 'Developing a final Next.js project and presenting the work.',
            },

        ],
        students: [
            {
                id: 901,
                name: 'Liam Turner',
                email: 'liam@example.com',
            },
            {
                id: 902,
                name: 'Ava Adams',
                email: 'ava@example.com',
            },

            {
                id: 903,
                name: 'Mason Johnson',
                email: 'mason@example.com',
            },
            {
                id: 904,
                name: 'Ella Turner',
                email: 'ella@example.com',
            },

        ],
    },
    {
        id: 14,
        slug: "machine-learning",
        name: 'Machine Learning with Python',
        instructor: 'Sophie Johnson',
        description: 'Dive into the world of machine learning using Python and popular libraries.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/ml-thumbnail.png',
        duration: '12 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        mode: 'Online',
        prerequisites: ['Python Advanced Concepts or equivalent knowledge'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Machine Learning',
                content: 'Overview of machine learning concepts and applications.',
            },
            {
                week: 2,
                topic: 'Supervised Learning',
                content: 'Understanding and implementing supervised learning algorithms.',
            },
            {
                week: 3,
                topic: 'Unsupervised Learning',
                content: 'Exploring unsupervised learning techniques and clustering algorithms.',
            },
            {
                week: 4,
                topic: 'Feature Engineering and Selection',
                content: 'Techniques for feature engineering and selecting relevant features.',
            },
            {
                week: 5,
                topic: 'Model Evaluation and Hyperparameter Tuning',
                content: 'Evaluating machine learning models and tuning hyperparameters for optimization.',
            },
            {
                week: 6,
                topic: 'Introduction to Neural Networks',
                content: 'Understanding the basics of neural networks and their applications in machine learning.',
            },
            {
                week: 7,
                topic: 'Deep Learning with TensorFlow',
                content: 'Implementing deep learning models using the TensorFlow library.',
            },
            {
                week: 8,
                topic: 'Natural Language Processing (NLP)',
                content: 'Exploring applications of machine learning in natural language processing.',
            },
            {
                week: 9,
                topic: 'Computer Vision with OpenCV',
                content: 'Applying machine learning to computer vision tasks using the OpenCV library.',
            },
            {
                week: 10,
                topic: 'Reinforcement Learning',
                content: 'Introduction to reinforcement learning and its applications.',
            },
            {
                week: 11,
                topic: 'Machine Learning Ethics and Bias',
                content: 'Understanding ethical considerations and addressing bias in machine learning.',
            },
            {
                week: 12,
                topic: 'Final Project and Presentation',
                content: 'Developing a final machine learning project and presenting the work.',
            },

        ],
        students: [
            {
                id: 1001,
                name: 'Noah Adams',
                email: 'noah@example.com',
            },
            {
                id: 1002,
                name: 'Sophia Turner',
                email: 'sophia@example.com',
            },

            {
                id: 1003,
                name: 'Ethan Johnson',
                email: 'ethan@example.com',
            },
            {
                id: 1004,
                name: 'Ava Miller',
                email: 'ava@example.com',
            },

        ],
    },


    {
        id: 15,
        slug: "cybersecurity",
        name: 'Cybersecurity Fundamentals',
        instructor: 'Ethan Davis',
        description: 'Learn the essentials of cybersecurity and secure coding practices.',
        enrollmentStatus: 'Open', likes: 0,
        thumbnail: '/cybersecurity-thumbnail.png',
        duration: '10 weeks',
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        mode: 'Online',
        prerequisites: ['Basic understanding of computer networks'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: 'Overview of cybersecurity threats and defense strategies.',
            },
            {
                week: 2,
                topic: 'Secure Coding Practices',
                content: 'Implementing secure coding practices to prevent vulnerabilities.',
            },
            {
                week: 3,
                topic: 'Network Security Fundamentals',
                content: 'Understanding the fundamentals of network security and common attack vectors.',
            },
            {
                week: 4,
                topic: 'Cryptography Basics',
                content: 'Introduction to cryptographic techniques and their role in cybersecurity.',
            },
            {
                week: 5,
                topic: 'Web Application Security',
                content: 'Securing web applications and protecting against common web-based attacks.',
            },
            {
                week: 6,
                topic: 'Incident Response and Forensics',
                content: 'Developing incident response plans and basics of digital forensics.',
            },
            {
                week: 7,
                topic: 'Security Policies and Compliance',
                content: 'Creating and implementing security policies to ensure compliance.',
            },
            {
                week: 8,
                topic: 'Wireless Network Security',
                content: 'Securing wireless networks and mitigating wireless security risks.',
            },
            {
                week: 9,
                topic: 'Cloud Security Fundamentals',
                content: 'Understanding security considerations in cloud computing environments.',
            },
            {
                week: 10,
                topic: 'Final Project and Security Assessment',
                content: 'Developing a final cybersecurity project and conducting a security assessment.',
            },

        ],
        students: [
            {
                id: 1101,
                name: 'Ella Turner',
                email: 'ella@example.com',
            },
            {
                id: 1102,
                name: 'Liam Adams',
                email: 'liam@example.com',
            },

            {
                id: 1103,
                name: 'Mia Johnson',
                email: 'mia@example.com',
            },
            {
                id: 1104,
                name: 'Oliver Turner',
                email: 'oliver@example.com',
            },

        ],
    },
]
export default courseDetails;