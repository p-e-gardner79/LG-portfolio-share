<?php
/**
 * The template for displaying all single posts
 *
 * @package Li_Gardner
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<section class="general-single-section" style="padding: 120px 0 80px; min-height: 60vh;">
  <div class="shell" style="max-width: 800px;">
    <?php
    while ( have_posts() ) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header class="entry-header" style="margin-bottom: 32px;">
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 8px;"><?php echo get_the_date(); ?></p>
            <h1 class="entry-title" style="font-size: 2.75rem; font-weight: 700; color: var(--ink);"><?php the_title(); ?></h1>
          </header>

          <?php if ( has_post_thumbnail() ) : ?>
            <div class="post-thumbnail" style="margin-bottom: 32px; border-radius: 8px; overflow: hidden;">
              <?php the_post_thumbnail( 'large' ); ?>
            </div>
          <?php endif; ?>

          <div class="entry-content" style="font-size: 1.15rem; line-height: 1.75; color: var(--ink);">
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
