# The Star Wars Search engine - Wooly Mammoth

## SWAPI, React and NextJS

#### © Daniel Mcgee 2022
---

## Live site

### [Find the live site by clicking here](https://swapi-test-brown.vercel.app/)

---
## Contact

### You can find me at [Linkedin](https://www.linkedin.com/in/danieltmcgee/)

---

## Architecure

- To give it the most 'Star Warsy' feel I have made the index page a (skippable) intro sequence
- NextJS 13 is used as the framework and SWR 2.0 used for client API calls
- Components that are exported to pages are in the components/ folder
- Hooks for API Search (search page) and API ArraySearch (for individual film pages) are in the hooks folder
- When a film page is clicked from the 'home' page, the arrays returned from SWAPI for each resource are sent to the useApiSeach hook and displayed when returned
- SCSS styles are in the styles folder
- Local storage for favourites is managed on the home.tsx page currently, getting localstorage on load & updating on click


---

## Known issues/improvements planned

- Individual film information for the film pages (/films/1 etc) is static but is loaded on the client side via SWR, this would be more efficient as a server side call
- The search page could use the named resource Components (components/Character.tsx etc) to return a more dynamic set of information
- The search page could allow the user to search 'all' endpoints and surface results as suggestions when results are empty
- I would like to let the user click a search result and load a page with detailed information on that result in a dedicated page (currently opens the JSON blob on SWAPI)
- Due to time constraints, testing and accessibility has not yet been implemented in a significant way

---

## Challenge:

Consume the Star Wars API (SWAPI) using React, NextJS and other JS technologies you deem fit.

### Acceptance criteria

- Home screen contains a list of films pulled from the SWAPI
- List should be searchable
- Films can be favourited, this state should be persisted using local storage
- Favourited films should appear at the top of the list
- Favourited films can be unfavourited
- Film list items can be clicked to show individual film page
- Film page should exist on it’s own URL
- Film page should show all the information pulled from the SWAPI endpoint for an individual film
- The list of characters should display a tooltip when a list item is hovered, containing their name, birth year, eye colour, gender, hair colour and any other information you deem necessary
- Film page should contain a back to home link
- Provide public GitHub repo to source code
- Use SCSS modules for styling
- Use flex or grid for layouts - avoid Bootstrap etc
- Host the finished project on Vercel or similar

### Links:

- https://www.swapi.tech/
- https://nextjs.org/

### Extra comments:

In terms of the test, vanilla SCSS modules leverage feature you like. No specifics on the UI, we purposely leave this open ended. Interested to see what you come up with. Have a great weekend and chat soon.


---
## Installing and running the application locally:
- Clone or Download a zip of the repo
- CD into swapi-test-next
- Install all necessary dependencies: ```npm install ```
- Run the project with: ```yarn dev``` or ```npm run start```
- Build the project with: ```yarn build```


