import React, { Component } from "react";

import team1 from "./img/team/1.jpg";
import team2 from "./img/team/2.jpg";
import team3 from "./img/team/3.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Tuwaiq Bootcamp!</div>
              <div className="intro-heading text-uppercase">
                It's Nice To Meet You
              </div>
              <a
                className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
                href="#services"
              >
                Tell Me More
              </a>
            </div>
          </div>
        </header>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">E-Commerce</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Responsive Design</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Web Security</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/01-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Threads</h4>
                  <p className="text-muted">Illustration</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/02-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Explore</h4>
                  <p className="text-muted">Graphic Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/03-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Finish</h4>
                  <p className="text-muted">Identity</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/04-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Lines</h4>
                  <p className="text-muted">Branding</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/05-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Southwest</h4>
                  <p className="text-muted">Website Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="img/portfolio/06-thumbnail.jpg"
                    alt=""
                  />
                </a>
                <div className="portfolio-caption">
                  <h4>Window</h4>
                  <p className="text-muted">Photography</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 className="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 className="subheading">An Agency is Born</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 className="subheading">
                          Transition to Full Service
                        </h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src="img/about/4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>July 2014</h4>
                        <h4 className="subheading">Phase Two Expansion</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Sunt ut voluptatum eius sapiente, totam
                          reiciendis temporibus qui quibusdam, recusandae sit
                          vero unde, sed, incidunt et ea quo dolore laudantium
                          consectetur!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">
                  Our Amazing Team
                </h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={team1} alt="" />
                  <h4>Kay Garland</h4>
                  <p className="text-muted">Lead Designer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={team2} alt="" />
                  <h4>Larry Parker</h4>
                  <p className="text-muted">Lead Marketer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={team3} alt="" />
                  <h4>Diana Pertersen</h4>
                  <p className="text-muted">Lead Developer</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/envato.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/designmodo.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/themeforest.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-3 col-sm-6">
                <a href="#">
                  <img
                    className="img-fluid d-block mx-auto"
                    src="img/logos/creative-market.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  id="contactForm"
                  name="sentMessage"
                  novalidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required="required"
                          data-validation-required-message="Please enter your name."
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required="required"
                          data-validation-required-message="Please enter your email address."
                        />
                        <p className="help-block text-danger" />
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone *"
                          required="required"
                          data-validation-required-message="Please enter your phone number."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required="required"
                          data-validation-required-message="Please enter a message."
                        />
                        <p className="help-block text-danger" />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="col-lg-12 text-center">
                      <div id="success" />
                      <button
                        id="sendMessageButton"
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <span className="copyright">
                  Copyright &copy; Your Website 2019
                </span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/01-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/02-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Explore</li>
                        <li>Category: Graphic Design</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/03-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal4"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/04-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal5"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/05-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="portfolio-modal modal fade"
          id="portfolioModal6"
          tabindex="-1"
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal">
                <div className="lr">
                  <div className="rl" />
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="img/portfolio/06-full.jpg"
                        alt=""
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
                      </ul>
                      <button
                        className="btn btn-primary"
                        data-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-times" />
                        Close Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
