# Component Assets Directory

Store local icons, logos, or UI illustrations here if you want to import them directly into React components.

### How to use:
- Save your image here, e.g., `src/assets/logo.svg`
- Import and use it in your React component:
  ```tsx
  import logo from '@/src/assets/logo.svg';

  export function Header() {
    return <img src={logo} alt="Company Logo" className="h-10 w-auto" />;
  }
  ```
Vite will automatically optimize and bundle these images.
