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

/*----------------------------------------------------page menu------------------------------------------------------*/
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

/*----------------------------------------------------upload menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const uploaddropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!uploaddropdownMenu.style.display || uploaddropdownMenu.style.display === 'none') {
    uploaddropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.uploaddropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== uploaddropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.uploaddropdown')) {
    document.querySelectorAll('.uploaddropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------explore menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const exdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!exdropdownMenu.style.display || exdropdownMenu.style.display === 'none') {
    exdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.exdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== exdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.exdropdown')) {
    document.querySelectorAll('.exdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------creator menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const creatordropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!creatordropdownMenu.style.display || creatordropdownMenu.style.display === 'none') {
    creatordropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.creatordropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== creatordropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.creatordropdown')) {
    document.querySelectorAll('.creatordropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------faqs menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const faqsdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!faqsdropdownMenu.style.display || faqsdropdownMenu.style.display === 'none') {
    faqsdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.faqsdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== faqsdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.faqsdropdown')) {
    document.querySelectorAll('.faqsdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------register menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const registerdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!registerdropdownMenu.style.display || registerdropdownMenu.style.display === 'none') {
    registerdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.registerdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== registerdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.registerdropdown')) {
    document.querySelectorAll('.registerdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------login menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const logindropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!logindropdownMenu.style.display || logindropdownMenu.style.display === 'none') {
    logindropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.logindropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== logindropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.logindropdown')) {
    document.querySelectorAll('.logindropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------terms menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const termsdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!termsdropdownMenu.style.display || termsdropdownMenu.style.display === 'none') {
    termsdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.termsdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== termsdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.termsdropdown')) {
    document.querySelectorAll('.termsdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------error menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const errordropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!errordropdownMenu.style.display || errordropdownMenu.style.display === 'none') {
    errordropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.errordropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== errordropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.errordropdown')) {
    document.querySelectorAll('.errordropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------page menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const pagedropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!pagedropdownMenu.style.display || pagedropdownMenu.style.display === 'none') {
    pagedropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.pagedropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== pagedropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.pagedropdown')) {
    document.querySelectorAll('.pagedropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------blog menu------------------------------------------------------*/
// Function to toggle dropdown menu
function toggleDropdown(event, link) {
  const blogdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!blogdropdownMenu.style.display || blogdropdownMenu.style.display === 'none') {
    blogdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.blogdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== blogdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.blogdropdown')) {
    document.querySelectorAll('.blogdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});
/*----------------------------------------------------contact menu------------------------------------------------------*/
function toggleDropdown(event, link) {
  const contactdropdownMenu = link.nextElementSibling; // Find the dropdown menu

  // If dropdown is closed, open it and prevent default navigation
  if (!contactdropdownMenu.style.display || contactdropdownMenu.style.display === 'none') {
    contactdropdownMenu.style.display = 'block';
    event.preventDefault();
  } else {
    // If dropdown is already open, navigate to the link's href
    window.location.href = link.href;
  }

  // Close all other dropdowns
  const allDropdowns = document.querySelectorAll('.contactdropdown-menu');
  allDropdowns.forEach(menu => {
    if (menu !== contactdropdownMenu) {
      menu.style.display = 'none';
    }
  });
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!event.target.closest('.contactdropdown')) {
    document.querySelectorAll('.contactdropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
});


