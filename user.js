
$(document).ready(function() {
    let ordersData = [];
  
    function fetchOrders() {
      $.ajax({
        url: 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users',
        type: 'GET',
        success: function(response) {
          ordersData = response;
          displayOrders(ordersData);
        },
      });
    }
  
    fetchOrders();
  
    function displayOrders(orders) {
      const orderTableBody = $('.user_table tbody');
      orderTableBody.empty();
  
      orders.forEach(order => {
        const orderRow = $('<tr class="order_details"></tr>');
        orderRow.append(`<td class="gray-text">${order.id}</td>`);
        orderRow.append(`<td><img src="${order.profilePic}" alt="Profile Picture"></td>`);
        orderRow.append(`<td class="gray-text">${order.fullName}</td>`);
  
        // Modify the line displaying Date of Birth
        const formattedDob = order.dob.split('-').join(' - '); // Splitting and joining with dashes
        orderRow.append(`<td>${formattedDob}</td>`);
  
        orderRow.append(`<td class="gray-text">${order.gender}</td>`);
        orderRow.append(`<td class="gray-text">${order.currentCity + ", " + order.currentCountry}</td>`);
  
        orderTableBody.append(orderRow);
      });
    }
  
    $('.search_bar').on('input', function() {
      let searchText = $(this).val().trim();
      if (searchText.length >= 2) {
        const filteredOrders = ordersData.filter(order => {
          const fullName = order.fullName.toLowerCase();
          return fullName.includes(searchText.toLowerCase());
        });
        displayOrders(filteredOrders);
      } else if (searchText.length === 0) {
        displayOrders(ordersData);
      } 
    });
  
    $('.reset_butt').on('click', function() {
      $('.search_bar').val('');
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