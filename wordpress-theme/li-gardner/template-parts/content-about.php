<?php
/**
 * Template part for displaying About Section
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- About Section -->
    <section class="about-section" id="about">
      <div class="shell about-grid">
        <div class="about-mark reveal" aria-hidden="true">LG</div>
        <div class="about-copy reveal">
          <p class="section-label" data-i18n="aboutLabel"><?php esc_html_e( 'About Li', 'li-gardner' ); ?></p>
          <h2 data-i18n="aboutHeading"><?php esc_html_e( 'A strategic catalyst who can go deep—and work across silos.', 'li-gardner' ); ?></h2>
          <p class="large-copy" data-i18n="aboutCopy1"><?php esc_html_e( 'I bring more than 20 years of strategic and hands-on experience across consulting, technology and complex organisations. I connect leaders, specialists and delivery teams to turn ambiguity into aligned decisions and practical momentum.', 'li-gardner' ); ?></p>
          <p data-i18n="aboutCopy2"><?php esc_html_e( 'My work spans product and platform strategy, user research, service design, data, technology, operating models, change and delivery. Method- and stack-agnostic, I focus on the user and business outcomes that should shape the solution—not a predetermined answer.', 'li-gardner' ); ?></p>
          <div class="credentials stagger-group" aria-label="<?php esc_attr_e( 'Experience summary', 'li-gardner' ); ?>">
            <div class="credential-item">
              <strong>20+</strong>
              <span data-i18n="cred1"><?php esc_html_e( 'years connecting strategy and delivery', 'li-gardner' ); ?></span>
            </div>
            <div class="credential-item">
              <strong data-i18n="cred2Title"><?php esc_html_e( 'Global', 'li-gardner' ); ?></strong>
              <span data-i18n="cred2"><?php esc_html_e( 'private and public-sector experience', 'li-gardner' ); ?></span>
            </div>
            <div class="credential-item">
              <strong data-i18n="cred3Title"><?php esc_html_e( 'Lean', 'li-gardner' ); ?></strong>
              <span data-i18n="cred3"><?php esc_html_e( 'independent, principal-led model', 'li-gardner' ); ?></span>
            </div>
          </div>
        </div>
      </div>
    </section>
