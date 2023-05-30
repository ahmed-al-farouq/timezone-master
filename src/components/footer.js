import logo from "@img/logo.png";

const footer = () => {
  const temp = document.createElement("template");
  temp.innerHTML = `
    <footer>
      <div  class="container">
        <div class="footer__cols">
          <div>
            <div class="footer__logo">
              <img src="${logo}" alt="time-zone logo" class="block" />
            </div>
            <p>
              Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed
              do eiusmod tem.
            </p>
          </div>
          <div>
            <h4 class="footer__list__header">Quick Links</h4>
            <ul class="list--unstyled">
              <li><a href="#">About</a></li>
              <li><a href="#"> Offers &amp; Discounts</a></li>
              <li><a href="#"> Get Coupon</a></li>
              <li><a href="#">  Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer__list__header">New Products</h4>
            <ul class="list--unstyled">
              <li><a href="#">Woman Cloth</a></li>
              <li><a href="#">Fashion Accessories</a></li>
              <li><a href="#"> Man Accessories</a></li>
              <li><a href="#"> Rubber made Toys</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer__list__header">Support</h4>
            <ul class="list--unstyled">
              <li><a href="#">Frequently Asked Questions</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Report a Payment Issue</a></li>
            </ul>
          </div>
        </div>
        <!-- Footer Bottom -->
        <div class="footer__copy__right">
          <p>
            Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved |
            This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
          </p>
          <div class="footer__social">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
            <a href="#"><i class="fas fa-globe"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
  return document.body.appendChild(temp.content);
};

export default footer;
