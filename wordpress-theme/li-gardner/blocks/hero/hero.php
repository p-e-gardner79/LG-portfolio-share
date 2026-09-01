<?php
/**
 * Block Name: Hero & System Network
 *
 * @param array $block The block settings and attributes.
 * @param string $content The block inner HTML (empty).
 * @param bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = ' id="' . esc_attr( $block['anchor'] ) . '"';
} else {
    $anchor = ' id="top"';
}

$class_name = 'hero';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}

// ACF or fallback default values
$line1     = function_exists( 'get_field' ) && get_field( 'hero_line_1' ) ? get_field( 'hero_line_1' ) : 'Connect what exists.';
$line2     = function_exists( 'get_field' ) && get_field( 'hero_line_2' ) ? get_field( 'hero_line_2' ) : 'Change what matters.';
$line3     = function_exists( 'get_field' ) && get_field( 'hero_line_3' ) ? get_field( 'hero_line_3' ) : 'Deliver what works.';
$intro     = function_exists( 'get_field' ) && get_field( 'hero_intro' ) ? get_field( 'hero_intro' ) : 'User-centred strategy and design for products, platforms and services—with the change needed for adoption to stick.';
$cta_text  = function_exists( 'get_field' ) && get_field( 'hero_cta_text' ) ? get_field( 'hero_cta_text' ) : "Let's talk";
$cta_link  = function_exists( 'get_field' ) && get_field( 'hero_cta_link' ) ? get_field( 'hero_cta_link' ) : '#contact';
$locations = function_exists( 'get_field' ) && get_field( 'hero_locations' ) ? get_field( 'hero_locations' ) : 'Worked locations: London · Manchester · Edinburgh · New York · San Francisco · Singapore · Shanghai · Hong Kong · Zurich';
?>
<section class="<?php echo esc_attr( $class_name ); ?>"<?php echo $anchor; ?>>
  <div class="hero-ambient-glow" id="hero-glow" aria-hidden="true"></div>
  <div class="hero-grid shell">
    <div class="hero-copy reveal">
      <h1 id="hero-heading">
        <span data-i18n="heroLine1"><?php echo esc_html( $line1 ); ?></span><br>
        <span data-i18n="heroLine2"><?php echo esc_html( $line2 ); ?></span><br>
        <span class="highlight" data-i18n="heroLine3"><?php echo esc_html( $line3 ); ?></span>
      </h1>
      <p class="hero-intro" data-i18n="heroIntro">
        <?php echo esc_html( $intro ); ?>
      </p>
      <div class="hero-actions">
        <a class="consultation-cta" href="<?php echo esc_url( $cta_link ); ?>" id="hero-cta-btn">
          <span data-i18n="ctaConsultation"><?php echo esc_html( $cta_text ); ?></span>
          <svg aria-hidden="true" viewBox="0 0 24 24" class="arrow-icon diagonal" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M5 12h14M14 7l5 5-5 5" />
          </svg>
        </a>
      </div>
    </div>

    <p class="hero-footer" data-i18n="heroLocations">
      <?php echo esc_html( $locations ); ?>
    </p>

    <div class="leverage-card" id="leverage-card" aria-label="System Leverage Point interactive network visual">
      <div class="orbit" id="leverage-orbit" aria-hidden="true">
        <svg class="network-visual" viewBox="0 0 380 380" role="presentation">
          <defs>
            <radialGradient id="system-effect" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#ff765e" stop-opacity="0.24" />
              <stop offset="32%" stop-color="#ff765e" stop-opacity="0.12" />
              <stop offset="68%" stop-color="#ff765e" stop-opacity="0.045" />
              <stop offset="100%" stop-color="#ff765e" stop-opacity="0" />
            </radialGradient>
            <linearGradient id="network-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16" />
              <stop offset="50%" stop-color="#ff765e" stop-opacity="0.58" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.16" />
            </linearGradient>
          </defs>

          <circle class="system-field" cx="190" cy="190" r="184" fill="url(#system-effect)" />
          <circle class="ecosystem-ring outer" cx="190" cy="190" r="146" />
          <circle class="ecosystem-ring inner" cx="190" cy="190" r="99" />

          <g class="network-lines" stroke="url(#network-line)">
            <path d="M190 190L190 53M190 190L311 119M190 190L311 259M190 190L190 327M190 190L69 259M190 190L69 119" />
            <path class="secondary-link" d="M190 53L311 119L311 259L190 327L69 259L69 119Z" />
            <path class="secondary-link" d="M190 53L69 259M311 119L190 327M311 259L69 119" />
          </g>

          <g class="synapses">
            <circle cx="190" cy="119" r="3" />
            <circle cx="251" cy="154" r="2.5" />
            <circle cx="252" cy="226" r="3" />
            <circle cx="190" cy="258" r="2.5" />
            <circle cx="128" cy="226" r="3" />
            <circle cx="128" cy="154" r="2.5" />
            <circle cx="250" cy="86" r="2" />
            <circle cx="311" cy="189" r="2" />
            <circle cx="250" cy="293" r="2" />
            <circle cx="129" cy="293" r="2" />
            <circle cx="69" cy="189" r="2" />
            <circle cx="129" cy="86" r="2" />
          </g>

          <g class="network-node" data-node="business">
            <circle cx="190" cy="53" r="31" />
            <text x="190" y="57" data-i18n="nodeBusiness">BUSINESS</text>
          </g>
          <g class="network-node" data-node="technology">
            <circle cx="311" cy="119" r="31" />
            <text x="311" y="123" data-i18n="nodeTechnology">TECHNOLOGY</text>
          </g>
          <g class="network-node" data-node="data-ai">
            <circle cx="311" cy="259" r="31" />
            <text x="311" y="256">
              <tspan x="311" data-i18n="nodeData">DATA</tspan>
              <tspan x="311" dy="11" data-i18n="nodeAI">&amp; AI</tspan>
            </text>
          </g>
          <g class="network-node" data-node="people">
            <circle cx="190" cy="327" r="31" />
            <text x="190" y="331" data-i18n="nodePeople">PEOPLE</text>
          </g>
          <g class="network-node" data-node="customer">
            <circle cx="69" cy="259" r="31" />
            <text x="69" y="263" data-i18n="nodeCustomer">CUSTOMER</text>
          </g>
          <g class="network-node" data-node="delivery">
            <circle cx="69" cy="119" r="31" />
            <text x="69" y="123" data-i18n="nodeDelivery">DELIVERY</text>
          </g>

          <g class="focus-node" data-node="leverage">
            <circle class="focus-halo" cx="190" cy="190" r="30" />
            <circle cx="190" cy="190" r="19" />
            <text x="190" y="187">
              <tspan x="190" data-i18n="nodeLeverage">LEVERAGE</tspan>
              <tspan x="190" dy="8" data-i18n="nodePoint">POINT</tspan>
            </text>
          </g>
        </svg>
      </div>
    </div>
  </div>
</section>
