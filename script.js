// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const dropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!dropdownMenu.style.display || dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.dropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== dropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});

 /*--------------------------------------------creator-menu----------------------------------*/
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const creatordropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
    const allDropdowns = document.querySelectorAll('.creatordropdown-menu');
  
    // Close all other dropdowns
    allDropdowns.forEach(menu => {
      if (menu !== creatordropdownMenu) {
        menu.style.display = 'none';
      }
    });
  
    // Toggle current dropdown menu
    creatordropdownMenu.style.display = creatordropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.creatordropdown')) {
      document.querySelectorAll('.creatordropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
  /*--------------------------------------------EXPLORE-menu----------------------------------*/
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const exdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
    const allDropdowns = document.querySelectorAll('.exdropdown-menu');
  
    // Close all other dropdowns
    allDropdowns.forEach(menu => {
      if (menu !== exdropdownMenu) {
        menu.style.display = 'none';
      }
    });
  
    // Toggle current dropdown menu
    exdropdownMenu.style.display = exdropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.exdropdown')) {
      document.querySelectorAll('.exdropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
  /*--------------------------------------------Art-menu----------------------------------*/
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const ArtdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
    const allDropdowns = document.querySelectorAll('.Artdropdown-menu');
  
    // Close all other dropdowns
    allDropdowns.forEach(menu => {
      if (menu !== ArtdropdownMenu) {
        menu.style.display = 'none';
      }
    });
  
    // Toggle current dropdown menu
    ArtdropdownMenu.style.display = ArtdropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.Artdropdown')) {
      document.querySelectorAll('.Artdropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });

/*--------------------------------------------upload-menu----------------------------------*/
 function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior
  const uploaddropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
  const allDropdowns = document.querySelectorAll('.uploaddropdown-menu');

  // Close all other dropdowns
  allDropdowns.forEach(menu => {
    if (menu !== uploaddropdownMenu) {
      menu.style.display = 'none';
    }
  });

  // Toggle current dropdown menu
  uploaddropdownMenu.style.display = uploaddropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.uploaddropdown')) {
    document.querySelectorAll('.uploaddropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
  /*--------------------------------------------faqs-menu----------------------------------*/
 function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior
  const faqsdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
  const allDropdowns = document.querySelectorAll('.faqsdropdown-menu');

  // Close all other dropdowns
  allDropdowns.forEach(menu => {
    if (menu !== faqsdropdownMenu) {
      menu.style.display = 'none';
    }
  });

  // Toggle current dropdown menu
  faqsdropdownMenu.style.display = faqsdropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.faqsdropdown')) {
    document.querySelectorAll('.faqsdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
  
  /*--------------------------------------------register-menu----------------------------------*/
 function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior
  const registerdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
  const allDropdowns = document.querySelectorAll('.registerdropdown-menu');

  // Close all other dropdowns
  allDropdowns.forEach(menu => {
    if (menu !== registerdropdownMenu) {
      menu.style.display = 'none';
    }
  });

  // Toggle current dropdown menu
  registerdropdownMenu.style.display = registerdropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.registerdropdown')) {
    document.querySelectorAll('.registerdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
 /*--------------------------------------------login-menu----------------------------------*/
 function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior
  const logindropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
  const allDropdowns = document.querySelectorAll('.logindropdown-menu');

  // Close all other dropdowns
  allDropdowns.forEach(menu => {
    if (menu !== logindropdownMenu) {
      menu.style.display = 'none';
    }
  });

  // Toggle current dropdown menu
  logindropdownMenu.style.display = logindropdownMenu.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.logindropdown')) {
    document.querySelectorAll('.logindropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
  /*--------------------------------------------terms-menu----------------------------------*/
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const termsdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
    const allDropdowns = document.querySelectorAll('.termsdropdown-menu');
  
    // Close all other dropdowns
    allDropdowns.forEach(menu => {
      if (menu !== termsdropdownMenu) {
        menu.style.display = 'none';
      }
    });
  
    // Toggle current dropdown menu
    termsdropdownMenu.style.display = termsdropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.termsdropdown')) {
      document.querySelectorAll('.termsdropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
  /*--------------------------------------------blog-menu----------------------------------*/
  function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const blogdropdownMenu = event.target.nextElementSibling; // Find the dropdown menu
    const allDropdowns = document.querySelectorAll('.blogdropdown-menu');
  
    // Close all other dropdowns
    allDropdowns.forEach(menu => {
      if (menu !== blogdropdownMenu) {
        menu.style.display = 'none';
      }
    });
  
    // Toggle current dropdown menu
    blogdropdownMenu.style.display = blogdropdownMenu.style.display === 'block' ? 'none' : 'block';
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.blogdropdown')) {
      document.querySelectorAll('.blogdropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });




  
  /*-----------------------------------------------------faqs que-ans--------------------------------------------------------------*/
  document.querySelectorAll('.faqs-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');

        // Toggle the answer's visibility
        answer.classList.toggle('active');

        // Change the "+" to "-" and vice versa
        if (answer.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

