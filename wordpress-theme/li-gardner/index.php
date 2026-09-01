<?php
/**
 * The main template file
 *
 * @package Li_Gardner
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

get_header();
?>

<section class="general-content-section" style="padding: 120px 0 80px; min-height: 60vh;">
  <div class="shell">
    <?php if ( have_posts() ) : ?>
      <header class="page-header" style="margin-bottom: 48px;">
        <h1 style="font-size: 2.5rem; font-weight: 700; color: var(--ink);"><?php single_post_title(); ?></h1>
      </header>

      <div class="posts-list" style="display: grid; gap: 32px;">
        <?php
        while ( have_posts() ) :
            the_post();
            ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?> style="padding: 32px; background: var(--paper-deep); border-radius: 8px;">
              <h2 style="font-size: 1.8rem; margin-bottom: 16px;"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
              <div class="entry-summary" style="line-height: 1.6; color: var(--ink);">
                <?php the_excerpt(); ?>
              </div>
            </article>
            <?php
        endwhile;

        the_posts_navigation();
        ?>
      </div>
    <?php else : ?>
      <p><?php esc_html_e( 'No posts found.', 'li-gardner' ); ?></p>
    <?php endif; ?>
  </div>
</section>

<?php
get_footer();
