import {FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Button } from '../../components/Button';
import {Container, Content, FormContainer, InputContainer, Background} from './styles';

export function Register(){
    return (
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faca seu cadastro</h2>
                    <form action="">
                        <InputContainer>
                            <FiUser size={40}/>
                            <input 
                                type="text"
                                placeholder="Nome"
                            />
                        </InputContainer>
                        <InputContainer>
                            <FiMail size={40}/>
                            <input 
                                type="email"
                                placeholder="E-mail"
                            />
                        </InputContainer>
                        <InputContainer>
                            <FiLock size={40}/>
                            <input 
                                type="password"
                                placeholder="Password"
                            />
                        </InputContainer>
                        <Button type="submit">Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background/>
        </Container>
    )
}