# :construction: Projeto Trybewarts :construction:
Este projeto consiste em duas partes principais: um formulário de login na parte superior da página e um formulário de avaliação na parte principal da página. Aqui está uma visão geral do que o código realiza:

## Formulário de Login:

O formulário de login consiste em campos de entrada para e-mail e senha, juntamente com um botão "Entrar".
Uma função erroEmail é definida para verificar se o e-mail e a senha correspondem aos valores esperados. Se corresponderem, uma mensagem de boas-vindas é exibida; caso contrário, uma mensagem de erro é exibida.
## Formulário de Avaliação:

O formulário de avaliação contém vários campos, incluindo entrada de texto, seleção, caixas de seleção, botões de rádio e um botão de envio.
Um contador de caracteres é exibido ao lado da área de texto, mostrando quantos caracteres foram digitados e quantos ainda podem ser digitados (máximo de 500).
Um campo de seleção permite que o usuário escolha uma das quatro casas disponíveis.
Botões de rádio permitem que o usuário classifique a Trybewarts em uma escala de 1 a 10.
Caixas de seleção permitem que o usuário escolha quais tópicos está mais interessado em aprender.
## Validação do Formulário:

Um checkbox "Você concorda com o uso das informações acima?" deve ser marcado para que o botão de envio seja habilitado.
Uma função check verifica se o checkbox está marcado. Se estiver marcado, o botão de envio é habilitado; caso contrário, o botão permanece desabilitado.
## Controle de Envio e Contagem de Caracteres:

Um contador de caracteres é exibido ao lado da área de texto, atualizando em tempo real à medida que o usuário digita.
O botão de envio só é habilitado se o checkbox estiver marcado, indicando que o usuário concorda com o uso das informações fornecidas.
## Estilização:

O layout da página é estilizado usando flexbox para criar um design responsivo e esteticamente agradável.
Este projeto oferece aos usuários uma experiência interativa e funcional, permitindo que eles façam login e forneçam feedback à Trybewarts de forma conveniente e fácil de usar.