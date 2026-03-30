# Candidate Decisions & Notes

Please use this file to briefly outline your technical choices and the rationale behind them.

## 1. State Management & Architecture

_Why did you structure your state the way you did? Which patterns did you choose for handling the flaky API requests, loading states, and error handling?_

I used standard React usestate and useEffect for state management as it's a relatively simple application. I used a useCallback hook for fetchProducts to ensure stability across re-renders.

For handling the flaky API:

1. **Loading State**: A dedicated loading state controls the display of skeleton cards, providing immediate visual feedback.
2. **Error Handling**: I wrapped the API call in a try-catch block. When an error occurs, it's captured in an error state, which triggers a dedicated error UI with a "Try Again" button for manual retries.
3. **Search Debouncing**: Implemented a 500ms debounce on the search input to prevent excessive API calls and handle rapid user input gracefully.
4. **Resetting State**: Pagination and category filters reset to the first page when search terms or categories change to maintain data consistency.
5. **RTK Consideration**: While Redux Toolkit (RTK) with RTK Query could provide robust caching, automatic retries, and optimistic updates for the flaky API, I intentionally kept the solution lightweight with local state. For a production-grade app, RTK Query would be the next logical step to handle retries, background refetching, and cache invalidation.

## 2. Trade-offs and Omissions

_What did you intentionally leave out given the constraints of a take-home assignment? If you had more time, what would you prioritize next?_

- **Global State**: I avoided using Redux or React Context because the application scope didn't require it.
- **Complex Animations**: I used basic framer-motion transitions.
- **Unit Testing**: Given the time constraints, I prioritized implementation and manual verification. I would add Vitest/React Testing Library tests for the components and API service.

## 3. AI Usage

_How did you utilize AI tools (ChatGPT, Copilot, Cursor, etc.) during this assignment? Provide a brief summary of how they assisted you._

I used Trae (powered by Gemini-3-Flash-Preview) as a pair programmer.

- **Code Generation**: Assisted in scaffolding components (`ProductCard`, `Pagination`, `CategoryFilter`) and the main logic in `App.tsx`.
- **Styling**: Quickly translated the design requirements into Tailwind CSS classes.
- **Refactoring**: Helped in identifying type-only imports and improving accessibility attributes.
- **Documentation**: Assisted in drafting this `DECISIONS.md` file based on my implementation choices.

## 4. Edge Cases Identified

_Did you notice any edge cases or bugs that you didn't have time to fix? Please list them here._

- **Rapid State Changes**: If a user switches categories very quickly while an API call is in progress, there might be a race condition. Implementing an AbortController in the API service would solve this.

- **Search Consistency**: If a search is in progress and the user changes category, the results should reflect both. Currently, it does, but clear indicators of active filters would be better.
