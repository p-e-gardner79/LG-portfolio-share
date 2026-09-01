<?php
/**
 * Block Name: Why Me (Lean Principal Model)
 */
$anchor = ! empty( $block['anchor'] ) ? ' id="' . esc_attr( $block['anchor'] ) . '"' : ' id="model"';
$class_name = 'model-section' . ( ! empty( $block['className'] ) ? ' ' . $block['className'] : '' );

$label   = function_exists( 'get_field' ) && get_field( 'model_label' ) ? get_field( 'model_label' ) : 'Why me';
$heading = function_exists( 'get_field' ) && get_field( 'model_heading' ) ? get_field( 'model_heading' ) : 'Lean principal-level expertise, embedded in your team.';

$m1_title = function_exists( 'get_field' ) && get_field( 'm1_title' ) ? get_field( 'm1_title' ) : 'Principal-level, hands-on';
$m1_desc  = function_exists( 'get_field' ) && get_field( 'm1_desc' ) ? get_field( 'm1_desc' ) : 'Former principal consultant at global technology consultancies and strategic research and design leader for multinational client teams. I shape the strategy and work directly on the diagnosis, decisions and delivery.';

$m2_title = function_exists( 'get_field' ) && get_field( 'm2_title' ) ? get_field( 'm2_title' ) : 'Embedded, not separate';
$m2_desc  = function_exists( 'get_field' ) && get_field( 'm2_desc' ) ? get_field( 'm2_desc' ) : 'Bring diverse senior stakeholders across business and technology—from leadership to delivery—around a shared goal. Align priorities, connect teams and build the advocacy network needed to scale change.';

$m3_title = function_exists( 'get_field' ) && get_field( 'm3_title' ) ? get_field( 'm3_title' ) : 'Lean, flexible and quick to engage';
$m3_desc  = function_exists( 'get_field' ) && get_field( 'm3_desc' ) ? get_field( 'm3_desc' ) : 'Direct access to principal-level expertise in my lean, focused engagement—embedded within your own or an existing partner team. Fixed-term and rolling engagements support a quicker start and the flexibility to adapt as priorities change.';

$m4_title = function_exists( 'get_field' ) && get_field( 'm4_title' ) ? get_field( 'm4_title' ) : 'Fresh thinking, capability stays.';
$m4_desc  = function_exists( 'get_field' ) && get_field( 'm4_desc' ) ? get_field( 'm4_desc' ) : 'An independent outside view helps your team challenge assumptions, weigh options and make informed decisions. Working alongside you, I share knowledge and show by doing—so capability grows through the work, not just a handover.';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="shell model-grid">
    <div class="reveal">
      <p class="section-label" data-i18n="modelLabel"><?php echo esc_html( $label ); ?></p>
      <h2 data-i18n="modelHeading"><?php echo esc_html( $heading ); ?></h2>
    </div>
    <div class="model-list stagger-group">
      <article class="model-item">
        <span>01</span>
        <div>
          <h3 data-i18n="model1Title"><?php echo esc_html( $m1_title ); ?></h3>
          <p data-i18n="model1Desc"><?php echo esc_html( $m1_desc ); ?></p>
        </div>
      </article>
      <article class="model-item">
        <span>02</span>
        <div>
          <h3 data-i18n="model2Title"><?php echo esc_html( $m2_title ); ?></h3>
          <p data-i18n="model2Desc"><?php echo esc_html( $m2_desc ); ?></p>
        </div>
      </article>
      <article class="model-item">
        <span>03</span>
        <div>
          <h3 data-i18n="model3Title"><?php echo esc_html( $m3_title ); ?></h3>
          <p data-i18n="model3Desc"><?php echo esc_html( $m3_desc ); ?></p>
        </div>
      </article>
      <article class="model-item">
        <span>04</span>
        <div>
          <h3 data-i18n="model4Title"><?php echo esc_html( $m4_title ); ?></h3>
          <p data-i18n="model4Desc"><?php echo esc_html( $m4_desc ); ?></p>
        </div>
      </article>
    </div>
  </div>
</section>
