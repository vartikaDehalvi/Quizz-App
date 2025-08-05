import React from 'react';

function formatKey(key) {
	return key
		.replace(/([A-Z])/g, ' $1') // Add space before capital letters
		.replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
}

function Premium({ premiumPacks, setScreen }) {
	return (
		<div
			className="totalWidth"
			style={{
				background: ' #003458ff',
				background:
					'linear-gradient(0deg, rgba(200, 213, 222, 0.57) 63%, rgba(22, 28, 204, 0.34) 100%)',
				color: '#020446ff',
				border: '5px',
				borderRadius: '5px',
				padding: '1.3rem',
				boxShadow: '0 0 10px grey',
				width: '100%',
				height: '100%',
				boxSizing: 'border-box',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'stretch',
					width: '100%',
					gap: '2rem',
				}}
			>
				{Object.entries(premiumPacks).map(([key, plan]) => (
					<div
						key={key}
						style={{
							width: '30%',
							border: `5px solid  rgba(0, 0, 0, 0.07)`,
							borderRadius: '15px',
							padding: '1rem',
							backgroundColor: '#010230b0',
							color: '#b7b9dfef',
							boxShadow: `10px 5px 2px rgba(0,0,0, 0.3)`,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							boxSizing: 'border-box',
							height: '50rem',
						}}
					>
						<h1 style={{ textTransform: 'capitalize', textAlign: 'center' }}>
							{key}
						</h1>

						{plan.description && (
							<p style={{ textAlign: 'left', fontWeight: 'bold' }}>
								{plan.description}
							</p>
						)}

						<h3
							style={{
								marginTop: '1rem',
								marginBottom: '0.5rem',
								textAlign: 'left',
							}}
						>
							Features
						</h3>

						{Object.entries(plan.features).map(([featureKey, featureValue]) => (
							<div
								key={featureKey}
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '.5rem',
									textAlign: 'left',
								}}
							>
								<div style={{ fontWeight: 'bold' }}>
									{formatKey(featureKey)}
								</div>
								<div style={{ textAlign: 'right' }}>{String(featureValue)}</div>
							</div>
						))}

						<hr style={{ margin: '1rem 0', borderColor: 'white' }} />

						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								marginBottom: '.5rem',
							}}
						>
							<div style={{ fontWeight: 'bold' }}>Price</div>
							<div>₹{plan.price}</div>
						</div>

						{plan.discount && (
							<div
								style={{
									display: 'flex',
									justifyContent: 'space-between',
									marginBottom: '.5rem',
								}}
							>
								<div style={{ fontWeight: 'bold' }}>Discount</div>
								<div style={{ textAlign: 'right' }}>{plan.discount}</div>
							</div>
						)}

						{plan.tagline && (
							<p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
								{plan.tagline}
							</p>
						)}

						<button
							className="btn-grad"
							onClick={() => setScreen('thanks')}
							style={{
								marginTop: '1rem',

								padding: '0.5rem',
								backgroundImage:
									'linear-gradient(to left, #b9badfff 0%, #c8c8dbff 40%, #0505c077 100%',
								fontSize: '1.5rem',
								color: '#040752d3',
								fontWeight: 'bold',
								border: 'none',
								borderRadius: '5px',
								cursor: 'pointer',
								boxShadow: '0 0 10px #040752d3',
							}}
						>
							Buy Now
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Premium;
