import { useState } from "react"
import DiceImg from "./assets/images/icon-dice.svg"

function App() {
	const [quote, setQuote] = 
	useState({id:0, advice:"Click on the button below to generate an inspirational quote!"});

	const [state, setState] = useState("Idle");

	async function generateQuote() {
		setState("Loading");
		
		const requestURL = "https://api.adviceslip.com/advice";
		const request = new Request(requestURL);
	
		const response = await fetch(request);
		const quote = await response.json();
		
		const ID = quote.slip.id;
		const ADVICE = quote.slip.advice;

		setState("Loaded");
		setQuote({id:ID, advice:ADVICE});
		setTimeout(() => { setState("Idle"); }, 1300);
	}


	return (
		<div className="min-h-screen w-full
						flex items-center justify-center 
						font-primary bg-neutral-three text-center pb-8">
			<main className='max-w-[32rem] px-4 sm:px-8 pt-12 pb-16 mx-6 my-4 bg-neutral-two 
							rounded-xl relative space-y-6 shadow-lg shadow-neutral-three'>
				<h1 className="text-primary-two tracking-widest uppercase">Advice #{quote.id}</h1>
				<p className={"text-primary-one text-base " + (state === "Loaded" ? "fadeIn" : "")}>
				“{quote.advice}”
				</p>
				<img className="divider-mobile block mx-auto xs:divider-desktop" alt="Divider" />
				<button className={"w-16 aspect-square rounded-full absolute \
								bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 \
								flex items-center justify-center \
								transition-all duration-300 "
								+ (state === "Idle" ? 
								"bg-primary-two hover:button-shadow active:shadow-none" : 
								"bg-neutral-one"
								)}
						disabled={state !== "Idle"}
						onClick={generateQuote}
						>
					<img src={DiceImg} alt="Dice_img" className={state !== "Idle" ? "spin" : ""} />
				</button>
			</main>
		</div>
	)
}

export default App;