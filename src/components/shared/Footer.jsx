export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white h-10 flex items-center justify-center">
      <p>© {new Date().getFullYear()} Jester. All rights reserved.</p>
    </footer>
  );
}