<?php
/**
 * Template part for displaying Services Section
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Services Section -->
    <section class="services-section" id="services" aria-labelledby="services-heading">
      <div class="shell">
        <h2 id="services-heading" class="reveal" data-i18n="servicesHeading"><?php esc_html_e( 'My services', 'li-gardner' ); ?></h2>
        <div class="services-grid stagger-group">
          <article class="service-card">
            <span class="service-number">01</span>
            <div class="service-content">
              <h3 data-i18n="service1Title"><?php esc_html_e( 'Facilitate North Star vision design', 'li-gardner' ); ?></h3>
              <p data-i18n="service1Desc"><?php esc_html_e( 'Make success clear and concrete, with a shared North Star vision your teams align around, endorse and support.', 'li-gardner' ); ?></p>
              <p class="service-outcome" data-i18n="service1Outcome"><?php esc_html_e( 'Connect and set strategy for success', 'li-gardner' ); ?></p>
            </div>
          </article>
          <article class="service-card">
            <span class="service-number">02</span>
            <div class="service-content">
              <h3 data-i18n="service2Title"><?php esc_html_e( 'Lead MVP discovery and scoping', 'li-gardner' ); ?></h3>
              <p data-i18n="service2Desc"><?php esc_html_e( 'Define the right problem to solve, design the minimum viable product (MVP) that will move the needle, and shape the right team to deliver it.', 'li-gardner' ); ?></p>
              <p class="service-outcome" data-i18n="service2Outcome"><?php esc_html_e( 'Define the start and build momentum', 'li-gardner' ); ?></p>
            </div>
          </article>
          <article class="service-card">
            <span class="service-number">03</span>
            <div class="service-content">
              <h3 data-i18n="service3Title"><?php esc_html_e( 'Design UX strategy and holistic experience', 'li-gardner' ); ?></h3>
              <p data-i18n="service3Desc"><?php esc_html_e( 'Hands-on UX strategy and end-to-end experience design to make your product stand out, earn adoption and support your ambition to reach millions of users.', 'li-gardner' ); ?></p>
              <p class="service-outcome" data-i18n="service3Outcome"><?php esc_html_e( 'Make it real, together', 'li-gardner' ); ?></p>
            </div>
          </article>
          <article class="service-card">
            <span class="service-number">04</span>
            <div class="service-content">
              <h3 data-i18n="service4Title"><?php esc_html_e( 'Build user-centred design capability', 'li-gardner' ); ?></h3>
              <p data-i18n="service4Desc"><?php esc_html_e( 'Establish how successful products are designed and developed in your team, with practical ways of working that deliver lasting benefits.', 'li-gardner' ); ?></p>
              <p class="service-outcome" data-i18n="service4Outcome"><?php esc_html_e( 'An innovation engine for continuous value delivery', 'li-gardner' ); ?></p>
            </div>
          </article>
        </div>
      </div>
    </section>
