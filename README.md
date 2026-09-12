Note: The explanations in the React Q&A section below were written based on my own understanding of these concepts from building this project. I used AI assistance to help phrase and organize my thoughts more clearly, but the core understanding and examples referenced (from my actual code) are my own.

Dev Stack

📖 Description

Dev Stack is a responsive web application that helps developers explore and compare frontend, backend, database, and tooling options for their next project. Users can browse a curated list of technologies, filter through their details (category, difficulty, rating), and build a personalized "stack" by adding technologies to a selection panel. The project focuses on clean UI, interactive state management, and a consistent gradient-based brand theme across the interface.

🛠️ Technologies Used
React.js —> component-based UI library
TypeScript —> static typing for safer, more maintainable code
Tailwind CSS + DaisyUI —> utility-first styling and pre-built UI components
React-Toastify —> toast notifications for user actions
JSON —> local data source for technology information
Vite —> fast build tool and dev server

✨ Key Features
Interactive "Add to Stack" system —> Users can add technologies to a personal stack, with duplicate-prevention (a warning toast appears if the same technology is added twice), individual removal, and a "Remove All" option to clear the stack instantly.
Fully responsive design —> The entire UI (navbar with hamburger menu, hero section, technology grid, sidebar, and footer) adapts smoothly across mobile, tablet, and desktop screens.
Centralized gradient theme —> A single gradient variable (orange → pink → violet) powers the brand name, hero heading highlight, and primary buttons, so the whole site's look can be changed by editing one value.

🚀 Live Demo

[https://mehedi-hasan-ramim-dev-stack-a05.netlify.app/#]

📦 Getting Started
bash
git clone https://github.com/mehediramim-13/devStack-assignment-05.git
cd devStack-assignment-05
npm install
npm run dev

❔Question & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax used in React that allows us to write HTML-like code inside JavaScript or TypeScript. It makes writing UI much easier because we can write the structure of the page directly inside our component. Without JSX, we would have to use React.createElement() again and again, which would make the code harder to read. So, JSX basically makes React code cleaner and easier to understand.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. The child component can use the props, but it cannot directly change them. State is data that a component manages by itself and can change when something happens.

In this project, the technologies data is passed to the TechCard component as props. The stack array is state because it changes when we add or remove a technology.

3. What does the useState hook do, and where did you use it in this project?

useState is a React hook that lets us store and change data inside a functional component. When the state changes, React renders the component again with the updated data.

In this project, I used useState in TechCard.tsx to store the stack array, which contains the technologies selected by the user. I also used it in Nav.tsx to control whether the mobile menu is open or closed.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used when we need to perform something after the component renders, such as fetching data or working with something outside React.

Usually, we can use useEffect with useState to fetch JSON data when the component loads. But in the final version of this project, I used the use() hook with a Promise instead. It works with <Suspense> and makes it easier to handle the loading of the JSON data.

5. Why does every item in a .map() list need a unique key prop?

When we use .map() to create a list in React, each item needs a unique key. React uses this key to understand which item is which when the list changes.

If we don't use a unique key, React may have trouble updating the correct item. In this project, I used tech.id as the key because every technology in the JSON file has a unique ID.

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different things on the screen depending on a condition. It's kind of like using an if/else statement in JSX.

For example, in the YourStack component, I checked whether the stack is empty:

<!-- {stack.length === 0 ? (
  <div className='border-2 border-dashed border-gray-200 rounded-xl mt-4 py-10 text-center text-gray-400 text-sm'>
    Your stack is empty.
  </div>
) : (
  <div className='flex flex-col gap-3 mt-4'>
    {stack.map((tech) => (
      // render each stack item
    ))}
  </div>
)} -->

If the stack is empty, it shows "Your stack is empty.". Otherwise, it shows the selected technologies.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

<!-- We can pass data from a parent to a child by using props. For example, the parent can pass something like <TechCard promise={technologiesPromise} />. -->

If the child needs to send something back to the parent, the parent can pass a function as a prop. Then the child can call that function when needed.

In this project, the TechCard component passes functions like addToStack, removeFromStack, and removeAll to YourStack. When the user clicks the remove button, YourStack calls removeFromStack(tech.id). That function was created in TechCard, so it can update the stack state there.