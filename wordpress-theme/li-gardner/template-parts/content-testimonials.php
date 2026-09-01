<?php
/**
 * Template part for displaying Testimonials Section
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Testimonial Section -->
    <section class="testimonial-section" id="testimonials" aria-labelledby="testimonial-heading">
      <div class="shell testimonial-grid">
        <h2 class="section-label reveal" id="testimonial-heading" data-i18n="testimonialLabel"><?php esc_html_e( 'Testimonials', 'li-gardner' ); ?></h2>
        <div class="testimonial-list stagger-group">
          <figure class="testimonial">
            <blockquote>
              <p data-i18n="quote1P1"><?php esc_html_e( 'Li is an outstanding product and service design leader — someone you can trust to take ownership of complex, ambiguous challenges and deliver real outcomes.', 'li-gardner' ); ?></p>
              <p data-i18n="quote1P2"><?php esc_html_e( 'Li has a real strength in building relationships and working effectively with a wide range of stakeholders. What really stands out is Li’s ability to connect strategic intent to practical delivery.', 'li-gardner' ); ?></p>
            </blockquote>
            <figcaption>
              <strong>Dave Clark</strong>
              <span data-i18n="quote1Role"><?php esc_html_e( 'Delivery Director of Zühlke', 'li-gardner' ); ?></span>
            </figcaption>
          </figure>
          <figure class="testimonial">
            <blockquote>
              <p data-i18n="quote2P1"><?php esc_html_e( 'I have worked with Li on several high-profile and strategic accounts over the years, where she has always demonstrated incredible capabilities and amazing flair...', 'li-gardner' ); ?></p>
              <p data-i18n="quote2P2"><?php esc_html_e( 'She introduced the framework that would consistently join up the effort by 18 varied communities, and the senior stakeholders very much impressed by her ability not only in product and design, but also in making everyone feeling heard.', 'li-gardner' ); ?></p>
            </blockquote>
            <figcaption>
              <strong>Shen Xu</strong>
              <span data-i18n="quote2Role"><?php esc_html_e( 'Account Director for Co-op', 'li-gardner' ); ?></span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
