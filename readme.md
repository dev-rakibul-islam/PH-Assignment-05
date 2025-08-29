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
