
$(document).ready(function() {
    let ordersData = [];
  
    function fetchOrders() {
      $.ajax({
        url: 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products',
        type: 'GET',
        success: function(response) {
          ordersData = response;
          displayOrders(ordersData);
          updateCount();
        },
        error: function(error) {
          console.error('Error fetching orders:', error);
        }
      });
    }
    fetchOrders();
  
    
    function displayOrders(orders) {
      const orderTableBody = $('.product_table tbody');
      orderTableBody.empty();
      let totalCount = 0;
      const showExpired = $('input[value="expiryDate"]').is(':checked');
      const showStock = $('input[value="Stock"]').is(':checked');
  
      orders.forEach(order => {
        const orderRow = $('<tr class="order_details"></tr>');
        const expiryYear = new Date(order.expiryDate).getFullYear();
  
        if ((showExpired || (expiryYear > 2023 && !showExpired)) &&
            (showStock || (!showStock && order.stock > 100))) {
          orderRow.append(`<td class="gray-text">${order.id}</td>`);
          orderRow.append(`<td>${order.medicineName}</td>`);
          orderRow.append(`<td class="gray-text">${order.medicineBrand}</td>`);
          orderRow.append(`<td>${order.expiryDate}</td>`);
          orderRow.append(`<td class="gray-text">$${order.unitPrice}</td>`);
          orderRow.append(`<td class="gray-text">${order.stock}</td>`);
          orderTableBody.append(orderRow);
          totalCount++;
        }
      });
      $('#totalCount').text(totalCount);
    }
    $('input[value="expiryDate"]').prop('checked', true);
   $('input[value="Stock"]').prop('checked', true);
    $('input[type="checkbox"]').change(function() {
      displayOrders(ordersData);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
    const links = document.querySelectorAll(".header-nav a");
  
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
  
      link.addEventListener("click", function() {
        links.forEach(link => {
          link.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });