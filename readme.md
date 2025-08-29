# JavaScript DOM & Events – Quick Notes

## 📌 1. What is the difference between `getElementById`, `getElementsByClassName`, `querySelector`, and `querySelectorAll`?

- **getElementById** → Selects a single element by its `id`.
- **getElementsByClassName** → Selects all elements with the given class name (HTMLCollection).
- **querySelector** → Selects the **first element** matching a CSS selector.
- **querySelectorAll** → Selects **all elements** matching a CSS selector (NodeList).

---

## 📌 2. How do you create and insert a new element into the DOM?

1. Create → `const p = document.createElement("p");`
2. Add text → `p.innerText = "This is new paragraph text";`
3. Find parent → `const container = document.getElementById("add-here");`
4. Insert → `container.appendChild(p);`

---

## 📌 3. What is Event Bubbling and how does it work?

Event bubbling = An event starts from the **target element** and bubbles **up the DOM tree**.

**Phases:**

- **Capture phase** → Root → Target
- **Target phase** → Event fires on target
- **Bubbling phase** → Event moves upward to parents

---

## 📌 4. What is Event Delegation in JavaScript? Why is it useful?

**Event Delegation** = Attach **one event listener to a parent** instead of many listeners to children.

✔️ Benefits: Cleaner code, better performance, easy to manage dynamic elements.

---

## 📌 5. What is the difference between `preventDefault()` and `stopPropagation()`?

- **preventDefault()** → Stops default browser action (form submit, link redirect, etc).
- **stopPropagation()** → Stops the event from propagating (bubbling/capturing) in the DOM.
