import Logo from "./Logo";

const TextSection = () => {
	return (
		<section className="about-text">
			<p>
				As a dedicated web developer, I discovered my passion for programming
				during my master’s in finance. This transformative experience inspired
				me to fully transition into a career in tech, leading to the completion
				of an intensive training program in modern web technologies.
			</p>
			<p>
				I’m now seeking an internship to collaborate with experienced
				developers, further develop my skills, and contribute to meaningful
				projects.
			</p>
		</section>
	);
};

const passions = [
	{
		logoName: "puzzles",
		name: "Puzzles",
		description: "My go-to activity for relaxation and mental focus.",
	},
	{
		logoName: "escape_games",
		name: "Escape games",
		description: "The perfect blend of teamwork and thrilling challenges.",
	},
	{
		logoName: "wordplay",
		name: "Pun-based humor",
		description: "I rarely go a day without making a wordplay joke.",
	},
	{
		logoName: "parodies",
		name: "Humorous song parodies",
		description:
			"My favorite way to laugh at life's challenges is through song parodies.",
	},
];

const PassionBox = ({ logoName = "", name = "", description = "" }) => {
	return (
		<div className="passion-box">
			<Logo logoName={logoName} />
			<h4>{name}</h4>
			<p>{description}</p>
		</div>
	);
};

const PassionsContainer = () => {
	return (
		<div className="passions-container">
			{passions.map((passion) => {
				return <PassionBox key={passion.logoName} {...passion} />;
			})}
		</div>
	);
};

const PassionsSection = () => {
	return (
		<section className="passions">
			<h3 className="h3 passions-title">My Passions</h3>
			<PassionsContainer />
		</section>
	);
};

const About = () => {
	return (
		<article className="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>
			<TextSection />
			<PassionsSection />
		</article>
	);
};

export default About;
