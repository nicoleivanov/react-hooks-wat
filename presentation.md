footer: React Hooks...wat?
slidenumbers: true
autoscale: true
theme: Next, 9

# React Hooks...wat? 

# 🎣

---

## About this workshop 

 - Short presentation 📊 (~5mins)
 - Introductory walkthrough demo 💻 (~15mins) 
 - Finish presentation 📊 (~5mins)
 - Remaining ~3 working demos 💻 

#### PS - Please ask questions!

---

# 🤔

^ Who here has heard of hooks? Used hooks? Read about hooks?

---

## What is a hook? 🎣 

 - They let you use state and other React features *without writing a class*
 - Functional components now have feature parity to class components
 - You "hook" into React's state management system
 - Opt-in gradually, no breaking changes

---

## Rules 👮

Two basic but vv important rules:

 - ⚠️ Only call hooks at **top level of function** (no loops, conditions or nested fxns)
 - ⚠️ Only call from React **function components** or custom hoooks (we'll get to that)

^ Won't make a ton of sense right now but important for the demo

--- 

# Demo #1

Easier to show than to continue explaining 

--- 

## Upsides 👍

 - Cleaner separation of functionally-similar stateful logic ✨
 - Sharing of stateful logic easier between components (fewer render props and HOCs)
 - Standardization of component composition 🤓
 - Declarative implementation of lifecycle events 💪
 - Side-effects separated from component logic
 - Opt-in, no breaking changes
 - May reduce reliance on Redux 

---

## Downsides (potential) 👎

 - New paradigm 🤔
 - Numerous ways to create component 😵
 - Reliance on call-order may be unnerving 😔
 - Declarative implementation of lifecycle events 😕

---

## Rules (again) 👮

Two basic but vv important rules:

 - ⚠️ Only call hooks at **top level of function** (no loops, conditions or nested fxns)
 - ⚠️ Only call from React **function components** or custom hoooks (we'll get to that)

---

## Rules, conventions 👮

 - Rules not enforced but will fail at runtime
 - Custom hooks adhere to `useFoo()` naming convention (lintable)
 - Linting is a *must*

---

## Questions? 

# 

---

Below is a list of resources used to compile this repo's information.

 - [Comment in RFC explaining call-order reliance](https://github.com/reactjs/rfcs/pull/68#issuecomment-439314884)
 - [React Conf 18 Hooks keynote](https://www.youtube.com/watch?v=dpw9EHDh2bM)
 - [Making sense of React Hooks by Dan Abramov](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
 - [Official Docs - Hooks at a Glance](https://reactjs.org/docs/hooks-overview.html)
 - [Official Docs - Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

---