<?php
/**
 * Template part for displaying Clients Section
 *
 * @package Li_Gardner
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Client Section -->
    <section class="client-section" id="clients" aria-label="<?php esc_attr_e( 'Selected organisations Li has worked with', 'li-gardner' ); ?>">
      <div class="shell">
        <p class="client-label reveal" data-i18n="clientLabel"><?php esc_html_e( "Selected organisations I've worked with", 'li-gardner' ); ?></p>
        <div class="client-logos stagger-group" lang="en">
          <span class="logo-item logo-government">Gov UK</span>
          <span class="logo-item logo-nhs">NHS</span>
          <span class="logo-item logo-hsbc">HSBC</span>
          <span class="logo-item logo-blackrock">BlackRock</span>
          <span class="logo-item logo-royalmail">Royal Mail</span>
          <span class="logo-item logo-axa">AXA</span>
          <span class="logo-item logo-rps">Royal Pharmaceutical<br>Society</span>
          <span class="logo-item logo-regeneron">Regeneron</span>
          <span class="logo-item logo-coop">Co-op</span>
          <span class="logo-item logo-amway">amway</span>
          <span class="logo-item logo-reuters">THOMSON REUTERS</span>
          <span class="logo-item logo-microsoft">Microsoft</span>
          <span class="logo-item logo-ea-cell"><span class="logo-ea">EA</span></span>
          <span class="logo-item logo-natwest">NatWest</span>
        </div>
      </div>
    </section>
