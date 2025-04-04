$(document).ready(function () {
    $('.tag-click').click(function (e) {
        e.preventDefault();

        let tag = $(this).data('tag');
        
        $.ajax({
            url: 'blog/tag',
            method: 'GET',
            data: {tag},
            success: function (response) {
                if (response.success) {
                    let blogsHtml = '';
                    response.data.forEach(blog => {
                        let tagsHtml = '';
                        blog.tag.split(', ').forEach(ltag => {
                            tagsHtml += `<a href="javascript:void(0)" class="blog-tag">${ltag}</a> `;
                        });
                        blogsHtml += `
                                    <div class="blog-post">
                                        <div class="blog-item-header">
                                            <div class="blog-post-date pull-left">
                                                <span class="day">${blog.day}</span>
                                                <span class="month">${blog.month}</span>
                                            </div>
                                            <h2>
                                                <a href="javascript:void(0)">
                                                ${blog.title}</a>
                                            </h2>
                                            <div class="blog-post-details">
                                                <div class="blog-post-details-item blog-post-details-item-left user-icon">
                                                    <i class="fa fa-user"></i>
                                                    <a href="javascript:void(0)">${blog.author}</a>
                                                </div>
                                                <div class="blog-post-details-item blog-post-details-item-left blog-post-details-tags tags-icon">
                                                    <i class="fa fa-tag"></i>
                                                    ${tagsHtml}
                                                </div>
                                                <div class="blog-post-details-item blog-post-details-item-left blog-post-details-item-last comments-icon">
                                                    <a href="javascript:void(0)">
                                                        <i class="fa fa-comments"></i>
                                                        ${blog.commentCount} Comments
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="blog">
                                            <div class="clearfix"></div>
                                            <div class="blog-post-body row margin-top-15">
                                                <div class="col-md-5">
                                                    <img class="pull-left" src="img/blog/image${blog.id}.jpg" alt="thumb${blog.id}">
                                                </div>
                                                <div class="col-md-7">
                                                    ${blog.content}
                                                </div>
                                            </div>
                                            <div class="blog-item-footer">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <hr>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="blog-post-details-item blog-post-details-item-right pull-right">
                                                            <a href="blog_detail" class="btn btn-primary">
                                                                Read More
                                                                <i class="icon-chevron-right readmore-icon"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        `;
                    });
                    $('#blogList').html(blogsHtml);
                }
            },
            error: function () {
                alert('Lỗi khi tải dữ liệu!');
            }
        });
    });
});
