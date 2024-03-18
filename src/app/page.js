"use client";
import Image from "next/image";
import { useState } from "react";

const question = [
	{
		question: "How many team members can I invite?",
		answer:
			"You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
	},
	{
		question: "What is the maximum file upload size?",
		answer:
			"No more than 2GB. All files in your account must fit your allotted storage space.",
	},
	{
		question: "How do I reset my password?",
		answer:
			"Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
	},
	{
		question: "Can I cancel my subscription?",
		answer:
			"Yes! Send us a message and we’ll process your request no questions asked.",
	},
	{
		question: "Do you provide additional support?",
		answer:
			"Chat and email support is available 24/7. Phone lines are open during normal business hours.",
	},
];

export default function Home() {
	let [currentOpen, setcurrentOpen] = useState(-1);

	function handleClick(i) {
		if (i === currentOpen) setcurrentOpen(-1);
		else setcurrentOpen(i);
	}

	return (
		<main className="min-h-dvh justify-center flex p-2 align-middle items-center ">
			<div className="bg-white lg:w-3/4 md:p-14 md:pl-0 p-10 rounded-2xl flex md:flex-row flex-col relative object-contain drop-shadow-2xl overflow-hidden gap-9">
				<div className=" items-center justify-center flex  md:w-1/2 relative">
					<img className=" " src="/illustration-woman-online-desktop.svg" />
					<img
						className="absolute aspect-[46/45] w-[450px]"
						src="/bg-pattern-desktop.svg"
					/>
				</div>
				<div className="gap-10 flex-col flex w-full md:w-1/2">
					<h1 className="font-semibold text-3xl ">FAQ</h1>
					<div className="gap-6 flex flex-col transition ease-in-out">
						{question.map((data, i) => {
							return (
								<div
									className="flex flex-col gap-4 transition ease-in-out duration-300"
									key={i}>
									<div
										className={
											"flex justify-between items-center cursor-pointer hover:text-orange-300 transition ease-in-out"
										}
										onClick={() => {
											handleClick(i);
											focus();
										}}>
										<h3
											className={
												"text-lg text-inherit transition ease-in-out" +
												(currentOpen === i ? " font-bold" : "")
											}>
											{data.question}
										</h3>
										<img
											src="/icon-arrow-down.svg"
											className={
												"w-[14px] h-[10px]  cursor-pointer transition ease-in-out" +
												(currentOpen === i
													? " transform rotate-180 transition ease-in-out duration-300"
													: "")
											}
										/>
									</div>
									<div>
										<div
											className={
												"text-gray-500  overflow-hidden transition ease-in-out duration-300 " +
												(currentOpen === i ? "max-h-[100%]" : "max-h-0")
											}>
											{data.answer}
										</div>
									</div>
									<hr />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</main>
	);
}
