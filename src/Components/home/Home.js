import Card from "../card/Card";
import Logitech  from '../Img/logitech.jpg'
import razer from '../Img/razer.jpg'
import pichau from '../Img/pichau.png'
export default function Home(){
    return(
        <>
            <Card titulo ={"Pichau"} imagem={pichau}>
                Uma Das Maiores Empresas Do brasil De Venda De Computadores 
            </Card>
            <Card titulo="Razer" imagem={razer}>
                    Uma Das maiores empresas de vendas de
                    Aparelhos Eletrônicos
            </Card>
            <Card titulo="Logitech" imagem={Logitech}>
                 Um Dos Melhores Mouses Do Mundo
            </Card>
        </>
    )
}