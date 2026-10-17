# Public Images Directory

Store any images here that you want to reference via URL path in your frontend or backend database.

### Folder Structure
- `public/images/properties/` - Photos for property listings (houses, plots, flats, commercials)
- `public/images/banners/` - Banners, hero backgrounds, and promotional cards

### How to use in React or HTML:
Any file inside `public/` is served directly at the root URL:
- If you save an image at:
  `public/images/properties/house-1.jpg`
- You can reference it in React or HTML as:
  ```tsx
  <img src="/images/properties/house-1.jpg" alt="House" />
  ```
- Or in `server.ts` property listings data:
  ```ts
  images: [
    '/images/properties/house-1.jpg',
    '/images/properties/house-1-interior.jpg'
  ]
  ```
