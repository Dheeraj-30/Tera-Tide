import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Discovery from './pages/Discovery';
import WorkshopDetails from './pages/WorkshopDetails';
import Marketplace from './pages/Marketplace';
import Dashboard from './pages/Dashboard';
import Auth from './pages/Auth';
import About from './pages/About';
import HelpCenter from './pages/HelpCenter';
import Workshops from './pages/Workshops';
import { CartProvider } from './context/CartContext';

// We will create these next!
const Placeholder = ({ title }) => <div className="min-h-[60vh] flex items-center justify-center font-headline-md text-3xl">{title} Page Coming Next!</div>;
/* //! Working of above code :
```python
pass

```

That is a very good question! It shows you are paying close attention to how React components work.

Let me explain exactly how that line works. It is a fundamental concept in React called **"Props"** (short for properties).

### Breaking Down the Code

Here is the line of code again:

```jsx
const Placeholder = ({ title }) => <div className="min-h-[60vh] flex items-center justify-center font-headline-md text-3xl">{title} Page Coming Next!</div>;

```

This line creates a miniature React component named `Placeholder`.

**1. Passing the Data (The "Where it comes from")**
Further down in `App.jsx`, inside your `<Routes>`, you use the `Placeholder` component like this:

```jsx
<Route path="/" element={<Placeholder title="Discovery" />} />

```

Do you see `title="Discovery"`? This is where the data comes from. You are "passing a prop" named `title` to the `Placeholder` component, and giving it the string value `"Discovery"`.

**2. Receiving the Data (The `{ title }`)**
When you defined the `Placeholder` component, you wrote:
`const Placeholder = ({ title }) => ...`

The `({ title })` tells React: "Expect to receive some data (props), and look specifically for a property named `title`." (This is called object destructuring in JavaScript).

**3. Displaying the Data (The `{title}` inside the div)**
Finally, inside the `<div>`, you use curly braces `{title}`. In JSX (React's HTML-like syntax), curly braces mean "evaluate this JavaScript variable." So, React takes the word "Discovery" that you passed in and injects it right into the text, resulting in the screen saying "Discovery Page Coming Next!".

### To summarize:

1. You say `<Placeholder title="Workshop Details"/>`
2. React passes `"Workshop Details"` into the `Placeholder` component.
3. The component renders `<div>Workshop Details Page Coming Next!</div>`.

It is just a temporary trick so we can see the router working before we build the actual pages!



Ah, I understand your question better now!

You are asking: **"If I have multiple `<Route>`s with different titles, why do I only see 'Discovery Page Coming Next!' when I first open the app, and how do I see the others?"**

This is exactly how **React Router** works. Let's break it down.

### Why you only see "Discovery" at first

Look at how we set up the `<Routes>` in `App.jsx`:

```jsx
<Routes>
  <Route path="/" element={<Placeholder title="Discovery" />} />
  <Route path="/workshop" element={<Placeholder title="Workshop Details" />} />
  <Route path="/marketplace" element={<Placeholder title="Marketplace" />} />
  <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
</Routes>

```

When you first start your server and open `http://localhost:5173` in your browser, the URL path at the very top of your browser is just `/` (the root path).

React Router looks at your list of `<Route>` tags and says:

1. *"Does the current URL (`/`) match the path of the first route (`path="/"`)*? **Yes!**
2. Therefore, it *only* renders the element for that specific route: `<Placeholder title="Discovery"/>`.
3. It ignores the other routes because their paths (`/workshop`, `/marketplace`, etc.) do not match the current URL in your browser.

### How to see the other pages

To see the other placeholders, you have to **change the URL**. There are two ways to do this:

**Method 1: Click the Links in the Navbar**
In the `Navbar.jsx` component we built, we used React Router's `<Link>` tags instead of standard HTML `<a>` tags:

```jsx
<Link to="/workshop" className="...">Workshops</Link>
<Link to="/marketplace" className="...">Marketplace</Link>

```

When you click the "Workshops" button in your Navbar, React Router automatically changes the browser URL to `http://localhost:5173/workshop`.

Because the URL changed, React Router looks at your `<Routes>` again. It sees that the URL now matches `path="/workshop"`, so it swaps out the "Discovery" placeholder and renders the `<Placeholder title="Workshop Details"/>` instead!

**Method 2: Type it directly into your browser**
If your app is running, click the URL bar at the top of your web browser and manually type:
`http://localhost:5173/marketplace`
Hit enter. You will immediately see "Marketplace Page Coming Next!". Type `http://localhost:5173/dashboard` and you will see the Dashboard placeholder.

---

### The Magic of Single Page Applications (SPAs)

This is why React is so fast. Instead of the browser asking the server for a whole new HTML page every time you click a link (which causes a white flash and a loading spin), React Router just instantly swaps out the middle section (the `main` area) with the correct component based on the URL, while leaving the Navbar and Footer exactly where they are.

**Try clicking the links in your Navbar right now in your running app.** You should see the text in the middle change instantly between "Discovery", "Workshop Details", and "Marketplace" without the page ever reloading!

Let me know if that makes sense, and we can move on to building the actual code for the first page!

*/


function App() {
  return (
    <CartProvider>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Placeholder title="Discovery" />} /> */}
            <Route path="/" element={<Discovery/> } />

            {/* The main listing page */}
            <Route path="/workshops" element={<Workshops />} />

            {/* <Route path="/workshop" element={<Placeholder title="Workshop Details" />} /> */}
            <Route path="/workshop/:id" element={<WorkshopDetails/>} /> {/* The individual details page (Note the /:id at the end) */}

            {/* <Route path="/marketplace" element={<Placeholder title="Marketplace" />} /> */}
            <Route path="/marketplace" element={<Marketplace/>} />

            {/* <Route path="/dashboard" element={<Placeholder title="Dashboard" />} /> */}
            <Route path="/dashboard" element= {<Dashboard/>} />

            <Route path="/auth" element= {<Auth/>} />
            <Route path="/about" element= {<About/>} />
            <Route path="/help" element= {<HelpCenter/>} />
            <Route path="/help" element= {<HelpCenter/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
}

export default App;