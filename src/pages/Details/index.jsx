import {Container, Links, Content} from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";



export function Details() {
  return(
    <Container>   
      <Header/>  

      <main>
        <Content>    

      <ButtonText title ="Excluir Nota"/>  

      <h1>
        Introdução ao React
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur explicabo, quaerat placeat 
        error molestiae eius consequuntur incidunt repudiandae fugit doloremque, similique voluptates 
        magni inventore nam! Neque tempore perferendis sequi deserunt.
      </p>

       <Section title="Links úteis">
        <Links>
          <li><a href="#">Link 1</a></li>
        </Links>
       </Section>

       <Section title="Marcadores úteis">
        <Tag title="express"/>
        <Tag title="node.js"/>
        
      </Section>

      <Button title= "voltar"/>
      </Content>
      </main>
    </Container>
  )
}