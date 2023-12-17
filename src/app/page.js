"use client"

import React from 'react';

const HomePage = () => {

  React.useEffect(() => {

    const swiperElm = document.querySelectorAll(".thm-swiper__slider");
    swiperElm.forEach(function (swiperelm) {
      const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
      let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
    });

    var script = document.createElement('script');
    script.src = "assets/js/agriox.js";
    document.head.appendChild(script); //or something of the likes
    
  }, [])

  return (
<>
  {/* /.preloader */}
  <div className="page-wrapper">
    <header className="main-header main-header--one  clearfix">
      <div className="main-header--one__wrapper">
        <div className="main-header--one__top clearfix">
          <div className="auto-container">
            <div className="main-header--one__top-left">
              <div className="text">
                <p>Welcome to Agriculture Farming WordPress Theme</p>
              </div>
              <div className="social-link clearfix">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-header--one__top-right clearfix">
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope" />
                  </div>
                  <div className="text">
                    <p>
                      <a href="mailto:needhelp@company.com">
                        needhelp@company.com
                      </a>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-clock" />
                  </div>
                  <div className="text">
                    <p>Mon - Sat 8:00 - 6:30, Sunday - CLOSED</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-header--one__bottom clearfix">
          <div className="auto-container">
            <div className="main-header--one__bottom-inner">
              <nav className="main-menu main-menu--1">
                <div className="main-menu__inner">
                  <a href="#" className="mobile-nav__toggler">
                    <i className="fa fa-bars" />
                  </a>
                  <div className="stricky-one-logo">
                    <div className="logo">
                      <a href="index-main.html">
                        <img
                          className="dark-logo"
                          src="assets/images/resources/logo-1.png"
                          alt=""
                        />
                        <img
                          className="light-logo"
                          src="assets/images/resources/logo-2.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="main-header--one__bottom-left">
                    <ul className="main-menu__list">
                      <li className="dropdown megamenu">
                        <a href="index-main.html">Home</a>
                        <ul>
                          <li>
                            <div className="home-showcase">
                              <div className="container">
                                <div className="home-showcase__inner">
                                  <div className="row">
                                    <div className="col-lg-3">
                                      <div className="home-showcase__single">
                                        <a
                                          href="index-main.html"
                                          className="home-showcase__image"
                                        >
                                          <img
                                            src="assets/images/update-20-12-2021/home-sections/home-1.jpg"
                                            alt=""
                                          />
                                        </a>
                                        {/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">
                                          <a href="index-main.html">Home one</a>
                                        </h3>
                                      </div>
                                      {/* /.home-showcase */}
                                    </div>
                                    {/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__single">
                                        <a
                                          href="index-2.html"
                                          className="home-showcase__image"
                                        >
                                          <img
                                            src="assets/images/update-20-12-2021/home-sections/home-2.jpg"
                                            alt=""
                                          />
                                        </a>
                                        {/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">
                                          <a href="index-2.html">Home Two</a>
                                        </h3>
                                      </div>
                                      {/* /.home-showcase */}
                                    </div>
                                    {/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__single">
                                        <a
                                          href="index-3.html"
                                          className="home-showcase__image"
                                        >
                                          <img
                                            src="assets/images/update-20-12-2021/home-sections/home-3.jpg"
                                            alt=""
                                          />
                                        </a>
                                        {/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">
                                          <a href="index-3.html">Home Three</a>
                                        </h3>
                                      </div>
                                      {/* /.home-showcase */}
                                    </div>
                                    {/* /.col-lg-3 */}
                                    <div className="col-lg-3">
                                      <div className="home-showcase__single">
                                        <a
                                          href="index-dark.html"
                                          className="home-showcase__image"
                                        >
                                          <img
                                            src="assets/images/update-20-12-2021/home-sections/home-4.jpg"
                                            alt=""
                                          />
                                        </a>
                                        {/* /.home-showcase__image */}
                                        <h3 className="home-showcase__title">
                                          <a href="index-dark.html">
                                            Home Dark
                                          </a>
                                        </h3>
                                      </div>
                                      {/* /.home-showcase */}
                                    </div>
                                    {/* /.col-lg-3 */}
                                  </div>
                                  {/* /.row */}
                                </div>
                                {/* /.home-showcase__inner */}
                              </div>
                              {/* /.container */}
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li>
                            <a href="services.html">All Services</a>
                          </li>
                          <li>
                            <a href="agriculture-products.html">
                              Agriculture Products
                            </a>
                          </li>
                          <li>
                            <a href="fresh-vegetable.html">Fresh Vegetable</a>
                          </li>
                          <li>
                            <a href="organic-products.html">Organic Products</a>
                          </li>
                          <li>
                            <a href="dairy-products.html">Dairy Products</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Page</a>
                        <ul>
                          <li>
                            <a href="farmers.html">Farmers</a>
                          </li>
                          <li>
                            <a href="team-details.html">Farmer Details</a>
                          </li>
                          <li>
                            <a href="projects.html">Projects</a>
                          </li>
                          <li>
                            <a href="projects-details.html">Projects Details</a>
                          </li>
                          <li>
                            <a href="testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                          <li>
                            <a href="error.html">Error</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="shop.html">Shop</a>
                        <ul>
                          <li>
                            <a href="shop.html">Products</a>
                          </li>
                          <li>
                            <a href="product-details.html">Product Details</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog</a>
                        <ul>
                          <li className="dropdown">
                            <a href="news.html">News Grid</a>
                            <ul>
                              <li>
                                <a href="news-2-col.html">News Two Col</a>
                              </li>
                              <li>
                                <a href="news.html">News Three Col</a>
                              </li>
                              <li>
                                <a href="news-4-col.html">News Four Col</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="news-sidebar.html">News Sidebar</a>
                            <ul>
                              <li>
                                <a href="news-sidebar.html">
                                  News Sidebar Right
                                </a>
                              </li>
                              <li>
                                <a href="news-sidebar-left.html">
                                  News Sidebar Left
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="main-header--one__bottom-middel">
                <div className="logo">
                  <a href="index-main.html">
                    <img
                      className="dark-logo"
                      src="assets/images/resources/logo-1.png"
                      alt=""
                    />
                    <img
                      className="light-logo"
                      src="assets/images/resources/logo-2.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="main-header--one__bottom-right clearfix">
                <div className="search-cart">
                  <a href="#" className="search search-toggler">
                    <span className="icon-magnifying-glass" />
                  </a>
                  <a href="#" className="cart mini-cart__toggler">
                    <span className="icon-shopping-cart" />
                  </a>
                </div>
                <div className="contact-box">
                  <div className="icon">
                    <span className="icon-phone-call-2" />
                  </div>
                  <div className="text">
                    <p>Call Anytime</p>
                    <a href="tel:123456789">666 888 0000</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="stricky-header stricked-menu main-menu">
      <div className="sticky-header__content"></div>
      {/* /.sticky-header__content */}
    </div>
    {/* /.stricky-header */}
    {/*Main Slider Start*/}
    <section className="main-slider main-slider-one">
      <div
        className="swiper-container thm-swiper__slider"
        data-swiper-options='{"slidesPerView": 1, "loop": true, "effect": "fade", "pagination": {
      "el": "#main-slider-pagination",
      "type": "bullets",
      "clickable": true
      },
      "navigation": {
      "nextEl": "#main-slider__swiper-button-next",
      "prevEl": "#main-slider__swiper-button-prev"
      },
      "autoplay": {
      "delay": 7000
      }}'
      >
        <div className="swiper-wrapper">
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-1.jpg)"
              }}
            />
            <div className="image-layer-overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider-inner">
                    <div className="main-slider__content">
                      <span className="main-slider-tagline">
                        We’re producing natural goods
                      </span>
                      <h2 className="main-slider__title">
                        Welcome to <br /> Agriculture{" "}
                        <span>
                          <span className="leaf">
                            <img
                              src="assets/images/resources/leaf.png"
                              alt=""
                            />
                          </span>
                          Farm
                        </span>
                      </h2>
                      <p className="main-slider__text">
                        There are many of passages of lorem Ipsum, but the
                        majori have
                        <br /> suffered alteration in some form.
                      </p>
                    </div>
                    <div className="main-slider__button-box">
                      <div className="arrow-icon">
                        <img
                          src="assets/images/icon/main-slider__button-arrow.png"
                          alt=""
                        />
                      </div>
                      <a href="#" className="thm-btn">
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-2.jpg)"
              }}
            />
            <div className="image-layer-overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider-inner">
                    <div className="main-slider__content">
                      <span className="main-slider-tagline">
                        We’re producing natural goods
                      </span>
                      <h2 className="main-slider__title">
                        Welcome to <br /> Agriculture{" "}
                        <span>
                          <span className="leaf">
                            <img
                              src="assets/images/resources/leaf.png"
                              alt=""
                            />
                          </span>
                          Farm
                        </span>
                      </h2>
                      <p className="main-slider__text">
                        There are many of passages of lorem Ipsum, but the
                        majori have
                        <br /> suffered alteration in some form.
                      </p>
                    </div>
                    <div className="main-slider__button-box">
                      <div className="arrow-icon">
                        <img
                          src="assets/images/icon/main-slider__button-arrow.png"
                          alt=""
                        />
                      </div>
                      <a href="#" className="thm-btn">
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
          {/*Start Single Swiper Slide*/}
          <div className="swiper-slide">
            <div
              className="image-layer"
              style={{
                backgroundImage:
                  "url(assets/images/backgrounds/main-slider-v1-3.jpg)"
              }}
            />
            <div className="image-layer-overlay" />
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-slider-inner">
                    <div className="main-slider__content">
                      <span className="main-slider-tagline">
                        We’re producing natural goods
                      </span>
                      <h2 className="main-slider__title">
                        Welcome to <br /> Agriculture{" "}
                        <span>
                          <span className="leaf">
                            <img
                              src="assets/images/resources/leaf.png"
                              alt=""
                            />
                          </span>
                          Farm
                        </span>
                      </h2>
                      <p className="main-slider__text">
                        There are many of passages of lorem Ipsum, but the
                        majori have
                        <br /> suffered alteration in some form.
                      </p>
                    </div>
                    <div className="main-slider__button-box">
                      <div className="arrow-icon">
                        <img
                          src="assets/images/icon/main-slider__button-arrow.png"
                          alt=""
                        />
                      </div>
                      <a href="#" className="thm-btn">
                        Discover more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Single Swiper Slide*/}
        </div>
        {/* If we need navigation buttons */}
        <div className="swiper-pagination" id="main-slider-pagination" />
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <span className="icon-right-arrow-2" />
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <span className="icon-right-arrow-2" />
          </div>
        </div>
      </div>
    </section>
    {/*Main Slider End*/}
    {/*About One Start*/}
    <section className="about-one">
      <div
        className="about-one__bg wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          className="float-bob-y"
          src="assets/images/backgrounds/about-v1-bg.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          {/*Start About One Left*/}
          <div className="col-xl-6">
            <div className="about-one__left">
              <div className="about-one__left-img">
                <div className="about-one__left-img-inner">
                  <img src="assets/images/about/about-v1-img1.jpg" alt="" />
                </div>
              </div>
              <div
                className="about-one__left-overlay wow slideInLeft"
                data-wow-delay="100ms"
                data-wow-duration="1500ms"
              >
                <div className="icon">
                  <span className="icon-investment" />
                </div>
                <div className="title">
                  <h2>
                    <span className="odometer" data-count={87600}>
                      00
                    </span>
                  </h2>
                  <p>Successfully Project Completed</p>
                </div>
              </div>
            </div>
          </div>
          {/*End About One Left*/}
          {/*Start About One Content*/}
          <div className="col-xl-6">
            <div className="about-one__content">
              <div className="sec-title">
                <div className="icon">
                  <img
                    src="assets/images/resources/sec-title-icon1.png"
                    alt=""
                  />
                </div>
                <span className="sec-title__tagline">Our introduction</span>
                <h2 className="sec-title__title">
                  Pure Agriculture and <br />
                  Organic Form
                </h2>
              </div>
              <h2 className="about-one__content-title">
                We’re Leader in Agriculture Market
              </h2>
              <p className="about-one__content-text">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or randomised words even slightly believable.
              </p>
              <ul className="about-one__content-list">
                <li>
                  <div className="icon">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Lorem Ipsum is not simply random text</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>If you are going to use a passage</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Making this the first true generator on the Internet</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-check-circle" aria-hidden="true" />
                  </div>
                  <div className="text">
                    <p>Various versions have evolved over the years</p>
                  </div>
                </li>
              </ul>
              <div className="about-one__content-video-box">
                <div className="about-one__content-video-box-img-wrapper">
                  <div className="about-one__content-video-box-img">
                    <img
                      src="assets/images/resources/about-v1-video-img.jpg"
                      alt=""
                    />
                    <div className="icon">
                      <a
                        className="video-popup wow zoomIn animated animated animated"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                        title=" Video"
                        href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                      >
                        <span className="icon-play-button-1" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* /.about-one__content-video-box-img-wrapper */}
                <div className="about-one__content-video-box-title">
                  <p>Watch our video</p>
                  <h3>Tips for Ripening your Fruits</h3>
                </div>
              </div>
            </div>
          </div>
          {/*End About One Content*/}
        </div>
      </div>
    </section>
    {/*About One End*/}
    {/*Features One Start*/}
    <section className="features-one clearfix">
      <div className="container">
        <div className="row">
          {/*Start Single Features One*/}
          <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
            <div className="features-one__single">
              <div className="features-one__single-img">
                <img src="assets/images/feauters/features-v1-img1.jpg" alt="" />
                <div className="features-one__single-title text-center">
                  <h3>
                    <a href="#">
                      Best Quality <br /> Standards
                    </a>
                  </h3>
                </div>
              </div>
              <a
                href="services-details.html"
                className="features-one__single__more"
              >
                <span className="icon-right-arrow-2" />
              </a>
              {/* /.feature-one__single__more */}
            </div>
          </div>
          {/*End Single Features One*/}
          {/*Start Single Features One*/}
          <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
            <div className="features-one__single">
              <div className="features-one__single-img">
                <img src="assets/images/feauters/features-v1-img2.jpg" alt="" />
                <div className="features-one__single-title text-center">
                  <h3>
                    <a href="#">
                      Smart Organic <br />
                      Services
                    </a>
                  </h3>
                </div>
              </div>
              <a
                href="services-details.html"
                className="features-one__single__more"
              >
                <span className="icon-right-arrow-2" />
              </a>
              {/* /.feature-one__single__more */}
            </div>
          </div>
          {/*End Single Features One*/}
          {/*Start Single Features One*/}
          <div className="col-xl-4 col-lg-4 wow fadeInUp animated animated">
            <div className="features-one__single style2 text-center">
              <div
                className="features-one__single-bg"
                style={{
                  backgroundImage:
                    "url(assets/images/backgrounds/features-one-single-bg.png)"
                }}
              ></div>
              <div className="features-one__single-img">
                <img src="assets/images/feauters/features-v1-img3.jpg" alt="" />
              </div>
              <div className="features-one__single-title text-center">
                <h3>
                  <a href="#">
                    Agriculture <br />
                    products
                  </a>
                </h3>
              </div>
              <div className="button">
                <a href="#" className="thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
          {/*End Single Features One*/}
        </div>
      </div>
    </section>
    {/*Features One End*/}
    {/*Video One Start*/}
    <section
      className="video-one jarallax clearfix"
      data-jarallax=""
      data-speed="0.2"
      data-imgposition="50% 0%"
      style={{
        backgroundImage: "url(assets/images/backgrounds/video-one-bg.jpg)"
      }}
    >
      <div className="video-one-border" />
      <div className="video-one-border video-one-border-two" />
      <div className="video-one-border video-one-border-three" />
      <div className="video-one-border video-one-border-four" />
      <div className="video-one-border video-one-border-five" />
      <div className="video-one-border video-one-border-six" />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="video-one__wrpper">
              <div className="video-one__left">
                <div className="video-one__leaf" />
                {/* /.video-one__leaf */}
                <h2 className="video-one__title">
                  Agriculture Matters to <br />
                  the Future of Development
                </h2>
                <div className="video-one__btn">
                  <a href="#" className="thm-btn">
                    Discover more
                  </a>
                </div>
              </div>
              <div className="video-one__right">
                <div
                  className="icon wow zoomIn"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <a
                    className="video-popup"
                    title=" Video"
                    href="https://www.youtube.com/watch?v=8DP4NgupAhI"
                  >
                    <span className="icon-play-button-1" />
                  </a>
                  <span className="border-animation border-1" />
                  <span className="border-animation border-2" />
                  <span className="border-animation border-3" />
                </div>
                <div className="title">
                  <h2>Watch the video</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Video One End*/}
    {/*Services One Start*/}
    <section className="services-one">
      <div
        className="services-one__bg wow slideInDown"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      />
      <div className="container">
        <div className="sec-title text-center">
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">What we’re doing</span>
          <h2 className="sec-title__title">Services We Offer</h2>
        </div>
        <div className="row">
          {/*Start Single Services One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          >
            <div className="services-one__single">
              <div className="services-one__single-img">
                <div className="services-one__single-img-inner">
                  <img
                    src="assets/images/services/services-v1-img1.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="services-one__single-content text-center">
                <div className="services-one__single-img-icon">
                  <span className="icon-agriculture" />
                </div>
                <h3>
                  <a href="services-details.html">
                    Agriculture
                    <br /> Products
                  </a>
                </h3>
                <p>
                  Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                </p>
                <a href="services-details.html" className="read-more-btn">
                  <span className="icon-right-arrow-2" />
                </a>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
          {/*Start Single Services One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInLeft"
            data-wow-delay="100ms"
            data-wow-duration="1000ms"
          >
            <div className="services-one__single">
              <div className="services-one__single-img">
                <div className="services-one__single-img-inner">
                  <img
                    src="assets/images/services/services-v1-img2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="services-one__single-content text-center">
                <div className="services-one__single-img-icon">
                  <span className="icon-harvest" />
                </div>
                <h3>
                  <a href="services-details.html">
                    Fresh <br />
                    Vegetables
                  </a>
                </h3>
                <p>
                  Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                </p>
                <a href="services-details.html" className="read-more-btn">
                  <span className="icon-right-arrow-2" />
                </a>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
          {/*Start Single Services One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInRight"
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          >
            <div className="services-one__single">
              <div className="services-one__single-img">
                <div className="services-one__single-img-inner">
                  <img
                    src="assets/images/services/services-v1-img3.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="services-one__single-content text-center">
                <div className="services-one__single-img-icon">
                  <span className="icon-growth" />
                </div>
                <h3>
                  <a href="services-details.html">
                    Oragnic <br />
                    Products
                  </a>
                </h3>
                <p>
                  Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                </p>
                <a href="services-details.html" className="read-more-btn">
                  <span className="icon-right-arrow-2" />
                </a>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
          {/*Start Single Services One*/}
          <div
            className="col-xl-3 col-lg-6 wow fadeInRight"
            data-wow-delay="100ms"
            data-wow-duration="1000ms"
          >
            <div className="services-one__single">
              <div className="services-one__single-img">
                <div className="services-one__single-img-inner">
                  <img
                    src="assets/images/services/services-v1-img4.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="services-one__single-content text-center">
                <div className="services-one__single-img-icon">
                  <span className="icon-dairy-products" />
                </div>
                <h3>
                  <a href="services-details.html">
                    Dairy
                    <br /> Products
                  </a>
                </h3>
                <p>
                  Lorem ium dolor sit ametad pisicing elit sed simply do ut.
                </p>
                <a href="services-details.html" className="read-more-btn">
                  <span className="icon-right-arrow-2" />
                </a>
              </div>
            </div>
          </div>
          {/*End Single Services One*/}
        </div>
      </div>
    </section>
    {/*Services One End*/}
    {/*Projects One Start*/}
    <section className="projects-one">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">Recently completed work</span>
          <h2 className="sec-title__title">Explore Our Projects</h2>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="projects-one__carousel owl-carousel owl-theme owl-dot-type1">
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img1.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img2.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img3.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img4.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img1.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img2.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img3.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img4.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img1.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img2.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img3.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
              {/*Start Single Projects One*/}
              <div
                className="projects-one__single wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="projects-one__single-img">
                  <img
                    src="assets/images/project/projects-v1-img4.jpg"
                    alt=""
                  />
                  <div className="overlay-content">
                    <p>Agriculture</p>
                    <h3>
                      <a href="projects-details.html">Harvest Innovations</a>
                    </h3>
                  </div>
                </div>
              </div>
              {/*End Single Projects One*/}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Projects One End*/}
    {/*Testimonials One Start*/}
    <section
      className="testimonials-one jarallax clearfix"
      data-jarallax=""
      data-speed="0.2"
      data-imgposition="50% 0%"
      style={{
        backgroundImage: "url(assets/images/backgrounds/Testimonials-v1-bg.jpg)"
      }}
    >
      <div className="container">
        <div className="row">
          {/*Start Testimonials One Left*/}
          <div className="col-xl-4">
            <div className="testimonials-one__left">
              <div className="testimonials-one__left-bg" />
              <div className="sec-title">
                <div className="icon">
                  <img
                    src="assets/images/resources/sec-title-icon1.png"
                    alt=""
                  />
                </div>
                <span className="sec-title__tagline">Our testimonials</span>
                <h2 className="sec-title__title">
                  What They’re <br />
                  Talking About <br /> Agriox
                </h2>
              </div>
            </div>
          </div>
          {/*End Testimonials One Left*/}
          {/*Start Testimonials One Right*/}
          <div className="col-xl-8">
            <div className="testimonials-one__right">
              <div className="row">
                <div className="col-xl-12">
                  <div className="testimonials-one__carousel owl-carousel owl-theme">
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Kevin Martin</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Christine Eve</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Kevin Martin</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Christine Eve</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Kevin Martin</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                    {/*Start Single Testimonials One*/}
                    <div className="testimonials-one__single">
                      <p className="testimonials-one__single-text">
                        Lorem ipsum is simply free text dolor not sit amet,
                        consectetur notted adipisicing elit sed do eiusmod
                        tempor incididunt ut labore et dolore text.
                      </p>
                      <div className="testimonials-one__single-client-info">
                        <div className="testimonials-one__single-client-info-img">
                          <div className="testimonials-one__single-client-info-img-inner">
                            <img
                              src="assets/images/testimonial/testimonials-v1-img2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="icon">
                            <span className="icon-right-quotation-mark" />
                          </div>
                        </div>
                        <div className="testimonials-one__single-client-info-title">
                          <h4>Christine Eve</h4>
                          <p>Customer</p>
                        </div>
                      </div>
                    </div>
                    {/*Start Single Testimonials One*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Testimonials One Right*/}
        </div>
      </div>
    </section>
    {/*Testimonials One End*/}
    {/*Providing Quality One Start*/}
    <section className="providing-quality-one clearfix">
      <div className="providing-quality-one__bg">
        <img
          src="assets/images/backgrounds/providing-quality-one-bg.png"
          alt=""
        />
      </div>
      <div className="providing-quality-one__shape" />
      {/* /.providing-quality-one__shape */}
      <div className="container-fullwidth">
        <div className="row">
          {/*Start Providing Quality One Img*/}
          <div className="col-xl-6 providing-quality-one__image-block clearfix">
            <div className="providing-quality-one__image__line float-bob-y" />
            {/* /.providing-quality-one__image__line */}
            <img
              src="assets/images/resources/providing-quality-v1-img.jpg"
              alt=""
            />
            <div className="providing-quality-one__logo">
              <img src="assets/images/resources/providing-quality.png" alt="" />
            </div>
          </div>
          {/*End Providing Quality One Img*/}
          {/*Start Providing Quality One Content Box*/}
          <div className="col-xl-6">
            <div className="providing-quality-one__content-box">
              <div className="sec-title">
                <div className="icon">
                  <img
                    src="assets/images/resources/sec-title-icon2.png"
                    alt=""
                  />
                </div>
                <span className="sec-title__tagline">Modern Agriculture</span>
                <h2 className="sec-title__title">
                  Providing High Quality <br />
                  Products
                </h2>
              </div>
              <ul className="providing-quality-one__content-box-list">
                <li className="providing-quality-one__content-box-list-item">
                  <div className="icon">
                    <span className="icon-agriculture" />
                  </div>
                  <div className="text">
                    <h3>Making Healthy Foods</h3>
                    <p>
                      There are many variations of pass available but the
                      majority have simply free text.
                    </p>
                  </div>
                </li>
                <li className="providing-quality-one__content-box-list-item">
                  <div className="icon">
                    <span className="icon-farm" />
                  </div>
                  <div className="text">
                    <h3>Our Agriculture Growth</h3>
                    <p>
                      There are many variations of pass available but the
                      majority have simply free text.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/*End Providing Quality One Content Box*/}
        </div>
      </div>
    </section>
    {/*Providing Quality One End*/}
    {/*Blog One Start*/}
    <section className="blog-one">
      <div
        className="blog-one__bg wow slideInDown"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      />
      <div className="blog-one__shape" />
      {/* /.blog-one__shape */}
      <div className="container">
        <div className="sec-title text-center">
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">from the blog</span>
          <h2 className="sec-title__title">News &amp; Articles</h2>
        </div>
        <div className="row">
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4  wow fadeInLeft"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img1.jpg" alt="" />
                <div className="date-box">
                  <span>30 July, 2021</span>
                </div>
                <div className="overlay-icon">
                  <a href="news-details.html">
                    <span className="icon-plus" />
                  </a>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <a href="#">
                      <i className="far fa-user-circle" />
                      Jessica
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-comments" />2 Comments
                    </a>
                  </li>
                </ul>
                <h2>
                  <a href="news-details.html">
                    Why Eco and Walking or Agriculture for the Environment?
                  </a>
                </h2>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4  wow fadeInLeft"
            data-wow-delay="300ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img2.jpg" alt="" />
                <div className="date-box">
                  <span>30 July, 2021</span>
                </div>
                <div className="overlay-icon">
                  <a href="news-details.html">
                    <span className="icon-plus" />
                  </a>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <a href="#">
                      <i className="far fa-user-circle" />
                      Jessica
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-comments" />2 Comments
                    </a>
                  </li>
                </ul>
                <h2>
                  <a href="news-details.html">
                    Bring to the table win-win survival strategies to ensure
                  </a>
                </h2>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
          {/*Start Single Blog One*/}
          <div
            className="col-xl-4 col-lg-4  wow fadeInLeft"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="blog-one__single">
              <div className="blog-one__single-img">
                <img src="assets/images/blog/blog-v1-img3.jpg" alt="" />
                <div className="date-box">
                  <span>30 July, 2021</span>
                </div>
                <div className="overlay-icon">
                  <a href="news-details.html">
                    <span className="icon-plus" />
                  </a>
                </div>
              </div>
              <div className="blog-one__single-content">
                <ul className="meta-info">
                  <li>
                    <a href="#">
                      <i className="far fa-user-circle" />
                      Jessica
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="far fa-comments" />2 Comments
                    </a>
                  </li>
                </ul>
                <h2>
                  <a href="news-details.html">
                    Leverage agile frameworks to provide a robust synopsis
                  </a>
                </h2>
              </div>
            </div>
          </div>
          {/*End Single Blog One*/}
        </div>
      </div>
    </section>
    {/*Blog One End*/}
    <section className="contact-one">
      <div className="container">
        <div className="sec-title text-center">
          <div className="icon">
            <img src="assets/images/resources/sec-title-icon1.png" alt="" />
          </div>
          <span className="sec-title__tagline">contact with us</span>
          <h2 className="sec-title__title">
            Looking for Agriculture &amp; <br /> Organic Eco Services?
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-one__content">
              <p className="contact-one__text">
                There are many variations of passages of available but the
                majority have suffered alteration in some form, by injected
                humou or randomised words even believable.
              </p>
              <ul className="list-unstyled ml-0 contact-one__lists">
                <li>
                  <i className="fa fa-check-circle" />
                  Making this the first true generator on the Internet
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  Lorem Ipsum is not simply random text
                </li>
                <li>
                  <i className="fa fa-check-circle" />
                  If you are going to use a passage
                </li>
              </ul>
              {/* /.list-unstyled ml-0 */}
              <div className="contact-one__images">
                <div className="contact-one__images__shape" />
                {/* /.contact-one__images__shape */}
                <img
                  src="assets/images/resources/contact-1-1.png"
                  alt=""
                  className="contact-one__images-1"
                />
                <img
                  src="assets/images/resources/contact-1-2.png"
                  alt=""
                  className="contact-one__images-2"
                />
              </div>
              {/* /.contact-one__images */}
            </div>
            {/* /.contact-one__content */}
          </div>
          {/* /.col-lg-6 */}
          <div className="col-lg-6">
            <form
              action="https://pixydrops.com/agriox/assets/inc/sendemail.php"
              className="contact-one__form comment-one__form contact-form-validated"
              noValidate="novalidate"
            >
              <div className="row">
                <div className="col-xl-12">
                  <div className="comment-form__input-box">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="comment-form__input-box">
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12 col-lg-12">
                  <div className="comment-form__input-box">
                    <textarea
                      name="message"
                      placeholder="Write message"
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="thm-btn comment-form__btn">
                    Send a message
                  </button>
                </div>
              </div>
            </form>
            <div className="result" />
            {/* /.result */}
          </div>
          {/* /.col-lg-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.contact-one */}
    {/*Company Logos One Start*/}
    <section className="company-logos-one">
      <div className="container">
        <div
          className="thm-swiper__slider swiper-container"
          data-swiper-options='{"spaceBetween": 100, "slidesPerView": 5, "autoplay": { "delay": 5000 }, "breakpoints": {
          "0": {
              "spaceBetween": 20,
              "slidesPerView": 2
          },
          "375": {
              "spaceBetween": 20,
              "slidesPerView": 2
          },
          "575": {
              "spaceBetween": 20,
              "slidesPerView": 3
          },
          "767": {
              "spaceBetween": 30,
              "slidesPerView": 4
          },
          "991": {
              "spaceBetween": 40,
              "slidesPerView": 5
          },
          "1199": {
              "spaceBetween": 40,
              "slidesPerView": 5
          }
      }}'
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
            <div className="swiper-slide">
              <img
                src="assets/images/resources/Company-Logos-v1-logo1.png"
                alt=""
              />
            </div>
            {/* /.swiper-slide */}
          </div>
        </div>
      </div>
    </section>
    {/*Company Logos One End*/}
    {/*Cta One Start*/}
    <section
      className="cta-one"
      style={{
        backgroundImage: "url(assets/images/backgrounds/cta-v1-bg.jpg)"
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="cta-one__wrapper">
              <div className="cta-one__left">
                <div className="cta-one__left-icon">
                  <span className="icon-farm" />
                </div>
                <div className="cta-one__left-title">
                  <h2>We’re Leader in Agriculture Market</h2>
                </div>
              </div>
              <div className="cta-one__right">
                <div className="cta-one__right-btn">
                  <a href="#" className="thm-btn">
                    Discover More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*Cta One End*/}
    {/*Start Footer One*/}
    <footer className="footer-one">
      <div className="footer-one__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__top-wrapper">
                <div className="footer-one__bg">
                  <img
                    src="assets/images/backgrounds/footer-one-bg.png"
                    alt=""
                  />
                </div>
                <div className="row">
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <div className="footer-widget__about-logo">
                        <a href="index-main.html">
                          <img
                            src="assets/images/resources/footer-logo.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <p className="footer-widget__about-text">
                        Lorem ipsum dolor sit amet consect etur adi pisicing
                        elit sed.
                      </p>
                      <div className="footer-widget__about-contact-box">
                        <p className="phone">
                          <a href="tel:123456789">
                            <i className="fas fa-phone-square-alt" />
                            +92 666 888 0000
                          </a>
                        </p>
                        <p>
                          <a href="mailto:needhelp@company.com">
                            <i className="fa fa-envelope" />
                            needhelp@company.com
                          </a>
                        </p>
                        <p className="text">
                          <i className="fas fa-map-marker-alt" />
                          666 road, broklyn street new york
                        </p>
                      </div>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="footer-widget__column footer-widget__news">
                      <h2 className="footer-widget__title">News</h2>
                      <ul className="footer-widget__news-list">
                        <li className="footer-widget__news-list-item">
                          <div className="footer-widget__news-list-item-img">
                            <img
                              src="assets/images/resources/footer-widget-news-img1.png"
                              alt=""
                            />
                          </div>
                          <div className="footer-widget__news-list-item-title">
                            <p>20 Jul, 2021</p>
                            <h5>
                              <a href="#">
                                A Clean Water Gives More
                                <br /> Good Taste
                              </a>
                            </h5>
                          </div>
                        </li>
                        <li className="footer-widget__news-list-item">
                          <div className="footer-widget__news-list-item-img">
                            <img
                              src="assets/images/resources/footer-widget-news-img2.png"
                              alt=""
                            />
                          </div>
                          <div className="footer-widget__news-list-item-title">
                            <p>20 Jul, 2021</p>
                            <h5>
                              <a href="#">
                                A Clean Water Gives More
                                <br /> Good Taste
                              </a>
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-2 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="footer-widget__column footer-widget__explore">
                      <h2 className="footer-widget__title">Explore</h2>
                      <ul className="footer-widget__explore-list">
                        <li className="footer-widget__explore-list-item">
                          <a href="projects.html">New Projects</a>
                        </li>
                        <li className="footer-widget__explore-list-item">
                          <a href="services.html">Our Services</a>
                        </li>
                        <li className="footer-widget__explore-list-item">
                          <a href="about.html">About Us</a>
                        </li>
                        <li className="footer-widget__explore-list-item">
                          <a href="#">Get in Touch</a>
                        </li>
                        <li className="footer-widget__explore-list-item">
                          <a href="#">Volunteers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                  {/*Start Footer Widget Column*/}
                  <div
                    className="col-xl-4 col-lg-6 col-md-6 wow animated fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="footer-widget__column footer-widget__newletter">
                      <h2 className="footer-widget__title">Newletter</h2>
                      <p className="footer-widget__newletter-text">
                        Sign up now to get daily latest news &amp; updates from
                        us
                      </p>
                      <form className="subscribe-form" action="#">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />
                        <button type="submit">Go</button>
                      </form>
                    </div>
                  </div>
                  {/*End Footer Widget Column*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Start Footer One Bottom*/}
      <div className="footer-one__bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-one__bottom-inner">
                <div className="footer-one__bottom-text">
                  <p>
                    © Copyright 2021 by <a href="#">Layerdrops.com</a>
                  </p>
                </div>
                <div className="footer-one__bottom-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Footer One Bottom*/}
    </footer>
    {/*End Footer One*/}
  </div>
  {/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
      <div className="logo-box">
        <a href="index-main.html" aria-label="logo image">
          <img
            src="assets/images/resources/mobilemenu_logo.png"
            width={155}
            alt=""
          />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="icon-phone-call" />
          <a href="mailto:needhelp@packageName__.com">needhelp@agriox.com</a>
        </li>
        <li>
          <i className="icon-letter" />
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__top">
        <div className="mobile-nav__social">
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-facebook-square" />
          <a href="#" className="fab fa-pinterest-p" />
          <a href="#" className="fab fa-instagram" />
        </div>
        {/* /.mobile-nav__social */}
      </div>
      {/* /.mobile-nav__top */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form action="#">
        <label htmlFor="search" className="sr-only">
          search here
        </label>
        {/* /.sr-only */}
        <input type="text" id="search" placeholder="Search Here..." />
        <button type="submit" aria-label="search submit" className="thm-btn2">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <i className="icon-right-arrow-2" />
  </a>
</>

  );
};

export default HomePage;