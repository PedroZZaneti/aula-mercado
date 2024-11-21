import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

//Importação de componentes
import NavBar from '../components/NavBar';

const CadastroProduto = () => {

    const cats = [
        {"id":1, "nome": "Eletronico"},
        {"id":2, "nome": "Moda e Vestuario"},
        {"id":3, "nome": "Alimentos"},
        {"id":4, "nome": "Saude e Beleza"},
        {"id":5, "nome": "Esportes e Lazer"},
        {"id":6, "nome": "Brinquedos e Jogos"},
        {"id":7, "nome": "Livros e Papelaria"}
    ]

    const linkImagem = "https://www.malhariapradense.com.br/wp-content/uploads/2017/08/produto-sem-imagem.png"

  return (
    <div>
        <NavBar/>
        <Container>
                <h1>Cadastrar Produtos</h1>
                <form className="mt-3">
                    <Row>
                        <Col xs={6}>
                        {/* Caixinha de Nome */}
                        <FloatingLabel 
                        controlId="floatingInputNome" 
                        label="Name" className="mb-3">

                        <Form.Control 
                        type="text" 
                        placeholder="Digite o nome aqui" 
                        />
                        </FloatingLabel>
                         {/* Caixinha de descrição */}
                         <FloatingLabel 
                        controlId="floatingInputDescricao" 
                        label="Descricao" 
                        className="mb-3">

                        <Form.Control 
                        type="text" 
                        placeholder="Digite a descrição do Produto" 
                        />
                        </FloatingLabel>

                        {/* Select de categorias */}
                        <Form.Group controlId="formGridState" className="mb-3" >
                            <Form.Label>Tipo de produto</Form.Label>
                            <Form.Select>
                                
                                {cats.map((cat)=> (
                                  <option   key={cat.id} value={cat.nome}>
                                    {cat.nome}
                                  </option>  
                                ))}
                                
                            </Form.Select>
                        </Form.Group>
                        {/* Caixinha de preco */}
                        <FloatingLabel 
                            controlId="floatingInputPreco" 
                            label="Preço" 
                            className="mb-3"
                            >
                        <Form.Control 
                        type="number"
                        step={0.2}
                        placeholder="Digite o Preço do Produto" 
                        />
                        </FloatingLabel>
                        
                        </Col>

                        <Col xs={6}>
                        <Form.Group controlId="formFileLg" className="mb-3">
                        {/* Caixinha de Imagem */}
                        <FloatingLabel 
                        controlId="floatingInputImagem"
                        label="Envie o Link da Imagem" 
                        className="mb-3">

                        <Form.Control 
                        type="text" 
                        placeholder="Envie o link da imagem do produto" 
                        />
                        </FloatingLabel>

                            <Image src={linkImagem} rounded width={300} height={300}/> 
                        </Form.Group>      
                        </Col>
                    </Row>

                    {/* Alerta Caso haja erro */}
                    <Alert key="danger" variant="danger">
                        Ha um erro
                    </Alert>

                    {/* Botao para enviar o formulario de cadastro do produto */}
                     <Button variant="success" size="lg" type="submit">
                        Cadastrar
                     </Button>
                </form>
        </Container>

    </div>
  )
}

export default CadastroProduto
