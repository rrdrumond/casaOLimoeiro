


// Objeto para restaurantes
const restaurantsData = [
    {
      clase: "Ambrosius",
      nome: "Ambrosius - Espetadas na brasa",
      endereco: "Rua Capitães de Abril 41A Quinta da Lomba, Barreiro, Portugal",
      telefone: "(+351 967 548 603)",
      puntuacao: "34 avaliações",
      website: '<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      urlWeb:"https://www.facebook.com/ambrosius.espetadas",
      urlMenu:"https://www.facebook.com/ambrosius.espetadas/photos/p.6534672393239870/6534672393239870",
      urlMaps: "https://www.google.com/maps/dir/38.6664171,-9.0491536/Ambrosius+-+Espetadas+na+brasa/@38.6546595,-9.0706503,14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd19364a1ea4a877:0xa90b53272ff58d9!2m2!1d-9.0539284!2d38.6424431?entry=ttu",
      maps: '<i class="fa-solid fa-map"></i>',
      comentarios: [
        "Restaurante muito bom 29/09/2022",
        "Mau atendimento 27/08/2022"
      ],
      cozinhas: "Grill, Portuguesa, Churrasco, Europeia"
    },
    {
      nome: "A Chica do Rina",
      endereco: "Rua Maria Lalande nº 26b (Antigo estabelecimento os Amigos, Atualmente A Chica do Rina), Barreiro, Portugal",
      telefone: "(+351 21 204 9283)",
      puntuacao: "29 avaliações",
      website: '<i class="fa-solid fa-globe"></i>',
      menu: '<i class="fa-solid fa-burger"></i>',
      urlWeb: "https://www.facebook.com/profile.php?id=100067171635637",
      urlMenu: "https://www.facebook.com/profile.php?id=100067171635637",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/A+Chica+do+Rina/@38.667436,-9.0504768,17z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937b28e01a683:0x9a3ac2e2466d2e5!2m2!1d-9.0475823!2d38.668101?entry=ttu",
      maps: '<i class="fa-solid fa-map"></i>',
      comentarios: [
        "Bom restaurante 09/11/2022",
        "Restaurante familiar 29/09/2022"
      ],
      cozinhas: "Europeia, Portuguesa"
    },
  
    {
      nome: "Grelhador Mor, Restaurante Lda",
      endereco: "Rua Camilo Castelo Branco 10, Barreiro, Portugal",
      telefone: "(+351 21 207 2677)",
      puntuacao: "259 avaliações",
      website: '<i class="fa-solid fa-globe"></i>',
      menu: '<i class="fa-solid fa-burger"></i>',
      urlWeb: "https://grelhadormor.pt/",
      urlMenu: "https://grelhadormor.pt/a-nossa-ementa/",
      urlMaps: "https://www.google.com/maps/dir/38.6664171,-9.0491536/Grelhador+Mor,+Restaurante+Lda/@38.6644868,-9.0774021,14z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd194830462d19df:0x52fe620daf58b8b5!2m2!1d-9.0755124!2d38.6645049?entry=ttu",
      maps: '<i class="fa-solid fa-map"></i>',
      comentarios: [
        "O lugar ideal para comer. 06/07/2023",
        "Almoço de sábado saboroso 01/07/2023"
      ],
      cozinhas: "Mediterrâneo, Europeia, Portuguesa"
    },
    {
      nome: "Manel dos Caracois",
      endereco: "Rua Pedro Alvares Cabral, 69A, Barreiro, Portugal",
      telefone: "(+351 21 605 2658)",
      puntuacao: "18 avaliações",
      website: '<i class="fa-solid fa-globe"></i>',
      menu: '<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100054264589936",
      urlMenu:"https://www.facebook.com/profile.php?id=100054264589936",
      urlMaps:"https://www.google.com/maps/dir//Manel+dos+Caracois/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19373568fd9d11:0x98a6910eef6d2e51?sa=X&ved=2ahUKEwjorM7MramAAxUJVqQEHbrqA0IQ9Rd6BAhHEAA&ved=2ahUKEwjorM7MramAAxUJVqQEHbrqA0IQ9Rd6BAhVEAQ",
      comentarios: [
        "Péssima informação 11/07/2023",
        "Fantasto 26/05/2023"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
    {
      nome: "O Planalto",
      endereco: "Rua Doutor Manuel Pacheco Nobre 58, Barreiro, Portugal",
      telefone: "(+351 21 204 5542)",
      puntuacao: "45 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100063475606011",
      urlMenu:"https://www.facebook.com/profile.php?id=100063475606011",
      urlMaps:"https://www.google.com/maps/dir//O+Planalto/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd193648fe922705:0x2d058a5a05fb880a?sa=X&ved=2ahUKEwi8hef3rqmAAxVQ_bsIHXAzCbsQ9Rd6BAhGEAA&ved=2ahUKEwi8hef3rqmAAxVQ_bsIHXAzCbsQ9Rd6BAhWEAM",
      comentarios: [
        "Bom restaurante 17/07/2020",
        "O sabor doutros tempos 11/03/2020"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
  
    {
      nome: "Pizza D'arte",
      endereco: "Praça Eduardo José de Almeida 8, Barreiro, Portugal",
      telefone: "(+351 21 400 4460)",
      puntuacao: "12 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/Petiskartebarreiro/?paipv=0&eav=AfbB8hZQxSVQQmZOB-srSdrtwFaIL-MCaK6FnIyOudmZ2vatWA1v1UpvgAR13DiaNtg&_rdr",
      urlMenu:"https://www.facebook.com/Petiskartebarreiro/?paipv=0&eav=AfbB8hZQxSVQQmZOB-srSdrtwFaIL-MCaK6FnIyOudmZ2vatWA1v1UpvgAR13DiaNtg&_rdr",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/Pizza+D'arte/@38.6597353,-9.0599733,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937c8dca39767:0xa3785417dfe3cbee!2m2!1d-9.0476798!2d38.6538721?entry=ttu",
      comentarios: [
        "Bastante bom 12/12/2018",
        "Pizza 🍕 extra fina 15/04/2018"
      ],
      cozinhas: "Italiana, Pizza, Europeia, Portuguesa"
    },
    {
      nome: "A Tasca da Galega",
      endereco: "Rua dos Combatentes da Grande Guerra, Barreiro, Portugal",
      telefone: "(+351 21 088 4088)",
      puntuacao: "146 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100063538394350",
      urlMenu:"https://www.facebook.com/profile.php?id=100063538394350",
      urlMaps:"https://www.google.com/maps/dir//A+Tasca+da+Galega/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd193641f50d71b5:0x4b7afb7ac0baa38d?sa=X&ved=2ahUKEwjpxIS7sqmAAxUR36QKHfaZBtgQ9Rd6BAhNEAA&ved=2ahUKEwjpxIS7sqmAAxUR36QKHfaZBtgQ9Rd6BAhhEAU",
      comentarios: [
        "Caril de lavagante 15/05/2023",
        "Surpreendente 04/04/2023"
      ],
      cozinhas: "Europeia, Portuguesa"
    },
    {
      nome: "Cervejaria Dez Reis",
      endereco: "Rua Calouste Gulbenkian n°6c, Barreiro, Portugal",
      telefone: "(+351 21 087 9897)",
      puntuacao: "180 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.comidahttps://dezreiscervejaria.wordpress.com/s.pt/pt/barreiro/cozinha-portuguesa/dez-reis/",
      urlMenu:"https://www.comidas.pt/pt/barreiro/cozinha-portuguesa/dez-reis/#menu-213",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/Cervejaria+Dez+Reis/@38.6593412,-9.0661361,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1936346ff7f2f9:0xfc7d0882ec0ffa7c!2m2!1d-9.0635283!2d38.6528789?entry=ttu",
      comentarios: [
        "Completamente inadmissível. A... 07/05/2023",
        "Serviço de excelente qualidade... 08/02/2023"
      ],
      cozinhas: "Marisco, Portuguesa, Europeia, Diner Americano"
    },
    {
      nome: "Christelle Mar - Marisqueria",
      endereco: "Rua Moçambique 15 Santo André, Barreiro, Portugal",
      telefone: "(+351 21 216 8681)",
      puntuacao: "5 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/christellemar.marisqueira.3/?locale=pt_PT",
      urlMenu:"https://www.facebook.com/christellemar.marisqueira.3/?locale=pt_PT",
      urlMaps:"https://www.google.com/maps/dir//Christelle+Mar+-+Marisqueria/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19363739724d35:0x2a084aefdb8057f9?sa=X&ved=2ahUKEwjx6_LEtamAAxX5TKQEHZlOCnUQ9Rd6BAg2EAA&ved=2ahUKEwjx6_LEtamAAxX5TKQEHZlOCnUQ9Rd6BAhFEAM",
      comentarios: [
        "Otimo atendimento 06/11/2019",
        "Devem-se ter em muito boa cont... 06/03/2019"
      ],
      cozinhas: "Não especificado"
    },
  
    {
      nome: "Haitatsu Sushi",
      endereco: "Estrada Nacional 11 112, Baixa da Banheira, Portugal",
      telefone: "(+351 912 415 557)",
      puntuacao: "3 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://haitatsusushi.eatbu.com/?lang=es",
      urlMenu:"https://haitatsusushi.eatbu.com/?lang=es#impressions",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/Haitatsu+Sushi/@38.6633966,-9.0505738,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937b432c8af27:0x56d7c04c71a245a1!2m2!1d-9.0471506!2d38.6603762?entry=ttu",
      comentarios: [
        "Explosão 28/08/2022",
        "Take Away para jantar 22/12/2021"
      ],
      cozinhas: "Japonesa, Sushi"
    },
    {
      nome: "Hamburgueria Fidalgo",
      endereco: "Praça Eduardo Jose De Almeida 8A, Barreiro, Portugal",
      telefone: "(+351 914 408 705)",
      puntuacao: "404 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/hamburgueria.fidalgo/",
      urlMenu:"https://www.facebook.com/hamburgueria.fidalgo/",
      urlMaps:"https://www.google.com/maps?opi=89978449&vet=12ahUKEwib69jcxqmAAxVtgf0HHV4-AnsQ8UF6BAgSEAM..i&lei=2pa_ZJuWGe2C9u8P3vyI2Ac&cs=1&um=1&ie=UTF-8&fb=1&gl=pt&sa=X&geocode=KTtXTxTKNxkNMf7J4aLSx7VK&daddr=R.+Grupo+Desportivo+Fabril+do+Barreiro+4a,+2830-328+Barreiro",
      comentarios: [
        "Comida boa, atendimento decepc... 09/05/2023",
        "Excelente. Hambúrguer atendim... 20/04/2023"
      ],
      cozinhas: "Steakhouse, Portuguesa"
    },
    {
      nome: "Kazoku Sushi Bar",
      endereco: "Avenida do Bocage, Barreiro, Portugal",
      telefone: "(+351 931 350 742)",
      puntuacao: "29 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.comidas.pt/pt/barreiro/cozinha-japonesa-apenas/kazoku/",
      urlMenu:"https://www.facebook.com/kazokusushibarreiro",
      urlMaps:"https://www.google.com/maps/dir//Kazoku+Sushi+Bar%0D%0A%5C/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19363706c28533:0xde69738fbb42cd0b?sa=X&ved=2ahUKEwjshIyQx6mAAxUc7bsIHVvaDfsQ9Rd6BAhPEAA&ved=2ahUKEwjshIyQx6mAAxUc7bsIHVvaDfsQ9Rd6BAhjEAU",
      comentarios: [
        "take aways 14/09/2022",
        "Ir uma vez foi demais. 15/04/2022"
      ],
      cozinhas: "Japonesa, Sushi, Asiático"
    },
    {
      nome: "Lan Mo Sushi Restaurante",
      endereco: "Rua João Lino, 4 Zona Industrial Qta Das Rebelas, Barreiro, Portugal",
      telefone: "(+351 21 215 1168)",
      puntuacao: "5 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu: '<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://karta.digital/lan-mo/",
      urlWeb:"https://karta.digital/lan-mo/",
      urlMaps:"google.com/maps/dir//Lan+Mo+Sushi+Restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19493d8b0098a9:0xdfc9051791b63ab?sa=X&ved=2ahUKEwih0bC0zamAAxXrgf0HHdZRAssQ9Rd6BAhAEAA&ved=2ahUKEwih0bC0zamAAxXrgf0HHdZRAssQ9Rd6BAhbEAQ",
      comentarios: [
        "Jantar de sabado com amigos 11/03/2023",
        "Sushi 12/02/2023"
      ],
      cozinhas: "Chinesa, Sushi, Asiático"
    },
  
    {
      nome: "O Golfinho",
      endereco: "Rua Miguel Bombarda 308 B, Barreiro, Portugal",
      telefone: "(+351 966 377 296)",
      puntuacao: "45 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/rosamartiscarvalho/?rf=470453599990523",
      urlMenu:"https://www.facebook.com/rosamartiscarvalho/?rf=470453599990523",
      urlMaps:"https://www.google.com/maps/dir//retaurante+o+golfino/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1936372138f9e9:0x2266db6cfd33a89f?sa=X&ved=2ahUKEwidp7HhzamAAxWNhv0HHduQA1QQ9Rd6BAhaEAA&ved=2ahUKEwidp7HhzamAAxWNhv0HHduQA1QQ9Rd6BAhkEAU",
      comentarios: [
        "Terrível, BADALHOCO !!! Empre... 13/08/2022",
        "Visito algumas vezes quando me... 29/06/2021"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
   
    {
      nome: "Pic Nic - Delhi Darbar",
      endereco: "Rua 20 de Abril 46A Centro, Barreiro, Portugal",
      telefone: "(Não +351 21 207 0059)",
      puntuacao: "110 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/DelhidarbarBarreiro/",
      urlMenu:"https://www.facebook.com/DelhidarbarBarreiro/",
      urlMaps:"https://www.google.com/maps/dir//R.+20+de+Abril+48,+2830-269+Barreiro/@38.654724,-9.142335,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1937e05f7b66bd:0x597c460ad2fbff75!2m2!1d-9.072295!2d38.6547449?entry=ttu", 
      comentarios: [
        "Jantar em família 23/06/2023",
        "Experiência Perfeita 08/06/2023"
      ],
      cozinhas: "Indiana"
    },
    {
      nome: "Restaurante Mirasol",
      endereco: "Avenida de Santa Maria, 16A, Barreiro, Portugal",
      telefone: "(+351 21 216 8506)",
      puntuacao: "24 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100076005093831",
      urlMenu:"https://www.facebook.com/profile.php?id=100076005093831",
      urlMaps:"https://www.google.com/maps/dir//Restaurante+Mirasol/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1936480075896f:0x1911e1cd2c949bcb?sa=X&ved=2ahUKEwj4-YrR16mAAxVoXqQEHSiEAdoQ9Rd6BAhAEAA&ved=2ahUKEwj4-YrR16mAAxVoXqQEHSiEAdoQ9Rd6BAhREAU",
      comentarios: [
        "Comer muito bom a repetir 04/04/2019",
        "Muito Bom 09/09/2018"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
    {
      nome: "2830 Petisqueira & Marisqueira",
      endereco: "Rua Miguel Lombardo, Barreiro, Portugal",
      telefone: "(+351 21 584 5803)",
      puntuacao: "1 avaliação",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/28trinta/",
      urlMenu:"https://www.facebook.com/28trinta/",
      urlMaps:"https://www.google.com/maps/dir//R.+Miguel+Bombarda+151,+2830-354+Barreiro/@38.6571351,-9.1404425,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1937c7d7ae63dd:0x1bc39526bb35efb9!2m2!1d-9.0703709!2d38.6571815?entry=ttu",
      comentarios: [
        "Boa experiencia 21/03/2023"
      ],
      cozinhas: "Europeia, Portuguesa, Marisco, Mediterrâneo, Cervejarias"
    },
    {
      nome: "3ª Parte",
      endereco: "Campo D. Luis Roberto, Gaio-Rosário, Portugal",
      telefone: "(+351 910 825 862)",
      puntuacao: "128 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/3aPartehome/",
      urlMenu:"https://www.facebook.com/3aPartehome/",
      urlMaps:"https://www.google.com/maps/dir//3%C2%AA+Parte%0D%0A+restaurantes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1938300d84d175:0xbda453d74757146b?sa=X&ved=2ahUKEwiVrbmc3amAAxUcT6QEHXPAAPAQ9Rd6BAhbEAA&ved=2ahUKEwiVrbmc3amAAxUcT6QEHXPAAPAQ9Rd6BAhiEAQ",
      comentarios: [
        "Excelente comida 19/05/2023",
        "Ossos carregados! 07/02/2023"
      ],
      cozinhas: "Europeia, Portuguesa"
    },
    {
      nome: "567 Street Food",
      endereco: "Rua Conselheiro Joaquim Antonio d´Aguiar 2 R/c, Barreiro, Portugal",
      telefone: "(+351 935 107 231)",
      puntuacao: "19 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/567burger/",
      urlMenu:"https://www.facebook.com/567burger/",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/567+Street+Food%0D%0A%0D%0A%0D%0A+restaurantes/@38.659931,-9.0836496,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd193728820d3471:0x93cedcbda41c9ab0!2m2!1d-9.083008!2d38.6621353?entry=ttu",
      comentarios: [
        "Nota 10 28/06/2023",
        "Intragável 26/06/2023"
      ],
      cozinhas: "Americana, Brasileira, Sul Americana"
    },
    {
      nome: "A Portuguesa",
      endereco: "Rua Padre José Feliciano, 20, Baixa da Banheira, Portugal",
      telefone: "(928 031 835)",
      puntuacao: "9 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/aPortuguesaBrr/",
      urlMenu:"https://www.facebook.com/aPortuguesaBrr/",
      urlMaps:"https://www.google.com/maps?opi=89978449&lqi=CiVyZXN0YXVyYW50ZSBBIFBvcnR1Z3Vlc2EgcmVzdGF1cmFudGVzSI_D_KTxqoCACFo1EAAQARACEAMiJXJlc3RhdXJhbnRlIGEgcG9ydHVndWVzYSByZXN0YXVyYW50ZXMqBAgDEAOSAQNiYXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUlZPVGxmUVMxM1JSQUKqAWAQASoQIgxyZXN0YXVyYW50ZXMoDDIfEAEiG92SbMM6THcq2JS4mRObLzcuhI6-m4rvu3sPVjIpEAIiJXJlc3RhdXJhbnRlIGEgcG9ydHVndWVzYSByZXN0YXVyYW50ZXM&phdesc=N5HROBC8DQE&vet=12ahUKEwiQ7PCA36mAAxVGhf0HHZsmBSkQ1YkKegQIIhAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=pt&sa=X&geocode=KcvG95NCNhkNMSnZbt3xd6mY&daddr=Av.+Bento+Gon%C3%A7alves+130,+2830-304+Barreiro",
      comentarios: [
        "excelente qualidade 04/05/2023",
        "Espetacular 25/09/2022"
      ],
      cozinhas: "Europeia, Portuguesa"
    },
    {
      nome: "A Praceta",
      endereco: "Avenida Bento Goncalves 130, Barreiro, Portugal",
      telefone: "(+351 21 205 0080)",
      puntuacao: "80 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps: '<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/restaurante.praceta",
      urlMenu:"https://www.facebook.com/restaurante.praceta",
      urlMaps:"https://www.google.com/maps/dir//A+Praceta%0D%0A+restaurente%0D%0A%0D%0A%0D%0A+restaurantes/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1937cf43921519:0x8cc2e436bf81b032?sa=X&ved=2ahUKEwj1qPbf36mAAxXLU6QEHc5lCTkQ9Rd6BAhHEAA&ved=2ahUKEwj1qPbf36mAAxXLU6QEHc5lCTkQ9Rd6BAhIEAU",
      comentarios: [
        "Insatisfeita 25/03/2023",
        "Não sei se repito 16/06/2022"
      ],
      cozinhas: "Portuguesa, Europeia, Pub"
    },
    {
      nome: "Aqui há",
      endereco: "Rua Miguel Bombarda, 69, Barreiro, Portugal",
      telefone: "(+351 21 207 0139)",
      puntuacao: "17 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.tripadvisor.pt/Restaurant_Review-g189151-d9761461-Reviews-Aqui_ha-Barreiro_Setubal_District_Alentejo.html",
      urlMenu:"https://www.tripadvisor.pt/Restaurant_Review-g189151-d9761461-Reviews-Aqui_ha-Barreiro_Setubal_District_Alentejo.html",
      urlMaps:"https://www.google.com/maps?output=search&q=Aqui+h%C3%A1+Rua+Miguel+Bombarda,+69,+Barreiro+2830-354+Portugal+restaurante+restaurantes&source=lnms&entry=mc&sa=X&ved=2ahUKEwiajvyh5KmAAxUYY6QEHU1BDzgQ0pQJegQIDhAB",
      comentarios: [
        "Simplesmente brilhante! 12/02/2019",
        "... 02/10/2018"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
  
    {
      nome: "Debicar",
      endereco: "Rua Garcia de Resende 2a, Barreiro, Portugal",
      telefone: "(+351 967 953 791)",
      pontuacao: "1 avaliação",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/people/Debicar-mariscos-e-Petiscos/100040646453509/?locale=pt_PT",
      urlMenu:"https://www.facebook.com/people/Debicar-mariscos-e-Petiscos/100040646453509/?locale=pt_PT",
      urlMaps:"https://www.google.com/maps/dir//Debicar/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1937b8745992bd:0x3e95a2272f6165a8?sa=X&ved=2ahUKEwie-Ie276mAAxUK2aQKHSAoDg0Q9Rd6BAhEEAA&ved=2ahUKEwie-Ie276mAAxUK2aQKHSAoDg0Q9Rd6BAhNEAQ",
      comentarios: [
        "Espetacular 06/06/2022"
      ],
      cozinhas: "Bar, Churrasco, Europeia, Pub, Portuguesa, Cervejarias"
    },
    {
      nome: "Hamburgueria Da Villa",
      endereco: "Avenida Escola dos Fuzileiros Navais, 1 K, Barreiro, Portugal",
      telefone: "(21 803 5606)",
      puntuacao: "27 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/hamb.villa/?locale=pt_PT",
      urlMenu:"https://www.facebook.com/hamb.villa/?locale=pt_PT",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/Hamburgueria+Da+Villa/@38.6542301,-9.0735247,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937f0a72a6bb7:0xc1780a18634a052c!2m2!1d-9.0613613!2d38.6464529?entry=ttu",
      comentarios: [
        "Os melhores!! 14/04/2021",
        "Melhor hamburgueria do barreir... 17/07/2020"
      ],
      cozinhas: "Fast food"
    },
    {
      nome: "La Nonna",
      endereco: "Rua José Félix Ferreira, 1, Barreiro, Portugal",
      telefone: "(+351 21 214 1423)",
      puntuacao: "197 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu: '<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/ristorantelanonna/?locale=pt_PT",
      urlMenu:"https://www.facebook.com/ristorantelanonna/?locale=pt_PT",
      urlMaps:"https://www.google.com/maps/dir//La+Nonna%0D%0A+retaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19482ed4e74b59:0x4d642cc856edc60a?sa=X&ved=2ahUKEwj1sdjN8amAAxV3g_0HHUvBAM0Q9Rd6BAhDEAA&ved=2ahUKEwj1sdjN8amAAxV3g_0HHUvBAM0Q9Rd6BAhSEAQ",
      comentarios: [
        "Excelente! 11/05/2023",
        "Nota 10 20/01/2023"
      ],
      cozinhas: "Italiana, Piza, Mediterrâneo, Europeia"
    },
    {
      nome: "Mafraria Pastéis de Nata – Barreiro",
      endereco: "Rua Miguel Bombarda 172, Barreiro, Portugal",
      telefone: "(351 917 862 205)",
      puntuacao: "1 avaliação",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://mafraria.com/",
      urlMenu:"https://mafraria.com/pt/product/9",
      urlMaps:"https://www.google.com/maps/dir//R.+Miguel+Bombarda+172,+2830-266+Barreiro/@38.6563123,-9.1397768,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd19375a98ca1ee7:0xd4a59a3dff61a42c!2m2!1d-9.0697368!2d38.6563332?entry=ttu",
      comentarios: [
        "Excelência 31/12/2022"
      ],
      cozinhas: "Europeia, Portuguesa"
    },
    {
      nome: "Mercado do Hamburguer",
      endereco: "Estrada Nacional 10 Barreiro Retail Planet, Km 18,5 Loja 31-A, Barreiro, Portugal",
      telefone: "(+351 21 580 1319)",
      puntuacao: "16 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/Mercadodohamburguer/?fref=ts",
      urlMenu:"https://glovoapp.com/pt/pt/lisboa/hamburger-do-mercado-lis/?utm_campaign=maplinks&utm_medium=organic&utm_source=googlemaps",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/BPLANET+-+Barreiro+Retail+Planet,+Estada+Nacional+10+km+18.5,+2830-411+Coina/@38.624154,-9.0872905,13z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1948ef07015ed5:0x61e6d3309d1a1d05!2m2!1d-9.0434777!2d38.581948?entry=ttu",
      comentarios: [
        "Um hamburguer único. 06/11/2019",
        "Hamburguers em pão gelado 22/10/2019"
      ],
      cozinhas: "Americana, Fast food, Europeia"
    },
    {
      nome: "Moranata",
      endereco: "Estrada Nacional 10 Barreiro Retail Planet, Km 18, 5, Barreiro, Portugal",
      telefone: "(+351 960 280 396)",
      puntuacao: "6 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"http://www.moranata.pt/",
      urlMenu:"http://www.moranata.pt/",
      urlMaps:"https://www.google.com/maps/dir/38.6664171,-9.0491536/Moranata/@38.6121555,-9.1077187,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1948d392e4fb9f:0xb4ced72677c20b4c!2m2!1d-9.0507521!2d38.5576005?entry=ttu",
      comentarios: [
        "Gelado esparguete 15/08/2020",
        "Gelados artesanais 22/10/2019"
      ],
      cozinhas: "Café"
    },
    {
      nome: "O Afonsinho",
      endereco: "Rua da Liberdade 100 Baixa da Banheira, Moita, Portugal",
      telefone: "(+351 21 137 5627)",
      puntuacao: "16 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.instagram.com/oafonsinho/",
      urlMenu:"https://www.instagram.com/oafonsinho/",
      urlMaps:"https://www.google.com/maps/dir//MoranatO+Afonsinho%0D%0A+restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19373d390e2ca7:0x7b79c0ad08085218?sa=X&ved=2ahUKEwjQp4qV-KmAAxUfTaQEHYdCAxkQ9Rd6BAhJEAA&ved=2ahUKEwjQp4qV-KmAAxUfTaQEHYdCAxkQ9Rd6BAhNEAQ",
      comentarios: [
        "Ótimo 18/07/2023",
        "Uma ótima experiência,recomend... 13/07/2023"
      ],
      cozinhas: "Portuguesa"
    },
    {
      nome: "O Fondue",
      endereco: "Rua José Félix Ferreira Palhais, Barreiro, Portugal",
      telefone: "(+351 21 215 6081)",
      puntuacao: "471 avaliações",
      website:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/OFondueBarreiro/?locale=pt_PT",
      urlMenu:"https://www.facebook.com/OFondueBarreiro/?locale=pt_PT",
      urlMaps:"https://www.google.com/maps/dir//o+Fondue%0D%0A%0D%0A+restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19482935c04b29:0x34fbe83f09e315d7?sa=X&ved=2ahUKEwj8wbHJ-qmAAxUfhf0HHck6CsYQ9Rd6BAhCEAA&ved=2ahUKEwj8wbHJ-qmAAxUfhf0HHck6CsYQ9Rd6BAhMEAU",
      comentarios: [
        "Péssimo atendimento 07/04/2023",
        "Péssimo 28/02/2023"
      ],
      cozinhas: "Steakhouse, Europeia, Portuguesa, Grill, Contemporâneo, Fusão"
    },
    {
      nome: "O Mario 100 Espinhas",
      endereco: "R. São Martinho 16, Moita, Portugal",
      telefone: "(+351 21 207 6438)",
      puntuacao: "1 avaliação",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/Mario100Espinhas?fref=ts",
      urlMenu:"https://www.facebook.com/Mario100Espinhas?fref=ts",
      urlMaps:"https://www.google.com/maps/dir//o+mario+100+espinhas%0D%0A%0D%0A+restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1937e98bcc0219:0x253b266e4658a1c0?sa=X&ved=2ahUKEwi3p8Xb-6mAAxWhQuUKHe8DAWAQ9Rd6BAhBEAA&ved=2ahUKEwi3p8Xb-6mAAxWhQuUKHe8DAWAQ9Rd6BAhEEAU",
      comentarios: [
        "Ótimo 18/07/2023",
        "Uma ótima experiência,recomend... 13/07/2023"
      ],
      cozinhas: "Portuguesa"
    },
    {
      nome: "O Pitéu do Alentejo",
      endereco: "Rua Miguel Bombarda 308 B, Barreiro, Portugal",
      telefone: "(21 209 2330)",
      puntuacao: "45 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100063770462885",
      urlMenu:"https://www.facebook.com/profile.php?id=100063770462885",
      urlMaps:"https://www.google.com/maps/dir//O+Pit%C3%A9u+do+Alentejo%0D%0A%0D%0A+restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1937c8735f0977:0xa0f89a322254fc82?sa=X&ved=2ahUKEwiv5I3M_KmAAxXdgf0HHanIAicQ9Rd6BAg2EAA&ved=2ahUKEwiv5I3M_KmAAxXdgf0HHanIAicQ9Rd6BAhDEAQ",
      comentarios: [
        "Terrível, BADALHOCO !!! Empre... 13/08/2022",
        "Visito algumas vezes quando me... 29/06/2021"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
  
    {
      nome: "O Stop",
      endereco: "Rua Augusto Gil, Nº 1 E 3 Baixa da Banheira, Moita, Portugal",
      telefone: "(Não fornecido)",
      puntuacao: "34 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"http://www.restauranteostop.com/",
      urlMenu:"https://www.facebook.com/RestauranteStopOficial/?locale=pt_BR",
      urlMaps:"https://www.google.com/maps/dir//R.+Augusto+Gil+n,1,+2835-067+Baixa+da+Banheira/@38.6552094,-9.1174113,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd1937c7f04620a7:0x7043255d233eeeda!2m2!1d-9.0473713!2d38.6552303?entry=ttu",
      comentarios: [
        "Muito Bom!!! 08/03/2022",
        "Recomendo 16/12/2019"
      ],
      cozinhas: "Portuguesa, Europeia"
    },
    
    {
      nome: "Restaurante Talho Central",
      endereco: "R. Dr. Câmara Pestana 17 A, Barreiro, Portugal",
      telefone: "(Não fornecido)",
      puntuacao: "154 avaliações",
      webiste:'<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.talhocentral.pt/",
      urlMenu:"https://www.talhocentral.pt/menu",
      urlMaps:"https://www.google.com/maps/dir//restaurate+o+talho+central%0D%0A%0D%0A+restaurante/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd193669f05893c7:0x32691ac5033e1f1?sa=X&ved=2ahUKEwj9uIGu_qmAAxU4g_0HHX3IDVgQ9Rd6BAhBEAA&ved=2ahUKEwj9uIGu_qmAAxU4g_0HHX3IDVgQ9Rd6BAhPEAU",
      comentarios: [
        "Pessimo atendimento 19/06/2023",
        "Chegamos e disseram que teríam... 04/02/2023"
      ],
      cozinhas: "Contemporâneo, Fusão, Steakhouse, Europeia, Portuguesa"
    },
  
    {
      nome: "Senshi Sushi",
      endereco: "Rua Marquês de Pombal Nº 116, Barreiro, Portugal",
      telefone: "(+351 960 173 108)",
      puntuacao: "96 avaliações",
      website: '<i class="fa-solid fa-globe"></i>',
      menu:'<i class="fa-solid fa-burger"></i>',
      maps:'<i class="fa-solid fa-map"></i>',
      urlWeb:"https://www.facebook.com/profile.php?id=100063747960807",
      urlMenu:"https://www.facebook.com/profile.php?id=100063747960807",
      urlMaps:"https://www.google.com/maps/dir//Sushi+senshi/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1937c8ddbf7ac9:0x959074625eb3db6a?sa=X&ved=2ahUKEwj8mfvlr6qAAxUzg_0HHc0EDQgQ9Rd6BAg4EAA&ved=2ahUKEwj8mfvlr6qAAxUzg_0HHc0EDQgQ9Rd6BAg6EAU",
      comentarios: [
        "Excelente 04/11/2022",
        "A voltar 23/08/2022"
      ],
      cozinhas: "Mediterrâneo, Portuguesa, Bar de vinhos"
    }
   
  ];
  
  // Objeto para autocarros
  const autocarrosData = [
    {
      nome: "TCB",
      endereco: "Barreiro",
      telefone: "+351 212 068 787 ",
      puntuacao: "N/A",
      comentarios: "Horarios de autocarros TCB Barreiro",
      website: '<i class="fa-solid fa-clock"></i>',
      urlWeb:"https://www.cm-barreiro.pt/viver/tcb-transportes-colectivos-do-barreiro/horarios",
      menu: '<i class="fa-brands fa-android"></i>',
      urlMenu:"https://play.google.com/store/apps/details?id=wow.com.transportescolectivosbarreiro&hl=pt_PT&pli=1",
      maps:'<i class="fa-brands fa-apple"></i>',
      urlMaps:"https://apps.apple.com/pt/app/tcb/id1009337613"
  
    },
    {
      nome: "TTSL",
      endereco: "Barcos do Barreiro",
      telefone: "+351 808 20 30 50",
      puntuacao: "N/A",
      comentarios: "Barcos com trajeto Barreiro - Terreiro do Paço  e Terreiro do Paço- Barreiro",
      website:'<i class="fa-solid fa-clock"></i>',
      urlWeb: "https://ttsl.pt/passageiros/horarios-de-ligacoes-fluviais/ligacao-barreiro-terreiro-do-paco/",
      menu:'<i class="fa-brands fa-android"></i>',
      urlMenu:"https://play.google.com/store/apps/details?id=pt.transtejo.ttsl",
      maps:'<i class="fa-brands fa-apple"></i>',
      urlMaps:"https://apps.apple.com/pt/app/ttsl/id1471624187"
    },
  
    {
      nome: "Carris Metropolitana",
      endereco: "Lisboa",
      telefone: "+351 210 418 800",
      puntuacao: "N/A",
      comentarios: "Autocarros de Lisboa e arredores",
      website:'<i class="fa-solid fa-clock"></i>',
      urlWeb: "https://www.carrismetropolitana.pt/horarios/?date=2023-07-28&municipality_id=04&route_short_name=",
      menu:'<i class="fa-brands fa-android"></i>',
      urlMenu:"https://play.google.com/store/apps/details?id=pt.carris.tecmic&hl=pt_PT&gl=US",
      maps:'<i class="fa-brands fa-apple"></i>',
      urlMaps:"https://apps.apple.com/pt/app/carris/id1321889486"
    },
  
    {
      nome: "CP",
      endereco: "Lisboa",
      telefone: "+351 808 109 110",
      puntuacao: "N/A",
      comentarios: "Comboios de Portugal",
      website:'<i class="fa-solid fa-clock"></i>',
      urlWeb: "https://www.cp.pt/passageiros/pt/consultar-horarios",
      menu:'<i class="fa-brands fa-android"></i>',
      urlMenu:"https://play.google.com/store/apps/details?id=pt.cp.mobiapp",
      maps:'<i class="fa-brands fa-apple"></i>',
      urlMaps:"https://apps.apple.com/pt/app/comboios-de-portugal/id1105415627"
    },
    // Agrega más objetos para otros autocarros
  ];
  
  // Objeto para eventos
  const eventosData = [
    {
      nome: "Eventos no Barreiro",
      endereco: "Camara Municipal do Barreiro",
      telefone: "+351 212 068 000",
      website: '<i class="fa-solid fa-globe"></i>',
      urlWeb: "https://www.cm-barreiro.pt/conhecer/agenda-de-eventos",
      menu:'<i class="fa-brands fa-facebook"></i>',
      urlMenu: "https://www.facebook.com/municipio.barreiro",
      maps: '<i class="fa-brands fa-instagram"></i>',
      urlMaps:"https://www.instagram.com/municipiodobarreiro/",
      puntuacao: "N/A",
      comentarios:"N/A"
  
    },
    {
      nome: "Eventos em Almada",
      endereco: "Camara Municipal de Almada",
      telefone: "212 724 000 - 800206770 ",
      website: '<i class="fa-solid fa-globe"></i>',
      urlWeb: "https://www.cm-almada.pt/eventos",
      menu:'<i class="fa-brands fa-facebook"></i>',
      urlMenu: "https://www.facebook.com/cmalmada/",
      maps: '<i class="fa-brands fa-instagram"></i>',
      urlMaps:"https://www.instagram.com/cmalmada/",
      puntuacao: "N/A",
      comentarios:"N/A"
    },
    {
      nome: "Eventos em Lisboa",
      endereco: "Camara Municipal de Lisboa",
      telefone: "218 170 552 - 800 910 211  ",
      website: '<i class="fa-solid fa-globe"></i>',
      urlWeb: "https://www.lisboa.pt/agenda/o-que-fazer",
      menu:'<i class="fa-brands fa-facebook"></i>',
      urlMenu: "https://www.facebook.com/camaradelisboa/",
      maps: '<i class="fa-brands fa-instagram"></i>',
      urlMaps:"https://www.instagram.com/camara_municipal_lisboa/",
      puntuacao: "N/A",
      comentarios:"N/A"
    },
    {
      nome: "Eventos em Seixal",
      endereco: "Camara Municipal de Seixal",
      telefone: "+351 212 276 700",
      website: '<i class="fa-solid fa-globe"></i>',
      urlWeb: "https://www.cm-seixal.pt/agenda",
      menu:'<i class="fa-brands fa-facebook"></i>',
      urlMenu: "https://www.facebook.com/municipioseixal/",
      maps: '<i class="fa-brands fa-flickr"></i>',
      urlMaps:"https://www.flickr.com/photos/cmseixal",
      puntuacao: "N/A",
      comentarios:"N/A"
    },
    {
      nome: "Eventos em Setubal",
      endereco: "Camara Municipal de Setubal",
      telefone: "+351 212 276 700",
      website: '<i class="fa-solid fa-globe"></i>',
      urlWeb: "https://www.mun-setubal.pt/documentos-cat/guia-de-eventos/",
      menu:'<i class="fa-brands fa-facebook"></i>',
      urlMenu: "https://www.facebook.com/municipiodesetubal/",
      maps: '<i class="fa-brands fa-instagram"></i>',
      urlMaps:"https://www.instagram.com/municipiodesetubal/",
      puntuacao: "N/A",
      comentarios:"N/A"
    },
    
    
    // Agrega más objetos para otros eventos
  ];
  
  // Objeto para locais turísticos
  const locaisTuristicosData = [
    {
      nome: "Local Mural Vhils Barreiro1",
      endereco: "R. Cuf 15, Barreiro 2830-571 Portugal",
      numero: "",
      puntuacao: "",
      comentarios: " \"Obra inegável de grande autor, aludindo ao Barreiro e aos barreirenses e ás suas vidas carregadas de sacrifício, numa luta pela única coisa que tinham, a sua dignidade.\" \"Interessante, bonito e adequado ao espaço onde está. Vê-se notoriamente que é mais uma obra de Vhils\"",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.tripadvisor.pt/Attraction_Review-g189151-d20953065-Reviews-Mural_Vhils_Barreiro-Barreiro_Setubal_District_Alentejo.html",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://vhils.com/",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir/38.6686614,-9.0460533/Mural+Vhils+Barreiro/@38.6669033,-9.0790013,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937457114aa39:0x4a09500c519d7dea!2m2!1d-9.0706431!2d38.6661993?entry=ttu"
    },
    {
      nome: "Passadiços de Alburrica",
      endereco: "Passadiços de Alburrica, Barreiro",
      numero: "N/a",
      puntuacao: "4,5",
      comentarios: "Filipe Oliveira Guia local Fácil  |  Circular  |  Menos de 1 h Alburrica - derivada do árabe 'al barriga' que significa 'brilho, esplendor'",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://aquapolis.com.pt/T/passadicos-do-barreiro/",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://aquapolis.com.pt/praia-fluvial-de-alburrica-o-oasis-do-circuito-do-barreiro/",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps?opi=89978449&lqi=CiJwcmFpYSBmbHV2aWFsIHBhc3NhZGnDp29zIGJhcnJlaXJvSK3IqeaguYCACFouEAAQARACGAIYAyIicHJhaWEgZmx1dmlhbCBwYXNzYWRpw6dvcyBiYXJyZWlyb5IBC2hpa2luZ19hcmVhmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5vYXkxeE5qQlJSUkFCqgFqEAEqHSIZcHJhaWEgZmx1dmlhbCBwYXNzYWRpw6dvcygMMh8QASIbRH44v3G-OOmjLNVSMS9eVUkLNW4CafNMpOZDMiYQAiIicHJhaWEgZmx1dmlhbCBwYXNzYWRpw6dvcyBiYXJyZWlybw&vet=12ahUKEwi7p6XEms2AAxVdVaQEHQXEANMQ1YkKegQIGxAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=pt&sa=X&geocode=KeeGQHbYNxkNMQZnUeReELaW&daddr=Barreiro"
    }, {
      nome:"Moinhos",
      endereco: "Moinhos de Vento de Alburrica, Barreiro",
      numero: "N/A",
      puntuacao: "4,5",
      comentarios: "Bom passeio a pena bela zona...praia/campo'barconauta	'Espaço agradável para um passeio em família ou para a prática de desporto.'",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/patrimonio-historico-cultural-e-equipamentos/patrimonio-civil/moinhos-de-vento",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://turistaslupa.com/2020/03/21/os-moinhos-de-alburrica-historia-e-lazer-no-barreiro/",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps?output=search&q=moinhos+barreiro&source=lnms&entry=mc&sa=X&ved=2ahUKEwjwpoTtpc2AAxUVWqQEHRklBiEQ0pQJegQIDRAB"
    }, {
      nome: "Igreja Nossa Senhora do Rosario",
      endereco: "Igreja de Nossa Senhora do Rosário, R. Alm. Reis 1, 2830-400 Barreiro",
      numero: "212 068 000",
      puntuacao: "4,3",
      comentarios: "Igreja linda e c História na sua construção.",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/patrimonio-historico-cultural-e-equipamentos/patrimonio-religioso/igreja-de-nossa-senhora-do-rosario",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://www.facebook.com/profile.php?id=1251231761588775&paipv=0&eav=Afbcme1XAic1Ys9QjniuTNr50hEIZ_pjML_hdJXOXJST91cIXR83D2SV1HNLznNTUnw&_rdr",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir//Igreja+Nossa+Senhora+do+Rosario+barreiro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd193669150ce03b:0x5ab46711b47351b0?sa=X&ved=2ahUKEwi7vJfgps2AAxUiVKQEHfuRD1IQ9Rd6BAhGEAA&ved=2ahUKEwi7vJfgps2AAxUiVKQEHfuRD1IQ9Rd6BAhXEAM"
    }, {
      nome: "Parque Recreativo da Cidade (POLIS)",
      endereco: "R. Maputo, 2830-567 Barreiro",
      numero: "918563320",
      puntuacao: "4,4",
      comentarios: "Ótimo local para prática de exercício físico e momentos de lazer em família.",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/turismo/parques-e-jardins/parque-recreativo-da-cidade-polis",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://www.viralagenda.com/pt/p/145328632198957",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir//polis+barreiro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19362e450e1cf1:0x16abdd8b2521a30c?sa=X&ved=2ahUKEwjlwMzTp82AAxU-ZaQEHeFjAesQ9Rd6BAg-EAA&ved=2ahUKEwjlwMzTp82AAxU-ZaQEHeFjAesQ9Rd6BAhJEAU"
    }, {
      nome: "Mata da Machada",
      endereco: "R. Independência Nacional 10-3 Vale de Zebro, Barreiro",
      numero: "800 912 070",
      puntuacao: "4,6",
      comentarios: "Mata boa para um passeio a pé, uma volta de bicicleta ou para uma corrida.",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/turismo/lazer-entretenimento/mata-nacional-da-machada",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"http://www.lifebiodiscoveries.pt/projeto",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"google.com/maps/dir//mata+da+machada+barreiro/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd194847d4daf4f1:0xd9c59daac74d0d93?sa=X&ved=2ahUKEwikn_3CqM2AAxX0TKQEHaapALQQ9Rd6BAhFEAA&ved=2ahUKEwikn_3CqM2AAxX0TKQEHaapALQQ9Rd6BAhVEAQ"
    }, {
      nome: "Convento Madre de Deus da Verderena",
      endereco: "R. Dona Francisca de Azambuja 54, 2830-077 Barreiro",
      numero: "21 206 8654",
      puntuacao: "4,0",
      comentarios: "Boa biblioteca que permite estudar e fazer trabalhos em grupo.",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/patrimonio-historico-cultural-e-equipamentos/monumentos/convento-madre-de-deus-da-verderena",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://lifecooler.com/artigo/atividades/convento-madre-de-deus-da-verderena/433681",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir//Convento+Madre+de+Deus+da+Verderena/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd1936342f380753:0x2d3b3063c5be0271?sa=X&ved=2ahUKEwiOic30qc2AAxWr_7sIHdBoABwQ9Rd6BAhJEAA&ved=2ahUKEwiOic30qc2AAxWr_7sIHdBoABwQ9Rd6BAhTEAU"
    }, {
      nome: "Vale de Zebro e Museu do Fuzileiro",
      endereco: "Escola de Fuzileiros, Vale de Zebro, Estrada Nacional 10-3, 2830-412 Coinas",
      numero: "210 927 288",
      puntuacao: "N/a",
      comentarios: "N/a",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/historia/descobrimentos/complexo-real-de-vale-de-zebro-e-museu-do-fuzileiro",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://fuzileiros.marinha.pt/pt/o_que_fazemos/atividades_culturais/Paginas/museudofuzileiro.aspx",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir//Vale+de+Zebro,+Palhais/@38.6185611,-9.0669065,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0xd194837889f6af5:0xdc27c70985eaeb4c!2m2!1d-9.0463069!2d38.6185635!3e0?entry=ttu"
    }, {
      nome: "Zona Ribeirinha",
      endereco: "Verderena, 2830-287 Barreiro",
      numero: "N/A",
      puntuacao: "N/A",
      comentarios: "N/A",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/viver/noticia/barreiro-ganha-nova-frente-ribeirinha-na-verderena-mais-de-39-mil-m2-de-espaco-verde-unico-na-area-metropolitana-de-lisboa",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://www.cm-barreiro.pt/viver/noticia/barreiro-ganha-nova-frente-ribeirinha-na-verderena-mais-de-39-mil-m2-de-espaco-verde-unico-na-area-metropolitana-de-lisboa",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir/38.6686614,-9.0460533/Mural+Vhils+Barreiro/@38.6669033,-9.0790013,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd1937457114aa39:0x4a09500c519d7dea!2m2!1d-9.0706431!2d38.6661993?entry=ttu"
    }, {
      nome: "Museo Industrial Baia do Tejo",
      endereco: "R. 44 (Parque Empresarial da Quimiparque) 29-25,",
      numero: "21 206 7709",
      puntuacao: "4,3",
      comentarios: "Uma viagem pelo passado da nossa Cidade.",
      website:'<i class="fa-solid fa-globe"></i>',
      urlWeb:"https://www.cm-barreiro.pt/conhecer/turismo/museus-patrimonio/museu-industrial-da-baia-do-tejo-quimiparque",
      menu:'<i class="fa-solid fa-link"></i>',
      urlMenu:"https://www.facebook.com/museuindustrial.baiadotejo/?locale=pt_PT",
      maps:'<i class="fa-solid fa-map"></i>',
      urlMaps:"https://www.google.com/maps/dir//Museo+Industrial+Baia+do+Tejo/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xd19364facb5014b:0x893530b3b70071a8?sa=X&ved=2ahUKEwjTqbedss2AAxUDZaQEHbStAp8Q9Rd6BAhLEAA&ved=2ahUKEwjTqbedss2AAxUDZaQEHbStAp8Q9Rd6BAhXEAQ"
    }
    // Agrega más objetos para otros locais turísticos
  ];
  
  // Objeto para recomendações
  const recomendacoesData = [
    {
      nombre: "Recomendação 1",
      direccion: "Dirección de la Recomendação 1",
      numero: "+351 9111 86328",
      puntuacion: "4.6",
      comentarios: "Comentarios de la Recomendação 1...",
    },
    {
      nombre: "Recomendação 2",
      direccion: "Dirección de la Recomendação 2",
      numero: "+351 9111 86329",
      puntuacion: "4.4",
      comentarios: "Comentarios de la Recomendação 2...",
    },
    // Agrega más objetos para otras recomendações
  ];
  
  
  

  
  // Funciones para el listado de objetos
  const categoryButtons = document.querySelectorAll(".category-item");
  const dialog = document.getElementById("dialog");
  const dialogTitle = document.querySelector(".dialog-title");
  const dialogText = document.querySelector(".dialog-text");
  const closeBtn = document.getElementById("closeBtn");
  let currentOpenList = null;

 


  
  function toggleList(containerId, dataList) {
    const container = document.getElementById(containerId);
    const isListOpen = !container.classList.contains("hidden");
  
    closeAllListsExcept(container);
  
    if (!isListOpen) {
      currentOpenList = container;
      renderObjectList(container, dataList);
      container.scrollIntoView({ behavior: "smooth" });
      container.classList.remove("hidden"); // Mostrar el contenedor
    } else {
      currentOpenList = null;
      container.classList.add("hidden"); // Ocultar el contenedor
    }
  }
  





  
  function closeAllListsExcept(excludeContainer) {
    const allContainers = document.querySelectorAll(".list-container");
    allContainers.forEach((container) => {
      if (container !== excludeContainer) {
        container.classList.remove("show");
        container.querySelectorAll(".object-button").forEach((button) => {
          button.style.display = "none";
        });
      }
    });
  }



  
  function createObjectButton(name, className) {
    const objectButton = document.createElement("button");
    objectButton.textContent = name;
    objectButton.classList.add("object-button");
    if (className) {
      objectButton.classList.add(className);
    }
    return objectButton;
  }
  


  function renderObjectList(container, data) {
    container.innerHTML = "";
    data.forEach((item) => {
      const objectButton = createObjectButton(
        item.nome,
        container.id === "restaurantListContainer" ? item.clase : ""
      );
      container.appendChild(objectButton);
      objectButton.addEventListener("click", () => {
        showObjectInfo(item);
      });
    });
  
    container.querySelectorAll(".object-button").forEach((button) => {
      button.style.display = "block";
    });
  };
  
  
  
  
  
  
  
  function showObjectInfo(object) {
    dialogTitle.textContent = object.nome;
    dialogText.innerHTML = `
      <p>Endereço: ${object.endereco}</p>
      <p>Número de teléfone: ${object.telefone}</p>
      <p>Puntuação: ${object.puntuacao}</p>
      <p>Comentarios: ${object.comentarios}</p>
      <a  class="link" href="${object.urlWeb}" target="_Website">
        <button class="custom-btn btn-5"; style="cursor:pointer">${object.website}</button>
        </a>
        <a class="link" href="${object.urlMenu}" target="_blank">
        <button class="custom-btn btn-5" style="cursor: pointer;">${object.menu}</button>
        </a>
        <a class="link" href="${object.urlMaps}" target="_blank">
        <button class="custom-btn btn-5" style="cursor: pointer;">${object.maps}</button>
        </a>
        `;
        dialog.style.display = "block";

        const listContainers = document.querySelectorAll(".list-container");
        listContainers.forEach((listContainer) => {
          listContainer.style.filter = "blur(5px)";
        });
  }
      
    

  function closeDialog() {
    dialog.style.display = "none";
    currentOpenList = null;
    const listContainers = document.querySelectorAll(".list-container");
    listContainers.forEach((listContainer) => {
      listContainer.style.filter = "none";
    });
  }
  

        
      
      // Al cerrar el diálogo, eliminar la clase "show" del .list-container para que el filtro "blur" se elimine
      
  window.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const dataList = getData(target);
      toggleList(target, dataList);
    });
  });
  
  closeBtn.addEventListener("click", closeDialog);
  
  function getData(listId) {
    switch (listId) {
      case "restaurantListContainer":
        return restaurantsData;
      case "eventsListContainer":
        return eventosData;
      case "busListContainer":
        return autocarrosData;
      case "touristListContainer":
        return locaisTuristicosData;
      case "recommendationsListContainer":
        return recomendacoesData;
      default:
        return [];
    }
  }


  // Agregar evento click a todos los botones .object-button
  const objectButtons = document.querySelectorAll(".object-button");
  objectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const object = getItemFromButton(button);
      showObjectInfo(object);
      // Actualizar el filtro "blur" en el .list-container cuando se haga click en un .object-button
      const listContainers = document.querySelectorAll(".list-container");
      listContainers.forEach((listContainer) => {
        if (listContainer === currentOpenList && dialog.style.display === "block") {
          listContainer.style.filter = "blur(5px)";
        } else {
          listContainer.style.filter = "none";
        }
      });
    });
  });
  
// Función para obtener el objeto item asociado al botón
function getItemFromButton(button) {
  const container = button.closest(".list-container");
  const dataIndex = parseInt(button.dataset.index);
  const dataList = getData(container.id);
  return dataList[dataIndex];
}
  
  
  
  
  // Galería de imágenes
  const galleryContainer = document.querySelector('.image-gallery');
  
  galleryContainer.addEventListener('mouseenter', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
      img.style.animationPlayState = 'paused';
    });
  });
  
  galleryContainer.addEventListener('mouseleave', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
      img.style.animationPlayState = 'running';
    });
  });
  
  // Scroll to Top
  function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("scroll", toggleScrollToTopButton);
  
  
  // Modal de mapa de Google
  const mapButton = document.getElementById('mapButton');
  const mapModal = document.getElementById('mapModal');
  const modalClose = document.querySelector('.modal-close');
  
  mapButton.addEventListener('click', () => {
    mapModal.style.display = 'block';
  });
  
  modalClose.addEventListener('click', () => {
    mapModal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === mapModal) {
      mapModal.style.display = 'none';
    }
  });
  
  
  
  
  
  //Menu Hamurguesa
  const menuSwitcherMobile = document.querySelector('.menu-switcher-mobile');
  const navbar = document.querySelector('.navbar');
  const dropdownItem = document.querySelector('.dropdown');
  
  // Evento click en el icono de hamburguesa para abrir el menú hamburguesa
  menuSwitcherMobile.addEventListener('click', function() {
    navbar.classList.toggle('show');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
  });
  
  // Evento click en "opciones" para mostrar el menú desplegable
  dropdownItem.addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
  });
  
  // cerrar y abrir menu de hamburguesa
  



  ScrollReveal().reveal('.header')
  ScrollReveal().reveal('.navbar', {delay:900, duration: 900, interval:400, easing:'ease-in', origin:'top'}) ; 
  ScrollReveal().reveal('.container', {delay:500, easing: 'ease-in'}) ; 
  ScrollReveal().reveal('.title', {delay:500, duration: 600, easing:'ease-in', interval:300, distance: '70px', origin:'top'}) ; 
  ScrollReveal().reveal('.category-btn', {delay:300, duration: 300, easing:'ease-in', interval:400, distance: '70px', origin:'right'}) ; 
  ScrollReveal().reveal('.image-gallery', {delay:300, duration: 300, easing:'ease-out', interval:400, distance: '70px', origin:'bottom'}) ;
  ScrollReveal().reveal('.localidad-background', {delay:500, duration: 500, easing:'ease-in', interval:400, distance: '70px',origin:'left'}) ;  
  ScrollReveal().reveal('.footer', {delay:500, duration: 500, easing:'ease-in', interval:400, distance: '70px',origin:'bottom'}) ;  
  ScrollReveal().reveal('.scroll-to-top-btn', {delay:900, duration: 900, easing:'ease-in', interval:900, distance: '70px',origin:'bottom'}) ;  
  ScrollReveal().reveal('.social-section', {delay:400, duration: 400, easing:'ease-in', interval:400}) ;  


