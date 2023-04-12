<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
            <router-link class="nav-link" to="/" active-class="active">
                <span data-feather="home"></span>
                Dashboard <span class="sr-only">(current)</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/customer" active-class="active">
                <span data-feather="home"></span>
            Customer 
            </router-link>
          
        </li>
        
      </ul>

      
    </div>
  </nav>
</template>
