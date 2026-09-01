<?php
/**
 * The header for Li Gardner Portfolio theme
 *
 * @package Li_Gardner
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="profile" href="https://gmpg.org/xfn/11">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <!-- Scroll Progress Indicator -->
  <div class="scroll-progress-bar" id="scroll-progress" aria-hidden="true"></div>

  <main id="app-root" lang="<?php echo esc_attr( determine_locale() === 'zh_CN' ? 'zh-Hans' : 'en' ); ?>">
    <!-- Sticky Navigation Header with Background Blur -->
    <header class="site-header" id="site-header">
      <div class="shell">
        <nav class="nav" aria-label="<?php esc_attr_e( 'Primary navigation', 'li-gardner' ); ?>">
          <a class="wordmark" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" id="nav-brand" aria-label="<?php esc_attr_e( 'Li Gardner, home', 'li-gardner' ); ?>">
            <span class="brand-icon">LG</span>
            <span class="brand-copy">
              <span class="wordmark-name"><?php bloginfo( 'name' ); ?></span>
              <span class="brand-strapline" data-i18n="strapline"><?php bloginfo( 'description' ); ?></span>
            </span>
          </a>

          <div class="nav-tools">
            <div class="nav-links" id="primary-nav-links">
              <a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" data-i18n="navAbout"><?php esc_html_e( 'About', 'li-gardner' ); ?></a>
              <a href="<?php echo esc_url( home_url( '/#approach' ) ); ?>" data-i18n="navApproach"><?php esc_html_e( 'Approach', 'li-gardner' ); ?></a>
              <a href="<?php echo esc_url( home_url( '/#services' ) ); ?>" data-i18n="navServices"><?php esc_html_e( 'Services', 'li-gardner' ); ?></a>
              <a href="<?php echo esc_url( home_url( '/#work-examples' ) ); ?>" data-i18n="navExamples"><?php esc_html_e( 'Work examples', 'li-gardner' ); ?></a>
              <a class="nav-cta" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" id="nav-cta-link">
                <span data-i18n="navCta"><?php esc_html_e( "Let's talk", 'li-gardner' ); ?></span>
                <svg aria-hidden="true" viewBox="0 0 24 24" class="arrow-icon diagonal" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M5 12h14M14 7l5 5-5 5" />
                </svg>
              </a>
            </div>
            <button type="button" class="language-switch" id="lang-toggle" aria-label="<?php esc_attr_e( 'Switch language', 'li-gardner' ); ?>">
              中文
            </button>
            <button type="button" class="mobile-menu-btn" id="mobile-menu-toggle" aria-label="<?php esc_attr_e( 'Toggle navigation menu', 'li-gardner' ); ?>" aria-expanded="false">
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
              <span class="hamburger-line"></span>
            </button>
          </div>
        </nav>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer" aria-hidden="true">
        <div class="mobile-nav-links">
          <a href="<?php echo esc_url( home_url( '/#about' ) ); ?>" class="mobile-nav-link" data-i18n="navAbout"><?php esc_html_e( 'About', 'li-gardner' ); ?></a>
          <a href="<?php echo esc_url( home_url( '/#approach' ) ); ?>" class="mobile-nav-link" data-i18n="navApproach"><?php esc_html_e( 'Approach', 'li-gardner' ); ?></a>
          <a href="<?php echo esc_url( home_url( '/#services' ) ); ?>" class="mobile-nav-link" data-i18n="navServices"><?php esc_html_e( 'Services', 'li-gardner' ); ?></a>
          <a href="<?php echo esc_url( home_url( '/#work-examples' ) ); ?>" class="mobile-nav-link" data-i18n="navExamples"><?php esc_html_e( 'Work examples', 'li-gardner' ); ?></a>
          <a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="mobile-nav-link mobile-nav-cta">
            <span data-i18n="navCta"><?php esc_html_e( "Let's talk", 'li-gardner' ); ?></span>
            <svg aria-hidden="true" viewBox="0 0 24 24" class="arrow-icon diagonal" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M5 12h14M14 7l5 5-5 5" />
            </svg>
          </a>
        </div>
      </div>
    </header>
