<?php
/**
 * Block Name: Client Testimonials
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="testimonials"';
$class_name = 'testimonial-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label = function_exists( 'get_field' ) && get_field( 'testimonial_label' ) ? get_field( 'testimonial_label' ) : 'Testimonials';

$q1_p1   = function_exists( 'get_field' ) && get_field( 'q1_p1' ) ? get_field( 'q1_p1' ) : 'Li is an outstanding product and service design leader — someone you can trust to take ownership of complex, ambiguous challenges and deliver real outcomes.';
$q1_p2   = function_exists( 'get_field' ) && get_field( 'q1_p2' ) ? get_field( 'q1_p2' ) : 'Li has a real strength in building relationships and working effectively with a wide range of stakeholders. What really stands out is Li’s ability to connect strategic intent to practical delivery.';
$q1_name = function_exists( 'get_field' ) && get_field( 'q1_name' ) ? get_field( 'q1_name' ) : 'Dave Clark';
$q1_role = function_exists( 'get_field' ) && get_field( 'q1_role' ) ? get_field( 'q1_role' ) : 'Delivery Director of Zühlke';

$q2_p1   = function_exists( 'get_field' ) && get_field( 'q2_p1' ) ? get_field( 'q2_p1' ) : 'I have worked with Li on several high-profile and strategic accounts over the years, where she has always demonstrated incredible capabilities and amazing flair...';
$q2_p2   = function_exists( 'get_field' ) && get_field( 'q2_p2' ) ? get_field( 'q2_p2' ) : 'She introduced the framework that would consistently join up the effort by 18 varied communities, and the senior stakeholders very much impressed by her ability not only in product and design, but also in making everyone feeling heard.';
$q2_name = function_exists( 'get_field' ) && get_field( 'q2_name' ) ? get_field( 'q2_name' ) : 'Shen Xu';
$q2_role = function_exists( 'get_field' ) && get_field( 'q2_role' ) ? get_field( 'q2_role' ) : 'Account Director for Co-op';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?> aria-labelledby="testimonial-heading">
  <div class="shell testimonial-grid">
    <h2 class="section-label reveal" id="testimonial-heading" data-i18n="testimonialLabel"><?php echo esc_html( $label ); ?></h2>
    <div class="testimonial-list stagger-group">
      <figure class="testimonial">
        <blockquote>
          <p data-i18n="quote1P1"><?php echo esc_html( $q1_p1 ); ?></p>
          <p data-i18n="quote1P2"><?php echo esc_html( $q1_p2 ); ?></p>
        </blockquote>
        <figcaption>
          <strong><?php echo esc_html( $q1_name ); ?></strong>
          <span data-i18n="quote1Role"><?php echo esc_html( $q1_role ); ?></span>
        </figcaption>
      </figure>
      <figure class="testimonial">
        <blockquote>
          <p data-i18n="quote2P1"><?php echo esc_html( $q2_p1 ); ?></p>
          <p data-i18n="quote2P2"><?php echo esc_html( $q2_p2 ); ?></p>
        </blockquote>
        <figcaption>
          <strong><?php echo esc_html( $q2_name ); ?></strong>
          <span data-i18n="quote2Role"><?php echo esc_html( $q2_role ); ?></span>
        </figcaption>
      </figure>
    </div>
  </div>
</section>
