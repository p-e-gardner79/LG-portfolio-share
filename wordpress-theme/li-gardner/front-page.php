<?php
/**
 * The front page template file
 *
 * Renders Gutenberg / ACF blocks placed in the page editor,
 * or falls back to the complete default modular section stack if empty.
 *
 * @package Li_Gardner
 * @version 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();

// Check if page content contains blocks or custom content
$has_custom_content = false;
if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        $content = get_the_content();
        if ( ! empty( trim( $content ) ) ) {
            $has_custom_content = true;
            the_content();
        }
    }
}

// Fallback: If no blocks or page content have been added yet, render the full default stack
if ( ! $has_custom_content ) {
    get_template_part( 'template-parts/content', 'hero' );
    get_template_part( 'template-parts/content', 'clients' );
    get_template_part( 'template-parts/content', 'tension' );
    get_template_part( 'template-parts/content', 'approach' );
    get_template_part( 'template-parts/content', 'services' );
    get_template_part( 'template-parts/content', 'model' );
    get_template_part( 'template-parts/content', 'testimonials' );
    get_template_part( 'template-parts/content', 'about' );
    get_template_part( 'template-parts/content', 'fit' );
    get_template_part( 'template-parts/content', 'contact' );
}

get_footer();
