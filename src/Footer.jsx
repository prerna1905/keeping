import React from "react";
function Footer() {
  const year = new Date();
  const CurrentYear = year.getFullYear();
  return (
    <footer>
      <p>Copyright {CurrentYear}</p>
    </footer>
  );
}
export default Footer;
