
 $(document).ready(function() {
  let ordersData = []; 
  function fetchOrders() {
    $.ajax({
      url: 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders',
      type: 'GET',
      success: function(response) {
      ordersData = response;
      displayOrders(ordersData);

      if (ordersData.length === 11) {
        $('.filter').prop('checked', true);
      }
    },
     
    
    });
  }
 fetchOrders();

  function displayOrders(orders) {
    const orderTableBody = $('.order_table tbody');
    orderTableBody.empty(); 

    orders.forEach(order => {
    const orderRow = $('<tr class="order_details"></tr>'); 
    orderRow.append(`<td class="gray-text">${order.id}</td>`);
    orderRow.append(`<td>${order.customerName}</td>`);
    orderRow.append(`<td>${order.orderDate}</span><br><span class="gray-text" id="time">${order.orderTime}</span></td>`);
    orderRow.append(`<td><span class="gray-text">$${order.amount}</span></td>`);
    orderRow.append(`<td>${order.orderStatus}</td>`);
    orderTableBody.append(orderRow);
});
    updateCount(); 
  }

  function updateCount() {
    const selectedStatus = getSelectedStatus();
    const countSpan = $('#totalCount');
    const count = selectedStatus.length > 0 ?
      ordersData.filter(order => selectedStatus.includes(order.orderStatus)).length :
      ordersData.length;
    countSpan.text(count); 
  }

  function getSelectedStatus() {
    const selectedStatus = [];
    $('.filter:checked').each(function() {
      selectedStatus.push($(this).val());
    });
    return selectedStatus;
  }
  $('.filter').change(function() {
    const selectedStatus = getSelectedStatus();
    const filteredOrders = ordersData.filter(order =>
      selectedStatus.includes(order.orderStatus)
    );
    displayOrders(filteredOrders); 
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
