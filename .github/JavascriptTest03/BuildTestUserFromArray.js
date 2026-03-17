/**
 * 
 * Build Test Users from Arrays
Write a JavaScript function that receives two arrays: one with names and one with roles. 
Return a new array of user objects in the format `{ username, email, role }`. 
The username should be lowercase with spaces replaced by underscores, and the email 
should use the domain `@playwrightbatch.com`.} names  
 */

function buildTestUsers(names, roles) {
    return names.map((name, index) => {
        // 1. Create the username: lowercase and swap spaces for underscores
        const username = name.toLowerCase().replaceAll(" ", "_");

        // 2. Construct the email using the new username
        const email = `${username}@playwrightbatch.com`;

        // 3. Return the object using shorthand for username and email
        return {
            username,
            email,
            role: roles[index]
        };
    });
}

// Example Usage:
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildTestUsers(names, roles);
console.log(users);