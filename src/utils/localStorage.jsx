export const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design login page",
        description: "Create a responsive login UI",
        date: "2025-04-23",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix navbar bug",
        description: "Navbar not responsive on mobile",
        date: "2025-04-20",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update footer links",
        description: "Add new social media links",
        date: "2025-04-18",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Write API integration docs",
        description: "Document all user-facing APIs",
        date: "2025-04-21",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code review",
        description: "Review PRs for frontend changes",
        date: "2025-04-22",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix console warnings",
        description: "Clean up all warnings in dev console",
        date: "2025-04-19",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Optimize images",
        description: "Compress and optimize static assets",
        date: "2025-04-23",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Refactor dashboard",
        description: "Split into reusable components",
        date: "2025-04-18",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Improve accessibility",
        description: "Add ARIA tags and keyboard support",
        date: "2025-04-20",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Dark mode support",
        description: "Implement toggle for dark theme",
        date: "2025-04-22",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test auth flow",
        description: "Test login/logout functionality",
        date: "2025-04-21",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Set up CI/CD",
        description: "Integrate GitHub Actions",
        date: "2025-04-23",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Build signup form",
        description: "Include validations and error states",
        date: "2025-04-17",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Integrate Stripe",
        description: "Set up payment gateway",
        date: "2025-04-21",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Fix broken links",
        description: "Check all navigation links",
        date: "2025-04-19",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy to Netlify",
        description: "Push final build to Netlify",
        date: "2025-04-23",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update readme",
        description: "Add usage instructions",
        date: "2025-04-20",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Setup Redux",
        description: "Add state management with Redux",
        date: "2025-04-21",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Add unit tests",
        description: "Write tests using Jest",
        date: "2025-04-18",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

export const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
