import { Outlet } from 'react-router-dom'
import NavCom from '../components/NavCom'

function Layout() {
	return (
		<>
			<header>
				<img src="/vite.svg" alt="logo" width="50px" />
				<NavCom />
			</header>
			<hr />
      <Outlet />
      <footer></footer>
			<hr />
			<footer>
        <NavCom />
        <div>&copy;copyright</div>
			</footer>
		</>
	)
}

export default Layout
