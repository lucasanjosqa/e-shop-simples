// Simulação de banco de dados com localStorage
function register(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.email === email)) {
      document.getElementById('registerMessage').innerText = 'E-mail já cadastrado!';
      return;
    }
    
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('registerMessage').innerText = 'Conta criada com sucesso!';
    setTimeout(() => window.location.href = 'index.html', 1000);
  }
  
  function login(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('loggedUser', email);
      window.location.href = 'home.html';
    } else {
      document.getElementById('loginMessage').innerText = 'E-mail ou senha inválidos';
    }
  }
  
  function logout() {
    localStorage.removeItem('loggedUser');
    window.location.href = 'index.html';
  }
  
  // Produtos fictícios
  const products = [
    { id: 1, name: 'Camiseta Básica', price: 29.90 },
    { id: 2, name: 'Calça Jeans', price: 89.90 },
    { id: 3, name: 'Tênis Casual', price: 149.90 }
  ];
  
  function loadProducts() {
    if (!localStorage.getItem('loggedUser')) {
      window.location.href = 'index.html';
      return;
    }
    
    const productList = document.getElementById('productList');
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `${product.name} - R$${product.price.toFixed(2)} 
        <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>`;
      productList.appendChild(div);
    });
  }
  
  function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} adicionado ao carrinho!`);
  }
  
  function loadCart() {
    const cartItems = document.getElementById('cartItems');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
      cartItems.innerText = 'Carrinho vazio.';
      return;
    }
    
    cart.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `${item.name} - R$${item.price.toFixed(2)}`;
      cartItems.appendChild(div);
    });
  }
  
  function checkout(event) {
    event.preventDefault();
    const card = document.getElementById('card').value;
    if (card.length < 12) {
      document.getElementById('checkoutMessage').innerText = 'Número de cartão inválido!';
      return;
    }
    
    localStorage.removeItem('cart');
    document.getElementById('checkoutMessage').innerText = 'Compra realizada com sucesso! Pedido #12345';
    setTimeout(() => window.location.href = 'home.html', 2000);
  }