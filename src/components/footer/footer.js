// Importando o React
import React, {Component} from "react";
// Importando Row de 'react-materialize'
import { Row } from 'react-materialize';
// Importando Font-Awesome
import { FaLinkedin } from 'react-icons/fa'


class MyFooter extends Component {
    render() {
        var data = new Date();
        var ano = data.getFullYear();
        return (
            <Row>
                <footer class="page-footer green">
                    <div class="container">
                        <div class="row">
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container grey-text text-lighten-2">
                            <strong>© {ano}</strong> <i>Developed with</i> ❤️
<<<<<<< HEAD
                            <a class="black-text text-lighten-1">by <a class="grey-text text-lighten-4" href="https://github.com/rfulgencio3" rel="noreferrer noopener" target="_blank">Ricardo <a class="footnote grey-text text-lighten-3"><strong>'rfulgencio3'</strong></a> Fulgencio</a></a>
                            <a class="right"/><a class="blue-text text-lighten-4 right " href="https://www.linkedin.com/in/ricardofulgencio/" rel="noreferrer noopener" target="_blank">/ricardo<strong>fulgencio</strong></a> 
=======
                            <a class="black-text text-lighten-1">by <a class="grey-text text-lighten-4" href="https://github.com/rfulgencio3/" target="_blank" rel="noopener noreferrer">Ricardo <a class="footnote grey-text text-lighten-3"><strong>'rfulgencio3'</strong></a> Fulgencio</a></a>
                            <a class="right"/><a class="blue-text text-lighten-4 right " href="https://www.linkedin.com/in/ricardofulgencio/" target="_blank" rel="noopener noreferrer">/ricardo<strong>fulgencio</strong></a> 
>>>>>>> 381993a0870f95a660ad8934912c862b9ba4ca66
                            <FaLinkedin class="right" size={25} />  
                        </div>
                    </div>
                </footer>
            </Row>
        )
    }
}

export default MyFooter;