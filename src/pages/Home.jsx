import React from 'react'
import CardProduto from '../components/CardProduto'
import Container from "react-bootstrap/Container";

//Importação de componentes
import NavBar from '../components/NavBar';

const Home = () => {
  const produtos = [
    {id: 1,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 2,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
    {id: 3,nome:"Shampoo Cr7" , preco:9.50, descricao:"Anti Calvice", categoria:"Saude e Beleza", imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7MwFEt7i9mNJIdu_QFhmE45lbah4fTWFi1Q&s"},
  ]

  return (
    <div>
      <NavBar/>
      <h1>Produtos</h1>
      <Container>
      <div className='lista-produtos d-flex col-12 gap-4 mt-3 justify-content-center flex-wrap'>

      {produtos.map((prod) =>
      <CardProduto  
        key={prod.key}
        id={prod.id} 
        nome={prod.nome}
        descricao={prod.descricao}
        preco={prod.preco}
        categoria={prod.categoria}
        imagemUrl={prod.imagemUrl}
        />
      )}
     

      </div>
      </Container>
    </div>
  )
}

export default Home
