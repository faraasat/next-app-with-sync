# Next App with Sync

### This Example Code is a Part of an Article: Syncing Tabs in Next.js 13+ using Redux Toolkit & Redux State Sync — Simple Guide

<hr />

##### Live Url: [Deployment](https://next-app-with-sync.vercel.app)
##### Article Link: [Medium](https://faraasat.medium.com/syncing-tabs-in-next-js-13-using-redux-toolkit-redux-state-sync-simple-guide-f953329c6beb)

<hr />

### Overview: 
In this article, we explore how to synchronize data between different browser tabs in a Next.js application using Redux State Sync. The need for such synchronization arises in dynamic web apps, especially in scenarios like e-commerce where maintaining a consistent state across multiple tabs is crucial.

### Tutorial Highlights:

#### 1. Initialize Your Next.js App:
- Begin by creating a new Next.js project using the command `npx create-next-app@latest`.
- Customize your project by choosing options like TypeScript, ESLint, Tailwind CSS, and more.
- If you already have an existing Next.js project, proceed to the next step.
#### 2. Add Redux Toolkit to Your Project:
- If you haven’t set up Redux yet, install it using `npm install react-redux @reduxjs/toolkit`.
- Integrate Redux-State-Sync and Redux-Persist:
- Install the necessary packages with `npm install redux-state-sync redux-persist @types/redux-state-sync`.
- These libraries help manage state synchronization across tabs and enable persistence.
#### 3. Build a Counter App Skeleton:
- Create a basic skeleton for a counter app.
- Update the code in app/page.tsx to include a simple counter component.
- Remove default styling from app/global.css.
#### 4. Counter Component and Buttons:
- Define a counter component (CounterComponent) that displays the current count.
- Implement buttons for incrementing and decrementing the counter.
- The goal is to demonstrate state synchronization across multiple tabs.
#### 5. Testing the Sync:
- Open the app in multiple tabs and observe how the state remains consistent.
- When one tab modifies the counter, the change reflects in all other open tabs.

### Conclusion: 
By following this straightforward guide, you can easily achieve tab synchronization using Redux State Sync in your Next.js applications. Whether you’re building e-commerce platforms or other dynamic web apps, this approach ensures a seamless user experience across different browser tabs1.

### Result:
![1_9us5vS3SLbmiiTKgSYBmnQ](https://github.com/faraasat/next-app-with-sync/assets/63093876/52352680-b0ba-4ac4-958f-dec26ed54740)
