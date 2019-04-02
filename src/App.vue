<template>
  <div id="app" class="bg">
    <Meta />
    <header class="contact">
      <!-- Video background -->
      <video autoplay muted loop playsinline class="contact__video-bg" preload="auto">
        <source src="video/bungy-jump.webm" type="video/webm" />
        <source src="video/bungy-jump.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Contact -->
      <div class="contact__text">
        <!-- Name -->
        <h1 class="contact__name">
          Roc Wang<br />
          <small class="contact__tag-line">&mdash; Builds artisanal websites.</small>
        </h1>

        <!-- Address -->
        <ul class="contact__address">
          <li class="contact__address-item">
            <a href="mailto:roc@kiwiberry.nz">
              <svg class="icon">
                <use xlink:href="#icon-envelope"></use>
              </svg>
              roc@kiwiberry.nz
            </a>
          </li>
          <li class="contact__address-item contact__website">
            <a href="https://kiwiberry.nz/">
              <svg class="icon">
                <use xlink:href="#icon-globe"></use>
              </svg>
              kiwiberry.nz
            </a>
          </li>
        </ul>
      </div>
    </header>

    <div class="container">
      <section class="experience">
        <h2>Experience</h2>

        <dl class="dl-horizontal">
          <dt class="experience__company">
            <a
              href="https://www.canon.com.au/"
              target="_blank"
              rel="noreferrer noopener"
              class="experience__company-link"
            >
              <svg class="experience__logo experience__logo--lero9">
                <use xlink:href="#canon"></use>
              </svg> </a
            ><br />

            Oct 2018 &mdash; Dev 2018<br />
            Canon Australia<br />
            Sydney, Australia
          </dt>
          <dd class="experience__description">
            <h3>Senior Magento Developer</h3>
            <p>Built the B2B quoting system for Salesforce using Magento2 and React.</p>
          </dd>

          <dt class="experience__company">
            <a
              href="https://pocketsquare.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              class="experience__company-link"
            >
              <svg class="experience__logo experience__logo--pocket-square">
                <use xlink:href="#pocket-square"></use>
              </svg> </a
            ><br />

            Apr 2016 &mdash; Oct 2018<br />
            Pocket Square<br />
            Auckland, New Zealand
          </dt>
          <dd class="experience__description">
            <h3>Senior Web Developer</h3>
            Mainly focusing on development for Shopify the E-Commerce platform, while also working on WordPress, Magento
            projects
            <h4>Featured Projects</h4>
            <ul>
              <li>
                Shopify:
                <ul>
                  <li><a href="https://area51store.co.nz/" target="_blank" rel="noreferrer noopener">Area 51</a></li>
                  <li>
                    <a
                      href="http://samanthasung.com/?preview_theme_id=174034189"
                      target="_blank"
                      rel="noreferrer noopener"
                      >Samantha Sung</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                WordPress:
                <ul>
                  <li>
                    <a href="https://www.landrovertour.co.nz/christchurch/" target="_blank" rel="noreferrer noopener"
                      >Land Rover Experience Tour (Online Event Booking)</a
                    >
                  </li>
                  <li>
                    <a href="https://www.artofperformancetour.nz/auckland/" target="_blank" rel="noreferrer noopener"
                      >Jaguar Art of Performance Tour (Online Event Booking)</a
                    >
                  </li>
                </ul>
              </li>
              <li>
                Magento:
                <ul>
                  <li>
                    <a href="https://www.superette.co.nz/" target="_blank" rel="noreferrer noopener">Superette</a>
                  </li>
                  <li>
                    <a href="http://www.stolengirlfriendsclub.com/" target="_blank" rel="noreferrer noopener"
                      >Stolen Girlfriends Club</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </dd>

          <dt class="experience__company">
            <a href="https://lero9.co.nz/" target="_blank" rel="noreferrer noopener" class="experience__company-link">
              <svg class="experience__logo experience__logo--lero9">
                <use xlink:href="#lero9"></use>
              </svg> </a
            ><br />

            Nov 2015 &mdash; Apr 2016<br />
            Lero9<br />
            Auckland, New Zealand
          </dt>
          <dd class="experience__description">
            <h3>Magento Engineer</h3>
            <ul>
              <li>Built reusable Dockerized Magento 2 development environment.</li>
              <li>
                On-going maintenance for
                <a href="https://shop.lesmills.com/nutrition/" target="_blank" rel="noreferrer noopener"
                  >Les Mills Shared Service</a
                >,
                <a href="https://www.lesmillsondemand.com/" target="_blank" rel="noreferrer noopener"
                  >Les Mills On Demand,</a
                >
                <a href="http://www.healthpost.co.nz/" target="_blank" rel="noreferrer noopener">HealthPost</a>, and
                <a href="https://zoeandmorgan.com/nz/" target="_blank" rel="noreferrer noopener">Zoe & Morgan</a>
              </li>
              <li>Built in-house Magento 2 extensions</li>
            </ul>
          </dd>

          <dt class="experience__company">
            <a href="http://www.moustacherepublic.com" target="_blank" class="experience__company-link">
              <svg class="experience__logo experience__logo--mr">
                <use xlink:href="#moustache-republic"></use>
              </svg> </a
            ><br />

            Feb 2014 &mdash; Nov 2015<br />
            Moustache Republic<br />
            Auckland, New Zealand
          </dt>
          <dd class="experience__description">
            <h3>Magento Web Developer</h3>
            <ul>
              <li>
                Built cutting edge e-commerce websites from end to end in an agile(Scrum) team. Responsible for both
                front-end and back-end development, site deployment and on-going maintenance.
              </li>

              <li>
                Developed quality commercial Magento extensions e.g.
                <a href="https://bitbucket.org/moustacherepublic/ext_mr_ajaxcart" target="_blank">Ajax Cart</a>.
              </li>

              <li>
                Provided professional technical support and custom development for existing e-commerce sites, including
                troubleshooting , re-theming, new feature implementation etc.
              </li>

              <li>
                Deeply customized transactional / marketing emails for several projects based on Magento / MailChimp /
                Mandrill.
              </li>

              <li>
                Organised the training program in the company and lecture several tutorial on CLI, git, vim,
                <a href="https://slides.com/rocwang/magento-dev" target="_blank">modern Magento workflow</a>, front-end
                performance etc.
              </li>
            </ul>
          </dd>

          <dt class="experience__company">
            <a
              href="http://www.tencent.com/en-us/"
              target="_blank"
              rel="noreferrer noopener"
              class="experience__company-link"
            >
              <svg class="experience__logo experience__logo--tencent">
                <use xlink:href="#tencent"></use>
              </svg> </a
            ><br />

            Mar 2010 &mdash; Apr 2013<br />
            Tencent<br />
            Shenzhen, China
          </dt>
          <dd class="experience__description">
            <h3>Web Developer</h3>
            <ul>
              <li>
                Led a team to build a custimized PHP framework called Vii, which is based on Yii framework; wrote a
                whole set of API documents and unit tests by Markdown, PHPDocumentor and PHPUnit, remarkably improve the
                developing efficiency.
              </li>
              <li>
                Independently constructed <a href="http://m.vip.qq.com" target="_blank">the mobile site</a> for QQ VIP
                and its accompanying CMS from scratch via Bootstrap, SQLite etc., brought the user experience on mobile
                devices to the next level.
              </li>
              <li>
                Implemented more than 30 activity/promotion mini sites utilizing jQuery, backbone.js, mustache.js and
                PHP, which boosted ARPU and total revenue.
              </li>
              <li>
                Designed and developed a brand new refined marketing system end to end, dramatically improved the
                accuracy of advertisements.
              </li>
              <li>
                Built several operation support systems and in-house tools, e.g. User Notification, Prize Delivery,
                Activity Management, etc., which increased the productivity enormously for the dev team and the
                production team.
              </li>
              <li>
                As a mentor, worked closely with a intern to help her implement requirements and features, and got
                highly commented.
              </li>
              <li>Published 6 open source projects in the company, honored with the most active developer in 2013.</li>
              <li>
                Maintained the portal site of <a href="https://vip.qq.com/" target="_blank">QQ VIP</a>, the biggest
                online value add-on service in China, successfully fulfilled the daily visits from more than 27 millions
                members.
              </li>
            </ul>
            <small class="text-muted"
              >* Tencent is the fourth-largest Internet company in the world after Google, Amazon, and Ebay, as of
              August 2012.
            </small>
          </dd>

          <dt class="experience__company">
            <a
              href="http://www.infosys.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="experience__company-link"
            >
              <svg class="experience__logo experience__logo--infosys">
                <use xlink:href="#infosys"></use>
              </svg> </a
            ><br />

            Sep 2006 &mdash; Apr 2007<br />
            Infosys<br />
            Mysore, India
          </dt>
          <dd class="experience__description">
            <h3>Intern</h3>
            <ul>
              <li>
                Trainee under the Mainframe stream class which included JCL, COBOL, CICS, DB2, VSAM File Processing and
                Quality Assurance, etc.
              </li>
              <li>
                In the project "Using Text Tagging and Annotation Engine Java Libraries in .NET Applications", achieved
                2 ways to accomplish interoperability between .NET and Java platforms.
              </li>
            </ul>
            <small class="text-muted"
              >* Infosys is the third-largest India-based IT services company by 2012 revenues.
            </small>
          </dd>
        </dl>
      </section>

      <section class="portfolio">
        <h2>Portfolio</h2>

        <ul class="portfolio__list">
          <li class="portfolio__list-item">
            <a
              href="https://area51store.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="ATEED"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#area51"></use>
              </svg>
            </a>
          </li>
          <li class="portfolio__list-item">
            <a
              href="https://www.superette.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="Superette"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#superette"></use>
              </svg>
            </a>
          </li>
          <li class="portfolio__list-item">
            <a
              href="https://www.trishpeng.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="Trishpeng"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#trishpeng"></use>
              </svg>
            </a>
          </li>
          <li class="portfolio__list-item">
            <a
              href="http://theliquoriceland.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="The Liquoriceland"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#theliquoriceland"></use>
              </svg>
            </a>
          </li>
          <li class="portfolio__list-item">
            <a
              href="https://www.huckleberry.co.nz/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="Huckleberry"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#huckleberry"></use>
              </svg>
            </a>
          </li>
          <li class="portfolio__list-item">
            <a
              href="http://www.customerservicesaudit.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="portfolio__logo-link"
              title="Snapshotz"
            >
              <svg class="portfolio__logo">
                <use xlink:href="#snapshotz"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>

      <section class="personal-projects">
        <h2>Side Projects</h2>

        <dl class="dl-horizontal">
          <dt class="personal-projects__logo-container">
            Feb 2016 &mdash; May 2016
          </dt>
          <dd>
            <h3>Storefront</h3>
            <a href="https://github.com/rocwang/storefront" target="_blank" rel="noreferrer noopener">Storefront</a>
            is An Angular 2 storefront app for Magento 2
          </dd>
          <dt class="personal-projects__logo-container">
            Apr 2013 &mdash; Nov 2013
          </dt>
          <dd>
            <h3>Do Less</h3>
            <a href="https://github.com/rocwang/Do-Less" target="_blank" rel="noreferrer noopener">Do Less</a>
            is a open source, companion app for the native Reminders app on iOS, by which you could choose the three
            most important tasks to do at a time. Do Less helps you focus and accomplish more by doing less.
          </dd>
        </dl>
      </section>

      <section class="skills">
        <h2 class="skills__title">Skills</h2>

        <section class="skills__group">
          <h3 class="skills__chart-title">Languages</h3>

          <div class="skills__chart-container">
            <canvas id="skills__chart--language" class="skills__chart"></canvas>
          </div>

          <div class="bar-chart js-bar-chart" data-label="language">
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 95%;"
              >
                HTML
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 95%;"
              >
                CSS (SASS/LESS)
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%;"
              >
                JS / Typescript
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%;"
              >
                PHP
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%;"
              >
                SQL
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 40%;"
              >
                Objective-C
              </div>
            </div>
          </div>
        </section>

        <section class="skills__group">
          <h3 class="skills__chart-title">Frameworks / Platforms</h3>

          <div class="skills__chart-container">
            <canvas id="skills__chart--framework" class="skills__chart"></canvas>
          </div>

          <div class="bar-chart js-bar-chart" data-label="framework">
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%;"
              >
                Magento 1
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%;"
              >
                Shopify
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%;"
              >
                Vue.js
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemnfoin="0"
                aria-valuemax="100"
                style="width: 70%;"
              >
                Wordpress
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 40%;"
              >
                Magento 2
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 40%;"
              >
                React
              </div>
            </div>
          </div>
        </section>

        <section class="skills__group">
          <h3 class="skills__chart-title">Tools</h3>

          <div class="skills__chart-container">
            <canvas id="skills__chart--tools" class="skills__chart"></canvas>
          </div>

          <div class="bar-chart js-bar-chart" data-label="tools">
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 95%;"
              >
                Shell / CLI
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%;"
              >
                Git
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%;"
              >
                PhpStorm
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%;"
              >
                Vim
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%;"
              >
                Webpack / Vue CLI
              </div>
            </div>
            <div class="bar-chart__bg">
              <div
                class="bar-chart__bar js-bar-chart__bar"
                role="progressbar"
                aria-valuenow="30"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 30%;"
              >
                Sketch
              </div>
            </div>
          </div>
        </section>
      </section>

      <section class="education">
        <h2>Education</h2>

        <dl class="dl-horizontal education__list">
          <dt class="education__logo-container">
            <a href="http://en.uestc.edu.cn/" target="_blank" rel="noreferrer noopener" class="education__logo-link">
              <svg class="education__logo">
                <use xlink:href="#uestc"></use>
              </svg> </a
            ><br />

            Sep 2007 &mdash; Jun 2010<br />
            Chengdu, China
          </dt>
          <dd class="education__description">
            <h3>Master of Engineering</h3>
            Computer System Architecture<br />
            University of Electronic Science and Technology of China
          </dd>
          <dt class="education__logo-container">
            <a href="http://en.uestc.edu.cn/" target="_blank" rel="noreferrer noopener" class="education__logo-link">
              <svg class="education__logo">
                <use xlink:href="#uestc"></use>
              </svg> </a
            ><br />

            Sep 2003 &mdash; Jun 2007<br />
            Chengdu, China
          </dt>
          <dd class="education__description">
            <h3>Bachelor of Engineering</h3>
            Computer Science &amp; Technology<br />
            University of Electronic Science and Technology of China
          </dd>
        </dl>
      </section>

      <section class="certificates">
        <h2>Certification</h2>

        <ul class="certificates__list">
          <li class="certificates__list-item">
            <div class="certificates__logo-container">
              <a
                href="http://www.magentocommerce.com/certification/directory/dev/1711726/"
                title="Magento Certified Developer"
                class="certificates__link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg class="certificates__logo certificates__logo--magento">
                  <use xlink:href="#magento"></use>
                </svg>
              </a>
            </div>

            <div class="certificates__description">
              <h4 class="media-heading">Magento Certified Developer</h4>
              <span class="text-muted">May 2014</span>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <footer class="page-footer">
      <a href="humans.txt" class="page-footer__humans-txt" target="_blank">
        <svg class="page-footer__humans-txt-img">
          <use xlink:href="#humans-txt"></use>
        </svg>
      </a>

      <a href="https://github.com/rocwang/cv" class="page-footer__github" target="_blank" rel="noreferrer noopener">
        <svg class="page-footer__github-img">
          <use xlink:href="#github"></use>
        </svg>
      </a>
    </footer>

    <!-- QR Code -->
    <svg class="qr-code">
      <use xlink:href="#qr-code"></use>
    </svg>
  </div>
</template>

<script>
import Meta from "./components/Meta";

export default {
  name: "app",
  components: { Meta }
};
</script>

<style></style>
