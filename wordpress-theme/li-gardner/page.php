<?php
/**
 * The template for displaying all pages
 *
 * @package Li_Gardner
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<section class="general-page-section" style="padding: 120px 0 80px; min-height: 60vh;">
  <div class="shell">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header class="entry-header" style="margin-bottom: 32px;">
            <h1 class="entry-title" style="font-size: 2.75rem; font-weight: 700; color: var(--ink);"><?php the_title(); ?></h1>
          </header>

          <div class="entry-content" style="font-size: 1.125rem; line-height: 1.7; color: var(--ink);">
            <?php
            the_content();

            wp_link_pages(
                array(
                    'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'li-gardner' ),
                    'after'  => '</div>',
                )
            );
            ?>
          </div>
        </article>
        <?php
    endwhile;
    ?>
  </div>
</section>

<?php
get_footer();
