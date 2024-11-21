import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardProduto = (props) => {
  return (
    <div>
      <Card style={{ width: '16rem', height:"30rem" }}>
        {/* Imagem do card */}
      <Card.Img variant="top" src={props.imagemUrl} height="200px" />
      <Card.Body>
        {/* Titulo do Card com nome do produto */}
        <Card.Title>{props.nome}</Card.Title>
        {/* Substitudo no card com preco do produto */}
        <Card.Subtitle className='mb-2 text-muted'>Preço: {props.preco}</Card.Subtitle>

        <Card.Text> <b>Descrição:</b> <br />{props.descricao}</Card.Text>
        <Card.Text> <b>Categoria:</b> <br />{props.categoria}</Card.Text>

        <Card.Link href="/home">
            <Button variant="info">Editar</Button>
        </Card.Link>
        <Card.Link href='/home'>
            <Button variant="danger">Excluir</Button>
        </Card.Link>

      </Card.Body>
    </Card>
    </div>
  )
}

export default CardProduto