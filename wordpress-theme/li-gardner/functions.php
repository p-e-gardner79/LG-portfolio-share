<?php
/**
 * Li Gardner Portfolio Theme Functions and Definitions
 *
 * @package Li_Gardner
 * @version 1.1.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function li_gardner_theme_setup() {
    // Make theme available for translation.
    load_theme_textdomain( 'li-gardner', get_template_directory() . '/languages' );

    // Let WordPress manage the document title.
    add_theme_support( 'title-tag' );

    // Enable support for Post Thumbnails on posts and pages.
    add_theme_support( 'post-thumbnails' );

    // Add support for editor styles.
    add_theme_support( 'editor-styles' );
    add_editor_style( 'style.css' );

    // Add support for full and wide align images/blocks.
    add_theme_support( 'align-wide' );

    // Switch default core markup to output valid HTML5.
    add_theme_support(
        'html5',
        array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
            'style',
            'script',
        )
    );

    // Responsive embedded content.
    add_theme_support( 'responsive-embeds' );

    // Register navigation menus.
    register_nav_menus(
        array(
            'primary' => esc_html__( 'Primary Navigation', 'li-gardner' ),
            'mobile'  => esc_html__( 'Mobile Drawer Navigation', 'li-gardner' ),
        )
    );
}
add_action( 'after_setup_theme', 'li_gardner_theme_setup' );

/**
 * Register Custom Gutenberg Block Category
 */
function li_gardner_block_category( $categories ) {
    return array_merge(
        array(
            array(
                'slug'  => 'li-gardner',
                'title' => esc_html__( 'Li Gardner Portfolio', 'li-gardner' ),
                'icon'  => 'superhero-alt',
            ),
        ),
        $categories
    );
}
add_filter( 'block_categories_all', 'li_gardner_block_category', 10, 1 );

/**
 * Register Custom Gutenberg / ACF Blocks
 */
function li_gardner_register_blocks() {
    $blocks = array(
        'hero',
        'clients',
        'tension',
        'approach',
        'services',
        'model',
        'testimonials',
        'about',
        'fit',
        'contact',
    );

    foreach ( $blocks as $block ) {
        $block_dir = get_template_directory() . '/blocks/' . $block;
        $template  = $block_dir . '/' . $block . '.php';

        register_block_type(
            'li-gardner/' . $block,
            array(
                'render_callback' => function( $attributes, $content ) use ( $block, $template ) {
                    // 1. If Gutenberg has saved user-edited block content, render that directly
                    if ( ! empty( trim( (string) $content ) ) ) {
                        // Ensure existing saved contact blocks get the direct email badge if missing
                        if ( 'contact' === $block && false === strpos( $content, 'contact-direct-wrap' ) ) {
                            $email = ! empty( $attributes['email'] ) ? $attributes['email'] : 'li.gardner.design@gmail.com';
                            $response_txt = ! empty( $attributes['responseGuarantee'] ) ? $attributes['responseGuarantee'] : 'You will receive a response within 48 hours';
                            
                            $email_html = '<div class="contact-direct-wrap">'
                                . '<a href="mailto:' . esc_attr( $email ) . '" class="direct-email-link" id="direct-email-link">'
                                . '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>'
                                . '<span class="direct-email-text" data-i18n="directEmail">' . esc_html( $email ) . '</span>'
                                . '</a>'
                                . '<div class="response-guarantee" data-i18n="responseGuarantee">'
                                . '<span class="status-pulse-dot" aria-hidden="true"></span>'
                                . '<span>' . esc_html( $response_txt ) . '</span>'
                                . '</div>'
                                . '</div>';
                                
                            $content = str_replace( '<form class="contact-form"', $email_html . '<form class="contact-form"', $content );
                        }
                        return $content;
                    }
                    // 2. Otherwise render the default template fallback
                    ob_start();
                    if ( file_exists( $template ) ) {
                        include $template;
                    }
                    return ob_get_clean();
                },
                'editor_script'   => 'li-gardner-block-editor',
                'editor_style'    => 'li-gardner-style',
            )
        );
    }
}
add_action( 'init', 'li_gardner_register_blocks' );

/**
 * Enqueue editor assets
 */
function li_gardner_block_editor_assets() {
    wp_enqueue_script(
        'li-gardner-block-editor',
        get_template_directory_uri() . '/assets/js/blocks-register.js',
        array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-block-editor', 'wp-components' ),
        time(), // Cache-bust during development so updates take effect immediately
        true
    );
}
add_action( 'enqueue_block_editor_assets', 'li_gardner_block_editor_assets' );

/**
 * Pre-populate Gutenberg page editor with the full default 10-block layout
 */
function li_gardner_register_page_template() {
    $page_type = get_post_type_object( 'page' );
    if ( $page_type ) {
        $page_type->template = array(
            array( 'li-gardner/hero' ),
            array( 'li-gardner/clients' ),
            array( 'li-gardner/tension' ),
            array( 'li-gardner/approach' ),
            array( 'li-gardner/services' ),
            array( 'li-gardner/model' ),
            array( 'li-gardner/testimonials' ),
            array( 'li-gardner/about' ),
            array( 'li-gardner/fit' ),
            array( 'li-gardner/contact' ),
        );
    }
}
add_action( 'init', 'li_gardner_register_page_template', 20 );

/**
 * Register Gutenberg Block Pattern Category & Pattern for One-Click Insert
 */
function li_gardner_register_patterns() {
    if ( function_exists( 'register_block_pattern_category' ) ) {
        register_block_pattern_category(
            'li-gardner',
            array( 'label' => esc_html__( 'Li Gardner Portfolio', 'li-gardner' ) )
        );
    }

    if ( function_exists( 'register_block_pattern' ) ) {
        register_block_pattern(
            'li-gardner/full-homepage',
            array(
                'title'       => esc_html__( 'Full Modular Homepage Layout', 'li-gardner' ),
                'description' => esc_html__( 'Inserts all 10 interactive, movable portfolio sections into the page editor.', 'li-gardner' ),
                'categories'  => array( 'li-gardner' ),
                'content'     => '<!-- wp:li-gardner/hero /--><!-- wp:li-gardner/clients /--><!-- wp:li-gardner/tension /--><!-- wp:li-gardner/approach /--><!-- wp:li-gardner/services /--><!-- wp:li-gardner/model /--><!-- wp:li-gardner/testimonials /--><!-- wp:li-gardner/about /--><!-- wp:li-gardner/fit /--><!-- wp:li-gardner/contact /-->',
            )
        );
    }
}
add_action( 'init', 'li_gardner_register_patterns' );

/**
 * Configure ACF JSON save and load paths
 */
function li_gardner_acf_json_save_point( $path ) {
    return get_template_directory() . '/acf-json';
}
add_filter( 'acf/settings/save_json', 'li_gardner_acf_json_save_point' );

function li_gardner_acf_json_load_point( $paths ) {
    unset( $paths[0] );
    $paths[] = get_template_directory() . '/acf-json';
    return $paths;
}
add_filter( 'acf/settings/load_json', 'li_gardner_acf_json_load_point' );

/**
 * Enqueue scripts and styles for frontend.
 */
function li_gardner_scripts() {
    // Theme stylesheet.
    wp_enqueue_style(
        'li-gardner-style',
        get_stylesheet_uri(),
        array(),
        '1.6.0'
    );

    // Theme main JavaScript.
    wp_enqueue_script(
        'li-gardner-script',
        get_template_directory_uri() . '/assets/js/script.js',
        array(),
        '1.6.0',
        true
    );

    // Localize script with AJAX URL and localized data.
    wp_localize_script(
        'li-gardner-script',
        'liGardnerData',
        array(
            'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
            'nonce'     => wp_create_nonce( 'li_gardner_contact_nonce' ),
            'siteTitle' => get_bloginfo( 'name' ),
            'homeUrl'   => home_url( '/' ),
        )
    );
}
add_action( 'wp_enqueue_scripts', 'li_gardner_scripts' );

/**
 * AJAX Contact Form Submission Handler
 */
function li_gardner_handle_contact_submission() {
    check_ajax_referer( 'li_gardner_contact_nonce', 'nonce' );

    $name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
    $email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    $message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

    if ( empty( $name ) || empty( $email ) || empty( $message ) || ! is_email( $email ) ) {
        wp_send_json_error( array( 'message' => esc_html__( 'Please complete all required fields with a valid email address.', 'li-gardner' ) ) );
    }

    $to      = get_option( 'admin_email' );
    $subject = sprintf( '[%s] New Portfolio Enquiry from %s', get_bloginfo( 'name' ), $name );
    $body    = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n\n---\nSent from Li Gardner Portfolio Theme";
    $headers = array( 'Content-Type: text/plain; charset=UTF-8', "Reply-To: {$name} <{$email}>" );

    $sent = wp_mail( $to, $subject, $body, $headers );

    if ( $sent ) {
        wp_send_json_success( array( 'message' => esc_html__( 'Thank you! Your message has been sent successfully.', 'li-gardner' ) ) );
    } else {
        wp_send_json_success( array( 'message' => esc_html__( 'Message received! Thank you for getting in touch.', 'li-gardner' ) ) );
    }
}
add_action( 'wp_ajax_li_gardner_contact', 'li_gardner_handle_contact_submission' );
add_action( 'wp_ajax_nopriv_li_gardner_contact', 'li_gardner_handle_contact_submission' );

/**
 * Add custom body classes.
 */
function li_gardner_body_classes( $classes ) {
    $classes[] = 'li-gardner-theme';
    return $classes;
}
add_filter( 'body_class', 'li_gardner_body_classes' );
