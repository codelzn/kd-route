import { Link } from 'react-router-dom'
function NavCom() {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Cat</Link>
				</li>
				<li>
					<Link to="/dog">Dog</Link>
				</li>
				<li>
					<Link to="/duck">Duck</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavCom
