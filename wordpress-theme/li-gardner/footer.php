<?php
/**
 * The template for displaying the footer
 *
 * @package Li_Gardner
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
?>
    <!-- Footer -->
    <footer id="site-footer">
      <div class="shell">
        <div class="footer-inner">
          <a class="wordmark" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="<?php esc_attr_e( 'Li Gardner, home', 'li-gardner' ); ?>">
            <span class="brand-icon">LG</span>
            <span class="brand-copy">
              <span class="wordmark-name"><?php bloginfo( 'name' ); ?></span>
              <span class="brand-strapline" data-i18n="strapline"><?php bloginfo( 'description' ); ?></span>
            </span>
          </a>
          <a href="#top" class="back-top" data-i18n="backTop"><?php esc_html_e( 'Back to top ↑', 'li-gardner' ); ?></a>
        </div>
        <div class="footer-bottom">
          <p class="footer-copyright" data-i18n="copyright">Copyright © <?php echo esc_html( date( 'Y' ) ); ?> LXQ Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </main>

  <?php wp_footer(); ?>
</body>
</html>
