import { Text } from "react-native";

export default function Cabecalho(props) {
    
    const {min, max} = props;
    

    function VerValor(){
        if(max > min){
            console.warn(max);
        }
        else{
            console.warn(min);
        }
    }

    return (
        <>
            <Text>
                {VerValor()}
            </Text>
        </>
    )
}
