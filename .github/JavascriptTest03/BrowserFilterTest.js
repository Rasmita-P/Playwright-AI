/**
 * 
 * Browser Execution Planner
You have an array of all supported browsers and another array of temporarily blocked browsers. 
Write a function that returns the runnable browsers, the blocked browsers, and a printable 
execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.} allBrowsers 
 */

function getExecutionPlan(allBrowsers, blockedBrowsers) {
    // 1. Identify runnable browsers (those NOT in the blocked list)
    const runnable = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));

    // 2. Identify blocked browsers (those that ARE in the allBrowsers list)
    // This ensures we only list blocked browsers that were actually part of our project
    const blocked = allBrowsers.filter(browser => blockedBrowsers.includes(browser));

    // 3. Create the printable string using join() and template literals
    const runStr = runnable.join(", ");
    const skipStr = blocked.length > 0 ? blocked.join(", ") : "none";
    const plan = `Run on: ${runStr} | Skip: ${skipStr}`;

    return {
        runnable,
        blocked,
        plan
    };
}

// --- Example Usage ---
const all = ["chromium", "firefox", "webkit"];
const blocked = ["firefox"];

const result = getExecutionPlan(all, blocked);
console.log(result);