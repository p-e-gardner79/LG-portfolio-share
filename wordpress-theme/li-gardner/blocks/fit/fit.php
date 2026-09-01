<?php
/**
 * Block Name: Where I'm Most Useful (Fit)
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="fit"';
$class_name = 'fit-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label    = function_exists( 'get_field' ) && get_field( 'fit_label' ) ? get_field( 'fit_label' ) : "Where I'm most useful";
$heading1 = function_exists( 'get_field' ) && get_field( 'fit_heading_1' ) ? get_field( 'fit_heading_1' ) : 'You have capability.';
$heading2 = function_exists( 'get_field' ) && get_field( 'fit_heading_2' ) ? get_field( 'fit_heading_2' ) : 'But progress is constrained.';

$item1 = function_exists( 'get_field' ) && get_field( 'fit_item_1' ) ? get_field( 'fit_item_1' ) : 'Product, user, business and technology priorities are disconnected.';
$item2 = function_exists( 'get_field' ) && get_field( 'fit_item_2' ) ? get_field( 'fit_item_2' ) : 'Teams are delivering features and activity without materially improving adoption or business value.';
$item3 = function_exists( 'get_field' ) && get_field( 'fit_item_3' ) ? get_field( 'fit_item_3' ) : 'Teams are solving local symptoms while the wider system gets harder to change.';
$item4 = function_exists( 'get_field' ) && get_field( 'fit_item_4' ) ? get_field( 'fit_item_4' ) : 'You need outside challenge and senior judgement—while retaining control.';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell fit-grid">
    <p class="section-label light reveal" data-i18n="fitLabel"><?php echo esc_html( $label ); ?></p>
    <div class="reveal">
      <h2>
        <span data-i18n="fitHeading1"><?php echo esc_html( $heading1 ); ?></span><br>
        <span data-i18n="fitHeading2"><?php echo esc_html( $heading2 ); ?></span>
      </h2>
      <ul class="stagger-group">
        <li><span>01</span><span data-i18n="fitItem1"><?php echo esc_html( $item1 ); ?></span></li>
        <li><span>02</span><span data-i18n="fitItem2"><?php echo esc_html( $item2 ); ?></span></li>
        <li><span>03</span><span data-i18n="fitItem3"><?php echo esc_html( $item3 ); ?></span></li>
        <li><span>04</span><span data-i18n="fitItem4"><?php echo esc_html( $item4 ); ?></span></li>
      </ul>
    </div>
  </div>
</section>
