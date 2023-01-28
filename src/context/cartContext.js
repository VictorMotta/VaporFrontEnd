import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {
      _id: "63d340ad87d05848963474eb",
      title: "The last of us part II",
      description:
        "he Last of Us Part II é um jogo eletrônico de ação-aventura desenvolvido pela Naughty Dog e publicado pela Sony Interactive Entertainment. É o segundo jogo da franquia e foi lançado em 19 de junho de 2020 exclusivamente para PlayStation 4. Ambientado cinco anos após os eventos de The Last of Us (2013), o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto. O jogo contém elementos de survival horror e é jogado numa perspectiva de terceira pessoa. Os jogadores podem usar armas de fogo, arcos, armas improvisadas, esquiva e furtividade para se defenderem de seres humanos hostis e criaturas infectadas por uma mutação do fungo Cordyceps.",
      category: "Ação e aventura",
      price: "299",
      pricePromotion: "119.6",
      promoPercentage: "60",
      images: [
        "https://t2.tudocdn.net/651770?w=646&h=284",
        "https://image.api.playstation.com/vulcan/img/rnd/202011/1217/x8YjNdl4czVYabtHAaFvIvEs.jpg",
        "https://meups.com.br/wp-content/uploads/2020/05/The-Last-of-Us-2-900x503.jpg",
        "https://t2.tudocdn.net/571488?w=1920",
      ],
    },
    {
      _id: "63d3429d87d05848963474ed",
      title: "The Witcher III: Wild Hunt Complete Edition",
      description:
        'The Witcher 3: Wild Hunt (em polonês: Wiedźmin 3: Dziki Gon) é um jogo eletrônico de RPG de ação em mundo aberto desenvolvido pela CD Projekt RED e lançado no dia 19 de maio de 2015[2] para as plataformas Microsoft Windows, PlayStation 4, Xbox One e em outubro de 2019[3] para o Nintendo Switch, sendo o terceiro título da série de jogos The Witcher. Ele sucede The Witcher (2007) e The Witcher 2: Assassins of Kings (2011), que foram baseados na série de livros de fantasia Wiedźmin, do escritor polonês Andrzej Sapkowski.  Ambientado em um gigantesco cenário medieval que dá liberdade total ao jogador, o game, que possui uma jogabilidade não linear e é jogado através de uma perspectiva em terceira pessoa, tem o lendário bruxo Geralt de Rívia como seu protagonista, o qual inicia uma longa jornada pelos Reinos do Norte. Enquanto a ordem planetária enfrenta uma grande mudança, com o misterioso e macabro exército de cavaleiros vermelhos conhecido como a "Caçada Selvagem" deixando somente sangue e ruína por onde passa, o jogador terá de enfrentar diversos perigos, usando espadas e magia num mundo em crise, à medida que interage com outros personagens e completa missões para o progresso da história, podendo viajar a pé, a barco, ou montado em Carpeado, o cavalo inseparável de Geralt.',
      category: "Ação e aventura",
      price: "199",
      pricePromotion: "",
      promoPercentage: "0",
      images: [
        "https://image.api.playstation.com/vulcan/ap/rnd/202212/0814/9uU0gBq02jmXHtDsm82AV722.jpg",
        "https://meups.com.br/wp-content/uploads/2022/12/The-Witcher-3_-Wild-Hunt-Complete-Edition_20221206231030-scaled.jpg",
        "https://files.tecnoblog.net/wp-content/uploads/2020/01/the-witcher-3-money.jpg",
        "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/06/09/1331799468257_1/games-the-witcher-3-wild-hunt",
        "https://www.outerspace.com.br/wp-content/uploads/2021/05/witcher3nextgen.jpg",
      ],
    },
  ]);
  const [totalCompra, setTotalCompra] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredCart = localStorage.getItem("cartUser");

    if (recoveredCart) {
      setCart(JSON.parse(recoveredCart));
    }
  }, []);

  const addToCart = (data) => {
    localStorage.setItem("cartUser", JSON.stringify(data));

    setCart(data);

    navigate("/carrinho");
  };

  return (
    <CartContext.Provider value={{ cart, setCart, totalCompra, setTotalCompra, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
