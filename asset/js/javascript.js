
var currentContent = 'flashSale'; // Biến lưu trữ ID của nội dung hiện tại

function toggleContent(contentId) {
  if (contentId !== currentContent) { // Kiểm tra xem nội dung được nhấp vào có khác với nội dung hiện tại không
    document.getElementById(currentContent).style.display = 'none'; // Ẩn nội dung hiện tại
    if(contentId === 'flashSale')
    {
      document.getElementById(contentId).style.display = 'block'; // Hiển thị nội dung mới
    }
    else{
      document.getElementById(contentId).style.display = 'flex'; // Hiển thị nội dung mới
    }
    peviousContent = currentContent; // dùng để khi nhấn qua nội dung hiện tại thì nội dung trước đó được add lại css phần dấu gạch dưới có hiệu ứng
    currentContent = contentId; // Cập nhật nội dung hiện tại

    // Loại bỏ gạch chân từ tất cả các tiêu đề
    document.querySelectorAll('.div-product-sale').forEach(function(item) {
        item.style.textDecoration = 'none';
      });
      
      // Gạch chân cho tiêu đề được chọn
      document.getElementById(contentId + '-header').style.textDecoration = 'underline';
      document.getElementById(currentContent + '-header').classList.remove("underline-hover")
      // dùng để khi nhấn qua nội dung hiện tại thì nội dung trước đó được add lại css phần dấu gạch dưới có hiệu ứng
      document.getElementById(peviousContent + '-header').classList.add("underline-hover")
  }
}
