const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} TravelBuddy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
