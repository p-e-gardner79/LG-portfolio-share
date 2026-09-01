<?php
/**
 * Template part for displaying Fit Section (Where I'm most useful)
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Fit Section (Where I'm most useful) -->
    <section class="fit-section" id="fit">
      <div class="shell fit-grid">
        <p class="section-label light reveal" data-i18n="fitLabel"><?php esc_html_e( "Where I'm most useful", 'li-gardner' ); ?></p>
        <div class="reveal">
          <h2>
            <span data-i18n="fitHeading1"><?php esc_html_e( 'You have capability.', 'li-gardner' ); ?></span><br>
            <span data-i18n="fitHeading2"><?php esc_html_e( 'But progress is constrained.', 'li-gardner' ); ?></span>
          </h2>
          <ul class="stagger-group">
            <li><span>01</span><span data-i18n="fitItem1"><?php esc_html_e( 'Product, user, business and technology priorities are disconnected.', 'li-gardner' ); ?></span></li>
            <li><span>02</span><span data-i18n="fitItem2"><?php esc_html_e( 'Teams are delivering features and activity without materially improving adoption or business value.', 'li-gardner' ); ?></span></li>
            <li><span>03</span><span data-i18n="fitItem3"><?php esc_html_e( 'Teams are solving local symptoms while the wider system gets harder to change.', 'li-gardner' ); ?></span></li>
            <li><span>04</span><span data-i18n="fitItem4"><?php esc_html_e( 'You need outside challenge and senior judgement—while retaining control.', 'li-gardner' ); ?></span></li>
          </ul>
        </div>
      </div>
    </section>
