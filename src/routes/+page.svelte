<script lang="ts">
	import Lightbox from '$lib/components/Lightbox.svelte';
	import MarkdownPreviewer from '$lib/components/MarkdownPreviewer.svelte';
	import Carousel from '$lib/components/Carousel.svelte';

	let lightboxImages = $state<string[]>([]);
	let lightboxOpen = $state(false);

	function openGallery(images: string[]) { lightboxImages = images; lightboxOpen = true; }
	function closeLightbox() { lightboxOpen = false; }

	const sparkGallery = ['/Showcase_SparkTrack/coverpage.png','/Showcase_SparkTrack/value-proposition.png','/Showcase_SparkTrack/discovering-the-problem.png','/Showcase_SparkTrack/how-it-works.png','/Showcase_SparkTrack/core-capabilities.png','/Showcase_SparkTrack/security-and-enterprise-readiness.png','/Showcase_SparkTrack/use-cases-and-close.png'];
	const veterinaryGallery = Array.from({length:16},(_,i)=>`/Showcase_Veterinary/veterinary-${i+1}.png`);
	const hydroponicsGallery = ['/Showcase_Hydroponics/hydroponics-dashboard.png','/Showcase_Hydroponics/hydroponics-graph.png','/Showcase_Hydroponics/hydroponics-hardwarestatus.png','/Showcase_Hydroponics/hydroponics-hardwarecomponent.png','/Showcase_Hydroponics/hydroponics-logs.png','/Showcase_Hydroponics/hydroponics-login.png','/Showcase_Hydroponics/hydroponics-inventoryitem1.png','/Showcase_Hydroponics/hydroponics-inventoryitem2.png','/Showcase_Hydroponics/hydroponics-plantedcrops2.png','/Showcase_Hydroponics/hydroponics-planterdcrops1.png','/Showcase_Hydroponics/hydroponics-harvest.png','/Showcase_Hydroponics/hydroponics-sales.png','/Showcase_Hydroponics/hydroponics-rejected.png','/Showcase_Hydroponics/hydroponics-maintenance.png','/Showcase_Hydroponics/hydroponics-usermanagement.png'];
	const excelGallery = ['/Showcase_Excel/excel-1.png'];
	const ingredientsGallery = ['/Showcase_Ingredients/ingredients-1.png','/Showcase_Ingredients/ingredients-2.png'];
	const aqwGallery = ['/Showcase_AQW/AQW.png'];
	const barnyardGallery = ['/Showcase_Barnyard/barnyard-1.png','/Showcase_Barnyard/barnyard-2.png'];
	const metempGallery = ['/Showcase_METEMP-SYCHOSIS/Main.png'];

	function handleSubmit(e: Event) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const btn = form.querySelector('button') as HTMLButtonElement;
		const originalText = btn.innerText;
		btn.innerText = 'Sending...';
		btn.disabled = true;
		setTimeout(() => {
			alert('Thank you for your message, Giebert will get back to you soon!');
			form.reset();
			btn.innerText = originalText;
			btn.disabled = false;
		}, 1500);
	}
</script>

<Lightbox images={lightboxImages} open={lightboxOpen} onclose={closeLightbox} />

<!-- SECTION: HERO -->
<section id="hero" class="hero reveal-on-scroll" data-name="hero-section">
	<div class="container" data-name="hero-container">
		<h1 data-name="hero-name">Giebert R. Delotavo</h1>
		<p class="hero-tagline" data-name="hero-tagline">I ship practical software across C#/.NET, Python, React, SQL, and IoT-connected platforms &mdash; from government-ready tracking systems to analytics dashboards, ETL tooling, and interactive browser products.</p>
		<p class="hero-location" data-name="hero-location"><i class="fas fa-map-marker-alt"></i> Quezon City, Philippines</p>
		<div class="hero-actions" data-name="hero-buttons">
			<a href="#sparktrack" class="btn btn-primary" data-name="btn-sparktrack">View SparkTrack</a>
			<a href="#contact" class="btn btn-outline" data-name="btn-contact">Get in Touch</a>
		</div>
		<div class="hero-metrics" data-name="hero-metrics">
			<div class="metric-card" data-name="metric-portfolio"><strong>7+</strong><span>portfolio builds across web, desktop, and systems work</span></div>
			<div class="metric-card" data-name="metric-stack"><strong>C# / React / Python</strong><span>core stack used across production and personal projects</span></div>
			<div class="metric-card" data-name="metric-remote"><strong>Available remote</strong><span>best fit for full stack, web app, and systems-focused roles</span></div>
		</div>
	</div>
</section>

<!-- SECTION: SPARKTRACK -->
<section id="sparktrack" class="sparktrack-section" data-name="sparktrack-section">
	<div class="sparktrack-inner" data-name="sparktrack-inner">
		<div class="sparktrack-intro reveal-on-scroll" data-name="sparktrack-intro">
			<div class="sparktrack-badge" data-name="sparktrack-badge">Patent-Pending</div>
			<h2 data-name="sparktrack-title">SparkTrack</h2>
			<p class="sparktrack-tagline" data-name="sparktrack-tagline">Know Where Every Document Sits &mdash; Instantly</p>
			<p class="sparktrack-summary" data-name="sparktrack-summary">A multi-platform document tracking system that pinpoints the exact room a document is in &mdash; without scanning, without manual input, without interrupting anyone's workflow.</p>
		</div>

		<div class="sparktrack-image reveal-on-scroll" data-delay="100" data-name="sparktrack-carousel">
			<Carousel images={sparkGallery} alt="SparkTrack" />
		</div>

		<div class="sparktrack-versions" data-name="sparktrack-versions">
			<div class="sparktrack-version sparktrack-version--stable reveal-on-scroll" data-delay="150" data-name="version-1-desktop">
				<div class="sparktrack-version-glow" data-name="v1-glow"></div>
				<div class="sparktrack-version-header" data-name="v1-header">
					<div class="sparktrack-version-badge sparktrack-version-badge--stable" data-name="v1-badge"><i class="fas fa-check-circle"></i> Stable</div>
					<h3 data-name="v1-title">Version 1 &mdash; Desktop</h3>
				</div>
				<div class="sparktrack-version-stack" data-name="v1-stack">
					<div class="sparktrack-version-stack-item" data-name="v1-tech-1"><i class="fas fa-code"></i> C# / WPF (.NET 4.8)</div>
					<div class="sparktrack-version-stack-item" data-name="v1-tech-2"><i class="fas fa-database"></i> MSSQL (SQL Server)</div>
					<div class="sparktrack-version-stack-item" data-name="v1-tech-3"><i class="fas fa-network-wired"></i> Local LAN Connection</div>
					<div class="sparktrack-version-stack-item" data-name="v1-tech-4"><i class="fas fa-microchip"></i> Proprietary Hardware Sensors</div>
				</div>
			</div>

			<div class="sparktrack-version sparktrack-version--beta reveal-on-scroll" data-delay="250" data-name="version-2-multiplatform">
				<div class="sparktrack-version-glow" data-name="v2-glow"></div>
				<div class="sparktrack-version-header" data-name="v2-header">
					<div class="sparktrack-version-badge sparktrack-version-badge--beta" data-name="v2-badge"><i class="fas fa-flask"></i> Beta</div>
					<h3 data-name="v2-title">Version 2 &mdash; Multi-Platform</h3>
				</div>
				<div class="sparktrack-version-platforms" data-name="v2-platforms">
					<span class="sparktrack-version-platform" data-name="v2-platform-desktop"><i class="fas fa-desktop"></i> Desktop</span>
					<span class="sparktrack-version-platform" data-name="v2-platform-mobile"><i class="fas fa-mobile-alt"></i> Mobile</span>
					<span class="sparktrack-version-platform" data-name="v2-platform-web"><i class="fas fa-globe"></i> Web</span>
				</div>
				<div class="sparktrack-version-stack" data-name="v2-stack">
					<div class="sparktrack-version-stack-item" data-name="v2-tech-1"><i class="fas fa-cube"></i> Tauri 2 (Rust) &mdash; Desktop Shell</div>
					<div class="sparktrack-version-stack-item" data-name="v2-tech-2"><i class="fas fa-layer-group"></i> SvelteKit 2 &mdash; Web + SSR</div>
					<div class="sparktrack-version-stack-item" data-name="v2-tech-3"><i class="fas fa-cloud"></i> VPS Relay + Supabase (PostgreSQL)</div>
					<div class="sparktrack-version-stack-item" data-name="v2-tech-4"><i class="fas fa-microchip"></i> Hardware &mdash; Online via Cloud Relay</div>
					<div class="sparktrack-version-stack-item sparktrack-version-stack-item--muted" data-name="v2-tech-5"><i class="fas fa-network-wired"></i> Optional Local LAN Fallback</div>
				</div>
			</div>
		</div>

		<div class="sparktrack-features" data-name="sparktrack-features">
			<div class="sparktrack-features-title" data-name="features-title">What It Does</div>
			<div class="sparktrack-features-grid" data-name="features-grid">
				<div class="sparktrack-feature reveal-on-scroll" data-delay="100" data-name="feature-tracking">
					<div class="sparktrack-feature-icon" data-name="feature-icon-1"><i class="fas fa-map-pin"></i></div>
					<h4 data-name="feature-title-1">Passive Room-Level Tracking</h4>
					<p data-name="feature-desc-1">Sensors detect document presence in each room automatically. No RFID tags, no barcode scans, no user action.</p>
				</div>
				<div class="sparktrack-feature reveal-on-scroll" data-delay="200" data-name="feature-pipes">
					<div class="sparktrack-feature-icon" data-name="feature-icon-2"><i class="fas fa-bolt"></i></div>
					<h4 data-name="feature-title-2">Real-Time Named Pipe Stream</h4>
					<p data-name="feature-desc-2">Background service pushes location data from hardware to the WPF client instantly via named pipes &mdash; sub-second updates.</p>
				</div>
				<div class="sparktrack-feature reveal-on-scroll" data-delay="300" data-name="feature-security">
					<div class="sparktrack-feature-icon" data-name="feature-icon-3"><i class="fas fa-shield-alt"></i></div>
					<h4 data-name="feature-title-3">Argon2 + MFA Security</h4>
					<p data-name="feature-desc-3">Argon2id password hashing, TOTP-based multi-factor authentication, encrypted QR codes, and full audit logging.</p>
				</div>
				<div class="sparktrack-feature reveal-on-scroll" data-delay="400" data-name="feature-ownership">
					<div class="sparktrack-feature-icon" data-name="feature-icon-4"><i class="fas fa-diagram-project"></i></div>
					<h4 data-name="feature-title-4">End-to-End Ownership</h4>
					<p data-name="feature-desc-4">Personally sourced the tracking hardware, negotiated with vendors, designed the database schema, and wrote every line of code across all three platforms.</p>
				</div>
			</div>
		</div>

		<div class="sparktrack-footer" data-name="sparktrack-tags">
			<div class="tags" style="justify-content:center;">
				<span class="tag" data-name="tag-wpf">WPF Desktop</span>
				<span class="tag" data-name="tag-maui">MAUI Mobile</span>
				<span class="tag" data-name="tag-sveltekit">SvelteKit Web</span>
				<span class="tag" data-name="tag-lan">Local LAN</span>
				<span class="tag" data-name="tag-vps">VPS + Supabase</span>
				<span class="tag" data-name="tag-mssql">SQL Server</span>
				<span class="tag" data-name="tag-pipes">Named Pipes</span>
				<span class="tag" data-name="tag-argon2">Argon2id</span>
				<span class="tag" data-name="tag-totp">TOTP 2FA</span>
				<button type="button" class="tag tag--live" onclick={() => openGallery(sparkGallery)} data-name="btn-view-gallery"><i class="fas fa-images"></i> View Gallery</button>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: PROJECTS -->
<section id="projects" class="section reveal-on-scroll" data-name="projects-section">
	<div class="container" data-name="projects-container">
		<p class="section-label" data-name="projects-label">More Work</p>
		<h2 class="section-title" data-name="projects-title">Projects</h2>
		<div class="projects-grid" data-name="projects-grid">

			<div class="project-card reveal-on-scroll" data-delay="150" data-name="project-veterinary">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(veterinaryGallery)} data-name="veterinary-thumb">
					<img class="project-thumb" src="/Showcase_Veterinary/veterinary-1.png" alt="Veterinary" />
					<div class="project-thumb-overlay"><i class="fas fa-images"></i> View Gallery</div>
				</button>
				<div class="project-body" data-name="veterinary-body">
					<h3 data-name="veterinary-title">Veterinary Pet Shop Management</h3>
					<p class="description" data-name="veterinary-desc">A fully functional VB.NET desktop application for veterinary clinics tracking patient appointments, medical histories, inventory, and billing.</p>
					<div class="tags" data-name="veterinary-tags">
						<span class="tag" data-name="tag-vbnet">VB.NET</span>
						<span class="tag" data-name="tag-vet-sql">SQL</span>
						<button type="button" class="tag" onclick={() => openGallery(veterinaryGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
			</div>

			<div class="project-card reveal-on-scroll" data-delay="200" data-name="project-hydroponics">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(hydroponicsGallery)} data-name="hydroponics-thumb">
					<img class="project-thumb" src="/Showcase_Hydroponics/hydroponics-dashboard.png" alt="Hydroponics" />
					<div class="project-thumb-overlay"><i class="fas fa-images"></i> View Gallery</div>
				</button>
				<div class="project-body" data-name="hydroponics-body">
					<h3 data-name="hydroponics-title">Agreemo &mdash; Solar Hydroponics &amp; API</h3>
					<p class="description" data-name="hydroponics-desc">Capstone project &mdash; a complete smart farming system with React dashboard, Python/Flask API, and AI vision for harvest readiness detection.</p>
					<div class="tags" data-name="hydroponics-tags">
						<span class="tag" data-name="tag-react">React</span>
						<span class="tag" data-name="tag-flask">Python / Flask</span>
						<span class="tag" data-name="tag-iot">IoT</span>
						<button type="button" class="tag" onclick={() => openGallery(hydroponicsGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
			</div>

			<div class="project-card reveal-on-scroll" data-delay="250" data-name="project-excel">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(excelGallery)} data-name="excel-thumb">
					<img class="project-thumb" src="/Showcase_Excel/excel-1.png" alt="Excel ETL" />
					<div class="project-thumb-overlay"><i class="fab fa-github"></i> View Repository</div>
				</button>
				<div class="project-body" data-name="excel-body">
					<h3 data-name="excel-title">Excel Public &mdash; Automated ETL Pipeline</h3>
					<p class="description" data-name="excel-desc">An automated C# ETL pipeline that reads, transforms, and inserts structured Excel data into a relational database, replacing manual import processes.</p>
					<div class="tags" data-name="excel-tags">
						<span class="tag" data-name="tag-excel-csharp">C#</span>
						<span class="tag" data-name="tag-etl">ETL</span>
						<span class="tag" data-name="tag-excel-sql">SQL</span>
						<a href="https://github.com/GieExe/Excel" target="_blank" rel="noopener noreferrer nofollow" class="tag tag--live" data-name="link-excel-github"><i class="fab fa-github"></i> GitHub</a>
						<button type="button" class="tag" onclick={() => openGallery(excelGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
			</div>

			<div class="project-card reveal-on-scroll" data-delay="300" data-name="project-ingredients">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(ingredientsGallery)} data-name="ingredients-thumb">
					<img class="project-thumb" src="/Showcase_Ingredients/ingredients-1.png" alt="Ingredients" />
					<div class="project-thumb-overlay"><i class="fab fa-github"></i> View Repository</div>
				</button>
				<div class="project-body" data-name="ingredients-body">
					<h3 data-name="ingredients-title">Ingredients Public &mdash; Data Entry &amp; Validation</h3>
					<p class="description" data-name="ingredients-desc">A C# data entry and validation system enforcing duplicate detection across multiple fields with complex relational inserts and immediate feedback.</p>
					<div class="tags" data-name="ingredients-tags">
						<span class="tag" data-name="tag-ingredients-csharp">C#</span>
						<span class="tag" data-name="tag-validation">Validation</span>
						<span class="tag" data-name="tag-ingredients-sql">SQL</span>
						<a href="https://github.com/GieExe/Ingredients" target="_blank" rel="noopener noreferrer nofollow" class="tag tag--live" data-name="link-ingredients-github"><i class="fab fa-github"></i> GitHub</a>
						<button type="button" class="tag" onclick={() => openGallery(ingredientsGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
			</div>

			<div class="project-card reveal-on-scroll" data-delay="350" data-name="project-aqw">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(aqwGallery)} data-name="aqw-thumb">
					<img class="project-thumb" src="/Showcase_AQW/AQW.png" alt="AQW Tier List" />
					<div class="project-thumb-overlay"><i class="fas fa-images"></i> View Gallery</div>
				</button>
				<div class="project-body" data-name="aqw-body">
					<h3 data-name="aqw-title">AQW Tier List &mdash; Class Analysis Dashboard</h3>
					<p class="description" data-name="aqw-desc">A Python pipeline that scrapes game data, scores classes with a modular algorithm, and outputs structured tier rankings on a static dashboard.</p>
					<div class="tags" data-name="aqw-tags">
						<span class="tag" data-name="tag-python">Python</span>
						<span class="tag" data-name="tag-data">Data Analysis</span>
						<a href="https://aqwhighlevelcomparisonclass.vercel.app/" target="_blank" rel="noopener noreferrer nofollow" class="tag tag--live" data-name="link-aqw-demo"><i class="fas fa-external-link-alt"></i> Live Demo</a>
						<button type="button" class="tag" onclick={() => openGallery(aqwGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- SECTION: HOBBY PROJECTS -->
<section id="hobby-projects" class="section reveal-on-scroll" data-delay="100" data-name="hobby-section">
	<div class="container" data-name="hobby-container">
		<p class="section-label" data-name="hobby-label">Side Work</p>
		<h2 class="section-title" data-name="hobby-title">Hobby Projects</h2>
		<div class="hobby-grid" data-name="hobby-grid">

			<div class="hobby-card reveal-on-scroll" data-delay="100" data-name="hobby-barnyard">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(barnyardGallery)} style="margin-bottom:1rem;border-radius:8px;overflow:hidden;" data-name="barnyard-thumb">
					<img class="project-thumb" src="/Showcase_Barnyard/barnyard-1.png" alt="Barnyard" style="aspect-ratio:21/9;" />
					<div class="project-thumb-overlay"><i class="fas fa-images"></i> View Gallery</div>
				</button>
				<h3 data-name="barnyard-title">Barnyard Defenders</h3>
				<p class="description" style="margin-bottom:0.8rem;" data-name="barnyard-desc">A high-fidelity animal-themed Tower Defense web game with Gacha summoning, rarity variants, boss waves, and a real-time HTML5 Canvas engine.</p>
				<div class="tags" style="margin-bottom:1rem;" data-name="barnyard-tags">
					<span class="tag">Vanilla JS</span>
					<span class="tag">HTML5 Canvas</span>
					<span class="tag">Game Dev</span>
				</div>
				<div class="hobby-meta" data-name="barnyard-meta">
					<div class="hobby-stats" data-name="barnyard-stats">
						<div><strong>Play Time</strong> 10&ndash;15 min/session</div>
						<div><strong>Progress</strong> v1.3 (stable)</div>
					</div>
					<div class="hobby-actions" data-name="barnyard-actions">
						<a href="https://animals-rust-ten.vercel.app/" target="_blank" rel="noopener noreferrer nofollow" class="tag tag--live" data-name="link-barnyard-play"><i class="fas fa-external-link-alt"></i> Play Now</a>
						<button type="button" class="tag" onclick={() => openGallery(barnyardGallery)}><i class="fas fa-images"></i> Gallery</button>
					</div>
				</div>
				<div class="info-block" data-name="barnyard-info">
					<h4 class="aside-title">Quick Info</h4>
					<p class="aside-desc">Short, playable tower-defense with collectible mechanics and progressive upgrades.</p>
					<ul class="aside-list">
						<li><strong>Engine:</strong> HTML5 Canvas</li>
						<li><strong>Language:</strong> JavaScript</li>
						<li><strong>UI:</strong> Tailwind + custom CSS</li>
					</ul>
				</div>
				<details class="expandable" id="barnyard-details" data-name="barnyard-details">
					<summary>Full Project Details</summary>
					<div class="expandable-body">
						<p>Barnyard Defenders is a high-fidelity, animal-themed Tower Defense (TD) web application combining classic strategy gameplay with modern Gacha collection mechanics and a progressive upgrade system.</p>
						<h4>Core Gameplay Loop</h4>
						<p>Prevent waves of invasive insects from reaching the homestead by strategically placing animal defenders along a winding path.</p>
						<h4>Key Systems</h4>
						<ul>
							<li><strong>Gacha Summoning</strong>: Spend "Acorns" to pull random units, forcing adaptive strategy.</li>
							<li><strong>Rarity Variants</strong>: Normal (89%), Golden (10% &mdash; 1.5x stats), Rainbow (1% &mdash; 2.5x stats + RGB visuals).</li>
							<li><strong>Boss Waves</strong>: Every 5th wave features a high-HP boss.</li>
							<li><strong>Economy</strong>: Balance acorns between new summons, Level 3 upgrades, or selling weak variants.</li>
						</ul>
						<h4>Technical Specs</h4>
						<ul>
							<li>Single-file vanilla JS + HTML5 Canvas + Tailwind CSS.</li>
							<li>Particle systems, dynamic shadows, bobbing animations, rotation logic.</li>
							<li>2x Fast Forward mode with consistent frame rate.</li>
							<li>Fully responsive with touch-friendly controls.</li>
						</ul>
					</div>
				</details>
			</div>

			<div class="hobby-card reveal-on-scroll" data-delay="150" data-name="hobby-metemp">
				<button type="button" class="project-thumb-link" onclick={() => openGallery(metempGallery)} style="margin-bottom:1rem;border-radius:8px;overflow:hidden;" data-name="metemp-thumb">
					<img class="project-thumb" src="/Showcase_METEMP-SYCHOSIS/Main.png" alt="METEMP|SYCHOSIS" style="aspect-ratio:21/9;" />
					<div class="project-thumb-overlay"><i class="fas fa-images"></i> View Gallery</div>
				</button>
				<h3 data-name="metemp-title">METEMP|SYCHOSIS</h3>
				<p class="description" style="margin-bottom:0.8rem;" data-name="metemp-desc">An educational 2D RPG built in Adobe Flash (ActionScript). Players navigate four floors of Alfheim, complete challenges, collect items, and manage only three lives with multiple endings.</p>
				<div class="tags" data-name="metemp-tags">
					<span class="tag">Adobe Flash / ActionScript</span>
					<span class="tag">SWF</span>
					<span class="tag">Educational RPG</span>
					<a href="https://github.com/NorielAchero/METEMP-SYCHOSIS" target="_blank" rel="noopener noreferrer nofollow" class="tag tag--live" data-name="link-metemp-github"><i class="fab fa-github"></i> GitHub</a>
					<button type="button" class="tag" onclick={() => openGallery(metempGallery)}><i class="fas fa-images"></i> Gallery</button>
				</div>
			</div>

		</div>
	</div>
</section>

<!-- SECTION: ABOUT -->
<section id="about" class="section reveal-on-scroll" data-name="about-section">
	<div class="container" data-name="about-container">
		<p class="section-label" data-name="about-label">Profile</p>
		<h2 class="section-title" data-name="about-title">About</h2>
		<div class="about-grid" data-name="about-grid">
			<div class="about-text" data-name="about-text">
				<p data-name="about-p1">I build across the full stack &mdash; from Desktop (WPF, Tauri), Mobile (MAUI), and Web (SvelteKit, React) to backend services (ASP.NET Core, Node.js, Supabase) and custom IoT hardware integration. My work spans government-ready tracking platforms, analytics dashboards, ETL pipelines, and interactive browser experiences.</p>
				<p data-name="about-p2">At <strong>Spark Innovative Tech</strong>, I lead delivery of SparkTrack, a patent-pending multi-platform document tracking system deployed across Desktop, Mobile, and Web &mdash; with both local LAN and cloud-based connectivity. I personally source hardware, negotiate with vendors, design architecture, and write production code across every layer of the stack.</p>
				<p data-name="about-p3"><strong>I am currently targeting remote full stack and web developer roles where I can build reliable end-to-end software products.</strong></p>
			</div>
			<div class="summary-cards" data-name="about-summaries">
				<div class="summary-card" data-name="summary-build"><h4>What I Build</h4><p>Internal systems, operational dashboards, admin tools, data pipelines, and portfolio-grade browser experiences.</p></div>
				<div class="summary-card" data-name="summary-work"><h4>How I Work</h4><p>Clear architecture, measurable output, fast iteration, and solutions stable enough for real users and real operations.</p></div>
				<div class="summary-card" data-name="summary-fit"><h4>Role Fit</h4><p>Full stack developer, web developer, systems developer, and software engineer roles with practical ownership.</p></div>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: HOW I OPERATE -->
<section id="how-i-operate" class="section reveal-on-scroll" data-name="operate-section">
	<div class="container" data-name="operate-container">
		<p class="section-label" data-name="operate-label">Process</p>
		<h2 class="section-title" data-name="operate-title">How I Operate</h2>
		<div class="operate-grid" data-name="operate-grid">
			<div class="operate-card" data-name="operate-ownership">
				<div class="operate-icon" data-name="op-icon-1"><i class="fas fa-project-diagram"></i></div>
				<h3>End-to-end ownership</h3>
				<p>From hardware sourcing &amp; vendor negotiation to production code &amp; deployment.</p>
			</div>
			<div class="operate-card" data-name="operate-resourcefulness">
				<div class="operate-icon" data-name="op-icon-2"><i class="fas fa-bolt"></i></div>
				<h3>Radical resourcefulness</h3>
				<p>Custom AI agent harness (Reasonix) with prefix-cache optimization &amp; dual-model routing.</p>
			</div>
			<div class="operate-card" data-name="operate-skeptic">
				<div class="operate-icon" data-name="op-icon-3"><i class="fas fa-flask"></i></div>
				<h3>Hype-skeptic</h3>
				<p>I build across radically different stacks to <em>know</em> what works, then document it.</p>
			</div>
			<div class="operate-card" data-name="operate-security">
				<div class="operate-icon" data-name="op-icon-4"><i class="fas fa-shield-alt"></i></div>
				<h3>Security-minded</h3>
				<p>Argon2, MFA/TOTP, encrypted QR, audit-ready code from day one.</p>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: EXPERIENCE -->
<section id="experience" class="section reveal-on-scroll" data-name="experience-section">
	<div class="container" data-name="experience-container">
		<p class="section-label" data-name="exp-label">Career</p>
		<h2 class="section-title" data-name="exp-title">Experience</h2>
		<div class="timeline" data-name="timeline">
			<div class="timeline-item" data-name="exp-spark">
				<div class="timeline-icon"><i class="fas fa-briefcase"></i></div>
				<div class="timeline-content">
					<h3>Full Stack Developer</h3>
					<p class="company">Spark Innovative Tech &bull; Full-time</p>
					<p class="date">Sep 2025 &ndash; Present</p>
					<p class="description">Lead delivery for an enterprise tracking platform built with C#/.NET, including architecture planning, backend workflows, hardware SDK integration, deployment coordination, and technical support for national government clients.</p>
				</div>
			</div>
			<div class="timeline-item" data-name="exp-comptrolla">
				<div class="timeline-icon"><i class="fas fa-code"></i></div>
				<div class="timeline-content">
					<h3>Software Developer</h3>
					<p class="company">Comptrolla Technologies, Inc. &bull; Internship</p>
					<p class="date">Sep 2024 &ndash; Apr 2025</p>
					<p class="description">Built and supported Windows and mobile business applications with focus on C#, .NET, database-connected workflows, and maintainable feature delivery.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: EDUCATION -->
<section id="education" class="section reveal-on-scroll" data-name="education-section">
	<div class="container" data-name="education-container">
		<p class="section-label" data-name="edu-label">Background</p>
		<h2 class="section-title" data-name="edu-title">Education</h2>
		<div class="edu-grid" data-name="edu-grid">
			<div class="edu-card" data-name="edu-qcu">
				<span class="edu-year">2021 &ndash; 2025</span>
				<h3>BS Information Technology</h3>
				<p>Quezon City University (QCU)</p>
				<p class="edu-desc">673 Quirino Hwy, Novaliches, Quezon City, Metro Manila</p>
			</div>
			<div class="edu-card" data-name="edu-neu">
				<span class="edu-year">2019 &ndash; 2021</span>
				<h3>Senior High School &ndash; ICT</h3>
				<p>New Era University (NEU)</p>
				<p class="edu-desc">No. 9 Central Avenue, Diliman, Quezon City</p>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: CERTIFICATIONS -->
<section id="certifications" class="section reveal-on-scroll" data-name="certs-section">
	<div class="container" data-name="certs-container">
		<p class="section-label" data-name="certs-label">Credentials</p>
		<h2 class="section-title" data-name="certs-title">Certifications</h2>
		<div class="skills-grid" data-name="certs-grid">
			<div class="skill-group" data-name="certs-list">
				<h3>Diplomas &amp; Certs</h3>
				<ul>
					<li><a href="https://drive.google.com/file/d/1BV0lyIlZeXM0CT5Jw2kDs1TzK_be3Ph0/view?usp=sharing" target="_blank" rel="noopener noreferrer nofollow" data-name="link-shs">SHS Diploma</a></li>
					<li><a href="https://www.sololearn.com/en/certificates/CC-VMJA76C7" target="_blank" rel="noopener noreferrer nofollow" data-name="link-python">Python Intermediate Cert.</a></li>
					<li><a href="https://www.sololearn.com/en/certificates/CC-AYZC6EVJ" target="_blank" rel="noopener noreferrer nofollow" data-name="link-data">Coding for Data Cert.</a></li>
					<li><a href="https://drive.google.com/file/d/1_yWktZVdfgYk1CAl96JQI13trLEsrYLw/view?usp=sharing" target="_blank" rel="noopener noreferrer nofollow" data-name="link-intern-243">Internship (Comptrolla &ndash; 243 Hrs)</a></li>
					<li><a href="https://drive.google.com/file/d/1gaq_EBYCel8DCj97oYSw9REoUQM3yFEQ/view?usp=sharing" target="_blank" rel="noopener noreferrer nofollow" data-name="link-intern-257">Internship (Comptrolla &ndash; 257 Hrs)</a></li>
					<li><a href="https://drive.google.com/file/d/1vlf164Gm1L-t14AJqbDRFqwlj3xSDBjn/view?usp=sharing" target="_blank" rel="noopener noreferrer nofollow" data-name="link-college">College Diploma</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- SECTION: SKILLS -->
<section id="skills" class="section reveal-on-scroll" data-name="skills-section">
	<div class="container" data-name="skills-container">
		<p class="section-label" data-name="skills-label">Stack</p>
		<h2 class="section-title" data-name="skills-title">Skills</h2>
		<div class="skills-grid" data-name="skills-grid">
			<div class="skill-group" data-name="skill-frontend"><h3>Frontend</h3><ul><li>SvelteKit 2 / Svelte 5 (runes)</li><li>React 19 / Next.js 16</li><li>Blazor WASM / Server</li><li>Tailwind CSS v4</li><li>TypeScript 6</li><li>HTML5 Canvas</li></ul></div>
			<div class="skill-group" data-name="skill-backend"><h3>Backend</h3><ul><li>ASP.NET Core (.NET 9)</li><li>Node.js / TypeScript</li><li>Supabase</li><li>Cloudflare Workers</li><li>gRPC</li><li>SignalR</li></ul></div>
			<div class="skill-group" data-name="skill-desktop"><h3>Desktop</h3><ul><li>Tauri 2 (Rust)</li><li>WPF (.NET 4.8)</li><li>Windows Forms</li><li>VB.NET</li><li>Windows Services</li></ul></div>
			<div class="skill-group" data-name="skill-database"><h3>Database</h3><ul><li>MySQL 8.4 / PostgreSQL</li><li>SQL Server</li><li>Drizzle ORM</li><li>Supabase</li><li>ADO.NET / EF Core</li></ul></div>
			<div class="skill-group" data-name="skill-mobile"><h3>Mobile</h3><ul><li>.NET MAUI Blazor Hybrid</li><li>Expo (React Native)</li></ul></div>
			<div class="skill-group" data-name="skill-security"><h3>Security</h3><ul><li>Argon2id (oslo)</li><li>TOTP 2FA (otpauth)</li><li>QR Codes</li><li>Cookie Sessions</li><li>Rate Limiting</li></ul></div>
			<div class="skill-group" data-name="skill-tooling"><h3>Tooling</h3><ul><li>Drizzle ORM</li><li>OpenCode</li><li>jspdf / CSV Export</li><li>dayjs</li><li>Vite 8</li><li>Sharp / Image Processing</li></ul></div>
			<div class="skill-group" data-name="skill-iot"><h3>Sensors &amp; AI</h3><ul><li>Proprietary Tracking HW</li><li>Serial / TCP</li><li>Reasonix (DeepSeek)</li><li>Agent Pipelines</li><li>MCP</li></ul></div>
		</div>
	</div>
</section>

<!-- SECTION: MINI PROJECT -->
<section id="mini-project" class="section reveal-on-scroll" data-name="mini-project-section">
	<div class="container" data-name="mini-project-container">
		<p class="section-label" data-name="mini-label">Tool</p>
		<h2 class="section-title" data-name="mini-title">Markdown Previewer</h2>
		<MarkdownPreviewer />
	</div>
</section>

<!-- SECTION: CONTACT -->
<section id="contact" class="section reveal-on-scroll" data-name="contact-section">
	<div class="container" data-name="contact-container">
		<p class="section-label" data-name="contact-label">Connect</p>
		<h2 class="section-title" data-name="contact-title">Contact</h2>
		<div class="contact-grid" data-name="contact-grid">
			<div class="contact-text" data-name="contact-text">
				<p data-name="contact-intro">Interested in building a web app, internal platform, dashboard, or operations-focused product? That is the type of work I am pursuing.</p>
				<div class="contact-details" data-name="contact-details">
					<dl>
						<div><dt>Best fit roles</dt><dd>Full Stack Developer, Web Developer, Software Engineer</dd></div>
						<div><dt>Preferred setup</dt><dd>Remote or hybrid teams with practical product ownership</dd></div>
						<div><dt>Strengths</dt><dd>Reliable delivery, cross-stack execution, systems thinking</dd></div>
					</dl>
				</div>
				<div class="social-links" data-name="social-links">
					<a href="https://www.linkedin.com/in/giebert-delotavo/" target="_blank" rel="noopener noreferrer nofollow" data-name="link-linkedin"><i class="fab fa-linkedin"></i> LinkedIn</a>
					<a href="https://github.com/GieExe" target="_blank" rel="noopener noreferrer nofollow" data-name="link-github"><i class="fab fa-github"></i> GitHub</a>
					<a href="mailto:Delotavogiebertr@gmail.com" data-name="link-email"><i class="fas fa-envelope"></i> Email</a>
				</div>
			</div>
			<div class="contact-form-section" data-name="contact-form">
				<h3 class="form-title">Send a quick message</h3>
				<form onsubmit={handleSubmit} data-name="message-form">
					<div class="form-group"><input type="text" placeholder="Name" required data-name="input-name" /></div>
					<div class="form-group"><input type="email" placeholder="Email" required data-name="input-email" /></div>
					<div class="form-group"><textarea placeholder="Message" rows={5} required data-name="input-message"></textarea></div>
					<button type="submit" class="btn btn-primary" style="width:100%;" data-name="btn-send">Send Message</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.sparktrack-section {
		padding: 5rem 0;
		position: relative;
		overflow: hidden;
	}

	.sparktrack-section::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212, 168, 83, 0.04) 0%, transparent 70%),
			radial-gradient(ellipse 60% 80% at 80% 50%, rgba(33, 150, 243, 0.03) 0%, transparent 70%),
			radial-gradient(ellipse 60% 80% at 20% 50%, rgba(94, 148, 67, 0.02) 0%, transparent 70%);
		pointer-events: none;
		animation: sparkOrbs 15s ease-in-out infinite alternate;
	}

	@keyframes sparkOrbs {
		0% { transform: translate(0, 0); }
		50% { transform: translate(1%, -0.5%); }
		100% { transform: translate(-0.5%, 1%); }
	}

	.sparktrack-inner {
		padding: 0 8rem;
	}

	@media (max-width: 1200px) { .sparktrack-inner { padding: 0 4rem; } }
	@media (max-width: 768px) { .sparktrack-inner { padding: 0 1.5rem; } }

	.sparktrack-intro {
		text-align: center;
		margin-bottom: 2.5rem;
	}

	.sparktrack-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.7rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--primary);
		background: rgba(212, 168, 83, 0.08);
		border: 1px solid rgba(212, 168, 83, 0.15);
		padding: 0.35rem 0.9rem;
		border-radius: 20px;
		margin-bottom: 1rem;
		transition: all 0.3s;
	}

	.sparktrack-badge:hover {
		background: rgba(212, 168, 83, 0.12);
		transform: translateY(-1px);
	}

	.sparktrack-intro h2 {
		font-size: 2.8rem;
		margin-bottom: 0.3rem;
		background: linear-gradient(135deg, var(--text) 0%, var(--primary) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.sparktrack-tagline {
		font-size: 1.05rem;
		color: var(--primary);
		margin-bottom: 0.8rem;
	}

	.sparktrack-summary {
		font-size: 0.88rem;
		color: var(--text-muted);
		line-height: 1.7;
		max-width: 560px;
		margin: 0 auto;
	}

	.sparktrack-image {
		margin-bottom: 2.5rem;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}

	.sparktrack-versions {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.5rem;
		margin-bottom: 2.5rem;
		max-width: 1000px;
		margin-left: auto;
		margin-right: auto;
	}

	.sparktrack-version {
		position: relative;
		border-radius: var(--radius-lg);
		padding: 1.8rem;
		overflow: hidden;
		transition: transform 0.4s ease, box-shadow 0.4s ease;
	}

	.sparktrack-version:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
	}

	.sparktrack-version-glow {
		position: absolute;
		top: -50%;
		left: -20%;
		width: 140%;
		height: 200%;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.6s;
	}

	.sparktrack-version:hover .sparktrack-version-glow {
		opacity: 1;
	}

	.sparktrack-version--stable {
		background: linear-gradient(135deg, rgba(94, 148, 67, 0.06) 0%, rgba(94, 148, 67, 0.02) 100%);
		border: 1px solid rgba(94, 148, 67, 0.15);
	}

	.sparktrack-version--stable .sparktrack-version-glow {
		background: radial-gradient(ellipse at 30% 30%, rgba(94, 148, 67, 0.08) 0%, transparent 60%);
	}

	.sparktrack-version--beta {
		background: linear-gradient(135deg, rgba(218, 165, 32, 0.06) 0%, rgba(218, 165, 32, 0.02) 100%);
		border: 1px solid rgba(218, 165, 32, 0.15);
	}

	.sparktrack-version--beta .sparktrack-version-glow {
		background: radial-gradient(ellipse at 70% 30%, rgba(218, 165, 32, 0.08) 0%, transparent 60%);
	}

	.sparktrack-version-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 1rem;
		position: relative;
		z-index: 1;
	}

	.sparktrack-version-header h3 {
		font-family: var(--font-sans);
		font-size: 0.95rem;
		font-weight: 600;
	}

	.sparktrack-version-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.65rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 0.25rem 0.7rem;
		border-radius: 4px;
	}

	.sparktrack-version-badge--stable {
		color: #5E9443;
		background: rgba(94, 148, 67, 0.12);
		border: 1px solid rgba(94, 148, 67, 0.25);
	}

	.sparktrack-version-badge--beta {
		color: #daa520;
		background: rgba(218, 165, 32, 0.12);
		border: 1px solid rgba(218, 165, 32, 0.25);
	}

	.sparktrack-version-platforms {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
		position: relative;
		z-index: 1;
	}

	.sparktrack-version-platform {
		font-size: 0.75rem;
		color: var(--primary);
		padding: 0.25rem 0.7rem;
		background: rgba(212, 168, 83, 0.08);
		border-radius: 4px;
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.sparktrack-version-stack {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		position: relative;
		z-index: 1;
	}

	.sparktrack-version-stack-item {
		font-size: 0.78rem;
		color: var(--text-muted);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		transition: all 0.2s;
	}

	.sparktrack-version-stack-item i {
		color: var(--text-dim);
		width: 16px;
		text-align: center;
		font-size: 0.72rem;
		transition: color 0.2s;
	}

	.sparktrack-version-stack-item:hover {
		color: var(--text);
		padding-left: 0.3rem;
	}

	.sparktrack-version-stack-item:hover i {
		color: var(--primary);
	}

	.sparktrack-version-stack-item--muted {
		opacity: 0.5;
	}

	.sparktrack-version-stack-item--muted:hover {
		opacity: 0.7;
	}

	.sparktrack-features-title {
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--text-dim);
		margin-bottom: 1rem;
		text-align: center;
	}

	.sparktrack-features-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.sparktrack-feature {
		text-align: center;
		padding: 1.5rem 1rem;
		border: 1px solid rgba(255, 255, 255, 0.04);
		border-radius: var(--radius);
		transition: all 0.4s ease;
	}

	.sparktrack-feature:hover {
		border-color: rgba(212, 168, 83, 0.15);
		transform: translateY(-3px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		background: rgba(255, 255, 255, 0.02);
	}

	.sparktrack-feature-icon {
		font-size: 1.3rem;
		color: var(--primary);
		margin-bottom: 0.6rem;
		transition: transform 0.4s ease;
	}

	.sparktrack-feature:hover .sparktrack-feature-icon {
		transform: scale(1.15);
	}

	.sparktrack-feature h4 {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 600;
		margin-bottom: 0.3rem;
		color: var(--text);
	}

	.sparktrack-feature p {
		font-size: 0.74rem;
		color: var(--text-muted);
		line-height: 1.5;
	}

	.sparktrack-footer {
		padding-top: 2rem;
		border-top: 1px solid rgba(255, 255, 255, 0.05);
		margin-top: 2.5rem;
	}

	@media (max-width: 1024px) {
		.sparktrack-features-grid { grid-template-columns: repeat(2, 1fr); }
	}

	@media (max-width: 768px) {
		.sparktrack-intro h2 { font-size: 2rem; }
		.sparktrack-versions { grid-template-columns: 1fr; }
		.sparktrack-features-grid { grid-template-columns: 1fr; }
		.sparktrack-section { padding: 3rem 0; }
	}
</style>
