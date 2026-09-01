<?php
/**
 * Block Name: Client Organisations
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="clients"';
$class_name = 'client-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );
$label = function_exists( 'get_field' ) && get_field( 'clients_label' ) ? get_field( 'clients_label' ) : "Selected organisations I've worked with";
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?> aria-label="<?php echo esc_attr( $label ); ?>">
  <div class="shell">
    <p class="client-label reveal" data-i18n="clientLabel"><?php echo esc_html( $label ); ?></p>
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
