<?php
/**
 * Block Name: Contact & Conversation Form
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="contact"';
$class_name = 'contact-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label       = function_exists( 'get_field' ) && get_field( 'contact_label' ) ? get_field( 'contact_label' ) : 'Start a conversation';
$heading     = function_exists( 'get_field' ) && get_field( 'contact_heading' ) ? get_field( 'contact_heading' ) : "Let's find what is really holding progress back.";
$copy        = function_exists( 'get_field' ) && get_field( 'contact_copy' ) ? get_field( 'contact_copy' ) : 'Need a catalyst, not an army? I help your team unlock more value from the capabilities you already have, bring a fresh perspective and build momentum—without trying to change the whole world at once.';
$email       = function_exists( 'get_field' ) && get_field( 'contact_email_addr' ) ? get_field( 'contact_email_addr' ) : 'li.gardner.design@gmail.com';
$response_txt= function_exists( 'get_field' ) && get_field( 'contact_response_time' ) ? get_field( 'contact_response_time' ) : 'You will receive a response within 48 hours';
$button_text = function_exists( 'get_field' ) && get_field( 'contact_btn_text' ) ? get_field( 'contact_btn_text' ) : 'Send message';
$note        = function_exists( 'get_field' ) && get_field( 'contact_note' ) ? get_field( 'contact_note' ) : 'Available for independent advisory and embedded transformation engagements.';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell contact-grid">
    <p class="section-label reveal" data-i18n="contactLabel"><?php echo esc_html( $label ); ?></p>
    <div class="reveal">
      <h2 data-i18n="contactHeading"><?php echo esc_html( $heading ); ?></h2>
      <p data-i18n="contactCopy"><?php echo esc_html( $copy ); ?></p>
      
      <div class="contact-direct-wrap">
        <a href="<?php echo esc_url( 'mailto:' . antispambot( $email ) ); ?>" class="direct-email-link" id="direct-email-link">
          <svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span class="direct-email-text" data-i18n="directEmail"><?php echo esc_html( $email ); ?></span>
        </a>
        <div class="response-guarantee" data-i18n="responseGuarantee">
          <span class="status-pulse-dot" aria-hidden="true"></span>
          <span><?php echo esc_html( $response_txt ); ?></span>
        </div>
      </div>

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
            <span data-i18n="formSubmit"><?php echo esc_html( $button_text ); ?></span>
            <svg aria-hidden="true" viewBox="0 0 24 24" class="arrow-icon diagonal" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 12h14M14 7l5 5-5 5" />
            </svg>
          </button>
          <div class="form-feedback" id="form-feedback" role="alert"></div>
        </div>
      </form>

      <p class="contact-note" data-i18n="contactNote"><?php echo esc_html( $note ); ?></p>
    </div>
  </div>
</section>
