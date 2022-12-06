import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout'
import Cat from './pages/Cat'
import Dog from './pages/Dog'
import Duck from './pages/Duck'
import NotFind from './pages/404'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Cat />} />
					<Route path="dog" element={<Dog />} />
					<Route path="duck" element={<Duck />} />
					<Route path="*" element={<NotFind />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
