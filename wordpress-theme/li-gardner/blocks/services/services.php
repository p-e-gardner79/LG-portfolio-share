<?php
/**
 * Block Name: Services Grid
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="services"';
$class_name = 'services-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$heading = function_exists( 'get_field' ) && get_field( 'services_heading' ) ? get_field( 'services_heading' ) : 'My services';

$s1_title   = function_exists( 'get_field' ) && get_field( 's1_title' ) ? get_field( 's1_title' ) : 'Facilitate North Star vision design';
$s1_desc    = function_exists( 'get_field' ) && get_field( 's1_desc' ) ? get_field( 's1_desc' ) : 'Make success clear and concrete, with a shared North Star vision your teams align around, endorse and support.';
$s1_outcome = function_exists( 'get_field' ) && get_field( 's1_outcome' ) ? get_field( 's1_outcome' ) : 'Connect and set strategy for success';

$s2_title   = function_exists( 'get_field' ) && get_field( 's2_title' ) ? get_field( 's2_title' ) : 'Lead MVP discovery and scoping';
$s2_desc    = function_exists( 'get_field' ) && get_field( 's2_desc' ) ? get_field( 's2_desc' ) : 'Define the right problem to solve, design the minimum viable product (MVP) that will move the needle, and shape the right team to deliver it.';
$s2_outcome = function_exists( 'get_field' ) && get_field( 's2_outcome' ) ? get_field( 's2_outcome' ) : 'Define the start and build momentum';

$s3_title   = function_exists( 'get_field' ) && get_field( 's3_title' ) ? get_field( 's3_title' ) : 'Design UX strategy and holistic experience';
$s3_desc    = function_exists( 'get_field' ) && get_field( 's3_desc' ) ? get_field( 's3_desc' ) : 'Hands-on UX strategy and end-to-end experience design to make your product stand out, earn adoption and support your ambition to reach millions of users.';
$s3_outcome = function_exists( 'get_field' ) && get_field( 's3_outcome' ) ? get_field( 's3_outcome' ) : 'Make it real, together';

$s4_title   = function_exists( 'get_field' ) && get_field( 's4_title' ) ? get_field( 's4_title' ) : 'Build user-centred design capability';
$s4_desc    = function_exists( 'get_field' ) && get_field( 's4_desc' ) ? get_field( 's4_desc' ) : 'Establish how successful products are designed and developed in your team, with practical ways of working that deliver lasting benefits.';
$s4_outcome = function_exists( 'get_field' ) && get_field( 's4_outcome' ) ? get_field( 's4_outcome' ) : 'An innovation engine for continuous value delivery';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?> aria-labelledby="services-heading">
  <div class="shell">
    <h2 id="services-heading" class="reveal" data-i18n="servicesHeading"><?php echo esc_html( $heading ); ?></h2>
    <div class="services-grid stagger-group">
      <article class="service-card">
        <span class="service-number">01</span>
        <div class="service-content">
          <h3 data-i18n="service1Title"><?php echo esc_html( $s1_title ); ?></h3>
          <p data-i18n="service1Desc"><?php echo esc_html( $s1_desc ); ?></p>
          <p class="service-outcome" data-i18n="service1Outcome"><?php echo esc_html( $s1_outcome ); ?></p>
        </div>
      </article>
      <article class="service-card">
        <span class="service-number">02</span>
        <div class="service-content">
          <h3 data-i18n="service2Title"><?php echo esc_html( $s2_title ); ?></h3>
          <p data-i18n="service2Desc"><?php echo esc_html( $s2_desc ); ?></p>
          <p class="service-outcome" data-i18n="service2Outcome"><?php echo esc_html( $s2_outcome ); ?></p>
        </div>
      </article>
      <article class="service-card">
        <span class="service-number">03</span>
        <div class="service-content">
          <h3 data-i18n="service3Title"><?php echo esc_html( $s3_title ); ?></h3>
          <p data-i18n="service3Desc"><?php echo esc_html( $s3_desc ); ?></p>
          <p class="service-outcome" data-i18n="service3Outcome"><?php echo esc_html( $s3_outcome ); ?></p>
        </div>
      </article>
      <article class="service-card">
        <span class="service-number">04</span>
        <div class="service-content">
          <h3 data-i18n="service4Title"><?php echo esc_html( $s4_title ); ?></h3>
          <p data-i18n="service4Desc"><?php echo esc_html( $s4_desc ); ?></p>
          <p class="service-outcome" data-i18n="service4Outcome"><?php echo esc_html( $s4_outcome ); ?></p>
        </div>
      </article>
    </div>
  </div>
</section>
