## *Elo4-1 - Projeto Labenu*
> Feito com React - Por Claudia Trevisan, Guilherme Guy Louis, Lucas Duarte, Luccas de Barros e Marcela Militello.
### Link > [unable-veil.surge.sh]
### O que funciona: 
- Responsividade geral 
- Tela Login
    - Botões para vendedor e consumidor
- Área destinada ao vendedor 
    - Botão de cadastro de produto encaminha para a tela onde é criado um novo anúncio de produto
    - Os produtos já cadastrados podem ser visualizados e deletados
    - Botão para voltar para a tela dos produtos cadastrados
- Tela de cadastro de produto
    - Todo produto contém os seguintes campos:
      - Nome
      - Descrição
      - Preço
      - Método(s) de pagamento aceito(s)
      - Categoria
      - Fotos (URLs)
      - Número de parcelas
- Tela com os produtos anunciados
    - Produtos aparecem em cards
    - O usuário é capaz de filtrar por:
      - Valor mínimo e máximo
      - Título ou descrição
  - O usuário é capaz de ordenar por:
      - Nome
      - Preço
      - Categoria
  - Botões para adicionar os produtos no carrinho
- Tela do carrinho
  - Aparece ao clicar no botão do carrinho ou assim que adiciona um produto
  - Clicando fora da tela do carrinho, já volta para a tela dos produtos
  - O usuário pode ver os produtos adicionados, a quantidade, o subtotal e o valor total dos produtos

### O que não funciona:
- Responsividade do HeaderFilter (área dos filtros)
- Filtro seletor da categoria
