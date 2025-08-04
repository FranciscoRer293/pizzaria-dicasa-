<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Pizzaria DI Casa</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #fff8f0;
      color: #333;
      line-height: 1.6;
    }
    header {
      background-color: #c62828;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .hero {
      padding: 40px 20px;
      text-align: center;
      background: #fceee9;
    }
    .hero h1 {
      font-size: 2.8em;
      margin-bottom: 10px;
    }
    .hero p {
      font-size: 1.3em;
      margin-bottom: 20px;
    }
    .cta-button {
      background-color: #c62828;
      color: white;
      padding: 15px 30px;
      border: none;
      border-radius: 5px;
      font-size: 1.2em;
      text-decoration: none;
      cursor: pointer;
      display: inline-block;
      transition: background-color 0.3s ease;
    }
    .cta-button:hover {
      background-color: #a82020;
    }
    .menu {
      padding: 20px;
      max-width: 900px;
      margin: 0 auto;
    }
    .menu h2 {
      color: #c62828;
      text-align: center;
      margin-bottom: 30px;
    }
    .menu-item {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      gap: 20px;
      background: white;
      border-radius: 8px;
      padding: 15px;
      box-shadow: 0 0 10px rgb(198 40 40 / 0.2);
    }
    .menu-item img {
      width: 120px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0 5px rgb(198 40 40 / 0.5);
    }
    .menu-item div {
      flex: 1;
    }
    .menu-item strong {
      font-size: 1.2em;
      color: #a62121;
    }
    .menu-item em {
      font-size: 0.9em;
      color: #666;
    }
    .info {
      background-color: #f2f2f2;
      padding: 25px 20px;
      text-align: center;
      margin-top: 40px;
      font-size: 1.1em;
    }
    .order-form {
      max-width: 600px;
      margin: 40px auto;
      background: #fff3f0;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 15px rgb(198 40 40 / 0.25);
    }
    .order-form h2 {
      color: #c62828;
      text-align: center;
      margin-bottom: 25px;
    }
    .order-form label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      color: #9b1d1d;
    }
    .order-form input,
    .order-form select,
    .order-form textarea {
      width: 100%;
      padding: 10px 12px;
      margin-bottom: 18px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1em;
      resize: vertical;
    }
    .order-form button {
      background-color: #c62828;
      color: white;
      padding: 14px 25px;
      border: none;
      border-radius: 6px;
      font-size: 1.2em;
      cursor: pointer;
      width: 100%;
      transition: background-color 0.3s ease;
    }
    .order-form button:hover {
      background-color: #a82020;
    }
    footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 15px;
      margin-top: 60px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <header>
    <h1>Pizzaria DI Casa</h1>
    <p>O sabor que chega até você!</p>
  </header>

  <section class="hero">
    <h1>Bem-vindo à nova pizzaria do bairro!</h1>
    <p>Entrega totalmente <strong>grátis</strong> para o Bairro Nova Açailândia 2</p>
    <a href="https://wa.me/5599982238712" class="cta-button" target="_blank" rel="noopener">Fazer pedido no WhatsApp</a>
  </section>

  <section class="menu">
    <h2>Nosso Cardápio</h2>
    <div class="menu-item">
      <img src="https://i.imgur.com/1ThAxxq.jpg" alt="Pizza Calabresa" />
      <div>
        <strong>Pizza Calabresa</strong> – Calabresa, cebola, mussarela, orégano.<br />
        <em>Grande: R$ 35 | Média: R$ 28</em>
      </div>
    </div>
    <div class="menu-item">
      <img src="https://i.imgur.com/qcQqZQv.jpg" alt="Pizza Frango com Catupiry" />
      <div>
        <strong>Pizza Frango com Catupiry</strong> – Frango desfiado, catupiry, milho.<br />
        <em>Grande: R$ 38 | Média: R$ 30</em>
      </div>
    </div>
    <div class="menu-item">
      <img src="https://i.imgur.com/dCGvktC.jpg" alt="Pizza Quatro Queijos" />
      <div>
        <strong>Pizza Quatro Queijos</strong> – Mussarela, parmesão, provolone e catupiry.<br />
        <em>Grande: R$ 40 | Média: R$ 32</em>
      </div>
    </div>
  </section>

  <section class="order-form">
    <h2>Faça seu Pedido Aqui</h2>
    <form id="pedidoForm">
      <label for="nome">Nome completo:</label>
      <input type="text" id="nome" name="nome" required />

      <label for="telefone">Telefone/WhatsApp:</label>
      <input type="tel" id="telefone" name="telefone" placeholder="(99) 99999-9999" required />

      <label for="pizza">Escolha a pizza:</label>
      <select id="pizza" name="pizza" required>
        <option value="" disabled selected>Selecione uma opção</option>
        <option value="Pizza Calabresa">Pizza Calabresa</option>
        <option value="Pizza Frango com Catupiry">Pizza Frango com Catupiry</option>
        <option value="Pizza Quatro Queijos">Pizza Quatro Queijos</option>
      </select>

      <label for="tamanho">Tamanho:</label>
      <select id="tamanho" name="tamanho" required>
        <option value="" disabled selected>Selecione o tamanho</option>
        <option value="Grande">Grande</option>
        <option value="Média">Média</option>
      </select>

      <label for="quantidade">Quantidade:</label>
      <input type="number" id="quantidade" name="quantidade" min="1" value="1" required />

      <label for="observacoes">Observações (opcional):</label>
      <textarea id="observacoes" name="observacoes" rows="3" placeholder="Ex: borda recheada, sem cebola..."></textarea>

      <button type="submit">Enviar Pedido pelo WhatsApp</button>
    </form>
  </section>

  <section class="info">
    <p><strong>Endereço:</strong> Rua Sucupira, Quadra 35, Lote 21 – Bairro Nova Açailândia 2</p>
    <p><strong>Funcionamento:</strong> Todos os dias das 18h às 23h</p>
    <p><strong>Telefone / WhatsApp:</strong> (99) 98223-8712</p>
  </section>

  <footer>
    <p>&copy; 2025 Pizzaria DI Casa – Todos os direitos reservados</p>
  </footer>

  <script>
    document.getElementById('pedidoForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const pizza = document.getElementById('pizza').value;
      const tamanho = document.getElementById('tamanho').value;
      const quantidade = document.getElementById('quantidade').value;
      const observacoes = document.getElementById('observacoes').value.trim();

      let mensagem = `Olá, gostaria de fazer um pedido:%0A`;
      mensagem += `Nome: ${nome}%0A`;
      mensagem += `Telefone: ${telefone}%0A`;
      mensagem += `Pedido: ${quantidade} x ${pizza} (${tamanho})%0A`;
      if (observacoes) {
        mensagem += `Observações: ${observacoes}%0A`;
      }
      mensagem += `%0AObrigado!`;

      const numeroWhats = '5599982238712';
      const urlWhats = `https://wa.me/${numeroWhats}?text=${mensagem}`;

      window.open(urlWhats, '_blank');
    });
  </script>
</body>
</html>
