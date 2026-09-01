<?php
/**
 * Template part for displaying Contact Section
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Contact Section -->
    <section class="contact-section" id="contact">
      <div class="shell contact-grid">
        <p class="section-label reveal" data-i18n="contactLabel"><?php esc_html_e( 'Start a conversation', 'li-gardner' ); ?></p>
        <div class="reveal">
          <h2 data-i18n="contactHeading"><?php esc_html_e( "Let's find what is really holding progress back.", 'li-gardner' ); ?></h2>
          <p data-i18n="contactCopy"><?php esc_html_e( 'Need a catalyst, not an army? I help your team unlock more value from the capabilities you already have, bring a fresh perspective and build momentum—without trying to change the whole world at once.', 'li-gardner' ); ?></p>
          
          <form class="contact-form" id="contact-form" method="post" action="<?php echo esc_url( admin_url( 'admin-ajax.php' ) ); ?>">
            <?php wp_nonce_field( 'li_gardner_contact_nonce', 'contact_nonce' ); ?>
            <input type="hidden" name="action" value="li_gardner_contact">

            <div class="form-row">
              <div class="form-group">
                <label for="contact-name" data-i18n="formName"><?php esc_html_e( 'Your Name', 'li-gardner' ); ?></label>
                <input type="text" id="contact-name" name="name" required placeholder="Jane Doe">
              </div>
              <div class="form-group">
                <label for="contact-email" data-i18n="formEmail"><?php esc_html_e( 'Your Email', 'li-gardner' ); ?></label>
                <input type="email" id="contact-email" name="email" required placeholder="jane@example.com">
              </div>
            </div>
            <div class="form-group">
              <label for="contact-message" data-i18n="formMessage"><?php esc_html_e( 'Message', 'li-gardner' ); ?></label>
              <textarea id="contact-message" name="message" rows="4" required placeholder="Tell me about your product, platform or strategy challenge..."></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="consultation-cta consultation-cta-bottom" id="contact-submit-btn">
                <span data-i18n="formSubmit"><?php esc_html_e( 'Send message', 'li-gardner' ); ?></span>
                <svg aria-hidden="true" viewBox="0 0 24 24" class="arrow-icon diagonal" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M5 12h14M14 7l5 5-5 5" />
                </svg>
              </button>
              <div class="form-feedback" id="form-feedback" role="alert"></div>
            </div>
          </form>

          <p class="contact-note" data-i18n="contactNote"><?php esc_html_e( 'Available for independent advisory and embedded transformation engagements.', 'li-gardner' ); ?></p>
        </div>
      </div>
    </section>
