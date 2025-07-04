/* Blog Post Modal Functionality */
(function($) {
    'use strict';

    $(document).ready(function() {
        // Blog post link click handler
        $('.blog-post-link').on('click', function(e) {
            e.preventDefault();
            
            var postTitle = $(this).data('post-title');
            var postDate = $(this).data('post-date');
            var postContent = $(this).data('post-content');
            
            // Hide all panels
            $('.panel').hide();
            
            // Show blog post panel
            $('#blog-post').show();
            
            // Fill in the content
            $('#post-title').text(postTitle);
            $('#post-date').text(postDate);
            $('#post-content').html(postContent);
            
            // Update URL hash
            window.location.hash = 'blog-post';
        });
        
        // Back to blog link handler
        $('.back-to-blog').on('click', function(e) {
            e.preventDefault();
            
            // Hide blog post panel
            $('#blog-post').hide();
            
            // Show blog panel
            $('#blog').show();
            
            // Update URL hash
            window.location.hash = 'blog';
        });
        
        // Handle direct blog post URLs
        if (window.location.hash === '#blog-post') {
            // Show blog post panel if accessed directly
            $('#blog-post').show();
        }
    });

})(jQuery);