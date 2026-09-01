<?php
/**
 * Block Name: About Li & Credentials
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="about"';
$class_name = 'about-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label    = function_exists( 'get_field' ) && get_field( 'about_label' ) ? get_field( 'about_label' ) : 'About Li';
$heading  = function_exists( 'get_field' ) && get_field( 'about_heading' ) ? get_field( 'about_heading' ) : 'A strategic catalyst who can go deep—and work across silos.';
$copy1    = function_exists( 'get_field' ) && get_field( 'about_copy_1' ) ? get_field( 'about_copy_1' ) : 'I bring more than 20 years of strategic and hands-on experience across consulting, technology and complex organisations. I connect leaders, specialists and delivery teams to turn ambiguity into aligned decisions and practical momentum.';
$copy2    = function_exists( 'get_field' ) && get_field( 'about_copy_2' ) ? get_field( 'about_copy_2' ) : 'My work spans product and platform strategy, user research, service design, data, technology, operating models, change and delivery. Method- and stack-agnostic, I focus on the user and business outcomes that should shape the solution—not a predetermined answer.';

$cred1_num   = function_exists( 'get_field' ) && get_field( 'cred1_num' ) ? get_field( 'cred1_num' ) : '20+';
$cred1_label = function_exists( 'get_field' ) && get_field( 'cred1_label' ) ? get_field( 'cred1_label' ) : 'years connecting strategy and delivery';

$cred2_title = function_exists( 'get_field' ) && get_field( 'cred2_title' ) ? get_field( 'cred2_title' ) : 'Global';
$cred2_label = function_exists( 'get_field' ) && get_field( 'cred2_label' ) ? get_field( 'cred2_label' ) : 'private and public-sector experience';

$cred3_title = function_exists( 'get_field' ) && get_field( 'cred3_title' ) ? get_field( 'cred3_title' ) : 'Lean';
$cred3_label = function_exists( 'get_field' ) && get_field( 'cred3_label' ) ? get_field( 'cred3_label' ) : 'independent, principal-led model';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell about-grid">
    <div class="about-mark reveal" aria-hidden="true">LG</div>
    <div class="about-copy reveal">
      <p class="section-label" data-i18n="aboutLabel"><?php echo esc_html( $label ); ?></p>
      <h2 data-i18n="aboutHeading"><?php echo esc_html( $heading ); ?></h2>
      <p class="large-copy" data-i18n="aboutCopy1"><?php echo esc_html( $copy1 ); ?></p>
      <p data-i18n="aboutCopy2"><?php echo esc_html( $copy2 ); ?></p>
      <div class="credentials stagger-group" aria-label="<?php esc_attr_e( 'Experience summary', 'li-gardner' ); ?>">
        <div class="credential-item">
          <strong><?php echo esc_html( $cred1_num ); ?></strong>
          <span data-i18n="cred1"><?php echo esc_html( $cred1_label ); ?></span>
        </div>
        <div class="credential-item">
          <strong data-i18n="cred2Title"><?php echo esc_html( $cred2_title ); ?></strong>
          <span data-i18n="cred2"><?php echo esc_html( $cred2_label ); ?></span>
        </div>
        <div class="credential-item">
          <strong data-i18n="cred3Title"><?php echo esc_html( $cred3_title ); ?></strong>
          <span data-i18n="cred3"><?php echo esc_html( $cred3_label ); ?></span>
        </div>
      </div>
    </div>
  </div>
</section>
