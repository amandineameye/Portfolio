import education from "./data/education.js";
import experience from "./data/experience.js";

const TimelineItem = ({ title, date, description }) => (
	<li className="timeline-item">
		<h4 className="h4 timeline-item-title">{title}</h4>
		<span>{date}</span>
		<p className="timeline-text">{description}</p>
	</li>
);

const TimelineSection = ({ icon, title, items }) => (
	<section className="timeline">
		<div className="title-wrapper">
			<div className="icon-box">
				<ion-icon name={icon}></ion-icon>
			</div>
			<h3 className="h3">{title}</h3>
		</div>
		<ol className="timeline-list">
			{items.map((item, index) => (
				<TimelineItem
					key={index}
					title={item.title}
					date={item.date}
					description={item.description}
				/>
			))}
		</ol>
	</section>
);

const Resume = () => {
	return (
		<article className="resume">
			<header>
				<h2 className="h2 article-title resume-title">
					Resume{" "}
					<a
						href="/files/Amandine-Ameye_Resume.pdf"
						download="Amandine_Ameye_resume.pdf"
					>
						<ion-icon name="download-outline"></ion-icon>
					</a>
				</h2>
			</header>
			<TimelineSection
				icon="book-outline"
				title="Education"
				items={education}
			/>
			<TimelineSection
				icon="hammer-outline"
				title="Activities and Experience"
				items={experience}
			/>
		</article>
	);
};

export default Resume;