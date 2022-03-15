import react from "react"
import '../card/StyleCard.css'
export default function Card(props){

    return(
            <>
                <div className="Container">
                    <div className="Card">
                        <div className="Content ">
                            <img src={props.imagem}/>
                            
                            <h2>{props.titulo}</h2>
                            
                            <p>{props.children}</p>
                            
                            <a href='#'>Saiba Mais</a>
                        </div>
                    </div>

                </div>
            
            
            </>


    )

}