# Cálculo de Corrente Elétrica

Este é um projeto simples em HTML, CSS e JavaScript para calcular a corrente elétrica com base na tensão e resistência, utilizando a fórmula da Lei de Ohm.

## Funcionalidades

- Entrada de valores de Tensão (Volts) e Resistência (Ohms).
- Cálculo da Corrente Elétrica em Amperes (A).
- Cálculo da Potência Elétrica em Watts (W).
- Exibição dos resultados na interface de forma clara.
- Validação dos valores de entrada.

## Estrutura do Projeto

O projeto contém os seguintes arquivos e pastas:

📦 projeto-calculo-corrente 
┣ 📂css 
┃
┗ 📜styles.css # Estilos da página
┣ 📂javascript
┃ ┗ 📜functions.js # Lógica do cálculo e validação 
┣ 📜index.html # Interface do usuário (HTML)
┣ 📜README.md # Descrição do projeto

## Tecnologias Utilizadas

- **HTML**: Para estrutura da página.
- **CSS**: Para estilização e layout.
- **JavaScript**: Para cálculos e validações.

## Como usar

1. Clone o repositório ou faça o download dos arquivos.
2. Abra o arquivo `index.html` no navegador de sua preferência.
3. Insira os valores de Tensão (Volts) e Resistência (Ohms).
4. Clique no botão "Calcular" para ver os resultados de Corrente e Potência.

## Fórmulas Utilizadas

1. **Corrente Elétrica**: \( I = \frac{V}{R} \)
   - Onde: 
     - \( I \) é a Corrente Elétrica (Amperes),
     - \( V \) é a Tensão (Volts),
     - \( R \) é a Resistência (Ohms).
   
2. **Potência Elétrica**: \( P = V \times I \)
   - Onde:
     - \( P \) é a Potência Elétrica (Watts),
     - \( V \) é a Tensão (Volts),
     - \( I \) é a Corrente Elétrica (Amperes).

## Melhorias Futuras

- Adicionar uma seção para calcular a resistência ou a tensão com base nos outros valores.
- Implementar testes automatizados para garantir a precisão dos cálculos.
- Suporte para mais idiomas na interface.