export const Footer = () => (
  <footer className="py-10 text-center bg-gray-100 dark:bg-gray-800">
    <p>© {new Date().getFullYear()} ADmyBRAND. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-4">
      <a href="#" aria-label="Twitter">🐦</a>
      <a href="#" aria-label="LinkedIn">💼</a>
      <a href="#" aria-label="GitHub">💻</a>
    </div>
  </footer>
);
