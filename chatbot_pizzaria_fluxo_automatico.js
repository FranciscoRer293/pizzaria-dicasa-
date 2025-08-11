
// chatbot_pizzaria_fluxo_automatico.js - BOT Pizzaria Di Casa (Versão Servidor com Menu Numérico)

const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const moment = require('moment-timezone');
const fs = require('fs');
const path = require('path');

// ==================== CONFIGURAÇÕES ====================
const CARDAPIO = `
🍕 *Pizzaria Di Casa - Cardápio*
1️⃣ Pizza Família (12 fatias) - R$ 54,99
2️⃣ Pizza Grande (8 fatias) - R$ 44,99
3️⃣ Pizza Pequena (4 fatias) - R$ 24,99
Digite o número da opção para escolher seu tamanho.
`;

const PIX_INFO = `
💳 *Pagamento via PIX*
Chave PIX: 99 991056556
Titular: Francisco Araujo Mesquita
Banco: Mercado Pago
Envie o comprovante aqui no chat para confirmação do seu pedido.
`;

let pedidos = {};
const arquivoPedidos = path.join(__dirname, 'pedidos.csv');
if (!fs.existsSync(arquivoPedidos)) {
    fs.writeFileSync(arquivoPedidos, 'Telefone,Nome,Endereço,Pedido,Data\n');
}

// ==================== CLIENTE WHATSAPP ====================
const client = new Client({
    authStrategy: new LocalAuth({ dataPath: './sessao_pizzaria' }),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.clear();
    console.log('📲 Escaneie o QR Code abaixo para conectar:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ Bot da Pizzaria Di Casa está ONLINE 24h!');
});

client.on('disconnected', reason => {
    console.log('⚠️ Desconectado:', reason);
    console.log('🔄 Tentando reconectar...');
    client.initialize();
});

// ==================== FLUXO DE ATENDIMENTO ====================
client.on('message', async msg => {
    const chatId = msg.from;
    const texto = msg.body.trim();

    if (!pedidos[chatId]) {
        pedidos[chatId] = { etapa: 0 };
    }

    const etapa = pedidos[chatId].etapa;

    if (etapa === 0) {
        if (/^oi$|^menu$|^pedido$/i.test(texto)) {
            await client.sendMessage(chatId, CARDAPIO);
            pedidos[chatId].etapa = 1;
            return;
        }
    }

    if (etapa === 1) {
        if (['1', '2', '3'].includes(texto)) {
            let tamanho = texto === '1' ? 'Pizza Família' :
                          texto === '2' ? 'Pizza Grande' : 'Pizza Pequena';
            pedidos[chatId].tamanho = tamanho;
            await client.sendMessage(chatId, 'Informe seu nome:');
            pedidos[chatId].etapa = 2;
            return;
        } else {
            await client.sendMessage(chatId, '❌ Opção inválida. Digite 1, 2 ou 3.');
            return;
        }
    }

    if (etapa === 2) {
        pedidos[chatId].nome = texto;
        await client.sendMessage(chatId, 'Informe seu endereço completo:');
        pedidos[chatId].etapa = 3;
        return;
    }

    if (etapa === 3) {
        pedidos[chatId].endereco = texto;
        await client.sendMessage(chatId, PIX_INFO);
        pedidos[chatId].etapa = 4;
        return;
    }

    if (etapa === 4) {
        if (msg.hasMedia) {
            const media = await msg.downloadMedia();
            const dataHora = moment().tz('America/Fortaleza').format('DD/MM/YYYY HH:mm');
            fs.appendFileSync(arquivoPedidos, `${chatId},${pedidos[chatId].nome},${pedidos[chatId].endereco},${pedidos[chatId].tamanho},${dataHora}\n`);

            const pastaComprovantes = path.join(__dirname, 'comprovantes');
            if (!fs.existsSync(pastaComprovantes)) fs.mkdirSync(pastaComprovantes);
            fs.writeFileSync(path.join(pastaComprovantes, `${chatId}_${Date.now()}.jpeg`), media.data, { encoding: 'base64' });

            await client.sendMessage(chatId, '✅ Pagamento confirmado! Seu pedido está sendo preparado.');
            pedidos[chatId].etapa = 0;
            return;
        } else {
            await client.sendMessage(chatId, '📎 Envie o comprovante de pagamento para prosseguir.');
            return;
        }
    }

    if (/promo/i.test(texto)) {
        await client.sendMessage(chatId, '🎉 Promoção do dia: Na compra de 2 Pizzas Família, ganhe 1 refrigerante!');
    } else if (/horário|funcionamento/i.test(texto)) {
        await client.sendMessage(chatId, '🕒 Funcionamos de terça a domingo, das 18h às 23h.');
    } else if (/atendente/i.test(texto)) {
        await client.sendMessage(chatId, '👩‍🍳 Um atendente irá falar com você em instantes.');
    }
});

client.initialize();
