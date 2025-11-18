# Instruções para Substituir os Nomes no JSON

Para substituir os 60 nomes no arquivo `src/data/profissionais.json`, você pode:

## Opção 1: Substituição Manual
Substitua os nomes diretamente no arquivo JSON, um por um, usando a lista abaixo:

1. Lara Monteiro
2. Enzo Ribeiro
3. Melissa Cardoso
4. Rafael Martins
5. Camila Albuquerque
6. Thiago Farias
7. Helena Duarte
8. Lucas Ferraz
9. Bianca Mendonça
10. Daniel Sampaio
11. Ayla Rodrigues
12. Gabriel Santana
13. Clara Vasconcelos
14. Pedro Azevedo
15. Júlia Moraes
16. Caio Silveira
17. Ísis Navarro
18. Felipe Lacerda
19. Cora Fontes
20. Vinícius Prado
21. Aurora Peixoto
22. Samuel Tavares
23. Letícia Correia
24. Miguel Queiroz
25. Luna Barros
26. Otávio Nogueira
27. Valentina Coutinho
28. Arthur Moretti
29. Kiara Mendonça
30. Gustavo Teixeira
31. Serena Valença
32. Leonardo Sales
33. Melina Serrano
34. Erick Fernandes
35. Elisa Campos
36. Nathan Oliveira
37. Jade Amaral
38. Matheus Rezende
39. Amora Carvalho
40. Rodrigo Bittencourt
41. Mirela Pires
42. André Paiva
43. Ayumi Nakamura
44. Henrique Aragão
45. Naomi Matsumoto
46. Igor Torres
47. Rafaela Ventura
48. Diego Antunes
49. Nina Castro
50. Eduardo Barcellos
51. Pietra Almeida
52. Yuri Cavalcante
53. Agatha Benevides
54. Ian Serrano
55. Clarice Bellini
56. Daniel Fontoura
57. Lívia Assis
58. Erik Montebello
59. Maya Diniz
60. Bryan Costa

## Opção 2: Atualizar Fotos
Para cada pessoa, substitua a foto usando:
- `"foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=NomeDaPessoa"`

Exemplo:
- `"foto": "https://api.dicebear.com/7.x/avataaars/svg?seed=Lara"`

## Campos Adicionais
Para cada pessoa, adicione também:
- `"genero": "Feminino"` ou `"Masculino"`
- `"email": "nome.sobrenome@email.com"`
- `"cidade": "Cidade, Estado"` (pode usar o mesmo valor de `localizacao`)
- `"descricao": "Descrição profissional..."` (pode usar o mesmo valor de `resumo`)

