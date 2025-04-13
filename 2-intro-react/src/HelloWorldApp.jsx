import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";


export const HelloWorldApp = ({user,id, title = 'lokaaa'}) => { 
    //const name = 'pepe'
    return (
        <>
            <Title title ="Lokaaaa"/>
            <UserDetails user={ user} id={id}/>
        </>
    );
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number
    
}