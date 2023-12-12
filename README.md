# NextJsCourse

## Important information from this course
### When to use server or client component?
Use client component (`use client`) if
- Need to use react hooks (eg useState, useContext)
- Need to define event handlers
User server component whenever possible as it helps in performance and UX

### Special Files in app folder
- page.tsx
- layout.tsx
- not-found.tsx
- loading.tsx
- error.tsx
- route.tsx

### Production Build Process
![image](https://github.com/cheewx19/NextJsCourse/assets/46551028/fc8b9735-9461-4fa3-8c54-7ad742938c58)

![image](https://github.com/cheewx19/NextJsCourse/assets/46551028/833a467d-1bca-4546-9c9b-d325bc319773)

### Caching
We used on-demand caching for this application. (Purging page cache when `revalidatePath` is called)
reloading page cache would mean we will trigger the fetching of data again to show updated results
- Note that these caching happens on build time

### Frontend Implementation Design
![image](https://github.com/cheewx19/NextJsCourse/assets/46551028/8e8194d1-693a-4de3-ab01-87f4a8988173)
