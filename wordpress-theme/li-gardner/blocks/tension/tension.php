<?php
/**
 * Block Name: Leadership Dilemma (Tension)
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="tension"';
$class_name = 'tension-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label    = function_exists( 'get_field' ) && get_field( 'tension_label' ) ? get_field( 'tension_label' ) : 'The leadership dilemma';
$heading  = function_exists( 'get_field' ) && get_field( 'tension_heading' ) ? get_field( 'tension_heading' ) : "Most technology investment isn't delivering the return leaders expected.";
$lead     = function_exists( 'get_field' ) && get_field( 'tension_lead' ) ? get_field( 'tension_lead' ) : 'Low adoption is the result of building the wrong thing.';
$copy1    = function_exists( 'get_field' ) && get_field( 'tension_copy_1' ) ? get_field( 'tension_copy_1' ) : "Point solutions treat symptoms. Large rework programmes promise transformation. Neither fixes what's stuck.";
$copy2    = function_exists( 'get_field' ) && get_field( 'tension_copy_2' ) ? get_field( 'tension_copy_2' ) : "When complexity already exists, the answer is less, not more. I apply user-centred design at a strategy level—designing for how people actually work, so the technology sticks.";
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell tension-grid">
    <p class="section-label reveal" data-i18n="tensionLabel"><?php echo esc_html( $label ); ?></p>
    <div class="reveal">
      <h2 data-i18n="tensionHeading"><?php echo esc_html( $heading ); ?></h2>
      <p class="tension-lead" data-i18n="tensionLead"><?php echo esc_html( $lead ); ?></p>
      <p class="large-copy" data-i18n="tensionCopy1"><?php echo esc_html( $copy1 ); ?></p>
      <p class="large-copy" data-i18n="tensionCopy2"><?php echo esc_html( $copy2 ); ?></p>
    </div>
  </div>
</section>
