const SidebarInfo = () => {
	return (
		<div className="sidebar-info">
			<figure className="avatar-box">
				<img src="/pictures/profile.png" alt="photo d'Amandine Ameye" />
			</figure>
			<div className="info-content">
				<h1 className="name">Amandine Ameye</h1>
				<p className="title">Web Developer</p>
			</div>
			<button className="info_more-btn">
				<span>Show Contacts</span>
				<ion-icon name="chevron-down"></ion-icon>
			</button>
		</div>
	);
};

export default SidebarInfo;
