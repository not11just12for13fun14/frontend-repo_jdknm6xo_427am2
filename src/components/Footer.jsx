export default function Footer() {
  return (
    <footer className="w-full bg-black/90 px-6 py-10 text-center">
      <p className="text-sm text-amber-100/60">
        © {new Date().getFullYear()} drummerBees. Crafted with love and plenty of coffee.
      </p>
    </footer>
  );
}
