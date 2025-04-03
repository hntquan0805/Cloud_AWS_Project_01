$(document).ready(function () {
    $('#filterForm').on('submit', function (e) {
        e.preventDefault();

        let day = $('#day').val();
        let month = $('#month').val();
        let year = $('#year').val();

        $.ajax({
            url: 'blog/filter',
            method: 'GET',
            data: { day, month, year },
            success: function (response) {
                if (response.success) {
                    let blogsHtml = '';
                    response.data.forEach(blog => {
                        blogsHtml += `
                                    <div class="blog-post">
                                        <div class="blog-item-header">
                                            <div class="blog-post-date pull-left">
                                                <span class="day">${blog.day}</span>
                                                <span class="month">${blog.month}</span>
                                            </div>
                                            <h2>
                                                <a href="#">
                                                ${blog.title}</a>
                                            </h2>
                                            <div class="blog-post-details">
                                                <div class="blog-post-details-item blog-post-details-item-left user-icon">
                                                    <i class="fa fa-user"></i>
                                                    <a href="#">${blog.author}</a>
                                                </div>
                                                <div class="blog-post-details-item blog-post-details-item-left blog-post-details-tags tags-icon">
                                                    <i class="fa fa-tag"></i>
                                                    ${blog.tag.split(', ').forEach(tag => { `
                                                        <a href="#" class="blog-tag">${tag}</a>
                                                    ` })}
                                                </div>
                                                <div class="blog-post-details-item blog-post-details-item-left blog-post-details-item-last comments-icon">
                                                    <a href="">
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
                                                    <img class="pull-left" src="img/blog/image1.jpg" alt="thumb1">
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
                } else {
                    $('#blogList').html('<p>Không có bài viết nào.</p>');
                }
            },
            error: function () {
                alert('Lỗi khi tải dữ liệu!');
            }
        });
    });
});
