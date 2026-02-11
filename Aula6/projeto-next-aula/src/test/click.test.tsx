import {render,screen,fireEvent} from "@testing-library/react";
import Click from "./click";

test("Incrementa o contador ao clicar no botão ",() => {
	render(<Click/>);
	const botao= screen.getByText("Click here!");
	fireEvent.click(botao);

	expect(screen.getByText("Clicks: 1")).toBeInTheDocument();
})