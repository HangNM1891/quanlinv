/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
/* global fetch */

// Lấy danh sách nhân viên từ server và hiển thị trên trang employee-list.html
document.getElementById('fetch-employees-btn').addEventListener('click', function() {
  // Gửi yêu cầu AJAX hoặc Fetch API để lấy danh sách nhân viên từ server
  // Sau đó, sử dụng dữ liệu nhận được để tạo các phần tử HTML và chèn vào bảng #employee-table-body
});

// Thêm nhân viên mới
document.getElementById('add-employee-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu đi để xử lý bằng JavaScript

  // Lấy giá trị từ các trường nhập liệu
  var name = document.getElementById('name').value;
  var position = document.getElementById('position').value;

//   Gửi yêu cầu AJAX hoặc Fetch API đến server để thêm nhân