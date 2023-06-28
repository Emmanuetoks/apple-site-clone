const FooterLinks = () => {
  return (
    <>
      <div className="footer__links-container hidden tablet:flex flex-grow justify-between desktop:flex-grow-0 desktop:gap-[12rem]">
        <ul className="footer__links">
          <h5>Explore</h5>
          <li>
            <a>Mac</a>
          </li>
          <li>
            <a>iPad</a>
          </li>
          <li>
            <a>iPhone</a>
          </li>
        </ul>

        <ul className="footer__links">
          <h5>Account</h5>
          <li>
            <a>Manage you Apple ID</a>
          </li>
          <li>
            <a>iCloud.com</a>
          </li>
        </ul>
      </div>

      <ul className="footer__links-container hidden tablet:flex flex-grow justify-between desktop:flex-grow-0 desktop:gap-[12rem]">
        <div className="footer__links">
          <h5>Apple Values</h5>
          <a href="">Privacy</a>
        </div>

        <ul className="footer__links">
          <h5>About Apple</h5>
          <li>
            <a href="Newsroom"></a>
          </li>

          <li>
            <a href="">Apple Leadership</a>
          </li>
          <li>
            <a href="">Career Opportunities</a>
          </li>

          <li>
            <a href="">Investors</a>
          </li>

          <li>
            <a href="">Ethics and </a>
          </li>
        </ul>
      </ul>
    </>
  );
};

export default FooterLinks;
