(Projeto fictício, sem dinheiro real.)

## O que mudou nesta versão
- **Corrigido o travamento na abertura** (ficava só na tela de carregamento depois da primeira vez).
- **Android atual (15 e 16):** o projeto agora usa o Capacitor 8, que mira o Android 16 (API 36). A tela desenha atrás das barras do sistema, e o app já respeita a barra de status e a barra de gestos.
- **Botão Voltar do Android** fecha o diálogo aberto e volta de aba, em vez de sair do app.
- **Pix mais seguro:** o envio e o desconto do saldo agora são gravados juntos. Se a conexão cair no meio, o dinheiro não some nem duplica. Dois toques rápidos no "Enviar" não mandam duas vezes.
- Tela "Sem conexão" com botão para tentar de novo, em vez de ficar preso.
- Se a conta existir no login mas o perfil não, o app recria o perfil em vez de sair sem avisar.
- Chave Pix não pode ser igual à de outra conta.
- Mensagens de erro de login mais claras (servidor mal configurado, muitas tentativas, etc.).
- Funciona sem internet só para abrir; contas e Pix continuam exigindo conexão.
