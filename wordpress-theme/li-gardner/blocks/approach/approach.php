<?php
/**
 * Block Name: High-Leverage Intervention (Approach)
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="approach"';
$class_name = 'approach-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label    = function_exists( 'get_field' ) && get_field( 'approach_label' ) ? get_field( 'approach_label' ) : 'A high-leverage intervention';
$line1    = function_exists( 'get_field' ) && get_field( 'approach_heading_1' ) ? get_field( 'approach_heading_1' ) : 'Connect technology,';
$line2    = function_exists( 'get_field' ) && get_field( 'approach_heading_2' ) ? get_field( 'approach_heading_2' ) : 'people and business';
$line3    = function_exists( 'get_field' ) && get_field( 'approach_heading_3' ) ? get_field( 'approach_heading_3' ) : 'for scaled impact';

$step1_title = function_exists( 'get_field' ) && get_field( 'step1_title' ) ? get_field( 'step1_title' ) : 'Frame the opportunity';
$step1_desc  = function_exists( 'get_field' ) && get_field( 'step1_desc' ) ? get_field( 'step1_desc' ) : 'Clarify the user need, business value and constraint where focused action will have the greatest effect.';

$step2_title = function_exists( 'get_field' ) && get_field( 'step2_title' ) ? get_field( 'step2_title' ) : 'Connect the system';
$step2_desc  = function_exists( 'get_field' ) && get_field( 'step2_desc' ) ? get_field( 'step2_desc' ) : 'Bring user, business, technology, data and delivery realities into one decision picture.';

$step3_title = function_exists( 'get_field' ) && get_field( 'step3_title' ) ? get_field( 'step3_title' ) : 'Shape the solution';
$step3_desc  = function_exists( 'get_field' ) && get_field( 'step3_desc' ) ? get_field( 'step3_desc' ) : 'Turn insight into a focused product, platform or service proposition that teams can test, align around and deliver.';

$step4_title = function_exists( 'get_field' ) && get_field( 'step4_title' ) ? get_field( 'step4_title' ) : 'Embed adoption';
$step4_desc  = function_exists( 'get_field' ) && get_field( 'step4_desc' ) ? get_field( 'step4_desc' ) : 'Build the decisions, behaviours and internal capability that turn delivery into sustained use and value.';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell">
    <div class="section-heading reveal">
      <p class="section-label light" data-i18n="approachLabel"><?php echo esc_html( $label ); ?></p>
      <h2>
        <span data-i18n="approachHeading1"><?php echo esc_html( $line1 ); ?></span><br>
        <span data-i18n="approachHeading2"><?php echo esc_html( $line2 ); ?></span><br>
        <span data-i18n="approachHeading3"><?php echo esc_html( $line3 ); ?></span>
      </h2>
    </div>
    <div class="steps stagger-group">
      <article class="step-card">
        <span>01</span>
        <h3 data-i18n="step1Title"><?php echo esc_html( $step1_title ); ?></h3>
        <p data-i18n="step1Desc"><?php echo esc_html( $step1_desc ); ?></p>
      </article>
      <article class="step-card">
        <span>02</span>
        <h3 data-i18n="step2Title"><?php echo esc_html( $step2_title ); ?></h3>
        <p data-i18n="step2Desc"><?php echo esc_html( $step2_desc ); ?></p>
      </article>
      <article class="step-card">
        <span>03</span>
        <h3 data-i18n="step3Title"><?php echo esc_html( $step3_title ); ?></h3>
        <p data-i18n="step3Desc"><?php echo esc_html( $step3_desc ); ?></p>
      </article>
      <article class="step-card">
        <span>04</span>
        <h3 data-i18n="step4Title"><?php echo esc_html( $step4_title ); ?></h3>
        <p data-i18n="step4Desc"><?php echo esc_html( $step4_desc ); ?></p>
      </article>
    </div>
  </div>
</section>
