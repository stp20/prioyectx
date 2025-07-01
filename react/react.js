    const navbarE = React.createElement;

    function Navbar() {
      return navbarE(
        'nav',
        { className: 'navbar navbar-expand-lg navbar-dark bg-dark shadow-sm' },
        navbarE(
          'div',
          { className: 'container' },
          navbarE(
            'a',
            { className: 'navbar-brand fw-bold d-flex align-items-center', href: 'index.html' },
            navbarE('i', { className: 'bi bi-car-front-fill me-2 fs-3' }),
            'AutoStore'
          ),
          navbarE(
            'button',
            {
              className: 'navbar-toggler',
              type: 'button',
              'data-bs-toggle': 'collapse',
              'data-bs-target': '#navbarNav',
              'aria-controls': 'navbarNav',
              'aria-expanded': 'false',
              'aria-label': 'Toggle navigation'
            },
            navbarE('span', { className: 'navbar-toggler-icon' })
          ),
          navbarE(
            'div',
            { className: 'collapse navbar-collapse', id: 'navbarNav' },
            navbarE(
              'ul',
              { className: 'navbar-nav mx-auto' },
              navbarE(
                'li',
                { className: 'nav-item' },
                navbarE(
                  'a',
                  { className: 'nav-link active', href: 'index.html' },
                  navbarE('i', { className: 'bi bi-house-door me-1' }),
                  'Inicio'
                )
              ),
              navbarE(
                'li',
                { className: 'nav-item' },
                navbarE(
                  'a',
                  { className: 'nav-link', href: 'catalogo.html' },
                  navbarE('i', { className: 'bi bi-grid me-1' }),
                  'Catálogo'
                )
              ),
              navbarE(
                'li',
                { className: 'nav-item' },
                navbarE(
                  'a',
                  { className: 'nav-link', href: 'ofertas.html' },
                  navbarE('i', { className: 'bi bi-tag me-1' }),
                  'Ofertas'
                )
              ),
              navbarE(
                'li',
                { className: 'nav-item' },
                navbarE(
                  'a',
                  { className: 'nav-link', href: '#contacto' },
                  navbarE('i', { className: 'bi bi-envelope me-1' }),
                  'Contacto'
                )
              )
            ),
            navbarE(
              'form',
              {
                className: 'd-flex align-items-center',
                role: 'search',
                id: 'navbarSearchForm',
                autoComplete: 'off',
                style: { maxWidth: '200px' }
              },
              navbarE('input', {
                className: 'form-control form-control-sm me-2',
                type: 'search',
                placeholder: 'Buscar...',
                'aria-label': 'Buscar',
                id: 'navbarSearchInput',
                style: { width: '100px' }
              }),
              navbarE(
                'button',
                { className: 'btn btn-outline-light btn-sm', type: 'submit' },
                navbarE('i', { className: 'bi bi-search' })
              )
            )
          )
        )
      );
    }

    ReactDOM.createRoot(document.getElementById('navbar-react-root')).render(
      navbarE(Navbar)
    );