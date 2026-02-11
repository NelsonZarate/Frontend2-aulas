import {render,screen } from "@testing-library/react"
import PostCard from "./PostCard"
const mockPost = {
	userId:1,
	id:1,
	title:"Titulo do post", 
	body:"descricao do post",
}

test(" Renderiza um post corretamente",()=>{
	render(<PostCard post={mockPost}/>);
  expect(screen.getByText("Titulo do post")).toBeInTheDocument();
  expect(screen.getByText("descricao do post")).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
})